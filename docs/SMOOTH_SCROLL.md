# Smooth Scroll Implementation

Buttery smooth, momentum-based scrolling for the Factora landing page using Lenis.

## Features

- ✅ **Buttery smooth scrolling** with configurable momentum/inertia
- ✅ **Respects `prefers-reduced-motion`** - automatically disables
- ✅ **Mobile-aware** - degrades gracefully to native scrolling on touch devices
- ✅ **Keyboard navigation preserved** - PageUp/PageDown/Arrow keys work perfectly
- ✅ **Anchor/hash navigation** - URL fragments work correctly
- ✅ **Runtime toggle** - Ctrl/Cmd + T to enable/disable
- ✅ **Performance optimized** - uses transforms, avoids layout thrash
- ✅ **Browser history** - scroll restoration works with back/forward
- ✅ **SSR compatible** - no hydration issues

## Installation & Setup

1. **Install dependency** (already added):

   ```bash
   pnpm install lenis
   ```

2. **The SmoothScrollProvider is already integrated** in `app/layout.tsx`:

   ```tsx
   import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           <SmoothScrollProvider>{children}</SmoothScrollProvider>
         </body>
       </html>
     );
   }
   ```

## Configuration

### Default Settings

```tsx
{
  lerp: 0.08,                    // Interpolation factor (lower = smoother)
  maxDelta: 120,                 // Max wheel delta per frame
  touchMultiplier: 1.6,          // Touch sensitivity
  disableOnMobileWidth: 900,     // Disable below this width
  enableToggleKey: 'KeyT',       // Toggle key (with Ctrl/Cmd)
  ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
}
```

### Custom Configuration

```tsx
<SmoothScrollProvider
  config={{
    lerp: 0.1, // Faster/more responsive
    disableOnMobileWidth: 768, // Different mobile breakpoint
    forceEnabled: true, // Override environment detection
  }}
>
  {children}
</SmoothScrollProvider>
```

## Usage & API

### Runtime Controls

```javascript
// Toggle smooth scroll
window.__smoothScrollEnabled = false; // Force disable
window.__smoothScroll.toggle();

// Programmatic scrolling
window.__smoothScroll.scrollTo("#section-id");
window.__smoothScroll.scrollTo(500); // Scroll to Y position
window.__smoothScroll.scrollTo("#contact", { duration: 2 });

// Check state
console.log(window.__smoothScroll.state);
```

### URL Anchors

Standard anchor links work automatically:

```html
<a href="#services">Services</a>
<section id="services">...</section>
```

### Keyboard Shortcuts

- **Ctrl/Cmd + T**: Toggle smooth scroll on/off
- **PageUp/PageDown**: Scroll by viewport height
- **Arrow keys**: Scroll by small increments
- **Home/End**: Scroll to top/bottom

## When Smooth Scroll Disables

The effect automatically disables when:

1. **`prefers-reduced-motion: reduce`** is set
2. **Mobile/touch devices** (width ≤ 900px by default)
3. **Touch-only devices** (no hover capability)
4. **User explicitly disabled** via runtime toggle
5. **Initialization fails** (fallback to native)

## Performance Details

### The Math Behind Smooth Scrolling

**Lerp Formula**: `newValue = currentValue + (targetValue - currentValue) * lerp`

- **lerp = 0.08**: Smooth, ~12 frames to reach 63% of target
- **lerp = 0.15**: More responsive, ~5 frames to reach 63%
- **lerp = 0.04**: Very smooth, ~17 frames to reach 63%

### Optimizations Used

1. **Transform-based** - Uses `translateY()` instead of changing scroll position
2. **Single RAF loop** - Efficient animation frame usage
3. **Passive listeners** - Non-blocking wheel/touch events
4. **Throttled resize** - Debounced window resize handling
5. **Will-change hints** - GPU layer promotion when needed

## Tuning Guide

### For Different Feel Preferences

**Snappy/Responsive**:

```tsx
config={{ lerp: 0.15, maxDelta: 150 }}
```

**Ultra Smooth**:

```tsx
config={{ lerp: 0.04, maxDelta: 80 }}
```

**Gaming/High-refresh**:

```tsx
config={{ lerp: 0.12, maxDelta: 200 }}
```

### Touch Sensitivity

- `touchMultiplier: 1.0` - Light touch scrolling
- `touchMultiplier: 2.0` - Heavy touch scrolling
- `touchMultiplier: 1.6` - Default, balanced

### Mobile Breakpoints

- `disableOnMobileWidth: 768` - Tablets and below
- `disableOnMobileWidth: 1024` - Small laptops and below
- `disableOnMobileWidth: 900` - Default, most tablets

## Browser Compatibility

- **Chrome 60+** ✅ Full support
- **Firefox 55+** ✅ Full support
- **Safari 12+** ✅ Full support
- **Edge 79+** ✅ Full support
- **iOS Safari 12+** ✅ Auto-disables (native scrolling)
- **Android Chrome 60+** ✅ Auto-disables (native scrolling)

**Bundle size impact**: ~10KB gzipped (Lenis library)

## Development

### Debug Mode

In development, a small indicator shows the smooth scroll status in the bottom-right corner.

### Troubleshooting

**Smooth scroll not working?**

1. Check browser console for errors
2. Verify `prefers-reduced-motion` is not set
3. Check viewport width (may be below mobile threshold)
4. Try manual toggle: Ctrl/Cmd + T

**Performance issues?**

1. Reduce `lerp` value (make it smaller)
2. Reduce `maxDelta` to limit acceleration
3. Check for conflicting CSS `scroll-behavior`

**Anchor links not working?**

1. Ensure target elements have proper `id` attributes
2. Check for duplicate IDs in the DOM
3. Verify no other scroll libraries are conflicting

## Implementation Notes

- **SSR Safe**: Uses dynamic imports and client-side detection
- **Cleanup**: Properly destroys instances on unmount
- **Memory efficient**: No memory leaks from event listeners
- **Accessible**: Maintains all keyboard navigation behaviors
- **SEO friendly**: Doesn't interfere with crawlers or meta tags
