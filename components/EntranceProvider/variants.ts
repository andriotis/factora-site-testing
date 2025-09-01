/**
 * Animation variants and presets for entrance animations
 *
 * Features:
 * - Multiple preset configurations (subtle, vivid, hero)
 * - Configurable transforms and opacity
 * - Stagger support for children
 * - Custom easing curves optimized for UI animations
 */

import { Variants } from "framer-motion";

// Custom easing curves for buttery smooth animations
export const EASINGS = {
  // Ultra smooth cubic-bezier for elegant entrances
  easeOut: [0.16, 0.84, 0.33, 1],
  // Slightly more energetic for hero sections
  easeOutQuart: [0.25, 1, 0.5, 1],
  // Subtle for frequent micro-interactions
  easeOutQuint: [0.22, 1, 0.36, 1],
} as const;

// Base animation variants
export const createFadeUpVariant = (
  translateY = 12,
  duration = 0.48,
  easing: number[] = [...EASINGS.easeOut]
): Variants => ({
  hidden: {
    opacity: 0,
    y: translateY,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: easing as [number, number, number, number],
    },
  },
});

export const createFadeInVariant = (
  duration = 0.48,
  easing: number[] = [...EASINGS.easeOut]
): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration,
      ease: easing as [number, number, number, number],
    },
  },
});

export const createScaleUpVariant = (
  scale = 0.95,
  duration = 0.48,
  easing: number[] = [...EASINGS.easeOut]
): Variants => ({
  hidden: {
    opacity: 0,
    scale,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      ease: easing as [number, number, number, number],
    },
  },
});

// Stagger container variants for groups of elements
export const createStaggerContainer = (
  staggerChildren = 0.06,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Animation presets - Updated with slower, more graceful durations
export const ANIMATION_PRESETS = {
  subtle: {
    variants: createFadeUpVariant(8, 0.8, [...EASINGS.easeOutQuint]), // Doubled from 0.4 to 0.8
    stagger: 0.08, // Doubled from 0.04 to 0.08
  },
  vivid: {
    variants: createFadeUpVariant(16, 1.2, [...EASINGS.easeOut]), // Doubled from 0.6 to 1.2
    stagger: 0.16, // Doubled from 0.08 to 0.16
  },
  hero: {
    variants: createFadeUpVariant(24, 1.6, [...EASINGS.easeOutQuart]), // Doubled from 0.8 to 1.6
    stagger: 0.24, // Doubled from 0.12 to 0.24
  },
  fade: {
    variants: createFadeInVariant(0.96, [...EASINGS.easeOut]), // Doubled from 0.48 to 0.96
    stagger: 0.12, // Doubled from 0.06 to 0.12
  },
  scale: {
    variants: createScaleUpVariant(0.9, 1.2, [...EASINGS.easeOut]), // Doubled from 0.6 to 1.2
    stagger: 0.2, // Doubled from 0.1 to 0.2
  },
} as const;

export type PresetName = keyof typeof ANIMATION_PRESETS;

// Special reduced-motion variants - fade-only
export const REDUCED_MOTION_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};
