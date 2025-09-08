"use client";

/**
 * EntranceProvider - Main provider component for entrance animations
 *
 * Features:
 * - Optimized for performance without smooth scroll dependencies
 * - Respects prefers-reduced-motion
 * - Provides runtime animation toggles
 * - Handles mobile/touch device detection
 * - Exposes global API for external control
 */

import { useEffect, useState, useCallback, ReactNode, useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import {
  EntranceContext,
  EntranceConfig,
  EntranceContextValue,
  DEFAULT_ENTRANCE_CONFIG,
} from "./EntranceContext";
import { ANIMATION_PRESETS, REDUCED_MOTION_VARIANTS } from "./variants";

interface EntranceProviderProps {
  children: ReactNode;
  config?: Partial<EntranceConfig>;
}

export function EntranceProvider({
  children,
  config: userConfig = {},
}: EntranceProviderProps) {
  // Merge user config with defaults - memoized to prevent dependency issues
  const config: EntranceConfig = useMemo(
    () => ({ ...DEFAULT_ENTRANCE_CONFIG, ...userConfig }),
    [userConfig]
  );

  // Framer Motion's reduced motion detection
  const prefersReducedMotion = useReducedMotion();

  // Local state
  const [animationsEnabled, setAnimationsEnabledState] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  // Removed smooth scroll integration
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side detection
  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined") {
      // Detect mobile
      setIsMobile(window.innerWidth <= config.disableOnMobileWidth);

      // Smooth scroll integration removed

      // Set initial global state
      window.__animationsEnabled = animationsEnabled && !prefersReducedMotion;
    }
  }, [config.disableOnMobileWidth, animationsEnabled, prefersReducedMotion]);

  // Handle window resize
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= config.disableOnMobileWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [config.disableOnMobileWidth, isClient]);

  // Control functions
  const setAnimationsEnabled = useCallback(
    (enabled: boolean) => {
      setAnimationsEnabledState(enabled);
      if (typeof window !== "undefined") {
        window.__animationsEnabled = enabled && !prefersReducedMotion;
      }
    },
    [prefersReducedMotion]
  );

  const toggleAnimations = useCallback(() => {
    setAnimationsEnabled(!animationsEnabled);
  }, [animationsEnabled, setAnimationsEnabled]);

  // Setup keyboard toggle
  useEffect(() => {
    if (!isClient || !config.enableToggleKey) return;

    const handleKeyboard = (e: KeyboardEvent) => {
      // Ctrl/Cmd + Shift + A for animation toggle
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "A") {
        e.preventDefault();
        toggleAnimations();
      }
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [config.enableToggleKey, isClient, toggleAnimations]);

  // Utility functions
  const shouldAnimate = useCallback(() => {
    return (
      animationsEnabled &&
      !prefersReducedMotion &&
      (!isMobile || config.disableOnMobileWidth === 0)
    );
  }, [
    animationsEnabled,
    prefersReducedMotion,
    isMobile,
    config.disableOnMobileWidth,
  ]);

  const getVariants = useCallback(
    (customConfig?: Partial<EntranceConfig>) => {
      const effectiveConfig = { ...config, ...customConfig };

      if (!shouldAnimate()) {
        return REDUCED_MOTION_VARIANTS;
      }

      return ANIMATION_PRESETS[effectiveConfig.preset].variants;
    },
    [config, shouldAnimate]
  );

  // Build context value
  const contextValue: EntranceContextValue = {
    config,
    state: {
      animationsEnabled,
      prefersReducedMotion: prefersReducedMotion || false,
      isMobile,
      smoothScrollContainer: null, // Removed smooth scroll integration
    },
    setAnimationsEnabled,
    toggleAnimations,
    shouldAnimate,
    getVariants,
  };

  // Setup global API
  useEffect(() => {
    if (isClient) {
      window.__entranceAnimations = {
        toggle: toggleAnimations,
        enable: () => setAnimationsEnabled(true),
        disable: () => setAnimationsEnabled(false),
        state: {
          enabled: shouldAnimate(),
          config,
        },
      };
    }
  }, [isClient, toggleAnimations, setAnimationsEnabled, shouldAnimate, config]);

  // Don't render context during SSR to avoid hydration issues
  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <EntranceContext.Provider value={contextValue}>
      {children}

      {/* Development indicator */}
      {process.env.NODE_ENV === "development" && config.enableRuntimeToggle && (
        <div
          className="fixed bottom-4 left-4 z-50 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono cursor-pointer"
          onClick={toggleAnimations}
          title={`Entrance animations: ${
            shouldAnimate() ? "ON" : "OFF"
          } | Toggle: Ctrl/Cmd + Shift + A`}
        >
          ✨ {shouldAnimate() ? "ON" : "OFF"}
        </div>
      )}
    </EntranceContext.Provider>
  );
}

// Global type definitions for window
declare global {
  interface Window {
    __animationsEnabled?: boolean;
    __entranceAnimations?: {
      toggle: () => void;
      enable: () => void;
      disable: () => void;
      state: {
        enabled: boolean;
        config: EntranceConfig;
      };
    };
  }
}
