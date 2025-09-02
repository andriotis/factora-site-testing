/**
 * EntranceProvider - Entrance animations with Framer Motion
 *
 * A complete entrance animation system for React applications
 * with viewport detection, reduced motion support, and smooth scroll integration.
 */

// Core components
export { EntranceProvider } from "./EntranceProvider";
export {
  MotionWrapper,
  FadeIn,
  SlideUp,
  ScaleIn,
  HeroEntrance,
  UnblurIn,
  StaggerContainer,
} from "./MotionWrapper";

// Hooks
export { useAnimateOnView, useStaggeredChildren } from "./useAnimateOnView";
export { useEntrance, useEntranceOptional } from "./EntranceContext";

// Types and configuration
export type {
  EntranceConfig,
  EntranceState,
  EntranceContextValue,
} from "./EntranceContext";
export type { PresetName } from "./variants";

// Variants and presets
export {
  ANIMATION_PRESETS,
  EASINGS,
  createFadeUpVariant,
  createFadeInVariant,
  createScaleUpVariant,
  createUnblurVariant,
  createStaggerContainer,
} from "./variants";

// Default configuration
export { DEFAULT_ENTRANCE_CONFIG } from "./EntranceContext";
