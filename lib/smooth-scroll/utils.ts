/**
 * Smooth scroll utilities and runtime controls
 */

import {
  SmoothScrollConfig,
  SmoothScrollState,
  LenisInstance,
  ScrollToOptions,
} from "./config";

/**
 * Global state accessible via window.__smoothScroll
 */
declare global {
  interface Window {
    __smoothScrollEnabled?: boolean;
    __smoothScroll?: {
      toggle: () => void;
      enable: () => void;
      disable: () => void;
      scrollTo: (target: string | number, options?: ScrollToOptions) => void;
      state: SmoothScrollState;
    };
  }
}

/**
 * Check if smooth scroll should be enabled based on environment
 */
export function shouldEnableSmootScroll(config: SmoothScrollConfig): boolean {
  // Respect explicit override
  if (typeof window.__smoothScrollEnabled === "boolean") {
    return window.__smoothScrollEnabled;
  }

  // Respect force enabled config
  if (config.forceEnabled === true) return true;
  if (config.forceEnabled === false) return false;

  // Check prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  // Check if mobile/touch only
  if (window.innerWidth <= config.disableOnMobileWidth) {
    return false;
  }

  // Check if touch-only device
  if (
    "ontouchstart" in window &&
    !window.matchMedia("(hover: hover)").matches
  ) {
    return false;
  }

  return true;
}

/**
 * Setup keyboard toggle functionality
 */
export function setupKeyboardToggle(
  config: SmoothScrollConfig,
  toggleCallback: () => void
): () => void {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.code === config.enableToggleKey &&
      (event.metaKey || event.ctrlKey)
    ) {
      event.preventDefault();
      toggleCallback();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}

/**
 * Enhanced scrollTo function that works with transformed containers
 */
export function createScrollToFunction(lenisInstance: LenisInstance) {
  return (target: string | number, options: ScrollToOptions = {}) => {
    if (!lenisInstance) return;

    if (typeof target === "string") {
      const element = document.querySelector(target);
      if (element) {
        lenisInstance.scrollTo(element as HTMLElement, {
          offset: 0,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          ...options,
        });
      }
    } else {
      lenisInstance.scrollTo(target, {
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    }
  };
}

/**
 * Handle URL hash navigation
 */
export function handleHashNavigation(lenisInstance: LenisInstance) {
  // Handle initial hash on load
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target && lenisInstance) {
        lenisInstance.scrollTo(target as HTMLElement, { duration: 0 });
      }
    }, 100);
  }

  // Handle hash changes
  const handleHashChange = () => {
    if (window.location.hash && lenisInstance) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        lenisInstance.scrollTo(target as HTMLElement, { duration: 1.2 });
      }
    }
  };

  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener("hashchange", handleHashChange);
  };
}

/**
 * Performance optimization: throttle resize events
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
) {
  let inThrottle: boolean;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debug logging (only in development)
 */
export function debugLog(...args: unknown[]) {
  if (process.env.NODE_ENV === "development") {
    console.log("[SmoothScroll]", ...args);
  }
}
