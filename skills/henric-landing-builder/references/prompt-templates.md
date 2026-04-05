# Prompt Templates for Henric Landing Pages

Ready-to-use templates for Claude Code planning mode. Copy, customize content placeholders, and execute.

## Template: Hero Section

```markdown
## Context
Building Henric Property landing page.
Tech: Next.js 14, TypeScript, CSS Modules with tokens from /styles/tokens.css.
Reference existing component patterns in /components/Button/.

## Task
Create hero section component for the property management platform landing page.

## Content Requirements
- Headline: "Mindre admin. Mer förvaltning." (editable via props)
- Subheadline: "AI-assistenten som fungerar i Vitec, Momentum och Incit Xpand—plus Word, Outlook och Excel." (props)
- Primary CTA: "Få tidig tillgång" → links to /waitlist
- Secondary CTA: "Se hur det fungerar" → scrolls to features section
- Hero visual: Product screenshot placeholder (accept imageSrc prop)
- Trust bar: Integration logos (Vitec, Momentum, Incit Xpand)

## Technical Requirements
- Use CSS custom properties exclusively (--pink-*, --slate-*, --space-*, --text-*)
- Mobile: Stacked layout, headline centered, full-width CTAs
- Desktop (lg:): Split layout (55% text, 45% image), left-aligned text
- Animate headline on load: fade-in + 20px slide-up, 600ms, ease-out
- Respect prefers-reduced-motion

## Accessibility
- Semantic HTML: <section> with aria-labelledby
- Touch targets: 44px minimum on all buttons
- Focus states: 2px outline with offset
- Alt text on hero image

## Deliverables
1. Implementation plan (planning mode)
2. HeroSection.tsx with TypeScript props interface
3. HeroSection.module.css using design tokens
4. index.ts barrel export
```

## Template: Features Grid

```markdown
## Context
Continuing Henric Property landing page build.
Design tokens in /styles/tokens.css.
Follow component structure from /components/Hero/.

## Task
Create features section displaying 4 product capabilities in a responsive grid.

## Content Requirements
- Section headline: "Allt du behöver för modern fastighetsförvaltning"
- 4 feature cards, each with: icon area, title, description
- Feature data passed as array prop for flexibility
- Suggested features:
  1. Dokumentation & protokoll
  2. E-post & kommunikation
  3. Avtalsanalys
  4. Projektplanering

## Visual Requirements
- Grid: 1-col mobile → 2-col tablet → 4-col desktop
- Cards: Subtle elevation (var(--shadow-sm)), rounded corners (var(--radius-md))
- Icon area: 48px, uses var(--pink-100) background, var(--pink-500) icon color
- Entrance animation: Staggered fade-in on scroll, 100ms between cards

## Accessibility
- Section uses semantic <section> with aria-labelledby
- Card content in logical reading order
- Icons are decorative (aria-hidden="true")

## Deliverables
- FeaturesSection.tsx with TypeScript interface for feature items
- FeaturesSection.module.css
- Responsive grid using CSS Grid
```

## Template: Testimonials Carousel

```markdown
## Context
Henric Property landing page. Design system in /styles/tokens.css.
Framer Motion available for animations.

## Task
Create testimonials section with carousel functionality for social proof.

## Content Requirements
- Section headline: "Vad våra kunder säger"
- Testimonials passed as array prop: { quote, author, role, company, avatarUrl }
- Show 1 testimonial at a time with navigation

## Functional Requirements
- Swipe/drag gesture support on mobile
- Left/right arrow navigation on desktop
- Dot indicators showing position
- Auto-advance every 5 seconds (pauses on hover/focus)
- Loop infinitely

## Visual Requirements
- Centered layout, max-width 800px
- Quote in large text: var(--text-xl), italic style
- Author info below with avatar (48px), name (--font-semibold), role/company
- Subtle slide transition between testimonials
- Quote marks using var(--pink-300)

## Accessibility
- Pause auto-advance on focus
- Keyboard navigation (left/right arrows)
- Aria-live region announces new testimonial
- Controls have accessible labels

## Edge Cases
- Empty state: Show placeholder message
- Single item: Hide navigation controls
- Missing avatar: Show initials with pink background

## Deliverables
- TestimonialsSection.tsx
- TestimonialsSection.module.css
- Unit tests for navigation behavior
```

## Template: Pricing Table

```markdown
## Context
Henric Property landing page. Design tokens in /styles/tokens.css.
Follow established component patterns.

## Task
Create pricing section with 3-tier comparison table.

## Content Requirements
- Section headline: "Enkel prissättning, inga dolda kostnader"
- Three tiers passed as props:
  1. Starter: For small teams, basic features
  2. Professional: Most popular, full feature set (highlighted)
  3. Enterprise: Custom pricing, dedicated support
- Each tier: name, price, billing period, feature list, CTA button

## Visual Requirements
- Grid: 1-col mobile → 3-col desktop
- Professional tier: featured styling with pink border, "Populärast" badge
- Cards: var(--shadow-sm) rest, var(--shadow-lg) on hover
- Feature checkmarks: var(--success-500)
- Price: var(--text-4xl), var(--font-bold)

## Functional Requirements
- Monthly/yearly toggle (optional, prop-controlled)
- CTA buttons link to signup with tier pre-selected
- Professional tier CTA uses primary pink button

## Accessibility
- Table semantics with proper headers
- Toggle uses proper ARIA attributes
- Price announced clearly to screen readers

## Deliverables
- PricingSection.tsx with TypeScript interfaces
- PricingSection.module.css
```

## Template: FAQ Accordion

