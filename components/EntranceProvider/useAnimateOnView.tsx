"use client";

/**
 * useAnimateOnView - Hook for viewport-triggered animations
 *
 * Features:
 * - Integrates with Lenis smooth scroll containers
 * - Configurable intersection thresholds
 * - Stagger support for multiple elements
 * - Animation controls for complex sequences
 */

import { useEffect, useRef, RefObject, useMemo } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useEntranceOptional } from "./EntranceContext";

interface UseAnimateOnViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  stagger?: number;
  staggerDirection?: "normal" | "reverse";
}

interface UseAnimateOnViewReturn {
  ref: RefObject<HTMLElement | null>;
  controls: ReturnType<typeof useAnimation>;
  isInView: boolean;
}

export function useAnimateOnView(
  options: UseAnimateOnViewOptions = {}
): UseAnimateOnViewReturn {
  const entranceContext = useEntranceOptional();

  // Always call hooks in the same order
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();

  // Default values for when context is not available
  const config = entranceContext?.config || {
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: true,
    delay: 0,
    stagger: 0.12,
    staggerDirection: "normal" as const,
  };

  const state = entranceContext?.state || {
    smoothScrollContainer: null,
  };

  const shouldAnimate = useMemo(
    () => entranceContext?.shouldAnimate || (() => false),
    [entranceContext?.shouldAnimate]
  );

  // Merge options with config defaults - memoized to prevent dependency issues
  const effectiveOptions = useMemo(
    () => ({
      threshold: options.threshold ?? config.threshold,
      rootMargin: options.rootMargin ?? config.rootMargin,
      triggerOnce: options.triggerOnce ?? config.triggerOnce,
      delay: options.delay ?? config.delay,
      stagger: options.stagger ?? config.stagger,
      staggerDirection: options.staggerDirection ?? config.staggerDirection,
    }),
    [
      options.threshold,
      options.rootMargin,
      options.triggerOnce,
      options.delay,
      options.stagger,
      options.staggerDirection,
      config.threshold,
      config.rootMargin,
      config.triggerOnce,
      config.delay,
      config.stagger,
      config.staggerDirection,
    ]
  );

  // Use Framer Motion's useInView with proper root for smooth scroll integration
  const isInView = useInView(ref, {
    amount: effectiveOptions.threshold,
    once: effectiveOptions.triggerOnce,
    // Use smooth scroll container as root if available
    root: state.smoothScrollContainer
      ? { current: state.smoothScrollContainer }
      : undefined,
  });

  // Set to visible immediately if no context available
  useEffect(() => {
    if (!entranceContext) {
      controls.set("visible");
      return;
    }
  }, [entranceContext, controls]);

  // Animate when element enters view
  useEffect(() => {
    if (!entranceContext) return;

    if (!shouldAnimate()) {
      // If animations are disabled, show content immediately
      controls.set("visible");
      return;
    }

    if (isInView) {
      // Start with hidden state
      controls.set("hidden");

      // Apply delay if specified
      const delay = effectiveOptions.delay;

      if (delay > 0) {
        const timer = setTimeout(() => {
          controls.start("visible");
        }, delay * 1000);

        return () => clearTimeout(timer);
      } else {
        controls.start("visible");
      }
    }
  }, [isInView, shouldAnimate, controls, effectiveOptions, entranceContext]);

  // Reset animation if needed (for development/testing)
  useEffect(() => {
    if (!entranceContext) return;

    if (!shouldAnimate()) {
      controls.set("visible");
    } else if (!isInView && !effectiveOptions.triggerOnce) {
      controls.set("hidden");
    }
  }, [shouldAnimate, isInView, controls, effectiveOptions, entranceContext]);

  return {
    ref,
    controls,
    isInView: entranceContext ? isInView : true,
  };
}

// Advanced hook for staggered children
// Note: This hook provides stagger timing information but doesn't create individual controls
// due to React hooks rules. Use MotionWrapper with staggerChildren prop instead.
export function useStaggeredChildren(
  childCount: number,
  options: UseAnimateOnViewOptions = {}
) {
  const entranceContext = useEntranceOptional();

  // Always call hooks in the same order
  const parentRef = useRef<HTMLElement>(null);

  // Default config for when context is not available
  const config = entranceContext?.config || {
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: true,
    stagger: 0.12,
    staggerDirection: "normal" as const,
    delay: 0,
  };

  const shouldAnimate = useMemo(
    () => entranceContext?.shouldAnimate || (() => false),
    [entranceContext?.shouldAnimate]
  );

  const effectiveOptions = useMemo(
    () => ({
      stagger: options.stagger ?? config.stagger,
      staggerDirection: options.staggerDirection ?? config.staggerDirection,
      delay: options.delay ?? config.delay,
      threshold: options.threshold ?? config.threshold,
      rootMargin: options.rootMargin ?? config.rootMargin,
      triggerOnce: options.triggerOnce ?? config.triggerOnce,
    }),
    [
      options.stagger,
      options.staggerDirection,
      options.delay,
      options.threshold,
      options.rootMargin,
      options.triggerOnce,
      config.stagger,
      config.staggerDirection,
      config.delay,
      config.threshold,
      config.rootMargin,
      config.triggerOnce,
    ]
  );

  const isInView = useInView(parentRef, {
    amount: effectiveOptions.threshold,
    once: effectiveOptions.triggerOnce,
  });

  // Calculate stagger delays for each child
  const staggerDelays = useMemo(() => {
    const delays: number[] = [];
    const staggerDelay = effectiveOptions.stagger;
    const baseDelay = effectiveOptions.delay;

    for (let i = 0; i < childCount; i++) {
      const adjustedIndex =
        effectiveOptions.staggerDirection === "reverse"
          ? childCount - 1 - i
          : i;
      delays.push(baseDelay + adjustedIndex * staggerDelay);
    }
    return delays;
  }, [
    childCount,
    effectiveOptions.stagger,
    effectiveOptions.delay,
    effectiveOptions.staggerDirection,
  ]);

  return {
    parentRef,
    isInView: entranceContext ? isInView : true,
    shouldAnimate: shouldAnimate(),
    staggerDelays,
    // Deprecated: childControls - use individual MotionWrapper components instead
    childControls: [],
  };
}
