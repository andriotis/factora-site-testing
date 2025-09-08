import { useEffect, useRef, useCallback } from "react";

/**
 * Shared ResizeObserver hook to reduce excessive reflows
 * Provides a centralized way to observe element size changes
 */
export function useResizeObserver(
  callback: (entry: ResizeObserverEntry) => void
) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const observerRef = useRef<ResizeObserver | undefined>(undefined);

  useEffect(() => {
    observerRef.current = new ResizeObserver((entries) => {
      entries.forEach(callbackRef.current);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const observe = useCallback((element: Element) => {
    observerRef.current?.observe(element);
  }, []);

  const unobserve = useCallback((element: Element) => {
    observerRef.current?.unobserve(element);
  }, []);

  return { observe, unobserve };
}
