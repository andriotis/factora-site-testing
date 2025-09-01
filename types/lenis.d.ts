/**
 * Type declarations for Lenis smooth scroll library
 */

declare module "lenis" {
  export interface LenisOptions {
    lerp?: number;
    duration?: number;
    easing?: (t: number) => number;
    direction?: "vertical" | "horizontal";
    gestureDirection?: "vertical" | "horizontal" | "both";
    smooth?: boolean;
    smoothTouch?: boolean;
    smoothWheel?: boolean;
    touchMultiplier?: number;
    wheelMultiplier?: number;
    normalizeWheel?: boolean;
    infinite?: boolean;
    wrapper?: HTMLElement;
    content?: HTMLElement;
    eventsTarget?: HTMLElement;
    [key: string]: any;
  }

  export interface LenisInstance {
    raf(time: number): void;
    destroy(): void;
    scrollTo(
      target: string | number | HTMLElement,
      options?: {
        offset?: number;
        duration?: number;
        easing?: (t: number) => number;
        [key: string]: any;
      }
    ): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
    resize(): void;
    start(): void;
    stop(): void;
    [key: string]: any;
  }

  export default class Lenis implements LenisInstance {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    destroy(): void;
    scrollTo(target: string | number | HTMLElement, options?: any): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
    resize(): void;
    start(): void;
    stop(): void;
    [key: string]: any;
  }
}
