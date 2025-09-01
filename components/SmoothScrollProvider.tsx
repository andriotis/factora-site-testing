"use client";

/**
 * SmoothScrollProvider - React wrapper for Lenis smooth scrolling
 *
 * Features:
 * - Respects prefers-reduced-motion
 * - Auto-disables on mobile/touch devices
 * - Runtime toggle with Ctrl/Cmd + T
 * - Preserves keyboard navigation (PageUp/PageDown/Arrow keys)
 * - Hash/anchor navigation support
 * - Performance optimized with transforms
 */

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import {
  SmoothScrollConfig,
  SmoothScrollState,
  LenisInstance,
  DEFAULT_CONFIG,
} from "@/lib/smooth-scroll/config";
import {
  shouldEnableSmootScroll,
  setupKeyboardToggle,
  createScrollToFunction,
  handleHashNavigation,
  throttle,
  debugLog,
} from "@/lib/smooth-scroll/utils";

// LenisInstance is imported from config

interface SmoothScrollProviderProps {
  children: ReactNode;
  config?: Partial<SmoothScrollConfig>;
}

export function SmoothScrollProvider({
  children,
  config: userConfig = {},
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<LenisInstance>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);
  const [state, setState] = useState<SmoothScrollState>({
    enabled: false,
    supported: false,
    prefersReducedMotion: false,
    isMobile: false,
    instance: null,
  });

  // Merge user config with defaults - memoized to prevent dependency issues
  const config: SmoothScrollConfig = useMemo(
    () => ({ ...DEFAULT_CONFIG, ...userConfig }),
    [userConfig]
  );

  // Enable/disable smooth scroll - memoized to prevent infinite loops
  const enableSmoothScroll = useCallback(
    async (enable: boolean) => {
      if (enable && shouldEnableSmootScroll(config)) {
        try {
          // Dynamic import to avoid SSR issues
          const LenisModule = await import("lenis");
          const Lenis = LenisModule.default;

          if (lenisRef.current) {
            lenisRef.current.destroy();
          }

          const lenis = new Lenis({
            lerp: config.lerp,
            wheelMultiplier: config.lenisOptions?.wheelMultiplier || 1,
            touchMultiplier: config.touchMultiplier,
            infinite: false,
            smoothWheel: true,
            smoothTouch: false,
            normalizeWheel: true,
            easing: config.ease,
            ...config.lenisOptions,
          });

          lenisRef.current = lenis;

          // Setup animation loop
          function raf(time: number) {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(raf);
          }
          rafRef.current = requestAnimationFrame(raf);

          // Setup hash navigation
          const cleanupHashNav = handleHashNavigation(lenis);

          setState((prev) => ({
            ...prev,
            enabled: true,
            instance: lenis,
          }));

          debugLog("Smooth scroll initialized", { config, lenis });

          return () => {
            cleanupHashNav();
            if (rafRef.current) {
              cancelAnimationFrame(rafRef.current);
            }
            lenis.destroy();
          };
        } catch (error) {
          console.error("Failed to initialize smooth scroll:", error);
          setState((prev) => ({ ...prev, enabled: false, supported: false }));
        }
      } else {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        setState((prev) => ({
          ...prev,
          enabled: false,
          instance: null,
        }));

        // Clear global API
        if (window.__smoothScroll) {
          window.__smoothScroll.state.enabled = false;
          window.__smoothScroll.state.instance = null;
        }

        debugLog("Smooth scroll disabled");
      }
    },
    [config]
  );

  // Toggle smooth scroll - memoized with stable deps
  const toggleSmoothScroll = useCallback(() => {
    setState((currentState) => {
      const newEnabled = !currentState.enabled;
      window.__smoothScrollEnabled = newEnabled;
      enableSmoothScroll(newEnabled);
      debugLog("Smooth scroll toggled:", newEnabled);
      return currentState; // Don't change state here, let enableSmoothScroll handle it
    });
  }, [enableSmoothScroll]);

  // Initialize client-side detection
  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      const initialState: Partial<SmoothScrollState> = {
        supported: true,
        prefersReducedMotion: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches,
        isMobile: window.innerWidth <= config.disableOnMobileWidth,
      };

      setState((prev) => ({ ...prev, ...initialState }));
    }
  }, [config.disableOnMobileWidth]); // Include the config dependency

  // Initialize smooth scroll when ready
  useEffect(() => {
    if (!isClient) return;

    if (shouldEnableSmootScroll(config)) {
      enableSmoothScroll(true);
    }
  }, [isClient, config, enableSmoothScroll]);

  // Setup event listeners
  useEffect(() => {
    if (!isClient) return;

    // Setup keyboard toggle
    const cleanupKeyboard = setupKeyboardToggle(config, toggleSmoothScroll);

    // Handle resize with throttling
    const handleResize = throttle(() => {
      const isMobile = window.innerWidth <= config.disableOnMobileWidth;
      setState((prev) => {
        if (prev.isMobile !== isMobile) {
          // Only update if changed
          if (isMobile && prev.enabled) {
            enableSmoothScroll(false);
          } else if (
            !isMobile &&
            !prev.enabled &&
            shouldEnableSmootScroll(config)
          ) {
            enableSmoothScroll(true);
          }
          return { ...prev, isMobile };
        }
        return prev;
      });
    }, 250);

    window.addEventListener("resize", handleResize);

    // Handle prefers-reduced-motion changes
    const motionMediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setState((prev) => {
        if (prev.prefersReducedMotion !== e.matches) {
          if (e.matches && prev.enabled) {
            enableSmoothScroll(false);
          }
          return { ...prev, prefersReducedMotion: e.matches };
        }
        return prev;
      });
    };
    motionMediaQuery.addEventListener("change", handleMotionChange);

    // Cleanup
    return () => {
      cleanupKeyboard();
      window.removeEventListener("resize", handleResize);
      motionMediaQuery.removeEventListener("change", handleMotionChange);

      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isClient, config, toggleSmoothScroll, enableSmoothScroll]);

  // Setup global API
  useEffect(() => {
    if (isClient && state.enabled && lenisRef.current) {
      window.__smoothScroll = {
        toggle: toggleSmoothScroll,
        enable: () => enableSmoothScroll(true),
        disable: () => enableSmoothScroll(false),
        scrollTo: createScrollToFunction(lenisRef.current),
        state: {
          ...state,
          enabled: state.enabled,
          instance: lenisRef.current,
        },
      };
    }
  }, [isClient, state, toggleSmoothScroll, enableSmoothScroll]);

  // Don't render anything during SSR
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      {/* Development indicator */}
      {process.env.NODE_ENV === "development" && (
        <div
          className="fixed bottom-4 right-4 z-50 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono"
          title={`Smooth scroll: ${
            state.enabled ? "ON" : "OFF"
          } | Toggle: Ctrl/Cmd + T`}
        >
          📱 {state.enabled ? "ON" : "OFF"}
        </div>
      )}
    </>
  );
}

// Export default and named
export default SmoothScrollProvider;
