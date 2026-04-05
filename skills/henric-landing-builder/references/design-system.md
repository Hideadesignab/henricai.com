# Henric Design System Reference

Complete CSS custom properties and component patterns for Henric Property landing pages.

## Complete CSS tokens

Copy this to `/styles/tokens.css`:

```css
:root {
  /* ═══════════════════════════════════════════
     TYPOGRAPHY
     ═══════════════════════════════════════════ */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Inter Display', var(--font-sans);
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;
  --text-4xl: 3rem;
  --text-hero: clamp(2.5rem, 5vw, 4rem);

  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --leading-tight: 1.15;
  --leading-snug: 1.3;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;

  --tracking-tight: -0.02em;
  --tracking-snug: -0.01em;
  --tracking-normal: 0;
  --tracking-wide: 0.02em;

  /* ═══════════════════════════════════════════
     COLORS - Pink Scale (Brand Accent)
     ═══════════════════════════════════════════ */
  --pink-50: #FFF5F8;
  --pink-100: #FFE4EC;
  --pink-200: #FFCCD9;
  --pink-300: #FFA8CD;  /* PRIMARY BRAND ACCENT */
  --pink-400: #FF7EB3;
  --pink-500: #FF5C9E;  /* CTA BUTTONS */
  --pink-600: #E84589;
  --pink-700: #C93370;  /* TEXT ON LIGHT */
  --pink-800: #A62859;
  --pink-900: #7D1F45;

  /* ═══════════════════════════════════════════
     COLORS - Slate Scale (Neutrals)
     ═══════════════════════════════════════════ */
  --slate-50: #F8FAFC;
  --slate-100: #F1F5F9;
  --slate-200: #E2E8F0;
  --slate-300: #CBD5E1;
  --slate-400: #94A3B8;
  --slate-500: #64748B;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1E293B;
  --slate-900: #0F172A;
  --slate-950: #020617;

  /* ═══════════════════════════════════════════
     COLORS - Semantic
     ═══════════════════════════════════════════ */
  --success-500: #10B981;
  --success-600: #059669;
  --warning-500: #F59E0B;
  --warning-600: #D97706;
  --error-500: #EF4444;
  --error-600: #DC2626;
  --info-500: #06B6D4;
  --info-600: #0891B2;

  /* ═══════════════════════════════════════════
     SEMANTIC TOKENS - Light Mode
     ═══════════════════════════════════════════ */
  --bg-primary: #FFFFFF;
  --bg-secondary: var(--slate-50);
  --bg-tertiary: var(--slate-100);
  --bg-accent: var(--pink-50);

  --text-primary: var(--slate-900);
  --text-secondary: var(--slate-600);
  --text-tertiary: var(--slate-500);
  --text-inverse: #FFFFFF;
  --text-accent: var(--pink-700);

  --border-default: var(--slate-200);
  --border-subtle: var(--slate-100);
  --border-emphasis: var(--slate-300);
  --border-accent: var(--pink-300);

  --interactive-primary: var(--pink-500);
  --interactive-primary-hover: var(--pink-600);

  /* ═══════════════════════════════════════════
     SPACING (8px base)
     ═══════════════════════════════════════════ */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* ═══════════════════════════════════════════
     LAYOUT
     ═══════════════════════════════════════════ */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;
  --container-max: 1320px;
  --content-width: 720px;

  --bp-sm: 640px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
  --bp-2xl: 1536px;

  /* ═══════════════════════════════════════════
     BORDERS & SHADOWS
     ═══════════════════════════════════════════ */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.04);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.03);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 8px 10px rgba(0, 0, 0, 0.04);
  --shadow-pink: 0 4px 14px rgba(255, 168, 205, 0.25), 0 2px 6px rgba(255, 168, 205, 0.15);

  /* ═══════════════════════════════════════════
     MOTION
     ═══════════════════════════════════════════ */
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ═══════════════════════════════════════════
   DARK MODE
   ═══════════════════════════════════════════ */
[data-theme="dark"] {
  --bg-primary: #0C0F14;
  --bg-secondary: #151921;
  --bg-tertiary: #1E232E;
  --bg-accent: rgba(255, 168, 205, 0.08);

  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --text-tertiary: #64748B;
  --text-accent: var(--pink-300);

  --border-default: #2D3444;
  --border-subtle: #1E232E;
  --border-emphasis: #3D4555;

  --interactive-primary: #E895B8;
  --interactive-primary-hover: var(--pink-300);
}

/* ═══════════════════════════════════════════
   REDUCED MOTION
   ═══════════════════════════════════════════ */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Color contrast guide

| Combination | Ratio | WCAG AA | Usage |
|-------------|-------|---------|-------|
| #FFA8CD on white | 1.9:1 | ❌ Fail | NEVER use for text on white |
| #FFA8CD on #0C0F14 | 9.2:1 | ✅ Pass | Safe for dark backgrounds |
| #1E293B on #FFA8CD | 7.1:1 | ✅ Pass | Dark text on pink buttons |
| #C93370 on white | 4.6:1 | ✅ Pass | Use for text on light |
| #7D1F45 on white | 9.1:1 | ✅ Pass | Maximum contrast |

**Color distribution (60/30/10):**
- 60% Neutrals (slate grays)
- 30% Primary text (slate-900, slate-600)
- 10% Pink accent (CTAs, highlights, active states)

## Component CSS patterns

### Button

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: 600;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);
}

.btn-primary {
  background-color: var(--pink-500);
  color: white;
  border-color: var(--pink-500);
}

.btn-primary:hover {
  background-color: var(--pink-600);
  border-color: var(--pink-600);
  transform: translateY(-1px);
  box-shadow: var(--shadow-pink);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--pink-500);
  outline-offset: 2px;
}

.btn-secondary {
  background-color: var(--slate-800);
  color: white;
}

.btn-ghost {
  background-color: transparent;
  color: var(--slate-800);
  border-color: var(--slate-300);
}

/* Sizes */
.btn-sm { height: 36px; padding: 0 16px; font-size: 14px; border-radius: var(--radius-sm); }
.btn-md { height: 44px; padding: 0 20px; font-size: 15px; border-radius: var(--radius-md); }
.btn-lg { height: 52px; padding: 0 28px; font-size: 16px; border-radius: 10px; }
```