```markdown
## Context
Henric Property landing page. Design system in /styles/tokens.css.

## Task
Create FAQ section with expandable accordion items.

## Content Requirements
- Section headline: "Vanliga frågor"
- FAQ items passed as array: { question, answer }
- 6-8 common questions about Henric

## Visual Requirements
- Single column, max-width var(--content-width)
- Question row: var(--font-semibold), chevron icon rotates on expand
- Answer: var(--text-secondary), appears with slide-down animation
- Divider between items: 1px var(--border-default)

## Functional Requirements
- Only one item open at a time (optional: prop to allow multiple)
- Keyboard accessible: Enter/Space to toggle
- Smooth height animation on expand/collapse

## Accessibility
- Use <details>/<summary> or proper ARIA accordion pattern
- Focus management on toggle
- Expanded state announced to screen readers

## Deliverables
- FAQSection.tsx
- FAQSection.module.css
```

## Template: CTA Section

```markdown
## Context
Henric Property landing page. Design tokens in /styles/tokens.css.

## Task
Create final call-to-action section for bottom of page.

## Content Requirements
- Headline: "Redo att förenkla din förvaltning?"
- Subheadline: "Anmäl dig till väntelistan och bli först att testa Henric."
- Primary CTA: "Få tidig tillgång" (same as hero)
- Secondary element: "Frågor? Kontakta oss på hej@henricproperty.com"

## Visual Requirements
- Background: var(--bg-accent) or subtle gradient with pink
- Centered content, max-width 600px
- Large headline: var(--text-3xl)
- Generous padding: var(--space-24) vertical

## Deliverables
- CTASection.tsx
- CTASection.module.css
```

## Template: Footer

```markdown
## Context
Henric Property landing page. Design tokens in /styles/tokens.css.

## Task
Create footer with navigation, legal links, and company info.

## Content Requirements
- Logo
- Navigation columns:
  - Produkt: Funktioner, Priser, Integrationer
  - Företag: Om oss, Blogg, Karriär
  - Support: Hjälpcenter, Kontakt, Status
  - Juridiskt: Integritetspolicy, Användarvillkor, GDPR
- Social links: LinkedIn, Twitter/X
- Copyright: "© 2025 Henric Property AB. Alla rättigheter förbehållna."

## Visual Requirements
- Background: var(--slate-900)
- Text: var(--slate-300) body, white for headings
- Grid: 5-col desktop (logo + 4 nav columns), stacked mobile
- Link hover: var(--pink-300)

## Deliverables
- Footer.tsx
- Footer.module.css
```

## Template: Waitlist Form

```markdown
## Context
Henric Property landing page. Design tokens in /styles/tokens.css.

## Task
Create email capture form component for waitlist signup.

## Content Requirements
- Single email input field
- GDPR consent checkbox with text:
  "Ja, jag vill få uppdateringar om Henric inklusive produktnyheter och lanseringsinformation."
- Submit button: "Få tidig tillgång"
- Success state: "Tack! Du är nu på väntelistan."
- Error states: invalid email, submission failed

## Visual Requirements
- Inline layout on desktop: input + button on same row
- Stacked on mobile
- Input: var(--radius-md), 48px height
- Button: Primary pink, matches input height
- Success: Green checkmark with message
- Error: Red border on input, error message below

## Functional Requirements
- Client-side email validation
- Loading state on submit
- Prevent double submission
- Clear form on success

## Accessibility
- Label associated with input (visually hidden if needed)
- Error messages linked with aria-describedby
- Focus management on success/error

## Deliverables
- WaitlistForm.tsx with form state management
- WaitlistForm.module.css
```

## Template: Full Page Assembly

```markdown
## Context
All landing page sections are now built in /components/.
Design tokens: /styles/tokens.css
Sections available: HeroSection, FeaturesSection, TestimonialsSection,
PricingSection, FAQSection, CTASection, Footer

## Task
Assemble complete landing page by composing existing sections with appropriate content data.

## Page Structure (top to bottom)
1. Header with navigation
2. HeroSection - with property management headline
3. Social proof bar - integration logos
4. FeaturesSection - 4 key capabilities
5. TestimonialsSection - 3 customer quotes
6. PricingSection - 3 tiers
7. FAQSection - 6 common questions
8. CTASection - Final conversion push
9. Footer

## Technical Requirements
- Create page at /app/(marketing)/page.tsx
- Extract all content strings to /lib/content/landing.ts for i18n readiness
- Add appropriate metadata for SEO (title, description, og:image)
- Implement smooth scroll between sections

## Performance Requirements
- Lazy load sections below the fold
- Preload hero image
- Target Largest Contentful Paint < 2.5s

## Deliverables
- page.tsx with section composition
- landing.ts content file
- metadata configuration
```

## Prompt chaining example

Use this sequence for iterative building:

```
Prompt 1: "Read /styles/tokens.css and /components/Button/. Analyze the patterns. Don't write code yet."

Prompt 2: "Think hard about implementing a FeaturesSection that follows these patterns. Create a detailed plan."

[Review plan, provide feedback]

Prompt 3: "Implement the FeaturesSection according to the plan. Create all files in /components/FeaturesSection/."

Prompt 4: "The FeaturesSection is complete. Commit with message: 'feat: Add features grid section with staggered animations'"
```

## Quality checklist prompt

Add this to any prompt for verification:

```markdown
## Verification Steps
After implementing:
1. Verify all colors use CSS custom properties (no hex values)
2. Check all interactive elements have 44px minimum touch targets
3. Confirm keyboard navigation works for all controls
4. Test with prefers-reduced-motion enabled
5. Validate responsive behavior at 320px, 768px, and 1024px
```
