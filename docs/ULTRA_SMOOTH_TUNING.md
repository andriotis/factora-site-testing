# Ultra Smooth Scrolling Configuration

The landing page is now configured with **ultra-smooth** scrolling settings for maximum buttery momentum.

## Current Configuration

```tsx
{
  lerp: 0.035,           // Very slow interpolation (~28 frames to reach 63%)
  maxDelta: 60,          // Gentle acceleration limit
  touchMultiplier: 1.0,  // Smooth touch response
  lenisOptions: {
    duration: 2.2,       // Long duration for ultra buttery feel
    wheelMultiplier: 0.6, // Very gentle wheel response
    normalizeWheel: true,
    smoothWheel: true,
  }
}
```

## Testing the Effect

1. **Visit**: `http://localhost:3000`
2. **Scroll slowly** with mouse wheel - notice the momentum continues after you stop
3. **Quick scroll** - watch how it smoothly decelerates instead of stopping abruptly
4. **Test anchors** - click header navigation links to see smooth scrolling to sections
5. **Toggle with Ctrl/Cmd + T** to compare with native scrolling

## Troubleshooting

### If smooth scrolling isn't working:

1. **Check development indicator** - Look for 📱 ON/OFF in bottom-right corner
2. **Browser console** - Look for `[SmoothScroll]` debug messages
3. **Try toggle** - Press `Ctrl/Cmd + T` to manually enable
4. **Check width** - Ensure window is wider than 900px (desktop mode)
5. **Motion settings** - Verify "Reduce motion" is disabled in OS accessibility settings

### Making it even smoother:

```tsx
// Extremely smooth (may feel laggy)
config={{
  lerp: 0.025,
  maxDelta: 40,
  lenisOptions: {
    duration: 3.0,
    wheelMultiplier: 0.4,
  }
}}
```

### Making it more responsive:

```tsx
// Still smooth but snappier
config={{
  lerp: 0.06,
  maxDelta: 80,
  lenisOptions: {
    duration: 1.5,
    wheelMultiplier: 0.8,
  }
}}
```

## Performance Notes

- The ultra-smooth settings use more CPU for interpolation
- GPU acceleration is used for transforms (very efficient)
- No impact on mobile (automatically disabled)
- Minimal impact on bundle size (~10KB)

## Visual Debugging

The development build shows a status indicator:

- **📱 ON** = Smooth scroll active
- **📱 OFF** = Using native scroll (disabled due to mobile/motion preference/etc.)

## Browser DevTools Testing

```javascript
// Test in browser console:
console.log(window.__smoothScroll.state);

// Force enable (overrides all checks)
window.__smoothScrollEnabled = true;
window.__smoothScroll.enable();

// Scroll to specific section
window.__smoothScroll.scrollTo("#services");
```
