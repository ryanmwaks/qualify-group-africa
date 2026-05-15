# QUALIFY Enterprise Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform QUALIFY Group Africa website from a functional corporate site into a premium enterprise-grade maritime inspection and digital compliance ecosystem across 4 sequential phases.

**Architecture:** Pure React SPA (TanStack Router, no SSR). All pages in `src/routes/`. Shared shell in `src/components/site/`. Global design tokens in `src/styles.css`. No external animation libraries — CSS keyframes + Tailwind utilities + inline React state for all motion.

**Tech Stack:** React 19, TanStack Router v1, Vite 7, Tailwind v4, Lucide React, TypeScript 5.

---

## FILE MAP

| File | Action | Phase |
|---|---|---|
| `src/styles.css` | Modify — add glassmorphism utilities, keyframes, premium shadow system | 1 |
| `src/components/site/Footer.tsx` | Rewrite — 4-column premium layout, maritime SVG, contact column | 1 |
| `src/components/site/WhatsAppButton.tsx` | Rewrite — intelligent topic-routing support widget | 1 |
| `src/components/site/Header.tsx` | Modify — active state polish, mobile menu stickyCTA | 1 |
| `src/routes/index.tsx` | Rewrite — split hero, animated stats, how-we-work, case studies | 2 |
| `src/routes/qms-plug.tsx` | Rewrite — SaaS-grade dashboard mockup, feature grid, implementation steps | 3 |
| `src/routes/certification-portal.tsx` | Rewrite — 7-step journey timeline, readiness UI, CTA upgrade | 3 |
| `src/routes/about.tsx` | Rewrite — ISO standard cards, why trust section, technical approach | 4 |
| `src/routes/resources.tsx` | Rewrite — knowledge hub with search, filters, download items | 4 |

---

## PHASE 1 — DESIGN SYSTEM + GLOBAL SHELL

### Task 1: Global design tokens + animation utilities (styles.css)

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Add glassmorphism utilities, keyframes, and premium utility classes**

Replace full contents of `src/styles.css` with the upgraded version (keep all existing tokens, add below `:root` block):

```css
/* after existing :root block, before .dark block */

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px oklch(0.55 0.09 205 / 0.3); }
  50% { box-shadow: 0 0 40px oklch(0.55 0.09 205 / 0.6); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes count-up {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes wave {
  0%   { d: path("M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"); }
  50%  { d: path("M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z"); }
  100% { d: path("M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"); }
}

@utility glass-card {
  background: oklch(1 0 0 / 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid oklch(1 0 0 / 0.12);
}
@utility glass-card-dark {
  background: oklch(0.18 0.07 250 / 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid oklch(1 0 0 / 0.08);
}
@utility teal-glow {
  box-shadow: 0 0 24px oklch(0.55 0.09 205 / 0.35);
}
@utility orange-glow {
  box-shadow: 0 0 24px oklch(0.66 0.18 38 / 0.4);
}
@utility animate-float {
  animation: float 4s ease-in-out infinite;
}
@utility animate-slide-up {
  animation: slide-up 0.5s ease-out both;
}
@utility text-gradient-navy {
  background: linear-gradient(135deg, oklch(0.98 0 0) 0%, oklch(0.7 0.05 205) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
```

- [ ] **Step 2: Verify dev server compiles without error**

Check `http://localhost:8080` still loads. No red console errors.

- [ ] **Step 3: Commit**
```bash
git add src/styles.css
git commit -m "feat: add glassmorphism utilities, keyframes, premium design tokens"
```

---

### Task 2: Footer complete redesign

**Files:**
- Rewrite: `src/components/site/Footer.tsx`

- [ ] **Step 1: Rewrite Footer.tsx**

