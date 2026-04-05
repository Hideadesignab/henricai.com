# Henric Website — henricai.com

## Quick Start
- `npm run dev` — Next.js dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm start` — Serve production build

## Stack
- Next.js 14, App Router, TypeScript (strict)
- CSS Modules for styling (`.module.css` files) — NO Tailwind
- Framer Motion for animations
- Lenis for smooth scrolling
- lucide-react for icons
- Inter (400, 500, 600, 700) + JetBrains Mono

## Architecture
```
app/                        ← App Router pages (layout.tsx is root)
  plattform/                ← Platform sub-pages (assistent, desk, workflows, etc.)
  solutions/                ← Solution sub-pages (leases, financials, etc.)
  about/, careers/, contact/, security/, press-kit/, book-demo/
components/
  ComponentName/
    ComponentName.tsx       ← main component
    ComponentName.module.css ← scoped styles
    index.ts                ← re-export
```

## Component Rules
- One component per folder under `components/`
- Always use CSS Modules: `import styles from './ComponentName.module.css'`
- Never use inline styles except for dynamic values (animated heights, transforms from framer-motion)
- Never use Tailwind classes — this project does not have Tailwind installed
- Props interface above component: `interface ComponentNameProps { ... }`
- Default export for main component
- Colocate sub-components in the same folder if only used by parent
- Only exception to folder rule: tiny one-off components (see SecurityPolicyButton.tsx)

## Styling Rules
- All styles in `.module.css` files, scoped via CSS Modules
- Use CSS custom properties for repeated values
- Class naming: camelCase in CSS modules (`menuItem`, `subLinkTitle`, not `menu-item`)
- Animations: prefer framer-motion for enter/exit/layout animations, CSS transitions for simple hover/state changes
- Font smoothing: add `-webkit-font-smoothing: antialiased` on dark backgrounds with white text
- White text on black looks optically heavier — always compensate with antialiased

## Design Tokens
Reference values — don't invent new ones:
- Menu item titles: Inter 500, 26px, letter-spacing -0.5px
- Sub-link titles: Inter 500, 15px
- Sub-link descriptions: Inter 400, 13px, line-height 1.45
- Card titles: Inter 500, 14px
- Card descriptions: Inter 400, 12px, line-height 1.4
- Buttons (CTA): Inter 500, 14px, border-radius 5px
- Dark overlay: #000000 (never #1e1e1e, never #111)
- Light overlay: #ffffff
- Borders: rgba(255,255,255,0.08) on dark, rgba(0,0,0,0.08) on light
- Text on dark: rgba(255,255,255,0.85) titles, rgba(255,255,255,0.4) body, rgba(255,255,255,0.3) muted
- Text on light: rgba(0,0,0,0.85) titles, rgba(0,0,0,0.35) body, rgba(0,0,0,0.3) muted

## Routing
- This is Next.js App Router — pages are folders under `app/`
- Internal links: use `<Link href="/path">` from `next/link`
- External links: `<a href target="_blank" rel="noopener noreferrer">`

## Animation Patterns
- Use framer-motion for complex enter/exit animations (menu overlay, staggered lists)
- Use CSS transitions for simple state changes (hover, active, color changes)
- Accordion height: animate with framer-motion `animate={{ height: 'auto' }}` or measure scrollHeight — never use max-height trick
- Hamburger → X: CSS transition on position + rotation, staggered timing
- Stagger children: framer-motion `staggerChildren: 0.04` in parent variants

## Existing Patterns
- `Header/Header.tsx` owns the top navigation including MobileMenu
- `MobileMenu/MobileMenu.tsx` receives `isOpen` and `onClose` as props from Header
- `ConditionalHeader/` and `ConditionalFooter/` handle showing/hiding header per page
- `Section/` is a reusable wrapper for page sections
- `Container/` handles max-width and padding
- `SmoothScroll/` wraps Lenis smooth scrolling

## Component Variants
Many components support a `dark` prop for placement on black vs white sections. This is NOT dark mode — it's contextual per section.

## Gotchas
- This is Next.js 14 App Router — NOT Vite, NOT Pages Router
- No Tailwind installed — do not use utility classes
- CSS Modules are required — never use global CSS for component styles
- `Header` controls MobileMenu state — don't move state ownership into MobileMenu
- Framer Motion is available and preferred for animations — don't reinvent with raw JS
- `fixed` positioning breaks if a parent has `transform` — verify parent chain
- Lock body scroll with `document.body.style.overflow = 'hidden'` when overlays open, clean up in useEffect
- Lenis smooth scroll may conflict with scroll locking — disable Lenis when menu is open if needed
- Images: use `next/image`, not `<img>`
- All page components are server components by default — add `'use client'` at top when using hooks, state, or event handlers

## Brand
- Product name: Henric (never "Henric AI")
- Logo: three vertical bars + "Henric" wordmark (rendered by Header, not by MobileMenu)
- Personality: Competent, Warm, Precise, Swedish, Quiet, Trustworthy
- Never: Playful, Cheap, Loud, Generic

## Before Making Changes
1. Read the component AND its parent before editing
2. Read the existing .module.css file before adding styles
3. Match existing prop interfaces — don't change how parent calls child
4. Run `npm run build` after changes to verify TypeScript + Next.js compile
5. Check that CSS class names follow existing camelCase convention in the module