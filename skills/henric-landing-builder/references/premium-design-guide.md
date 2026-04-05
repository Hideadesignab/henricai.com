# How to build a premium minimal website like Cursor

Premium SaaS websites like cursor.com achieve their distinctive aesthetic through **extreme intentionality** rather than simply removing elements. The core formula combines restrained color usage (often 90%+ monochromatic), strategic typography investment, generous whitespace that signals confidence, and purposeful micro-animations that feel effortless. These sites succeed because every pixel serves a function—what you remove matters as much as what you add.

The "confident minimal" aesthetic now dominates B2B SaaS, pioneered by Linear and refined by companies like Cursor, Vercel, and Stripe. What separates truly premium implementations from sites that simply look empty is the **layering of subtle details**: tinted grays instead of pure neutrals, multi-layered shadows instead of flat box-shadows, custom easing curves instead of default transitions, and typography systems designed with optical precision rather than mathematical accuracy.

---

## The anatomy of Cursor's premium design

Cursor.com operates on an almost entirely **monochromatic palette**: deep black backgrounds (#000000 or ~#0A0A0A), pure white headlines, and mid-tone grays (#888888-#AAAAAA) for secondary text. Accent color appears only in the logo's teal-to-blue gradient and functional elements like code syntax highlighting. This restraint creates immediate visual hierarchy—the product demos and content stand out naturally without competing elements.

The site invested in a **custom typeface called Cursor Gothic**, developed by type foundry Kimera based on their retail face "Waldenburg." This level of typographic investment signals sophistication before users consciously register it. The font includes logo ligatures with optical rather than mathematical centering, ensuring text aligns correctly beside brand elements—an unusual level of integration that demonstrates obsessive attention to detail.

Whitespace serves as Cursor's primary design tool. Hero sections feature massive padding where headlines float in abundant space. Section breaks use significant vertical gaps between content blocks. This generous spacing creates reading rhythm, signals confidence ("nothing to hide"), and directs attention to key content. The dark mode implementation maintains readability through high-contrast white headlines against black backgrounds, with mid-tone grays providing appropriate recession for secondary elements.

The site makes the product experienceable on the web through **interactive CSS code editor demos** built entirely using Cursor itself. These aren't static screenshots but functional mini-applications with scenic landscape wallpaper backgrounds (credited to real artists). Social proof comes through high-profile testimonials from Patrick Collison, Andrej Karpathy, and Greg Brockman—quotes with real credibility rather than generic logo walls.

---

## Design patterns shared across Linear, Vercel, and Stripe

Analyzing the three most influential premium SaaS sites reveals consistent patterns that define the modern aesthetic. All three treat **dark mode as default or primary**—Linear uses black coding-environment aesthetics, Vercel employs terminal-inspired precision, and Stripe offers dark options for developer-focused pages. This choice reduces eye strain and conveys technical professionalism.

Each site treats **performance as a brand attribute**. Linear is "built with obsessive focus on speed," Vercel maintains an "extremely fast site with subtle animations," and Stripe uses GPU-accelerated WebGL instead of CSS animations for their signature mesh gradients. Speed becomes both technical reality and perceptual design choice—animations are short, pages load instantly, and nothing feels sluggish.

The typography strategy across all three sites follows similar principles: sans-serif fonts optimized for screens (Inter, Geist, Sohne), bold headlines with clear hierarchy, and generous line spacing. Headlines run **3-5x larger** than body text, creating unmistakable visual hierarchy. All three use tabular numbers for data comparisons and maintain WCAG AA contrast ratios at minimum.

What these sites uniformly avoid is equally instructive: no parallax scrolling effects, no auto-playing videos, no excessive animation, no cluttered navigation, no generic stock photography, no busy background patterns, no zig-zag layouts, and no multiple competing CTAs per section. The restraint is systematic.

---

## Technical CSS that creates the premium feel

The foundation of premium aesthetics lies in layered shadows rather than single box-shadows. Where a basic card might use `box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3)`, premium implementations stack **5-6 progressively larger shadows** at low opacity:

```css
box-shadow:
  0 1px 1px rgba(0, 0, 0, 0.075),
  0 2px 2px rgba(0, 0, 0, 0.075),
  0 4px 4px rgba(0, 0, 0, 0.075),
  0 8px 8px rgba(0, 0, 0, 0.075),
  0 16px 16px rgba(0, 0, 0, 0.075);
```

This mimics how real light creates depth—multiple light sources producing ambient and direct illumination. For colored backgrounds, shadows should be tinted to match (blue-tinted shadows on blue surfaces) rather than using pure black.

Glassmorphism effects require specific layering: semi-transparent backgrounds using `rgba()`, backdrop-filter blur at **10-20px**, subtle 1px borders at low opacity white, and a colorful background behind the element for the effect to show through. The extended blur technique from Josh Comeau creates realistic light bleed by masking the backdrop-filter area to extend beyond the visible element.

For gradients that look premium rather than tacky, the key is using **colors close on the spectrum** with similar saturation and lightness values. Subtle transitions at 135-degree angles or radial gradients work best. Mesh gradients—multiple radial gradients overlapping—create the sophisticated tech look seen on Stripe.

---

## Animation timing that separates premium from cheap

The difference between premium and amateurish animation comes down to three factors: **duration, easing, and subtlety**. Micro-interactions should run 150-300ms; never exceed 500ms for UI feedback. The ideal duration for most hover states is 200ms with custom easing.

Never use `linear` for UI animations—it feels robotic. The recommended approach uses `ease-out` for 90% of interactions (elements arriving quickly and settling gently), with custom cubic-bezier curves for sophistication:

```css
--ease-out-medium: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-strong: cubic-bezier(0.33, 1, 0.68, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

Vercel's Web Interface Guidelines specify that all animations must be **interruptible by user input**, honor `prefers-reduced-motion`, and use GPU-accelerated properties (transform and opacity) rather than layout-triggering properties. Loading states should have a minimum 150-300ms delay before showing spinners and 300-500ms minimum visible time to avoid flashing.

Premium hover patterns combine subtle vertical translation with shadow enhancement. A sophisticated button might lift 2px on hover (`translateY(-2px)`) while its shadow expands, then return to baseline on active state with shortened transition duration (100ms vs 200ms) for responsive feedback.

---

## Spacing and typography systems for consistency

Premium sites build on **8px base spacing systems**, where all values are multiples: 4px for micro-spacing, 8px for tight spacing, 16px as the base unit, 32-48px for section gaps, and 64-96px for major section breaks. The Atlassian, Carbon, and Wise design systems all recommend this approach for maintainable, consistent interfaces.

Typography should follow a **modular ratio between 1.2 and 1.25** for SaaS applications—the "Major Third" scale offers enough contrast for hierarchy without extremes. This means if your base is 16px, headings scale to 20px, 25px, 31px, and 39px. Fluid typography using `clamp()` allows smooth scaling between viewport sizes while maintaining accessibility (the rem component ensures zoom functionality works).

Font loading strategy matters for perceived performance. Preload critical fonts only, use `font-display: swap` to show fallback immediately, subset fonts to Latin characters for Western audiences, and use WOFF2 format for best compression. Variable fonts reduce file count while enabling weight animation and optical sizing.

---

## The 60-30-10 color rule applied to B2B SaaS

Premium SaaS sites follow a strict color hierarchy: **60% dominant** (background/canvas), **30% secondary** (cards, navigation, secondary text), and **10% accent** (CTAs and key highlights only). For B2B landing pages specifically, this means white or off-white backgrounds, neutral grays for supporting elements, and brand color reserved exclusively for primary actions.

Don't use pure gray (#808080)—**add slight color tints** for warmth or coolness. Cool-tinted grays (with blue undertones) convey professionalism and technical precision; warm-tinted grays (with brown or yellow undertones) feel friendly and approachable. All grays in a palette should share the same undertone for coherence.

Similarly, avoid pure black (#000000) for text—use #1a1a1a or a dark gray-900 value. Avoid pure white (#FFFFFF) for backgrounds—use #fafafa or #f8f9fa for softer appearance. These subtle adjustments create depth and sophistication that users feel even if they can't articulate why.

---

## Common mistakes that make minimal sites feel empty

The difference between "premium minimal" and "just empty" is **intention**. Empty sites have random spacing, no visual hierarchy, plain whites, and missing focal points. Premium minimal sites have consistent spacing systems, clear typographic hierarchy, tinted neutrals, subtle textures through shadows and borders, and deliberate emphasis on key elements.

Specific animation mistakes include using durations under 100ms (feels jarring) or over 500ms (feels sluggish), using `linear` easing for UI interactions, animating `box-shadow` directly instead of opacity on pseudo-elements, and using `ease-in-out` for quick interactions. Typography mistakes include using more than 2-3 font weights, poor line height (should be 1.5-1.7 for body, 1.1-1.3 for headings), and tracking lowercase text (only track uppercase).

Color mistakes include excessive saturation (keep under 70% for UI elements), wrong accent placement (accent only on CTAs and key interactive elements), and inconsistent gray tints (mixing warm and cool grays). Spacing mistakes include inconsistent margins, ignoring Gestalt proximity principles, and insufficient breathing room between sections.

---

## Conclusion

Building a premium minimal website requires systematic intentionality across every decision layer. The "confident minimal" aesthetic succeeds not through absence but through **carefully layered subtlety**—multi-layer shadows that mimic real light, custom easing curves that feel natural, typography systems with optical precision, and color palettes built on tinted neutrals with surgical accent usage.

The technical implementation matters as much as the design philosophy. Use `transform` and `opacity` for GPU-accelerated animations, implement 8px-based spacing tokens, build typography on modular scales with fluid clamp() values, and layer shadows progressively. Honor user preferences with `prefers-reduced-motion` support and ensure keyboard accessibility throughout.

What ultimately separates sites like Cursor, Linear, Vercel, and Stripe from imitations is the **obsessive attention to details users feel but cannot articulate**: the 1px optical adjustments, the precisely calibrated animation timing, the restraint that signals confidence. Premium minimal design is a practice of disciplined removal—keeping only what earns its place through function or delight.
