# Entrance Animations with Framer Motion

A comprehensive entrance animation system for React applications using Framer Motion, designed to integrate seamlessly with smooth scroll implementations and respect user accessibility preferences.

## Features

- 🎭 **Multiple Animation Presets** - Subtle, vivid, hero, fade, and scale animations
- 🎯 **Viewport-Triggered Animations** - Elements animate only when they enter the viewport
- ♿ **Accessibility First** - Respects `prefers-reduced-motion` and provides fallbacks
- 📱 **Mobile Aware** - Configurable mobile disable options for performance
- 🎪 **Stagger Effects** - Beautiful cascading animations for groups of elements
- 🎛️ **Runtime Controls** - Toggle animations on/off during development and production
- 🔧 **Smooth Scroll Integration** - Works seamlessly with Lenis and other scroll libraries
- ⚡ **Performance Optimized** - Only animates transform and opacity properties
- 🎨 **Customizable** - Extensive configuration options for timing, easing, and effects

## Installation

Framer Motion is already installed in this project. If you need to install it in a new project:

```bash
npm install framer-motion
# or
pnpm install framer-motion
```

## Quick Start

### 1. Wrap Your App

Add the `EntranceProvider` to your app root (this is already done in `app/layout.tsx`):

```tsx
import { EntranceProvider } from "@/components/EntranceProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EntranceProvider
          config={{
            preset: "subtle",
            duration: 0.6,
            stagger: 0.08,
            rootMargin: "0px 0px -5% 0px",
          }}
        >
          {children}
        </EntranceProvider>
      </body>
    </html>
  );
}
```

### 2. Add Animations to Components

Use the convenience components for common animations:

```tsx
import {
  SlideUp,
  FadeIn,
  HeroEntrance,
  StaggerContainer,
} from "@/components/EntranceProvider";

function MyComponent() {
  return (
    <div>
      {/* Hero section with dramatic entrance */}
      <HeroEntrance>
        <h1>Welcome to Our Site</h1>
      </HeroEntrance>

      {/* Staggered list of items */}
      <StaggerContainer stagger={0.1}>
        <SlideUp>
          <div>Item 1</div>
        </SlideUp>
        <SlideUp>
          <div>Item 2</div>
        </SlideUp>
        <SlideUp>
          <div>Item 3</div>
        </SlideUp>
      </StaggerContainer>

      {/* Subtle fade in */}
      <FadeIn>
        <p>This content fades in gently.</p>
      </FadeIn>
    </div>
  );
}
```

### 3. Advanced Usage with MotionWrapper

For full control, use the `MotionWrapper` component:

```tsx
import { MotionWrapper } from "@/components/EntranceProvider";

function AdvancedComponent() {
  return (
    <MotionWrapper
      preset="vivid"
      translateY={40}
      scale={0.9}
      duration={0.8}
      delay={0.2}
      stagger={0.1}
    >
      <div>Custom animated content</div>
    </MotionWrapper>
  );
}
```

## Available Components

### EntranceProvider

The main provider component that sets up the animation context.

**Props:**

- `config` - Partial configuration object (see Configuration section)
- `children` - React children to wrap

### MotionWrapper

The core animation component with full customization options.

**Props:**

- `preset` - Animation preset name (`"subtle" | "vivid" | "hero" | "fade" | "scale"`)
- `duration` - Animation duration in seconds
- `delay` - Delay before animation starts
- `stagger` - Time between staggered children animations
- `translateY/translateX` - Initial translation values
- `scale` - Initial scale value
- `threshold` - Intersection observer threshold
- `rootMargin` - Intersection observer margin
- `triggerOnce` - Whether to animate only once
- `variants` - Custom Framer Motion variants
- `staggerChildren` - Enable stagger for child elements
- `as` - HTML element type to render

### Convenience Components

- `FadeIn` - Simple fade-in animation
- `SlideUp` - Slide up from bottom with fade
- `ScaleIn` - Scale and fade animation
- `HeroEntrance` - Dramatic entrance for hero sections
- `StaggerContainer` - Container that staggers child animations

## Animation Presets

### Subtle

- **Use for:** Frequent micro-interactions, list items
- **Effect:** Small translate (8px), quick duration (0.4s)
- **Stagger:** 0.04s

### Vivid

- **Use for:** Cards, feature sections, call-to-actions
- **Effect:** Medium translate (16px), balanced duration (0.6s)
- **Stagger:** 0.08s

