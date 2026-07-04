# Design Guidelines — Glyd AI Codebase

> **Purpose:** This document is the single source of truth for the design system and component philosophy of the Glyd AI's Next.js codebase. Any model or developer creating new pages, sections, or components MUST follow these guidelines precisely to maintain visual and code consistency.

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Animations | Framer Motion (`framer-motion`) |
| Smooth Scroll | Lenis (`lenis`) |
| Fonts | Google Fonts via `next/font/google` |

**Critical:** Tailwind v4 uses `@import "tailwindcss"` in globals.css — **not** the classic `@tailwind base/components/utilities` directives. Custom design tokens are exposed to Tailwind via the `@theme inline { }` block.

---

## 2. Design Philosophy

The aesthetic is **premium high-ticket service** — dark, luxurious, authoritative. Think private equity meets digital media. The visual language communicates **exclusivity, trust, and serious money**. Key principles:

- **Darkness as luxury.** Pure black and near-black backgrounds signal premium. Nothing is white or bright.
- **Gold as the accent.** A warm amber-gold (`#dbab66`) is used for every interactive element, highlight, and emphasis — sparingly and consistently.
- **Serif headings, sans-serif body.** The contrast between Playfair Display (editorial prestige) and Inter (modern clarity) creates a premium editorial feel.
- **Generous whitespace.** Sections are tall. Content is never cramped. Air is part of the design.
- **Smooth everything.** Lenis scroll, Framer Motion reveals, CSS transitions — every interaction is smooth and deliberate.
- **Social proof and numbers.** The design is built around large stats, bold quotes, and client results.

---

## 3. Color System

All colors are defined as CSS custom properties in `src/app/globals.css` and surfaced into Tailwind v4 via `@theme inline`.

### CSS Variables

```css
:root {
  --background:        #000000;          /* Page background */
  --foreground:        #fafafa;          /* Default text */
  --surface:           #0f0f0f;          /* Card / footer background */
  --surface-elevated:  #141415;          /* Elevated surface (avatars, accents) */
  --surface-card:      #1a1a1a;          /* Deepest card surface */
  --border-subtle:     rgba(255,255,255,0.08);  /* Default border */
  --border-card:       rgba(255,255,255,0.06);  /* Card border */
  --text-primary:      #fafafa;          /* Headings, high-emphasis text */
  --text-secondary:    #b4b4bd;          /* Body text, descriptions */
  --text-muted:        #71717a;          /* Labels, captions, meta */
  --gold:              #dbab66;          /* Primary accent */
  --gold-light:        #e8c48a;          /* Gold gradient start */
  --gold-dark:         #c4944f;          /* Gold gradient end */
  --green:             #22c55e;          /* Positive stat indicator */
  --green-bg:          rgba(34,197,94,0.1);  /* Green badge background */
  --hero-gradient:     radial-gradient(70.27% 100% at 50% 0%, #141415, #000);
  --glow-blue:         rgba(59,130,246,0.15);  /* Hero blue glow accent */
}
```

### Tailwind Color Aliases

Use these Tailwind classes anywhere (v4 `@theme inline` maps):

| Tailwind Class | Resolves To |
|---|---|
| `bg-background` | `#000000` |
| `text-foreground` | `#fafafa` |
| `bg-surface` | `#0f0f0f` |
| `bg-surface-elevated` | `#141415` |
| `text-gold` | `#dbab66` |
| `text-gold-light` | `#e8c48a` |
| `text-gold-dark` | `#c4944f` |
| `text-green` | `#22c55e` |
| `text-text-primary` | `#fafafa` |
| `text-text-secondary` | `#b4b4bd` |
| `text-text-muted` | `#71717a` |
| `border-border-subtle` | `rgba(255,255,255,0.08)` |

### Usage Rules

- **Never** use inline hex values for the known palette — always reference `var(--token-name)` or the Tailwind alias.
- For inline `style={{ }}` props (necessary for dynamic values), use `var(--token-name)` syntax.
- **Gold is sacred.** Only use it for primary CTAs, important numbers, highlighted names, and icon containers. Never as a background for entire sections.
- **Blue glow** (`rgba(59,130,246,…)`) is reserved exclusively for the hero section's subtle edge inset-shadow — do not use it elsewhere.