### Input

```css
.input {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-family: var(--font-sans);
  font-size: max(16px, 1rem); /* Prevents iOS zoom */
  color: var(--text-primary);
  background-color: var(--bg-primary);
  border: 2px solid var(--border-default);
  border-radius: var(--radius-md);
  transition: border-color var(--duration-normal), box-shadow var(--duration-normal);
}

.input:focus {
  outline: none;
  border-color: var(--pink-400);
  box-shadow: 0 0 0 3px rgba(255, 168, 205, 0.2);
}

.input-error {
  border-color: var(--error-500);
}
```

### Card

```css
.card {
  background-color: var(--bg-primary);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: box-shadow var(--duration-normal), transform var(--duration-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-featured {
  border-color: var(--pink-200);
  box-shadow: 0 0 0 1px var(--pink-100);
}
```

### Header

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 72px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-6);
}
```

## Landing page section patterns

### Hero

```css
.hero {
  min-height: calc(100vh - 72px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
  padding: var(--space-24) 0;
}

@media (max-width: 1023px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    padding: var(--space-16) 0;
  }
}

.hero-headline {
  font-size: var(--text-hero);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.hero-subheadline {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
  max-width: 480px;
}

.hero-ctas {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

.logo-bar {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  opacity: 0.6;
}

.logo-bar img {
  height: 28px;
  width: auto;
  filter: grayscale(100%);
}
```

### Features grid

```css
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

@media (max-width: 767px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  text-align: center;
  padding: var(--space-8);
}

.feature-icon {
  width: 48px;
  height: 48px;
  margin: 0 auto var(--space-4);
  color: var(--pink-500);
}

.feature-title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.feature-description {
  font-size: var(--text-base);
  color: var(--text-secondary);
}
```

### Section spacing

| Section Type | Desktop Padding | Mobile Padding |
|--------------|-----------------|----------------|
| Hero | 96-128px | 48-64px |
| Content sections | 80-96px | 48px |
| Feature blocks | 64-80px | 40px |
| Testimonials | 64px | 40px |
| Footer | 64px top, 32px bottom | 48px top, 24px bottom |

```css
.section {
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
}

@media (min-width: 1024px) {
  .section {
    padding-top: var(--space-20);
    padding-bottom: var(--space-20);
  }
}
```

## Accessibility requirements

| Requirement | Standard | Implementation |
|-------------|----------|----------------|
| Text contrast | 4.5:1 normal, 3:1 large | Use pink-700+ on light |
| Touch targets | 44×44px minimum | All buttons ≥44px height |
| Focus indicators | Visible, 3:1 contrast | 2px outline with offset |
| Text resizing | 200% without loss | Use rem units |
| Motion | Respect user preference | prefers-reduced-motion query |
