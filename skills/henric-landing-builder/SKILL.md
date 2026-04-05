---
name: henric-landing-builder
description: Complete system for building Henric Property landing pages with Claude Code. Use when creating prompts for Claude Code planning mode to build landing page sections (hero, features, testimonials, pricing, CTA, footer), implementing the Henric design system, or assembling complete pages. Covers prompt structure, design tokens, component patterns, and Swedish B2B SaaS best practices.
---

# Henric Landing Page Builder

Build high-quality, design-system-compliant landing pages for Henric Property using Claude Code's planning mode.

## Core workflow

1. **Activate planning mode**: `Shift+Tab` twice or `claude --permission-mode plan`
2. **Reference design system**: Point Claude to `/styles/tokens.css`
3. **Use CTCO structure**: Context → Task → Constraints → Output
4. **Build section-by-section**: Hero → Features → Testimonials → Pricing → CTA → Footer
5. **Verify then execute**: Review plan, exit to default mode, implement

## Prompt structure (CTCO)

Every prompt follows four sections in order:

```markdown
## Context
Tech stack, design system location, existing component patterns.

## Task
Single clear action verb: Create, Build, Implement (not Make, Do, Fix).

## Constraints
1. Design tokens (highest priority)
2. Responsive behavior
3. Accessibility requirements
4. Animation specs

## Output
Expected deliverables: plan, components, tests.
```

## Essential rules

**Always include:**
- `Use CSS custom properties from /styles/tokens.css exclusively`
- `Follow component pattern in /components/{ExistingComponent}/`
- Explicit breakpoints: `Mobile (default) → Tablet (md: 768px) → Desktop (lg: 1024px)`
- `Respect prefers-reduced-motion`

**Never:**
- Request multiple sections in one prompt
- Use vague verbs (make, do, fix, handle)
- Paste entire design system into prompt (reference by path instead)
- Skip accessibility requirements

## Think keywords for complex decisions

- `"think"` - Standard analysis
- `"think hard"` - Thorough exploration
- `"think harder"` - Comprehensive analysis
- `"ultrathink"` - Maximum depth

## Build sequence

```
1. tokens.css verification
2. Base components: Button, Card, Input, Badge
3. Layout: Container, Section, Grid
4. Sections: Hero, Features, Testimonials, Pricing, FAQ, CTA
5. Page assembly
6. Polish: animations, a11y audit, performance
```

## Reference files

| Need | File |
|------|------|
| CSS tokens, colors, typography, spacing | `references/design-system.md` |
| Ready-to-use prompt templates | `references/prompt-templates.md` |
| Swedish copy, content strategy | `references/content-guidelines.md` |

## Quick token reference

**Brand pink:** `--pink-300: #FFA8CD` (accent), `--pink-500: #FF5C9E` (CTAs), `--pink-700: #C93370` (text on light)

**Safe contrast:**
- Pink text on white: Use `--pink-700` minimum
- Pink text on dark: Use `--pink-300`
- CTA buttons: `--pink-500` background + white text

**Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

**Breakpoints:** sm: 640px, md: 768px, lg: 1024px, xl: 1280px

## Example: Hero section prompt

```markdown
## Context
Building Henric Property landing page. Next.js 14, TypeScript, CSS Modules.
Design tokens: /styles/tokens.css. Component pattern: /components/Button/.

## Task
Create hero section component with headline, subheadline, dual CTAs, and product screenshot.

## Constraints
1. Use only CSS custom properties (--pink-*, --slate-*, --space-*, --text-*)
2. Mobile: stacked, centered. Desktop (lg:): split 55/45, left-aligned
3. Headline: var(--text-hero), 700 weight, var(--text-primary)
4. Primary CTA: Pink button "Få tidig tillgång"
5. Entrance animation: fade-in + 20px slide-up, 600ms ease-out
6. Touch targets: 44px minimum

## Output
1. Implementation plan
2. HeroSection.tsx with TypeScript props
3. HeroSection.module.css
4. index.ts barrel export
```

## Swedish content guidelines

**Headline patterns:**
- "Mindre admin. Mer förvaltning."
- "Fastighetsförvaltning, förenklad."
- "Ditt dagliga arbete, utan krångel."

**CTA text:**
- "Få tidig tillgång" (Get early access)
- "Boka demo" (Book demo)
- "Anmäl dig till väntelistan" (Join waitlist)

**Trust signals:**
- "Fungerar med Vitec, Momentum och Incit Xpand"
- "Svenskt team. Vi följer GDPR."
- Integration logos as primary social proof

## Antipatterns to avoid

| ❌ Bad | ✅ Good |
|--------|---------|
| "Build me a nice hero section" | "Create hero with split layout, headline, dual CTAs" |
| "Make it responsive" | "Mobile: stacked. Desktop (lg:): 2-col grid" |
| "Don't use hardcoded colors" | "Use CSS custom properties from tokens.css" |
| "Create full landing page" | "Create hero section" (one at a time) |
| Pasting design system | "Reference /styles/tokens.css" |

## CLAUDE.md template

Create this file at repository root for automatic context:

```markdown
# Henric Property Design System

## Token Location
- Full tokens: /styles/tokens.css

## Token Naming
- Colors: --{color}-{shade} (e.g., --pink-500, --slate-900)
- Spacing: --space-{size} (1, 2, 3, 4, 6, 8, 12, 16, 20, 24)
- Typography: --text-{size}, --font-{weight}, --leading-{height}

## Component Pattern
/components/{Name}/
├── {Name}.tsx
├── {Name}.module.css
└── index.ts

## Critical Constraints
- NEVER hardcode colors—use tokens
- All interactive elements: 44px minimum touch target
- Always include prefers-reduced-motion support
- Mobile-first with min-width breakpoints
```
