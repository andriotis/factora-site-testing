"use client";

/**
 * EntranceContext - React Context for entrance animation configuration
 *
 * Provides global animation settings and state management
 * Integrates with existing smooth scroll system
 * Respects user motion preferences
 */

import { createContext, useContext } from "react";
import { Variants } from "framer-motion";
import { PresetName } from "./variants";

export interface EntranceConfig {
  // Animation settings
  preset: PresetName;
  duration: number;
  stagger: number;

  // Transform settings
  translateY: number;
  translateX: number;
  scale: number;

  // Timing settings
  delay: number;
  staggerDirection: "normal" | "reverse";

  // Viewport settings
  rootMargin: string;
  threshold: number;
  triggerOnce: boolean;

  // Responsive settings
  disableOnMobileWidth: number;

  // Interaction settings
  enableToggleKey: boolean;
  enableRuntimeToggle: boolean;
}

export interface EntranceState {
  animationsEnabled: boolean;
  prefersReducedMotion: boolean;
  isMobile: boolean;
  smoothScrollContainer: Element | null;
}

export interface EntranceContextValue {
  config: EntranceConfig;
  state: EntranceState;

  // Control functions
  setAnimationsEnabled: (enabled: boolean) => void;
  toggleAnimations: () => void;

  // Utilities
  shouldAnimate: () => boolean;
  getVariants: (customConfig?: Partial<EntranceConfig>) => Variants;
}

export const DEFAULT_ENTRANCE_CONFIG: EntranceConfig = {
  preset: "subtle",
  duration: 0.96, // Doubled from 0.48 to 0.96 for slower default animations
  stagger: 0.12, // Doubled from 0.06 to 0.12 for more pronounced stagger
  translateY: 12,
  translateX: 0,
  scale: 1,
  delay: 0,
  staggerDirection: "normal",
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.1,
  triggerOnce: true,
  disableOnMobileWidth: 768,
  enableToggleKey: true,
  enableRuntimeToggle: true,
};

export const EntranceContext = createContext<EntranceContextValue | null>(null);

export function useEntrance(): EntranceContextValue {
  const context = useContext(EntranceContext);
  if (!context) {
    throw new Error("useEntrance must be used within an EntranceProvider");
  }
  return context;
}

// Optional hook for components that might not be wrapped
export function useEntranceOptional(): EntranceContextValue | null {
  return useContext(EntranceContext);
}
