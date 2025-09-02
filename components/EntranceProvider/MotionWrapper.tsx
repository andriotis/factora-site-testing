"use client";

/**
 * MotionWrapper - Zero-config component for entrance animations
 *
 * Features:
 * - Zero-config usage with sensible defaults
 * - Support for custom variants and overrides
 * - Automatic viewport detection and animation
 * - Stagger support for children
 * - Fallback for SSR and non-React environments
 */

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps, Variants, Transition } from "framer-motion";
import {
  useEntranceOptional,
  DEFAULT_ENTRANCE_CONFIG,
} from "./EntranceContext";
import { useAnimateOnView } from "./useAnimateOnView";
import { ANIMATION_PRESETS, REDUCED_MOTION_VARIANTS } from "./variants";
import { PresetName } from "./variants";

interface MotionWrapperProps
  extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "animate"> {
  children: ReactNode;

  // Animation configuration
  preset?: PresetName;
  duration?: number;
  delay?: number;
  stagger?: number;
  staggerDirection?: "normal" | "reverse";

  // Transform overrides
  translateY?: number;
  translateX?: number;
  scale?: number;

  // Viewport options
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;

  // Advanced options
  variants?: Variants;
  staggerChildren?: boolean;
  customControls?: boolean; // If true, don't auto-animate, let parent control

  // HTML element type
  as?: keyof HTMLElementTagNameMap;
}

export const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(
  (
    {
      children,
      preset,
      duration,
      delay,
      stagger,
      staggerDirection,
      translateY,
      translateX,
      scale,
      threshold,
      rootMargin,
      triggerOnce,
      variants: customVariants,
      staggerChildren = false,
      customControls = false,
      as = "div",
      ...motionProps
    },
    forwardedRef
  ) => {
    const entranceContext = useEntranceOptional();

    // Fallback to defaults if context is not available (during SSR or before hydration)
    const config = entranceContext?.config || DEFAULT_ENTRANCE_CONFIG;
    const shouldAnimate = entranceContext?.shouldAnimate || (() => false);
    const getVariants =
      entranceContext?.getVariants || (() => REDUCED_MOTION_VARIANTS);

    // Always call the hook - it now handles the case where there's no context
    const animationHook = useAnimateOnView({
      threshold,
      rootMargin,
      triggerOnce,
      delay,
      stagger,
      staggerDirection,
    });

    const ref = animationHook.ref;
    const controls = animationHook.controls;

    // Determine effective preset and get variants
    const effectivePreset = preset || config.preset;
    const effectiveDuration = duration ?? config.duration;
    const effectiveStagger = stagger ?? config.stagger;

    // Get variants based on configuration
    let variants: Variants;
    if (customVariants) {
      variants = customVariants;
    } else if (shouldAnimate()) {
      // Create custom variants if overrides are provided
      if (
        translateY !== undefined ||
        translateX !== undefined ||
        scale !== undefined ||
        duration !== undefined
      ) {
        variants = {
          hidden: {
            opacity: 0,
            ...(translateY !== undefined && { y: translateY }),
            ...(translateX !== undefined && { x: translateX }),
            ...(scale !== undefined && { scale }),
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
              duration: effectiveDuration,
              ease: [0.16, 0.84, 0.33, 1], // Default cubic-bezier easing
            },
          },
        };
      } else {
        variants = ANIMATION_PRESETS[effectivePreset].variants;
      }

      // Add stagger container if needed
      if (staggerChildren) {
        variants = {
          ...variants,
          visible: {
            ...variants.visible,
            transition: {
              staggerChildren: effectiveStagger,
              delayChildren: delay || 0,
            } as Transition,
          },
        };
      }
    } else {
      // Reduced motion or animations disabled
      variants = getVariants();
    }

    // Component to render
    const MotionComponent = motion[as] as typeof motion.div;

    return (
      <MotionComponent
        ref={(node) => {
          // Handle both callback and object refs
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }

          // Also set internal ref for viewport detection (only if available)
          if (ref && node) {
            ref.current = node;
          }
        }}
        variants={variants}
        initial={shouldAnimate() && !customControls ? "hidden" : "visible"}
        animate={customControls ? undefined : controls || "visible"}
        {...motionProps}
      >
        {children}
      </MotionComponent>
    );
  }
);

MotionWrapper.displayName = "MotionWrapper";

// Convenience components for common use cases
export const FadeIn = forwardRef<
  HTMLDivElement,
  Omit<MotionWrapperProps, "preset">
>((props, ref) => <MotionWrapper ref={ref} preset="fade" {...props} />);

export const SlideUp = forwardRef<
  HTMLDivElement,
  Omit<MotionWrapperProps, "preset">
>((props, ref) => <MotionWrapper ref={ref} preset="subtle" {...props} />);

export const ScaleIn = forwardRef<
  HTMLDivElement,
  Omit<MotionWrapperProps, "preset">
>((props, ref) => <MotionWrapper ref={ref} preset="scale" {...props} />);

export const HeroEntrance = forwardRef<
  HTMLDivElement,
  Omit<MotionWrapperProps, "preset">
>((props, ref) => <MotionWrapper ref={ref} preset="hero" {...props} />);

export const UnblurIn = forwardRef<
  HTMLDivElement,
  Omit<MotionWrapperProps, "preset">
>((props, ref) => <MotionWrapper ref={ref} preset="unblur" {...props} />);

// Stagger container for groups
export const StaggerContainer = forwardRef<HTMLDivElement, MotionWrapperProps>(
  (props, ref) => <MotionWrapper ref={ref} staggerChildren {...props} />
);

FadeIn.displayName = "FadeIn";
SlideUp.displayName = "SlideUp";
ScaleIn.displayName = "ScaleIn";
HeroEntrance.displayName = "HeroEntrance";
StaggerContainer.displayName = "StaggerContainer";
UnblurIn.displayName = "UnblurIn";