---

## 4. Typography

### Font Families

| Variable | Font | Weights | Usage |
|---|---|---|---|
| `--font-playfair` / `font-serif` | Playfair Display | 400, 500, 600, 700 | All `<h1>`, `<h2>` section titles, and decorative text |
| `--font-inter` / `font-sans` | Inter | 300, 400, 500, 600, 700 | Body text, labels, buttons, nav links |

Both are loaded via `layout.tsx` using `next/font/google` with `display: swap` and injected as CSS variables.

### Type Scale

| Element | Class(es) | Notes |
|---|---|---|
| H1 (Hero) | `font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight` | Playfair Display, white `#fafafa` |
| H2 (Section) | `font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center leading-tight` | `font-light` is critical — not bold |
| H2 (Variant) | `font-serif text-3xl md:text-4xl lg:text-5xl font-light` | Used when not centered |
| H3 (Card Title) | `text-lg font-semibold` or `text-xl font-semibold` | Inter, `var(--text-primary)` |
| H3 (Person Name) | `font-serif text-2xl md:text-3xl font-normal` | With gold gradient clip |
| Body (Large) | `text-base md:text-lg leading-relaxed` | `var(--text-secondary)` |
| Body (Small) | `text-sm leading-relaxed` | `var(--text-secondary)` |
| Caption / Meta | `text-xs` | `var(--text-muted)` |
| Role / Label | `text-sm font-semibold uppercase tracking-wider` | `var(--text-muted)` |
| Stat Number | `text-2xl font-bold` | `var(--text-primary)` |
| Sneak Peek Stat | `text-3xl md:text-4xl font-bold font-serif` | Gold gradient clip |

### Gold Gradient Text (for names, key stats)

```tsx
style={{
  background: "linear-gradient(135deg, #e8c48a, #dbab66)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}}
```

### Text Color Rules

- **Headings** → `var(--text-primary)` (`#fafafa`) or direct `#fafafa`
- **Body paragraphs / descriptions** → `var(--text-secondary)` (`#b4b4bd`)
- **Meta, labels, captions** → `var(--text-muted)` (`#71717a`)
- **Highlighted bold parts in quotes** → `className="font-bold text-white"`

---

## 5. Layout System

### Max Widths

| Context | Max Width |
|---|---|
| Default sections | `max-w-[1100px] mx-auto` |
| Wide sections (stats, footer) | `max-w-[1200px] mx-auto` |
| Narrow sections (hero content) | `max-w-4xl mx-auto` |
| FAQ / text-heavy | `max-w-[800px] mx-auto` |

### Section Padding

All sections use the `.section-padding` utility class:

```css
.section-padding {
  padding: 100px 24px;
}
@media (max-width: 768px) {
  .section-padding { padding: 60px 16px; }
}
```

Apply as: `<section className="section-padding bg-black">`. Always use `bg-black` for the standard section background.

### Grid Patterns

| Pattern | Classes |
|---|---|
| 2-column equal | `grid grid-cols-1 md:grid-cols-2 gap-5` |
| 3-column equal | `grid grid-cols-1 md:grid-cols-3 gap-5` |
| 4-column (wrapping) | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6` |
| 3-column features | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5` |
| Sidebar layout | `grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6` |
| Alternating row bio | `flex flex-col md:flex-row` / `md:flex-row-reverse` on even index |
| Vertical list | `space-y-6` or `space-y-3` |

### Horizontal Padding

- Full-page containers: `px-6` on desktop, `px-4` on mobile (handled by `.section-padding`).
- Cards: `p-8` standard, `p-6` for smaller cards.
- Navbar: `px-6 py-3`.

---

## 6. Components

### 6.1 Buttons

#### Primary — `.btn-gold`

This is the **only CTA button style** in the codebase. Always use the `.btn-gold` CSS class:

