/**
 * Smooth scroll configuration types and defaults
 */

// Lenis instance interface based on actual usage
export interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
  scrollTo: (
    target: string | number | HTMLElement,
    options?: ScrollToOptions
  ) => void;
}

// Lenis constructor options
export interface LenisOptions {
  lerp?: number;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
  smoothWheel?: boolean;
  smoothTouch?: boolean;
  normalizeWheel?: boolean;
  easing?: (t: number) => number;
  duration?: number;
}

// ScrollTo options
export interface ScrollToOptions {
  offset?: number;
  duration?: number;
  easing?: (t: number) => number;
}

export interface SmoothScrollConfig {
  /** Interpolation factor (0-1). Lower = smoother but more lag. */
  lerp: number;
  /** Maximum wheel delta per frame (prevents excessive acceleration) */
  maxDelta: number;
  /** Touch/trackpad sensitivity multiplier */
  touchMultiplier: number;
  /** Disable on mobile/touch devices below this width */
  disableOnMobileWidth: number;
  /** Key combination to toggle smooth scroll (with Ctrl/Cmd) */
  enableToggleKey: string;
  /** Easing function name for Lenis */
  ease: (t: number) => number;
  /** Force enable/disable regardless of other conditions */
  forceEnabled?: boolean;
  /** Additional Lenis options */
  lenisOptions?: LenisOptions;
}

/**
 * Default configuration values
 *
 * Lerp formula: newValue = currentValue + (targetValue - currentValue) * lerp
 * - lerp=0.08 provides smooth motion with ~12 frames to reach 63% of target
 * - Higher values = faster/more responsive, lower = smoother/more lag
 */
export const DEFAULT_CONFIG: SmoothScrollConfig = {
  lerp: 0.05, // Ultra smooth - slower interpolation for buttery motion
  maxDelta: 80, // Lower max delta for gentler acceleration
  touchMultiplier: 1.4, // Slightly reduced for smoother touch
  disableOnMobileWidth: 900,
  enableToggleKey: "KeyT",
  ease: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  lenisOptions: {
    duration: 1.8, // Longer duration for ultra smooth scrolling
    infinite: false,
    smoothWheel: true,
    smoothTouch: false, // Disabled on touch for better native feel
    wheelMultiplier: 0.8, // Reduced wheel sensitivity for smoother feel
    normalizeWheel: true,
  },
};

/**
 * Runtime state interface
 */
export interface SmoothScrollState {
  enabled: boolean;
  supported: boolean;
  prefersReducedMotion: boolean;
  isMobile: boolean;
  instance: LenisInstance | null;
}