### Hero

- **Use for:** Main headings, hero sections, important content
- **Effect:** Large translate (24px), longer duration (0.8s)
- **Stagger:** 0.12s

### Fade

- **Use for:** Backgrounds, overlays, subtle content
- **Effect:** Opacity only, no translation
- **Stagger:** 0.06s

### Scale

- **Use for:** Images, modals, popup content
- **Effect:** Scale from 0.9 to 1.0 with fade
- **Stagger:** 0.1s

## Configuration Options

```tsx
interface EntranceConfig {
  // Animation settings
  preset: "subtle" | "vivid" | "hero" | "fade" | "scale";
  duration: number; // Animation duration (seconds)
  stagger: number; // Stagger delay (seconds)

  // Transform settings
  translateY: number; // Initial Y translation (pixels)
  translateX: number; // Initial X translation (pixels)
  scale: number; // Initial scale value

  // Timing settings
  delay: number; // Initial delay (seconds)
  staggerDirection: "normal" | "reverse";

  // Viewport settings
  rootMargin: string; // IntersectionObserver margin
  threshold: number; // Visibility threshold (0-1)
  triggerOnce: boolean; // Animate only once vs on every entry

  // Responsive settings
  disableOnMobileWidth: number; // Disable animations below this width

  // Interaction settings
  enableToggleKey: boolean; // Enable Ctrl+Shift+A toggle
  enableRuntimeToggle: boolean; // Show development indicator
}
```

## Hooks

### useEntrance()

Access the entrance animation context:

```tsx
import { useEntrance } from "@/components/EntranceProvider";

function MyComponent() {
  const { shouldAnimate, state, toggleAnimations, setAnimationsEnabled } =
    useEntrance();

  return (
    <div>
      <button onClick={toggleAnimations}>
        {shouldAnimate() ? "Disable" : "Enable"} Animations
      </button>
    </div>
  );
}
```

### useAnimateOnView()

Low-level hook for custom animation control:

```tsx
import { useAnimateOnView } from "@/components/EntranceProvider";

function CustomComponent() {
  const { ref, controls, isInView } = useAnimateOnView({
    threshold: 0.3,
    delay: 0.5,
  });

  return <div ref={ref}>Content</div>;
}
```

## Smooth Scroll Integration

The system automatically detects and integrates with smooth scroll implementations:

1. **Lenis Integration** - Automatically detects `window.__smoothScroll` global
2. **Custom Containers** - Looks for `[data-lenis-root]` and similar selectors
3. **Proper Root Detection** - Uses the scroll container as the IntersectionObserver root

### Manual Integration

If you have a custom scroll setup, you can help the system detect it:

```tsx
// Set a data attribute on your scroll container
<div data-lenis-root className="scroll-container">
  {/* Your scrollable content */}
</div>;

// Or expose it globally
window.__smoothScrollContainer = document.querySelector(".my-scroller");
```

## Accessibility

The system is designed with accessibility as a priority:

### Reduced Motion Support

- Automatically detects `prefers-reduced-motion: reduce`
- Falls back to fade-only animations or disables animations entirely
- Uses Framer Motion's `useReducedMotion()` hook

### Server-Side Rendering

- Gracefully handles SSR environments
- No flash of unstyled content
- Elements are visible by default

### Keyboard Navigation

- Animations don't interfere with keyboard navigation
- Focus management remains intact
- Optional keyboard toggle (Ctrl+Shift+A) for development

## Performance Optimization

### Efficient Animations

- Only animates `transform` and `opacity` (GPU-accelerated properties)
- Uses `will-change` appropriately
- Minimal layout thrashing

### Smart Viewport Detection

- Uses IntersectionObserver for efficient viewport detection
- Configurable thresholds and margins
- Respects smooth scroll containers

### Mobile Performance

- Configurable mobile disable threshold
- Reduced motion by default on low-end devices
- Battery-conscious animation choices

## Development Tools

### Runtime Toggle

In development mode, a toggle indicator appears in the bottom-left corner:

- Click to toggle animations on/off
- Keyboard shortcut: Ctrl+Shift+A (Cmd+Shift+A on Mac)
- Persists state across page reloads

### Global API

Access animations programmatically:

```javascript
// Check if animations are enabled
window.__animationsEnabled;

// Control animations globally
window.__entranceAnimations.enable();
window.__entranceAnimations.disable();
window.__entranceAnimations.toggle();

// Get current state
window.__entranceAnimations.state;
```

## Troubleshooting

### Animations Not Triggering

1. **Check viewport detection:**

   ```tsx
   // Adjust threshold and margin
   <MotionWrapper
     threshold={0.1}
     rootMargin="0px 0px -20% 0px"
   >
   ```

2. **Verify smooth scroll integration:**

   ```javascript
   // Check if scroll container is detected
   console.log(window.__smoothScroll?.state?.instance);
   ```

3. **Test without smooth scroll:**
   Temporarily disable smooth scroll to isolate the issue.

### Performance Issues

1. **Reduce stagger complexity:**

   ```tsx
   // Reduce number of staggered elements
   <StaggerContainer stagger={0.05}>
   ```

2. **Simplify animations on mobile:**

   ```tsx
   <EntranceProvider config={{ disableOnMobileWidth: 768 }}>
   ```

3. **Use simpler presets:**
   ```tsx
   // Use "fade" instead of "vivid" for better performance
   <MotionWrapper preset="fade">
   ```

### SSR Hydration Issues

1. **Ensure client-only rendering for motion:**

   ```tsx
   const [isClient, setIsClient] = useState(false);
   useEffect(() => setIsClient(true), []);

   if (!isClient) return <div>{children}</div>;
   ```

## Browser Support

- **Modern Browsers:** Full support with hardware acceleration
- **IE11:** Graceful degradation (animations disabled)
- **Mobile:** Optimized performance with optional disabling
- **Reduced Motion:** Automatic compliance with user preferences

## Bundle Impact

- **Framer Motion:** ~32KB gzipped
- **EntranceProvider:** ~8KB gzipped
- **Total Impact:** ~40KB for full animation system

### Code Splitting

Consider lazy loading for reduced initial bundle:

```tsx
const EntranceProvider = lazy(() => import("@/components/EntranceProvider"));
```

## Examples

### Landing Page Hero

```tsx
function Hero() {
  return (
    <StaggerContainer stagger={0.15} delay={0.2}>
      <HeroEntrance translateY={40}>
        <h1>Amazing Product</h1>
      </HeroEntrance>
      <HeroEntrance translateY={32} delay={0.1}>
        <p>Transform your business today</p>
      </HeroEntrance>
      <HeroEntrance translateY={24} delay={0.2}>
        <button>Get Started</button>
      </HeroEntrance>
    </StaggerContainer>
  );
}
```

### Feature Grid

```tsx
function FeatureGrid() {
  return (
    <div>
      <SlideUp>
        <h2>Our Features</h2>
      </SlideUp>
      <StaggerContainer className="grid grid-cols-3 gap-8" stagger={0.1}>
        {features.map((feature) => (
          <MotionWrapper key={feature.id} preset="vivid" scale={0.95}>
            <FeatureCard {...feature} />
          </MotionWrapper>
        ))}
      </StaggerContainer>
    </div>
  );
}
```

### Modal with Entrance

```tsx
function Modal({ isOpen, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionWrapper
          preset="scale"
          scale={0.8}
          duration={0.3}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
          }}
        >
          <div className="modal">{children}</div>
        </MotionWrapper>
      )}
    </AnimatePresence>
  );
}
```

## Migration Guide

### From CSS Animations

Replace CSS-based entrance animations:

```css
/* Old CSS */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
```

```tsx
// New Framer Motion
<FadeIn>
  <div className="content">
</FadeIn>
```

### From AOS (Animate On Scroll)

Replace AOS attributes:

```html
<!-- Old AOS -->
<div data-aos="fade-up" data-aos-delay="200"></div>
```

```tsx
// New EntranceProvider
<SlideUp delay={0.2}>
  <div>
</SlideUp>
```

### From GSAP ScrollTrigger

Replace GSAP animations:

```javascript
// Old GSAP
gsap.fromTo(
  ".element",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, scrollTrigger: ".element" }
);
```

```tsx
// New EntranceProvider
<MotionWrapper translateY={50}>
  <div className="element">
</MotionWrapper>
```

## Contributing

To extend the animation system:

1. Add new presets to `variants.ts`
2. Create convenience components in `MotionWrapper.tsx`
3. Add tests for new functionality
4. Update documentation

## License

This entrance animation system is part of the project and follows the same license terms.
