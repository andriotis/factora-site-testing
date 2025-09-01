/**
 * Basic tests for smooth scroll functionality
 * Run with: npm test (after setting up jest)
 */

import { shouldEnableSmootScroll } from "@/lib/smooth-scroll/utils";
import { DEFAULT_CONFIG } from "@/lib/smooth-scroll/config";

// Mock window and matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Smooth Scroll Utils", () => {
  beforeEach(() => {
    delete (window as any).__smoothScrollEnabled;
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  test("should enable smooth scroll by default on desktop", () => {
    expect(shouldEnableSmootScroll(DEFAULT_CONFIG)).toBe(true);
  });

  test("should respect window.__smoothScrollEnabled override", () => {
    (window as any).__smoothScrollEnabled = false;
    expect(shouldEnableSmootScroll(DEFAULT_CONFIG)).toBe(false);

    (window as any).__smoothScrollEnabled = true;
    expect(shouldEnableSmootScroll(DEFAULT_CONFIG)).toBe(true);
  });

  test("should disable on mobile widths", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 800, // Below default 900px threshold
    });

    expect(shouldEnableSmootScroll(DEFAULT_CONFIG)).toBe(false);
  });

  test("should disable when prefers-reduced-motion is set", () => {
    (window.matchMedia as jest.Mock).mockImplementation((query) => ({
      matches: query === "(prefers-reduced-motion: reduce)",
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    expect(shouldEnableSmootScroll(DEFAULT_CONFIG)).toBe(false);
  });

  test("should respect forceEnabled config", () => {
    const forcedConfig = { ...DEFAULT_CONFIG, forceEnabled: true };

    // Even with mobile width
    Object.defineProperty(window, "innerWidth", {
      value: 500,
    });

    expect(shouldEnableSmootScroll(forcedConfig)).toBe(true);
  });
});

describe("Smooth Scroll Config", () => {
  test("should have valid default lerp value", () => {
    expect(DEFAULT_CONFIG.lerp).toBeGreaterThan(0);
    expect(DEFAULT_CONFIG.lerp).toBeLessThan(1);
  });

  test("should have reasonable maxDelta", () => {
    expect(DEFAULT_CONFIG.maxDelta).toBeGreaterThan(0);
    expect(DEFAULT_CONFIG.maxDelta).toBeLessThan(1000);
  });

  test("should have valid mobile breakpoint", () => {
    expect(DEFAULT_CONFIG.disableOnMobileWidth).toBeGreaterThan(0);
  });
});