```css
.btn-gold {
  background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
  color: #000;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: -0.01em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
/* Hover: lift + gold shadow */
.btn-gold:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 30px rgba(219, 171, 102, 0.3);
}
/* Hover: shimmer sweep */
.btn-gold::after { /* shimmer pseudo-element sweep */ }
```

**Usage:**  
```tsx
<Link href="/assessment-call" className="btn-gold mt-10 inline-block">
  Apply to Work With Us
</Link>
// or as a button:
<a href="/assessment-call" className="btn-gold">Apply to Work With Us</a>
```

**The standard CTA text is: "Apply to Work With Us"**

#### Navbar CTA — Pill variant

```tsx
<Link
  href="/assessment-call"
  className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
  style={{
    background: "linear-gradient(135deg, #e8c48a 0%, #dbab66 50%, #c4944f 100%)",
    color: "#000",
  }}
>
  Apply Now
</Link>
```

#### Toggle / Reveal Button (Gold Outline Pill)

Used for "Bonus Layer" toggles and similar interactive disclose patterns:

```tsx
<button
  className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
  style={{
    background: "rgba(219, 171, 102, 0.1)",
    color: "var(--gold)",
    border: "1px solid rgba(219, 171, 102, 0.2)",
  }}
>
  Label
  <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} .../>
</button>
```

---

### 6.2 Cards — `.card-dark`

The universal card style. Applied as a CSS class:

```css
.card-dark {
  background: var(--surface);       /* #0f0f0f */
  border: 1px solid var(--border-subtle);  /* rgba(255,255,255,0.08) */
  border-radius: 16px;
  transition: all 0.3s ease;
}
.card-dark:hover {
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

**Usage patterns:**

```tsx
// Feature card (icon + title + description)
<div className="card-dark p-8 h-full">
  <div className="text-3xl mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
    style={{ background: "rgba(219, 171, 102, 0.1)" }}>
    {icon}
  </div>
  <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{title}</h3>
  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{description}</p>
</div>

// Testimonial card
<div className="card-dark p-8 h-full flex flex-col">
  {/* avatar row */}
  {/* quote body */}
</div>