```tsx
import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, ArrowUpRight, MessageCircle, ExternalLink } from "lucide-react";
import qualifyLogo from "@/assets/qualify-logo.png";

const TRAINING_URL = "https://training.qualify.co.ke";
const CERT_URL = "https://quality.qualify.co.ke";
const WA_URL = "https://api.whatsapp.com/send?phone=254723237939";

const company = [
  { label: "About Us", to: "/about" },
  { label: "Our History", to: "/history" },
  { label: "Quality Policy", to: "/quality-policy" },
  { label: "Partners", to: "/partners" },
  { label: "Complaints & Appeals", to: "/complaints-appeals" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { label: "Marine Inspection", to: "/services" },
  { label: "Cargo Inspection", to: "/services" },
  { label: "Vessel Surveys", to: "/services" },
  { label: "Damage Assessment", to: "/services" },
  { label: "Quality Assurance", to: "/services" },
  { label: "Certification Support", to: "/certification-portal" },
  { label: "Training Services", href: TRAINING_URL },
  { label: "QMS Platform", to: "/qms-plug" },
];

const platforms = [
  { label: "Training Portal", href: TRAINING_URL },
  { label: "Certification Portal", href: CERT_URL },
  { label: "QMS Platform", to: "/qms-plug" },
  { label: "Resources", to: "/resources" },
  { label: "Standards We Align With", to: "/standards" },
  { label: "Downloads", to: "/resources" },
  { label: "FAQs", to: "/contact" },
];

type NavItem = { label: string; to?: string; href?: string };

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white mt-20" style={{ background: "linear-gradient(180deg, #062B4F 0%, #041830 100%)" }}>
      {/* Maritime wave SVG */}
      <svg aria-hidden className="absolute inset-x-0 top-0 w-full h-40 opacity-15" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path d="M0,80 C180,20 360,140 540,80 C720,20 900,140 1080,80 C1260,20 1380,100 1440,80 L1440,0 L0,0 Z" fill="#007A8A" opacity="0.4" />
        <path d="M0,100 C200,40 400,160 600,100 C800,40 1000,160 1200,100 C1320,60 1400,120 1440,100 L1440,0 L0,0 Z" fill="#0A6FAE" opacity="0.3" />
      </svg>
      {/* Crane silhouette */}
      <svg aria-hidden className="absolute right-8 bottom-16 h-72 w-auto opacity-[0.04]" viewBox="0 0 300 400" fill="none" stroke="white" strokeWidth="1.5">
        <line x1="40" y1="380" x2="40" y2="60" /><line x1="40" y1="60" x2="260" y2="60" />
        <line x1="260" y1="60" x2="260" y2="200" /><line x1="40" y1="60" x2="260" y2="160" />
        <line x1="100" y1="380" x2="100" y2="120" /><line x1="160" y1="380" x2="160" y2="120" />
        <line x1="220" y1="380" x2="220" y2="120" /><circle cx="260" cy="60" r="5" fill="white" />
      </svg>
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* Teal glow orbs */}
      <div className="absolute -top-20 left-1/4 size-80 rounded-full bg-[var(--color-teal)]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-60 rounded-full bg-[var(--color-ocean)]/10 blur-3xl pointer-events-none" />

      {/* Main grid */}
      <div className="relative container-page pt-24 pb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand */}
        <div className="space-y-5">
          <img src={qualifyLogo} alt="Qualify Group Africa Ltd" className="h-20 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
          <p className="text-sm text-white/70 leading-relaxed">
            Independent marine and cargo inspection, quality assurance, certification readiness, training and digital QMS — based in Mombasa, Kenya.
          </p>
          <div className="flex gap-2.5 pt-1">
            {[
              { href: "https://linkedin.com/company/qualify-group-africa", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://facebook.com/qualifygroupafrica", Icon: Facebook, label: "Facebook" },
              { href: "https://twitter.com/qualifyafrica", Icon: Twitter, label: "Twitter" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="grid place-items-center size-9 rounded-full border border-white/15 bg-white/5 hover:bg-[var(--color-orange)] hover:border-transparent hover:shadow-[0_0_20px_rgba(228,87,46,0.5)] transition-all">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Company */}
        <FooterCol title="Company" items={company} />

        {/* Col 3: Services */}
        <FooterCol title="Services" items={services} />

        {/* Col 4: Contact */}
        <div>
          <h4 className="font-display font-semibold mb-5 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">Contact</h4>
          <div className="space-y-4">
            <ContactRow icon={MapPin} label="Office">Mombasa, Kenya</ContactRow>
            <ContactRow icon={Phone} label="Phone" href="tel:+254723237939">+254 723 237 939</ContactRow>
            <ContactRow icon={Mail} label="Email" href="mailto:info@qualifygroup.africa">info@qualifygroup.africa</ContactRow>
            <ContactRow icon={Clock} label="Hours">Mon–Fri · 8:00 AM – 5:00 PM EAT</ContactRow>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/30 hover:bg-[#25D366]/30 px-3 py-2.5 text-sm font-semibold text-white transition-colors">
              <MessageCircle className="size-4 text-[#25D366]" /> WhatsApp Us
            </a>
            <a href={TRAINING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--color-teal)] px-3 py-2.5 text-sm font-medium transition-colors">
              <ExternalLink className="size-3.5" /> Training Portal
            </a>
            <a href={CERT_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[var(--color-teal)] px-3 py-2.5 text-sm font-medium transition-colors">
              <ExternalLink className="size-3.5" /> Certification Portal
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative border-t border-white/8">
        <div className="container-page py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/45">
          <div>© 2026 QUALIFY Group Africa Ltd. All Rights Reserved.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[["Privacy Policy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"], ["Accessibility", "/accessibility"]].map(([l, t]) => (
              <Link key={l} to={t} className="hover:text-[var(--color-orange)] transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h4 className="font-display font-semibold mb-5 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            {it.href ? (
              <a href={it.href} target="_blank" rel="noopener noreferrer"
                className="text-white/65 hover:text-[var(--color-orange)] transition-colors inline-flex items-center gap-1">
                {it.label} <ArrowUpRight className="size-3" />
              </a>
            ) : (
              <Link to={it.to!} className="text-white/65 hover:text-[var(--color-orange)] transition-colors">{it.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ icon: Icon, label, children, href }: { icon: typeof MapPin; label: string; children: React.ReactNode; href?: string }) {
  const inner = (
    <div className="flex gap-3 items-start">
      <div className="grid place-items-center size-8 rounded-lg bg-white/8 border border-white/10 text-[var(--color-teal)] shrink-0 mt-0.5">
        <Icon className="size-3.5" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">{label}</div>
        <div className="text-sm text-white/80 mt-0.5 leading-snug">{children}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="hover:text-[var(--color-orange)] transition-colors block">{inner}</a> : <div>{inner}</div>;
}
```

- [ ] **Step 2: Verify footer renders correctly at localhost:8080**

Scroll to bottom — 4 columns visible on desktop, stacks on mobile.

- [ ] **Step 3: Commit**
```bash
git add src/components/site/Footer.tsx
git commit -m "feat: redesign footer into premium 4-column enterprise layout with maritime artwork"
```

---

### Task 3: Intelligent WhatsApp support widget

**Files:**
- Rewrite: `src/components/site/WhatsAppButton.tsx`

- [ ] **Step 1: Rewrite WhatsAppButton.tsx with topic-routing panel**

