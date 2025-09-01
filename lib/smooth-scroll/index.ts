/**
 * Smooth Scroll Module - Export all public APIs
 */

// Re-export main components and utilities
export { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
export type {
  SmoothScrollConfig,
  SmoothScrollState,
  LenisInstance,
  ScrollToOptions,
} from "./config";
export { DEFAULT_CONFIG } from "./config";
export {
  shouldEnableSmootScroll,
  createScrollToFunction,
  debugLog,
} from "./utils";

// Global type augmentation for window object
declare global {
  interface Window {
    __smoothScrollEnabled?: boolean;
    __smoothScroll?: {
      toggle: () => void;
      enable: () => void;
      disable: () => void;
      scrollTo: (
        target: string | number,
        options?: import("./config").ScrollToOptions
      ) => void;
      state: import("./config").SmoothScrollState;
    };
  }
}