// Horizontal bio card (Advisory Board)
<div className={`card-dark overflow-hidden flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
  {/* portrait aside */}
  {/* bio content */}
</div>
```

**FAQ accordion item** — uses the card surface with dynamic gold border on open state:
```tsx
style={{
  background: "var(--surface)",
  border: `1px solid ${isOpen ? "rgba(219, 171, 102, 0.2)" : "var(--border-subtle)"}`,
}}
```

---

### 6.3 Icon Containers

Used in feature/system cards:

```tsx
<div
  className="text-3xl mb-4 w-14 h-14 rounded-xl flex items-center justify-center"
  style={{ background: "rgba(219, 171, 102, 0.1)" }}
>
  {emoji_or_svg_icon}
</div>
```

For SVG icons (ExponentialGrowth), the icon itself is colored gold:
```tsx
<div
  className="mb-5 w-14 h-14 rounded-xl flex items-center justify-center"
  style={{ background: "rgba(219, 171, 102, 0.1)", color: "var(--gold)" }}
>
  <svg width="28" height="28" ... stroke="currentColor" strokeWidth="1.5" .../>
</div>
```

SVG icons use: `fill="none"`, `stroke="currentColor"`, `strokeWidth="1.5"`, `strokeLinecap="round"`, `strokeLinejoin="round"` — a consistent Lucide-style line icon aesthetic.

---

### 6.4 Stat Cards — `.stat-card`

Used in the metrics dashboard:

```css
.stat-card {
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 20px;
}
```

```tsx
<div className="stat-card">
  <div className="flex items-center gap-2 mb-3">
    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }} />
    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{label}</span>
  </div>
  <div className="flex items-baseline gap-2">
    <span className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>{value}</span>
    <span className="badge-green">{change}</span>
  </div>
</div>
```

---

### 6.5 Badges — `.badge-green`

```css
.badge-green {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--green-bg);    /* rgba(34,197,94,0.1) */
  color: var(--green);            /* #22c55e */
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 6px;
}
```

Contains a small upward triangle SVG + percentage text. Used only for positive metric growth.

---

### 6.6 Avatar / Initials

When no photo is available, render a square/circle with initials:

```tsx
<div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--surface-elevated)] flex-shrink-0">
  <div className="w-full h-full flex items-center justify-center text-lg font-semibold text-[var(--text-muted)]">
    {name.split(" ").map((n) => n[0]).join("")}
  </div>
</div>
```

For Advisory Board large avatars (with color gradient backgrounds):
```tsx
<div
  className="w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center text-3xl md:text-4xl font-bold text-white"
  style={{ background: member.gradient }}
>
  {member.initials}
</div>
```

Each member has their own gradient. Use: gold for CEO, purple for CMO, green for COO, amber for CPO.

---

### 6.7 Navbar

Fixed, glassmorphic navigation with scroll-responsive opacity and border:

```tsx
<nav
  className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  style={{
    backgroundColor: scrolled ? "rgba(15, 15, 15, 0.9)" : "rgba(15, 15, 15, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
  }}
>
```

- **Logo:** SVG at `h-8 w-auto`, left-aligned  
- **Nav links:** `text-sm font-medium`, default `var(--text-secondary)`, active/hover → `var(--gold)`  
- **Max width container:** `max-w-[1400px] mx-auto`  
- **Mobile menu:** Animated `max-h` expand (0 → 96), `rgba(15, 15, 15, 0.95)` background  
- **Hamburger:** 3 `span` bars with CSS rotation transforms for open/close state

---

### 6.8 Footer

```tsx
<footer
  className="py-12 px-6"
  style={{
    backgroundColor: "var(--surface)",
    borderTop: "1px solid var(--border-subtle)",
  }}
>
```

Structure:
1. Top row: logo + social icon
2. Disclaimer paragraph (`text-xs`, `var(--text-muted)`)
3. Bottom row (border-top): copyright left, policy links right

---

## 7. ScrollReveal Component

Every visual element that enters the viewport MUST be wrapped in `<ScrollReveal>`. This is the universal animation wrapper built with Framer Motion.

```tsx
import { ScrollReveal } from "@/components/ScrollReveal";

<ScrollReveal delay={0.2} direction="up" duration={0.6}>
  <YourContent />
</ScrollReveal>
```

**Props:**

| Prop | Type | Default | Options |
|---|---|---|---|
| `delay` | `number` | `0` | Seconds (0.0 – 0.6 typical) |
| `direction` | `string` | `"up"` | `"up"` `"down"` `"left"` `"right"` `"none"` |
| `duration` | `number` | `0.6` | Seconds |
| `className` | `string` | `""` | Any Tailwind classes |

**Animation details:**
- Hidden: `opacity: 0` + directional offset (`y: 30` for "up")
- Visible: `opacity: 1`, `x: 0`, `y: 0`
- Easing: `[0.25, 0.4, 0.25, 1]` (custom cubic bezier)
- Trigger: `useInView` with `once: true` and `-80px` margin
- Controls: Framer `useAnimation`

**Staggering pattern** (always stagger children in a list):
```tsx
{items.map((item, i) => (
  <ScrollReveal key={i} delay={0.05 + i * 0.08}>
    <Card data={item} />
  </ScrollReveal>
))}
```

---

## 8. Background Treatments

### 8.1 Hero / CTA Background (Radial Gradient)

Used on hero sections AND the CTA section to create a dark center-top glow:

```tsx
style={{
  background: "radial-gradient(70.27% 100% at 50% 0%, #141415, #000000)",
}}
```

### 8.2 Blue Edge Glow (Hero Only)

A subtle blue inset shadow along the top and sides — creates a "screen edge" glow effect:

```tsx
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    boxShadow: "inset 0 0 120px 40px rgba(59, 130, 246, 0.08), inset 0 2px 0 rgba(59, 130, 246, 0.2)",
  }}
/>
```

### 8.3 CSS Smoke / Fog Effect

Used in hero sections and CTA sections. Two layered oversized divs with radial gradient overlapping ellipses that slowly drift via CSS keyframes:

```tsx
{/* Layer 1 */}
<div
  className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
  style={{
    background:
      "radial-gradient(ellipse at 30% 50%, rgba(120, 120, 130, 0.12) 0%, transparent 50%), " +
      "radial-gradient(ellipse at 70% 40%, rgba(100, 100, 110, 0.1) 0%, transparent 45%), " +
      "radial-gradient(ellipse at 50% 70%, rgba(140, 140, 150, 0.08) 0%, transparent 55%)",
    animation: "smokeDrift 25s ease-in-out infinite",
  }}
/>
{/* Layer 2 */}
<div
  className="absolute w-[180%] h-[180%] -top-1/4 -right-1/4"
  style={{
    background:
      "radial-gradient(ellipse at 60% 30%, rgba(130, 130, 140, 0.1) 0%, transparent 40%), " +
      "radial-gradient(ellipse at 40% 60%, rgba(110, 110, 120, 0.07) 0%, transparent 50%)",
    animation: "smokeDrift2 30s ease-in-out infinite",
  }}
/>
```

**Keyframes** (injected via `<style jsx>` in the component file):

```css
@keyframes smokeDrift {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33%       { transform: translate(3%, -2%) rotate(1deg); }
  66%       { transform: translate(-2%, 3%) rotate(-1deg); }
}
@keyframes smokeDrift2 {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50%       { transform: translate(-4%, 2%) rotate(-0.5deg); }
}
```

Wrap the smoke layers in: `<div className="absolute inset-0 pointer-events-none overflow-hidden">`

### 8.4 Bottom Fade

Always applied at the bottom of hero sections to blend into the next section:

```tsx
<div
  className="absolute bottom-0 left-0 right-0 h-32"
  style={{ background: "linear-gradient(to top, #000, transparent)" }}
/>
```

### 8.5 Gold Tint Sub-panels

Used in stat-like left panels within cards (SneakPeek, AdvisoryBoard portrait panels):

```tsx
style={{
  background: "linear-gradient(135deg, rgba(219, 171, 102, 0.08) 0%, rgba(219, 171, 102, 0.02) 100%)",
  borderRight: "1px solid var(--border-subtle)",
}}
```

---

## 9. CSS Utility Classes (globals.css)

| Class | Purpose |
|---|---|
| `.btn-gold` | Primary CTA button with gradient, shimmer, hover lift |
| `.card-dark` | Standard dark card (`--surface` bg, `--border-subtle` border, `border-radius: 16px`) |
| `.stat-card` | Metrics dashboard card (`border-radius: 12px`, `padding: 20px`) |
| `.badge-green` | Green percentage badge with upward arrow icon |
| `.glow-border` | Wraps an element with a blue radial gradient border overlay (via `::before` pseudo) |
| `.section-padding` | Standard vertical padding: `100px 24px` (desktop), `60px 16px` (mobile) |

---

## 10. Animation Conventions

### Keyframes in globals.css

| Name | Effect |
|---|---|
| `fadeInUp` | `opacity: 0, translateY(30px)` → `opacity: 1, translateY(0)` |
| `fadeIn` | `opacity: 0` → `opacity: 1` |
| `slideInLeft` | `opacity: 0, translateX(-40px)` → visible |
| `shimmer` | `background-position: -200% center` → `200% center` (used for text shimmer) |

### CSS Transition Conventions

- Standard duration: `0.3s ease` or `transition-all duration-300`
- Slow smooth: `0.5s ease-in-out` (accordion expand)
- Color-only: `transition-colors duration-200`
- Framer Motion: duration `0.6s`, easing `[0.25, 0.4, 0.25, 1]`

### Accordion / Collapsible Pattern

Use `max-h` + `opacity` transitions for smooth CSS-only collapsibles (no layout thrashing):

```tsx
<div
  className={`overflow-hidden transition-all duration-500 ease-in-out ${
    open ? "max-h-[800px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
  }`}
>
  {content}
</div>
```

### FAQ Accordion "+" Icon

```tsx
<span
  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300"
  style={{
    color: isOpen ? "var(--gold)" : "var(--text-muted)",
    background: isOpen ? "rgba(219, 171, 102, 0.1)" : "transparent",
    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
  }}
>
  +
</span>
```

---

## 11. Smooth Scroll (Lenis)

Lenis is initialized in `LenisProvider` and wraps all children in the root layout:

```ts
const lenis = new Lenis({
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 2,
});
```

CSS companions:
```css
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-stopped { overflow: hidden; }
```

---

## 12. Page Architecture

### Standard Page Structure

```tsx
// page.tsx (Server Component)
export default function PageName() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />        {/* radial-gradient bg, smoke, blue glow */}
        <Section1 />           {/* section-padding bg-black */}
        <Section2 />
        {/* ... */}
        <CTASection />         {/* radial-gradient bg, smoke, centered CTA */}
      </main>
      <Footer />
    </>
  );
}
```

### Section Architecture

Every section component follows this template:

```tsx
"use client"; // if using useState/useEffect

import { ScrollReveal } from "@/components/ScrollReveal"; // always

export function MySection() {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Section heading — always centered, always font-serif font-light */}
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-light text-center mb-4"
            style={{ color: "var(--text-primary)" }}>
            Section Title Here
          </h2>
        </ScrollReveal>

        {/* Optional subtitle */}
        <ScrollReveal delay={0.1}>
          <p className="text-center text-base md:text-lg max-w-2xl mx-auto mb-14"
            style={{ color: "var(--text-secondary)" }}>
            Subtitle text here.
          </p>
        </ScrollReveal>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={0.05 + i * 0.08}>
              <div className="card-dark p-8 h-full">
                {/* Card content */}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Optional section-level CTA */}
        <ScrollReveal delay={0.4}>
          <div className="flex justify-center mt-14">
            <Link href="/assessment-call" className="btn-gold inline-block">
              Apply to Work With Us
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
```

---

## 13. Client vs Server Components

| Component | Directive | Reason |
|---|---|---|
| `Navbar` | `"use client"` | `useState` (scroll, mobile menu), `usePathname` |
| `HeroSection` | `"use client"` | Inline `<style jsx>` for keyframes |
| `ScrollReveal` | `"use client"` | `useRef`, `useInView`, `useAnimation` |
| `CTASection` | `"use client"` | Inline `<style jsx>` |
| `QuantumHero` | `"use client"` | Inline `<style jsx>` |
| `LenisProvider` | `"use client"` | `useEffect`, Lenis initialization |
| `SystemsSection` | `"use client"` | `useState` for bonus toggle |
| `FAQSection` | `"use client"` | `useState` for accordion |
| `VideoTestimonials` | `"use client"` | Interactive hover states |
| `Footer` | *(server)* | No interactivity |
| `page.tsx` files | *(server)* | Orchestration only, no hooks |

---

## 14. Data Pattern

Data is always co-located with its component as a `const` array defined at module scope (above the component function), never fetched from an API in the current implementation:

```tsx
const items = [
  { title: "...", description: "...", icon: "..." },
  // ...
];

export function MySection() {
  return (
    // render items
  );
}
```

---

## 15. Image Conventions

- Use `next/image` (`Image`) for all images
- Logo: `src="/images/logo.svg"`, `h-8 w-auto`
- SVG icons (program icons): CSS filter for gold tint:
  ```tsx
  style={{
    filter: "brightness(0) saturate(100%) invert(75%) sepia(30%) saturate(700%) hue-rotate(5deg) brightness(95%)",
  }}
  ```
- Photos with `fill` layout need `sizes` prop
- `priority` prop on above-the-fold images (logo, hero image)

---

## 16. Scrollbar

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
```

Thin, minimalist, nearly invisible scrollbar. Do not override.

---

## 17. Testimonial Pattern

The testimonial card pattern is identical across `TestimonialsSection` and `QuantumTestimonials`:

```tsx
<div className="card-dark p-8 h-full flex flex-col">
  
  {/* Header row */}
  <div className="flex items-center gap-4 mb-5">
    {/* Avatar */}
    <div className="w-12 h-12 rounded-full overflow-hidden bg-[var(--surface-elevated)] flex-shrink-0">
      {photo ? <Image src={photo} ... /> : (
        <div className="w-full h-full flex items-center justify-center text-lg font-semibold text-[var(--text-muted)]">
          {initials}
        </div>
      )}
    </div>
    {/* Info */}
    <div>
      <h3 className="font-semibold text-base" style={{
        background: "linear-gradient(135deg, #e8c48a, #dbab66)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>{name}</h3>
      <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{title}</p>
    </div>
  </div>

  {/* Quote with bold part */}
  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
    {renderQuoteWithBold(quote, boldPart)}
  </p>
  
</div>
```

Quote bold helper:
```tsx
function renderQuoteWithBold(quote: string, boldPart: string) {
  const parts = quote.split(boldPart);
  if (parts.length === 1) return <span>{quote}</span>;
  return (
    <span>
      {parts[0]}
      <strong className="font-bold text-white">{boldPart}</strong>
      {parts[1]}
    </span>
  );
}
```

---

## 18. Video/Media Placeholder Pattern

When real video thumbnails are unavailable, use a gold-tinted dark panel with initials + hover play button:

```tsx
<div className="relative aspect-video flex items-center justify-center"
  style={{ background: "linear-gradient(135deg, rgba(219, 171, 102, 0.06) 0%, rgba(20, 20, 21, 1) 100%)" }}>
  
  {/* Initials circle */}
  <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold"
    style={{
      background: "rgba(219, 171, 102, 0.15)",
      color: "var(--gold)",
      border: "2px solid rgba(219, 171, 102, 0.3)",
    }}>
    {initials}
  </div>

  {/* Play button (hover reveal) */}
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="w-16 h-16 rounded-full flex items-center justify-center"
      style={{ background: "rgba(219, 171, 102, 0.9)" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
        <polygon points="6,3 20,12 6,21" />
      </svg>
    </div>
  </div>
</div>
```

Requires `group` class on the parent card element.

---

## 19. Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Component files | PascalCase `.tsx` | `HeroSection.tsx` |
| Component exports | Named exports | `export function HeroSection()` |
| Data arrays | camelCase plural noun | `const testimonials = [...]` |
| Quantum sub-components | PascalCase in `/quantum/` subfolder | `quantum/FAQSection.tsx` |
| CSS classes | kebab-case | `.btn-gold`, `.card-dark` |
| CSS variables | kebab-case with `--` prefix | `--text-secondary` |

---

## 20. Quick Reference Checklist

When creating a new component or page, ensure:

- [ ] Section uses `className="section-padding bg-black"` 
- [ ] Content container uses `max-w-[1100px] mx-auto` (or appropriate width)
- [ ] All headings use `font-serif font-light` (H2s) or `font-sans font-semibold` (H3s)
- [ ] Text colors reference `var(--text-primary/secondary/muted)` tokens
- [ ] Every visible element is wrapped in `<ScrollReveal>` with a staggered delay
- [ ] Cards use `className="card-dark p-8"` — not custom backgrounds
- [ ] Icon containers: `w-14 h-14 rounded-xl`, `background: rgba(219, 171, 102, 0.1)`
- [ ] CTAs use `className="btn-gold"` only — no custom button styles
- [ ] All CTAs link to `/assessment-call` with text "Apply to Work With Us"
- [ ] Hero sections have: radial gradient BG + blue edge glow + smoke layers + bottom fade
- [ ] Client components have `"use client"` as the very first line
- [ ] Named exports only (no default exports for components)
- [ ] Data arrays are co-located at module scope
- [ ] Images use `next/image`; svgs use CSS filter for gold tint if needed
- [ ] Animations: Framer Motion via ScrollReveal, CSS transitions for UI state

---

*Last updated: April 2026 — based on full codebase analysis of both the Home (`/`) and Quantum (`/quantum`) pages.*