```tsx
import { useState } from "react";
import { MessageCircle, X, ChevronRight, Ship, ClipboardCheck, GraduationCap, Cpu, FileText } from "lucide-react";

const BASE = "https://api.whatsapp.com/send?phone=254723237939&text=";

const topics = [
  { icon: Ship,           label: "Marine or Cargo Inspection",   msg: "Hello, I need support with a marine or cargo inspection assignment." },
  { icon: ClipboardCheck, label: "Certification Support",         msg: "Hello, I need help with ISO certification readiness and support." },
  { icon: GraduationCap,  label: "Training & Competence",         msg: "Hello, I am interested in your training programmes." },
  { icon: Cpu,            label: "QMS Platform",                  msg: "Hello, I would like to learn more about the QUALIFY QMS Platform." },
  { icon: FileText,       label: "Technical Reporting",           msg: "Hello, I need assistance with a technical report or documentation." },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-72 rounded-2xl bg-white shadow-[0_20px_60px_-10px_rgba(6,43,79,0.35)] border border-border overflow-hidden animate-slide-up">
          <div className="px-4 py-3 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #062B4F, #007A8A)" }}>
            <div>
              <div className="text-white font-semibold text-sm">QUALIFY Support</div>
              <div className="text-white/70 text-xs">How can we help you?</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="size-4" />
            </button>
          </div>
          <div className="p-2">
            {topics.map((t) => (
              <a
                key={t.label}
                href={`${BASE}${encodeURIComponent(t.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="size-8 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)] shrink-0 group-hover:bg-[var(--color-teal)]/20 transition-colors">
                  <t.icon className="size-4" />
                </div>
                <span className="text-sm text-foreground font-medium flex-1">{t.label}</span>
                <ChevronRight className="size-3.5 text-muted-foreground group-hover:text-[var(--color-teal)] transition-colors" />
              </a>
            ))}
          </div>
          <div className="px-4 pb-3 pt-1 border-t border-border">
            <a href={`${BASE}${encodeURIComponent("Hello, I have a general enquiry.")}`} target="_blank" rel="noopener noreferrer"
              className="block text-center text-xs text-muted-foreground hover:text-[var(--color-teal)] transition-colors py-1">
              General enquiry →
            </a>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open support chat"
        className="fixed bottom-5 right-5 z-50 size-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all grid place-items-center"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-7" />}
      </button>
    </>
  );
}
```

- [ ] **Step 2: Verify widget opens/closes and routes correctly**

Click green FAB — panel appears. Click a topic — opens WhatsApp with pre-filled message. Click outside — closes.

- [ ] **Step 3: Commit**
```bash
git add src/components/site/WhatsAppButton.tsx
git commit -m "feat: replace static WhatsApp button with intelligent topic-routing support widget"
```

---

### Task 4: Header — active state polish + mobile CTA

**Files:**
- Modify: `src/components/site/Header.tsx`

- [ ] **Step 1: Add sticky mobile CTA bar to Header**

After the closing `</header>` tag isn't the right place — add a separate fixed mobile CTA strip inside the component return, after `</header>`:

Locate this in Header.tsx:
```tsx
    </header>
  );
}
```

Replace with:
```tsx
      </header>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-navy/95 backdrop-blur-md px-4 py-3 flex gap-2">
        <a href="tel:+254723237939" className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/15 text-white text-sm font-semibold py-2.5">
          <Phone className="size-4" /> Call Us
        </a>
        <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[var(--color-orange)] text-white text-sm font-semibold py-2.5">
          Request Survey
        </Link>
      </div>
    </>
  );
}
```

Also wrap the return's outermost element in a fragment — change `return (` and `<header` to:
```tsx
  return (
    <>
      <header ...>
```

- [ ] **Step 2: Verify mobile CTA bar appears at bottom on narrow viewport**

Resize browser to < 1024px — sticky bar visible at bottom.

- [ ] **Step 3: Commit**
```bash
git add src/components/site/Header.tsx
git commit -m "feat: add sticky mobile CTA bar to header"
```

---

## PHASE 2 — HOMEPAGE + HOW WE WORK

### Task 5: Homepage hero — split layout with animated stats + dashboard mockup

**Files:**
- Modify: `src/routes/index.tsx`

- [ ] **Step 1: Replace HeroCarousel with SplitHero component**

Remove the `HeroCarousel` function and `heroSlides` array. Replace the entire hero section in `Home()` with `<SplitHero />`. Add this new component above `Home`:

```tsx
const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Assessments Completed" },
  { value: "100+", label: "Clients Supported" },
  { value: "24/7", label: "Technical Response" },
];

const trustBadges = [
  "Mombasa-Based", "Standards-Aligned", "Maritime Expertise",
  "Fast Technical Reporting", "Confidential Client Handling",
];

function SplitHero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center" style={{ background: "linear-gradient(135deg, oklch(0.14 0.07 250) 0%, oklch(0.20 0.08 249) 55%, oklch(0.26 0.09 240) 100%)" }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{ background: "radial-gradient(ellipse at 80% 20%, oklch(0.55 0.09 205 / 0.5) 0%, transparent 60%)" }} />

      <div className="relative container-page py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT — content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur text-xs font-semibold tracking-wider uppercase text-[var(--color-teal)] border border-white/10">
            <span className="size-2 rounded-full bg-[var(--color-orange)] animate-pulse" />
            Independent · Marine · Cargo · Quality
          </div>

          <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] text-white">
            Independent Marine, Cargo &amp;{" "}
            <span className="text-gradient-navy">Quality Inspection</span>{" "}
            Experts in Kenya
          </h1>

          <p className="text-lg text-white/75 leading-relaxed max-w-xl">
            Reliable inspection, surveying, technical reporting, certification readiness, training and digital quality management solutions for maritime, logistics, compliance and quality-driven industries.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2">
            {trustBadges.map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80">
                <span className="size-1.5 rounded-full bg-[var(--color-teal)]" />{b}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold shadow-lg hover:opacity-90 hover:shadow-[var(--color-orange)]/30 hover:shadow-xl transition-all">
              Request Inspection Support <ArrowRight className="size-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-white/8 backdrop-blur border border-white/15 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-all">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/55 mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — dashboard mockup */}
        <div className="relative hidden lg:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Main dashboard card */}
      <div className="rounded-2xl glass-card-dark p-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)] border border-white/10">
        {/* Top bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-red-400/70" /><span className="size-2.5 rounded-full bg-yellow-400/70" /><span className="size-2.5 rounded-full bg-green-400/70" /></div>
          <div className="flex-1 h-5 rounded-md bg-white/8 text-[10px] text-white/40 flex items-center px-2">QUALIFY QMS Platform</div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[["94%", "Compliance Score"], ["12", "Active Audits"], ["3", "Open CAPAs"]].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-white/5 border border-white/8 p-3 text-center">
              <div className="font-display text-lg font-bold text-white">{v}</div>
              <div className="text-[10px] text-white/45 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        {/* Compliance bar */}
        <div className="mb-4">
          <div className="flex justify-between text-[10px] text-white/50 mb-1.5"><span>ISO 9001 Readiness</span><span>87%</span></div>
          <div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-ocean)]" style={{ width: "87%" }} /></div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-[10px] text-white/50 mb-1.5"><span>Document Control</span><span>100%</span></div>
          <div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-[var(--color-teal)]" style={{ width: "100%" }} /></div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-[10px] text-white/50 mb-1.5"><span>Audit Completion</span><span>72%</span></div>
          <div className="h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full bg-[var(--color-orange)]" style={{ width: "72%" }} /></div>
        </div>
        {/* Recent activity */}
        <div className="space-y-2">
          {[
            { dot: "bg-[var(--color-teal)]", text: "Cargo inspection report issued", time: "2h ago" },
            { dot: "bg-[var(--color-orange)]", text: "CAPA #14 assigned to team", time: "5h ago" },
            { dot: "bg-blue-400", text: "ISO 9001 audit scheduled", time: "1d ago" },
          ].map((r) => (
            <div key={r.text} className="flex items-center gap-2.5 text-[10px]">
              <span className={`size-1.5 rounded-full shrink-0 ${r.dot}`} />
              <span className="text-white/60 flex-1">{r.text}</span>
              <span className="text-white/30">{r.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating ISO card */}
      <div className="absolute -left-12 top-1/4 glass-card-dark rounded-xl p-3 border border-white/10 shadow-xl animate-float">
        <div className="text-[10px] text-white/50 mb-1">Standard</div>
        <div className="font-display text-sm font-bold text-white">ISO 9001:2015</div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="size-4 rounded-full bg-[var(--color-teal)]/20 grid place-items-center"><span className="size-1.5 rounded-full bg-[var(--color-teal)]" /></span>
          <span className="text-[10px] text-[var(--color-teal)] font-semibold">Audit Ready</span>
        </div>
      </div>

      {/* Floating cargo card */}
      <div className="absolute -right-8 bottom-1/4 glass-card-dark rounded-xl p-3 border border-white/10 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="text-[10px] text-white/50 mb-1">Latest Report</div>
        <div className="font-display text-sm font-bold text-white">Cargo Survey</div>
        <div className="text-[10px] text-white/55 mt-0.5">Port of Mombasa · 14 May</div>
        <div className="mt-1.5 text-[10px] text-[var(--color-orange)] font-semibold">✓ Report Issued</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Update Home() to use SplitHero**

In the `Home()` function, replace `<HeroCarousel />` with `<SplitHero />`.

Also remove unused imports: `portLamu`, `portTanga`, `portDjibouti`, `heroImg`, `inspectorImg` (from hero), `ChevronLeft`, `ChevronRight`.

Keep: `qmsImg`, `inspectorImg` (used in other sections), `useState`, `useEffect` (remove useEffect if only used by carousel).

- [ ] **Step 3: Verify hero renders — split layout visible on desktop**

Open `http://localhost:8080`. Left column shows headline, badges, stats. Right column shows dashboard mockup with floating cards.

- [ ] **Step 4: Commit**
```bash
git add src/routes/index.tsx
git commit -m "feat: replace carousel hero with enterprise split hero — animated stats + dashboard mockup"
```

---

### Task 6: How We Work + Case Studies sections on homepage

**Files:**
- Modify: `src/routes/index.tsx`

- [ ] **Step 1: Add HowWeWork component above the existing stats section in Home()**

Add after the trust badges section and before the industries section:

```tsx
const process = [
  { n: "01", title: "Inquiry & Consultation", desc: "We discuss your assignment, objectives, location and scope — providing clear guidance on the most appropriate service and approach." },
  { n: "02", title: "Assessment & Planning", desc: "We define the inspection or advisory scope, assign the right technical resource, and agree timelines and deliverables upfront." },
  { n: "03", title: "Inspection & Delivery", desc: "Our surveyor or advisor attends on-site, conducts a systematic assessment, gathers evidence and documents all findings." },
  { n: "04", title: "Technical Reporting", desc: "Structured reports are issued within the agreed turnaround — factual, defensible, and formatted for the intended audience." },
  { n: "05", title: "Corrective Actions", desc: "Where findings require resolution, we support root-cause analysis, corrective action planning and implementation tracking." },
  { n: "06", title: "Follow-Up & Improvement", desc: "We provide post-assignment advisory to ensure findings lead to lasting improvement — not just a report on a shelf." },
];

function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-20" style={{ background: "var(--gradient-navy)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div className="container-page relative">
        <div className="text-center mb-14">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3 px-3 py-1 rounded-full bg-white/8 border border-white/10">Our Process</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">How We Work</h2>
          <p className="mt-4 text-white/65 max-w-xl mx-auto">A structured, consistent approach — from the first call to the final report and beyond.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {process.map((p, i) => (
            <div key={p.n} className="group relative rounded-2xl glass-card-dark p-6 border border-white/8 hover:border-[var(--color-teal)]/50 hover:teal-glow transition-all">
              <div className="font-display text-4xl font-black text-white/8 mb-3 select-none">{p.n}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[var(--color-teal)] transition-colors">{p.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              {i < process.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-2.5 size-5 rounded-full bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/40 z-10" />}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
            Start Your Inquiry <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add CaseStudies component**

```tsx
const caseStudies = [
  { industry: "Bulk Trading", type: "Cargo Inspection", challenge: "Pre-discharge dispute over cargo condition and quantity.", solution: "Independent inspection with photographic evidence and quantity verification.", outcome: "Documented findings supported successful claim resolution and recovery." },
  { industry: "Shipping", type: "Vessel Survey", challenge: "Pre-charter condition assessment for a 10-year-old bulk carrier.", solution: "Systematic condition survey covering hull, machinery, safety and documentation.", outcome: "Detailed report enabled confident charter contract decisions." },
  { industry: "Insurance", type: "Damage Assessment", challenge: "Independent quantification of cargo loss following contamination.", solution: "Evidence-based damage report with cause analysis and quantum.", outcome: "Accelerated claims processing and reduced dispute duration." },
  { industry: "Logistics SME", type: "QMS Implementation", challenge: "Manual quality processes limiting audit readiness and compliance.", solution: "Gap assessment, documentation suite and QMS Platform deployment.", outcome: "Audit prep time reduced by 60%. ISO 9001 certification achieved." },
];

function CaseStudies() {
  return (
    <section className="container-page py-20">
      <div className="mb-10">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Client Results</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Work in Practice</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">Real assignments. Real outcomes. Independent, professional and accountable.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {caseStudies.map((c) => (
          <div key={c.type + c.industry} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all group">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <div className="text-xs font-bold text-[var(--color-orange)] uppercase tracking-wider">{c.industry}</div>
                <h3 className="font-display font-bold text-navy text-lg mt-1">{c.type}</h3>
              </div>
              <div className="shrink-0 px-2.5 py-1 rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)] text-xs font-semibold">Completed</div>
            </div>
            <div className="space-y-3 text-sm">
              <div><span className="font-semibold text-navy">Challenge: </span><span className="text-muted-foreground">{c.challenge}</span></div>
              <div><span className="font-semibold text-navy">Solution: </span><span className="text-muted-foreground">{c.solution}</span></div>
              <div className="rounded-lg bg-[var(--color-teal)]/5 border border-[var(--color-teal)]/15 p-3">
                <span className="font-semibold text-[var(--color-teal)]">Outcome: </span><span className="text-muted-foreground">{c.outcome}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Insert HowWeWork and CaseStudies into Home()**

Inside `Home()`, add `<HowWeWork />` after the services grid section and `<CaseStudies />` before the final CTA/articles sections.

- [ ] **Step 4: Verify sections render in correct order**

Homepage flow: SplitHero → Trust badges → Stats → Services → HowWeWork → CaseStudies → Articles → CTA

- [ ] **Step 5: Commit**
```bash
git add src/routes/index.tsx
git commit -m "feat: add How We Work process section and Case Studies grid to homepage"
```

---

## PHASE 3 — PLATFORM PAGES

### Task 7: QMS Platform page — SaaS-grade redesign

**Files:**
- Rewrite: `src/routes/qms-plug.tsx`

- [ ] **Step 1: Rewrite qms-plug.tsx with SaaS dashboard mockup and feature grid**

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FileText, ClipboardCheck, AlertTriangle, GitBranch, ShieldCheck, BarChart3, Users, GraduationCap, TrendingUp, Lock, ArrowRight, CheckCircle2, Zap, Globe, Cpu } from "lucide-react";

export const Route = createFileRoute("/qms-plug")({
  head: () => ({
    meta: [
      { title: "QUALIFY QMS Platform | Smart Digital Quality Management" },
      { name: "description", content: "QUALIFY QMS Platform digitises documentation, audits, CAPA, compliance monitoring and training records into one guided, cloud-based quality management system." },
    ],
  }),
  component: QMSPage,
});

const features = [
  { icon: FileText,       title: "Document Control",       desc: "Centralised, version-controlled policy and procedure management with approval workflows." },
  { icon: ClipboardCheck, title: "Audit Management",        desc: "Schedule, conduct and track internal and external audits with digital checklists." },
  { icon: AlertTriangle,  title: "CAPA Tracking",           desc: "Root-cause analysis, corrective and preventive action planning with closure tracking." },
  { icon: ShieldCheck,    title: "Compliance Monitoring",   desc: "Real-time visibility of compliance status against applicable standards and requirements." },
  { icon: TrendingUp,     title: "Risk Management",         desc: "Structured risk register with likelihood and impact scoring and control tracking." },
  { icon: GraduationCap,  title: "Training Records",        desc: "Competence tracking, training schedules, and staff qualification records in one place." },
  { icon: GitBranch,      title: "Workflow Automation",     desc: "Configurable approval chains, task routing, notifications and escalation rules." },
  { icon: BarChart3,      title: "Reporting Dashboards",    desc: "Management review-ready reports, KPI charts and compliance trend analytics." },
];

const steps = [
  { n: "01", title: "Discovery & Scoping",      desc: "We understand your operations, team structure, compliance requirements and platform objectives." },
  { n: "02", title: "Platform Configuration",   desc: "Modules, document libraries, audit templates, risk registers and workflows are set up for your context." },
  { n: "03", title: "Data Migration",           desc: "Existing policies, procedures and records are transferred and structured within the platform." },
  { n: "04", title: "User Setup & Training",    desc: "Roles, access levels and permissions are configured. Staff are onboarded through practical training sessions." },
  { n: "05", title: "Go-Live Support",          desc: "Guided launch with the QUALIFY team available to resolve issues and support adoption." },
  { n: "06", title: "Ongoing Advisory",         desc: "Post-implementation review, optimisation, technical support and continuous improvement guidance." },
];

const whys = [
  "Guided implementation — not a self-serve product drop",
  "Configured to your operations, not generic templates",
  "Training included for all user levels",
  "Supports ISO 9001, 14001, 45001 and sector frameworks",
  "Accessible from any device, anywhere",
  "Reduces audit preparation time significantly",
];

function QMSPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center" style={{ background: "linear-gradient(135deg, oklch(0.14 0.07 250) 0%, oklch(0.20 0.08 249) 60%, oklch(0.26 0.09 240) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-2/3 h-full" style={{ background: "radial-gradient(ellipse at 90% 30%, oklch(0.55 0.09 205 / 0.25) 0%, transparent 60%)" }} />
        <div className="container-page relative py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-teal)]">
              <Cpu className="size-3.5" /> QUALIFY QMS Platform
            </div>
            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Smart Digital<br />
              <span className="text-gradient-navy">Quality Management</span><br />
              Platform
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              Replace paper-based quality management with a structured, traceable and accessible digital system covering documentation, audits, CAPA, compliance and training records.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Request a Demo <ArrowRight className="size-4" />
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white/8 border border-white/15 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-colors">
                See Features
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              {[["Cloud-Based", Globe], ["Enterprise-Grade", ShieldCheck], ["Implementation Included", Zap]].map(([l, I]) => (
                <div key={l as string} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="size-4 text-[var(--color-teal)]" />{l}
                </div>
              ))}
            </div>
          </div>
          {/* Dashboard preview */}
          <div className="hidden lg:block">
            <QMSDashboard />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-page py-20">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Platform Features</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Everything your QMS needs in one place</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Eight core modules, configured for your operations and supported by the QUALIFY team from day one.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="size-12 rounded-xl bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white mb-4 group-hover:shadow-[0_0_20px_rgba(0,122,138,0.4)] transition-shadow">
                <f.icon className="size-6" />
              </div>
              <h3 className="font-display font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation steps */}
      <section className="py-20" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Implementation</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">How we implement it</h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">QUALIFY manages the full implementation — from configuration to go-live and beyond. You are not left to figure it out alone.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="glass-card-dark rounded-2xl p-6 border border-white/8 hover:border-[var(--color-teal)]/40 transition-all">
                <div className="font-display text-3xl font-black text-white/10 mb-3">{s.n}</div>
                <h3 className="font-display font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why QUALIFY QMS */}
      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Why Choose Us</div>
            <h2 className="font-display text-3xl font-bold text-navy mb-6">Not just software — a supported quality system</h2>
            <ul className="space-y-3">
              {whys.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-navy text-white p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold mb-3">Ready to digitise your quality management?</h3>
            <p className="text-white/70 mb-6 leading-relaxed">Request a demonstration and we will show you exactly how the platform works in your operational context — no commitment required.</p>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Request a Demo <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 text-white px-6 py-3.5 font-semibold hover:bg-white/20 transition-colors">
                Speak to a QMS Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function QMSDashboard() {
  return (
    <div className="relative">
      <div className="rounded-2xl glass-card-dark border border-white/10 p-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-red-400/60" /><span className="size-2.5 rounded-full bg-yellow-400/60" /><span className="size-2.5 rounded-full bg-green-400/60" /></div>
          <div className="text-[11px] text-white/40 font-medium">QMS Dashboard — QUALIFY Platform</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[["94%", "ISO 9001 Readiness", "var(--color-teal)"], ["12", "Active Audits", "var(--color-ocean)"], ["3", "Open CAPAs", "var(--color-orange)"], ["100%", "Doc Control", "var(--color-teal)"]].map(([v, l, c]) => (
            <div key={l as string} className="rounded-xl bg-white/5 border border-white/8 p-3">
              <div className="font-display text-xl font-bold" style={{ color: `var(--color-${(c as string).replace("var(--color-", "").replace(")", "")})` }}>{v}</div>
              <div className="text-[10px] text-white/40 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        {[["Audit Completion", 72, "var(--color-orange)"], ["Document Control", 100, "var(--color-teal)"], ["CAPA Resolution", 85, "var(--color-ocean)"]].map(([l, pct, c]) => (
          <div key={l as string} className="mb-3">
            <div className="flex justify-between text-[10px] text-white/45 mb-1"><span>{l}</span><span>{pct}%</span></div>
            <div className="h-1.5 rounded-full bg-white/8"><div className="h-full rounded-full" style={{ width: `${pct}%`, background: `${c}` }} /></div>
          </div>
        ))}
      </div>
      <div className="absolute -left-10 bottom-12 glass-card-dark rounded-xl p-3 border border-white/10 shadow-xl animate-float">
        <div className="text-[10px] text-white/50">CAPA #18</div>
        <div className="text-sm font-bold text-white mt-0.5">Root Cause Identified</div>
        <div className="text-[10px] text-[var(--color-teal)] mt-1 font-semibold">In Progress</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify page loads at localhost:8080/qms-plug**

Dashboard mockup visible on desktop. Feature grid 4-column. Implementation steps 3-column.

- [ ] **Step 3: Commit**
```bash
git add src/routes/qms-plug.tsx
git commit -m "feat: redesign QMS Platform page as SaaS-grade enterprise product page"
```

---

### Task 8: Certification Portal — timeline + readiness UI

**Files:**
- Rewrite: `src/routes/certification-portal.tsx`

- [ ] **Step 1: Read current certification-portal.tsx**

Check what exists before rewriting (read the file).

- [ ] **Step 2: Rewrite certification-portal.tsx**

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, ClipboardCheck, FileText, GraduationCap, AlertTriangle, ShieldCheck, TrendingUp, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/certification-portal")({
  head: () => ({
    meta: [
      { title: "Certification Readiness Support | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports organisations before, during and after ISO certification — gap assessments, documentation, internal audits, CAPA and continual improvement." },
    ],
  }),
  component: CertificationPortal,
});

const journey = [
  { n: 1, icon: ClipboardCheck, title: "Gap Assessment",           desc: "We assess your current position against the target standard — identifying strengths, gaps and priorities." },
  { n: 2, icon: FileText,       title: "Documentation Review",     desc: "Policies, procedures, records and forms are reviewed, developed or improved to meet standard requirements." },
  { n: 3, icon: GraduationCap,  title: "Competence Development",   desc: "Staff awareness and competence training aligned to the standard and your operational context." },
  { n: 4, icon: CheckCircle2,   title: "Internal Audit",           desc: "Structured internal audit against the standard — identifying remaining gaps before external assessment." },
  { n: 5, icon: AlertTriangle,  title: "Corrective Actions",       desc: "Root-cause analysis and resolution of audit findings with tracked corrective and preventive actions." },
  { n: 6, icon: ShieldCheck,    title: "Certification Readiness",  desc: "Final readiness review — we verify your system is genuinely ready before the certification body audits." },
  { n: 7, icon: RefreshCw,      title: "Continual Improvement",    desc: "Post-certification surveillance readiness, improvement planning and ongoing advisory support." },
];

const standards = [
  "ISO 9001:2015 — Quality Management",
  "ISO 14001:2015 — Environmental Management",
  "ISO 45001:2018 — Occupational Health & Safety",
  "ISO 22000:2018 — Food Safety Management",
  "ISO/IEC 17020:2012 — Inspection Bodies",
  "ISO/IEC 17021-1:2015 — Certification Bodies",
  "ISO/IEC 17024:2012 — Personnel Certification",
  "ISO/IEC 17025:2017 — Testing & Calibration",
  "ISO 27001:2022 — Information Security",
  "ISO 22301:2019 — Business Continuity",
  "HACCP — Food Hazard Analysis",
];

function CertificationPortal() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container-page relative py-20 md:py-28 max-w-4xl">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">Certification Readiness Support</div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            Supporting Your Certification Journey —<br />
            <span className="text-gradient-navy">Before, During and After</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
            QUALIFY helps organisations achieve genuine certification readiness through gap assessments, documentation, training, internal audits, corrective actions and continual improvement support. Certification is issued only by authorised certification bodies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
              Assess Your Readiness <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white/8 border border-white/15 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-colors">
              Speak to a Quality Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="container-page py-20">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">The Journey</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Certification Readiness in 7 Stages</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">A structured journey from where you are today to genuine, sustainable certification readiness.</p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-teal)] via-[var(--color-ocean)] to-[var(--color-teal)]/20 md:-translate-x-px" />
          <div className="space-y-8">
            {journey.map((j, i) => (
              <div key={j.n} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                  <div className={`rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)] hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all inline-block w-full md:max-w-sm ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-8 rounded-lg bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white shrink-0">
                        <j.icon className="size-4" />
                      </div>
                      <div className="text-xs font-bold text-[var(--color-orange)] uppercase tracking-wider">Stage {j.n}</div>
                    </div>
                    <h3 className="font-display font-bold text-navy mb-1.5">{j.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
                  </div>
                </div>
                {/* Centre dot */}
                <div className="absolute left-6 md:left-1/2 top-5 size-5 rounded-full bg-[var(--color-teal)] ring-4 ring-background -translate-x-1/2 grid place-items-center">
                  <span className="text-[8px] font-black text-white">{j.n}</span>
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Standards We Support</div>
            <h2 className="font-display text-3xl font-bold text-navy">ISO & Sector Frameworks</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">QUALIFY provides readiness support across a broad range of international management system standards and compliance frameworks.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {standards.map((s) => (
              <div key={s} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4 hover:border-[var(--color-teal)] transition-colors">
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <span className="text-sm text-navy font-medium">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-xl bg-[var(--color-teal)]/5 border border-[var(--color-teal)]/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-navy">Important:</strong> QUALIFY supports organisations in implementation, competence development, documentation, internal audits, certification readiness and continual improvement. Certification decisions are made only by authorised certification bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page py-20">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-orange)]/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to start your certification journey?</h3>
            <p className="text-white/70 leading-relaxed mb-7">Tell us which standard you are targeting and where you currently stand — we will give you an honest picture of what genuine readiness requires.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Request Certification Support <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
```

- [ ] **Step 3: Verify page loads at localhost:8080/certification-portal**

7-stage timeline alternates left/right on desktop. Standards grid 3-column. CTA banner at bottom.

- [ ] **Step 4: Commit**
```bash
git add src/routes/certification-portal.tsx
git commit -m "feat: redesign certification portal with 7-step journey timeline and standards grid"
```

---

## PHASE 4 — ABOUT + KNOWLEDGE HUB

### Task 9: About page — ISO standards cards + trust sections

**Files:**
- Rewrite: `src/routes/about.tsx`

- [ ] **Step 1: Rewrite about.tsx with ISO cards, Why Trust, and Technical Approach**

```tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import inspectorImg from "@/assets/inspector.jpg";
import { CheckCircle2, Target, Eye, Heart, Shield, Zap, Users, FileText, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Qualify Group Africa | Independent Marine Inspection Experts" },
      { name: "description", content: "QUALIFY Group Africa Ltd is an independent inspection, marine surveying, cargo inspection and quality assurance company based in Mombasa, Kenya." },
    ],
  }),
  component: About,
});

const values = ["Integrity", "Independence", "Professionalism", "Accuracy", "Confidentiality", "Continuous Improvement", "Client Focus"];

const isoStandards = [
  { code: "ISO 9001", year: "2015", name: "Quality Management Systems" },
  { code: "ISO 14001", year: "2015", name: "Environmental Management Systems" },
  { code: "ISO 45001", year: "2018", name: "Occupational Health & Safety" },
  { code: "ISO 22000", year: "2018", name: "Food Safety Management" },
  { code: "ISO/IEC 17020", year: "2012", name: "Inspection Body Requirements" },
  { code: "ISO/IEC 17021-1", year: "2015", name: "Conformity Assessment — Certification Bodies" },
  { code: "ISO/IEC 17024", year: "2012", name: "Personnel Certification" },
  { code: "ISO/IEC 17025", year: "2017", name: "Testing & Calibration Laboratories" },
  { code: "ISO 27001", year: "2022", name: "Information Security Management" },
  { code: "ISO 22301", year: "2019", name: "Business Continuity Management" },
  { code: "HACCP", year: "Codex", name: "Food Hazard Analysis & Critical Control" },
];

const whyTrust = [
  { icon: Shield,    title: "Independent & Impartial",      desc: "We have no commercial interest in outcomes — our findings are objective, evidence-based and defensible." },
  { icon: FileText,  title: "Technical Reporting Quality",   desc: "Reports are structured for the intended audience — technical detail without unnecessary complexity." },
  { icon: Zap,       title: "Responsive & Reliable",         desc: "We mobilise quickly, communicate clearly and deliver within agreed timelines." },
  { icon: Users,     title: "Sector Understanding",          desc: "Our team understands maritime, cargo, logistics, insurance and quality compliance operations." },
  { icon: Award,     title: "Standards-Aligned Approach",    desc: "Our work aligns with internationally recognised inspection, auditing and quality management frameworks." },
  { icon: Target,    title: "Practical & Hands-On",          desc: "We engage at operational level — not just theory. Findings and recommendations are actionable." },
];

const technicalApproach = [
  "Every assignment begins with a structured briefing to define scope, objectives and expected deliverables.",
  "On-site attendance is systematic — we follow inspection frameworks aligned with industry standards and client requirements.",
  "Evidence is gathered objectively — photographs, measurements, documents, observations — and recorded contemporaneously.",
  "Findings are reviewed internally before report issue to ensure accuracy, consistency and completeness.",
  "Reports are structured with executive summary, findings, evidence and recommendations — formatted for the intended audience.",
  "We follow up on findings where required — supporting corrective actions, not just issuing a report.",
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="About QUALIFY Group Africa Ltd"
        subtitle="Independent inspection, marine surveying, cargo inspection, quality assurance and certification readiness — based in Mombasa, Kenya."
      />

      {/* Who We Are */}
      <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            QUALIFY Group Africa Ltd provides independent marine inspection, cargo surveying, quality assurance, certification readiness, technical reporting and digital QMS services to clients across Kenya and the wider region.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We work with shipowners, cargo interests, insurers, exporters, importers, compliance teams, logistics companies and institutions that need reliable, evidence-based technical support — delivered professionally and on time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our approach is hands-on, independent and standards-aligned. We do not just produce reports — we help clients understand findings, resolve issues and build lasting operational confidence.
          </p>
        </div>
        <img src={inspectorImg} alt="Inspector conducting assessment at port" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)]" />
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-muted/40 py-16">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", text: "To provide reliable, independent and professional inspection, surveying and quality assurance services that help clients reduce risk and build operational confidence." },
            { icon: Eye,    title: "Vision",  text: "To be the leading trusted partner for marine, cargo, inspection and quality assurance services across Kenya and the wider East African region." },
            { icon: Heart,  title: "Values",  text: values.join("  ·  ") },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-card)] hover:border-[var(--color-teal)] transition-colors">
              <div className="size-12 rounded-xl bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white mb-4"><b.icon className="size-6" /></div>
              <h3 className="font-display font-bold text-navy text-xl mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust QUALIFY */}
      <section className="container-page py-16">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Why Us</div>
          <h2 className="font-display text-3xl font-bold text-navy">Why Organisations Trust QUALIFY</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Clients come to QUALIFY because they need independent, accurate, timely technical support — not a generic service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyTrust.map((w) => (
            <div key={w.title} className="rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-card)] transition-all">
              <div className="size-10 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)] mb-4"><w.icon className="size-5" /></div>
              <h3 className="font-display font-semibold text-navy mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-16" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">How We Work</div>
            <h2 className="font-display text-3xl font-bold text-white mb-5">Our Technical Approach</h2>
            <p className="text-white/65 leading-relaxed mb-6">Consistent, structured and evidence-based — from the first briefing to the final report and follow-up.</p>
          </div>
          <div className="space-y-4">
            {technicalApproach.map((t, i) => (
              <div key={i} className="flex gap-4 glass-card-dark rounded-xl p-4 border border-white/8">
                <div className="size-7 rounded-full bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30 grid place-items-center text-[var(--color-teal)] text-xs font-bold shrink-0">{i + 1}</div>
                <p className="text-sm text-white/65 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Standards Cards */}
      <section className="container-page py-16">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Standards</div>
          <h2 className="font-display text-3xl font-bold text-navy">Standards & Frameworks We Align With</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">QUALIFY supports clients in aligning systems, documentation, competence and operations with recognised international standards.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {isoStandards.map((s) => (
            <div key={s.code} className="group rounded-2xl bg-card border border-border p-5 hover:border-[var(--color-teal)] hover:shadow-[0_0_20px_rgba(0,122,138,0.15)] transition-all cursor-default">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="font-display text-sm font-black text-navy group-hover:text-[var(--color-teal)] transition-colors">{s.code}</div>
                <div className="text-[10px] font-semibold text-white bg-[var(--color-ocean)] px-1.5 py-0.5 rounded-md shrink-0">{s.year}</div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.name}</p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-[var(--color-teal)]">
                <CheckCircle2 className="size-3" /> Readiness Support
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-5 rounded-xl bg-[var(--color-teal)]/5 border border-[var(--color-teal)]/20">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-navy">Disclaimer:</strong> QUALIFY supports organisations in implementation, competence development, documentation, internal audits, certification readiness and continual improvement. Certification decisions are made only by authorised certification bodies.
          </p>
        </div>
      </section>

      {/* Partners + CTA */}
      <section className="bg-muted/40 py-16">
        <div className="container-page flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Network</div>
            <h2 className="font-display text-2xl font-bold text-navy">Partners & Strategic Collaborations</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">QUALIFY works with trusted training, technical, quality, certification support and industry partners — to help clients build competence, compliance readiness and continuous improvement.</p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link to="/partners" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
              View Partners <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-navy hover:bg-muted transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
```

- [ ] **Step 2: Verify page at localhost:8080/about**

ISO standards card grid renders. "Why Trust" 6-card grid. Technical approach numbered steps on navy background.

- [ ] **Step 3: Commit**
```bash
git add src/routes/about.tsx
git commit -m "feat: upgrade About page with ISO standards cards, Why Trust section, and technical approach"
```

---

### Task 10: Knowledge Hub — search, filters, content upgrade

**Files:**
- Modify: `src/routes/resources.tsx`

- [ ] **Step 1: Read current resources.tsx**

Check the current structure before modifying.

- [ ] **Step 2: Add search + expanded categories to resources.tsx**

Ensure the component has these state controls at the top:

```tsx
const [query, setQuery] = useState("");
const [activeCategory, setActiveCategory] = useState("All");
```

Add a search bar + category filter bar above the article grid:

```tsx
{/* Search + filter bar */}
<div className="mb-8 space-y-4">
  <div className="relative max-w-xl">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
    <input
      type="text"
      placeholder="Search guides, standards, checklists..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)]"
    />
  </div>
  <div className="flex flex-wrap gap-2">
    {["All", "Inspection", "Compliance", "ISO", "Training", "Maritime", "QMS", "Risk Management", "Technical Reporting"].map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${activeCategory === cat ? "bg-[var(--color-teal)] border-[var(--color-teal)] text-white" : "border-border text-muted-foreground hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"}`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>
```

Add `Search` to lucide imports. Filter the articles array: show articles where `(activeCategory === "All" || article.cat === activeCategory) && (query === "" || article.title.toLowerCase().includes(query.toLowerCase()) || article.excerpt.toLowerCase().includes(query.toLowerCase()))`.

- [ ] **Step 3: Add download items section below articles**

```tsx
const downloads = [
  { title: "Company Profile", desc: "Overview of QUALIFY services, expertise and contact information.", size: "PDF · 2.4 MB" },
  { title: "ISO 9001 Readiness Checklist", desc: "Self-assessment checklist against ISO 9001:2015 clause requirements.", size: "PDF · 450 KB" },
  { title: "Cargo Inspection Scope Guide", desc: "Practical guide on scoping a cargo inspection assignment.", size: "PDF · 380 KB" },
  { title: "QMS Implementation Guide", desc: "Step-by-step overview of implementing a digital quality management system.", size: "PDF · 520 KB" },
];
```

Render below the articles grid:

```tsx
<section className="mt-16">
  <h2 className="font-display text-2xl font-bold text-navy mb-6">Downloads & Guides</h2>
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {downloads.map((d) => (
      <div key={d.title} className="rounded-2xl bg-card border border-border p-5 hover:border-[var(--color-teal)] transition-colors">
        <div className="size-10 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)] mb-3">
          <FileDown className="size-5" />
        </div>
        <h3 className="font-display font-semibold text-navy text-sm mb-1.5">{d.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">{d.desc}</p>
        <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-teal)] hover:underline">
          Request via Contact <ArrowRight className="size-3" />
        </Link>
        <div className="text-[10px] text-muted-foreground mt-1">{d.size}</div>
      </div>
    ))}
  </div>
</section>
```

Add `FileDown` to lucide imports.

- [ ] **Step 4: Verify resources page at localhost:8080/resources**

Search input filters articles. Category buttons highlight on click. Download cards at bottom.

- [ ] **Step 5: Commit**
```bash
git add src/routes/resources.tsx
git commit -m "feat: upgrade Resources into Knowledge Hub with search, category filters and downloads"
```

---

## FINAL VERIFICATION

- [ ] Navigate all pages — no console errors, no broken layouts
- [ ] Mobile viewport (375px) — hero, footer, nav, all readable
- [ ] WhatsApp widget — opens panel, topics route to correct WhatsApp messages
- [ ] Footer — 4 columns on desktop, stacks on mobile, all links work
- [ ] Run TypeScript check: `cd "path/to/Qualify" && npx tsc --noEmit`
- [ ] Final commit:
```bash
git add -A
git commit -m "feat: complete QUALIFY enterprise redesign — all 4 phases"
```
