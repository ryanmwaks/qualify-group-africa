import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import qmsImg from "@/assets/qms-mockup.jpg";
import inspectorImg from "@/assets/inspector.jpg";
import portMombasaImg from "@/assets/hero-port.jpg";
import portDjiboutiImg from "@/assets/port-djibouti.jpg";
import portLamuImg from "@/assets/port-lamu.jpg";
import portTangaImg from "@/assets/port-tanga.jpg";
import { useState, useEffect, useCallback } from "react";
import {
  Ship, Package, ClipboardCheck, ShieldAlert, Award, GraduationCap, FileText, Cpu,
  MapPin, Anchor, Zap, Lock, Quote, ArrowRight, CheckCircle2,
  Building2, Truck, Warehouse, Users, ChevronLeft, ChevronRight,
  BarChart3, TrendingUp, BookOpen
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marine & Cargo Surveyors in Kenya | Qualify Group Africa" },
      { name: "description", content: "Independent marine inspection, cargo surveying, vessel condition surveys, quality assurance, technical reporting and QMS Platform digital quality management. Based in Mombasa, Kenya." },
    ],
  }),
  component: Home,
});

/* ─── DATA ────────────────────────────────────────────────────── */

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

const services = [
  { icon: Ship,          title: "Marine Inspection & Surveying",  desc: "Independent inspection and technical reporting for marine assets and operations." },
  { icon: Package,       title: "Cargo Inspection & Surveying",   desc: "Verification of cargo condition, quantity, handling, loading and discharge." },
  { icon: ClipboardCheck,title: "Vessel Condition Surveys",       desc: "Assessment of condition, operational readiness, safety and compliance status." },
  { icon: ShieldAlert,   title: "Damage & Loss Assessment",       desc: "Independent assessments for insurers, logistics firms and cargo owners." },
  { icon: Award,         title: "Quality Assurance & Compliance", desc: "Stronger systems, internal controls, documentation and compliance readiness." },
  { icon: GraduationCap, title: "Training & Consultancy",         desc: "Practical advisory in inspection, quality management and reporting." },
  { icon: FileText,      title: "Technical Reporting",            desc: "Clear, structured reports to support decisions, claims and audits." },
  { icon: Cpu,           title: "QUALIFY QMS Platform",           desc: "Digital quality management for documentation, audits and compliance." },
];

const trust = [
  { icon: MapPin,  label: "Mombasa-Based" },
  { icon: Anchor,  label: "Marine & Cargo Expertise" },
  { icon: Zap,     label: "Fast Technical Reporting" },
  { icon: Award,   label: "Quality-Focused" },
  { icon: Lock,    label: "Confidential Handling" },
];

const industries = [
  { icon: Ship,      label: "Shipping & Maritime" }, { icon: Truck,      label: "Cargo & Logistics" },
  { icon: Anchor,    label: "Port Operations" },     { icon: ShieldAlert, label: "Insurance & Claims" },
  { icon: Building2, label: "Importers & Exporters"},{ icon: Award,      label: "Quality & Compliance" },
  { icon: Warehouse, label: "Warehousing & Distribution" }, { icon: Users, label: "Training & Consultancy" },
];

const process = [
  { n: "01", title: "Inquiry & Consultation",  desc: "We discuss your assignment, objectives, location and scope — providing clear guidance on the most appropriate service and approach." },
  { n: "02", title: "Assessment & Planning",   desc: "We define the scope, assign the right technical resource, and agree timelines and deliverables upfront." },
  { n: "03", title: "Inspection & Delivery",   desc: "Our surveyor or advisor attends on-site, conducts a systematic assessment, gathers evidence and documents all findings." },
  { n: "04", title: "Technical Reporting",     desc: "Structured reports are issued within the agreed turnaround — factual, defensible, and formatted for the intended audience." },
  { n: "05", title: "Corrective Actions",      desc: "Where findings require resolution, we support root-cause analysis, corrective action planning and implementation tracking." },
  { n: "06", title: "Follow-Up & Improvement", desc: "Post-assignment advisory to ensure findings lead to lasting improvement — not just a report on a shelf." },
];

const caseStudies = [
  { industry: "Bulk Trading",   type: "Cargo Inspection",    challenge: "Pre-discharge dispute over cargo condition and quantity.", solution: "Independent inspection with photographic evidence and quantity verification.", outcome: "Documented findings supported successful claim resolution and recovery." },
  { industry: "Shipping",       type: "Vessel Survey",        challenge: "Pre-charter condition assessment for a 10-year-old bulk carrier.", solution: "Systematic condition survey covering hull, machinery, safety and documentation.", outcome: "Detailed report enabled confident charter contract decisions." },
  { industry: "Insurance",      type: "Damage Assessment",    challenge: "Independent quantification of cargo loss following contamination.", solution: "Evidence-based damage report with cause analysis and quantum.", outcome: "Accelerated claims processing and reduced dispute duration." },
  { industry: "Logistics SME",  type: "QMS Implementation",   challenge: "Manual quality processes limiting audit readiness and compliance.", solution: "Gap assessment, documentation suite and QMS Platform deployment.", outcome: "Audit prep time reduced by 60%. ISO 9001 certification achieved." },
];

const articles = [
  { tag: "Cargo",  cat: "Inspection",  title: "Why cargo inspection matters before discharge",     excerpt: "Catching condition issues at the right stage protects buyers, sellers and insurers." },
  { tag: "Marine", cat: "Maritime",    title: "What to prepare before a marine survey",              excerpt: "A short checklist to make your next survey faster and more useful." },
  { tag: "QMS",    cat: "QMS",         title: "Benefits of a digital quality management system",     excerpt: "How digital QMS unlocks faster audits and clearer accountability." },
];

/* ─── PORT CAROUSEL ───────────────────────────────────────────── */

const portSlides = [
  { img: portMombasaImg,  location: "Port of Mombasa, Kenya",    tag: "East Africa's Primary Maritime Hub",    flag: "🇰🇪" },
  { img: portDjiboutiImg, location: "Port of Djibouti",          tag: "Strategic Red Sea & Gulf of Aden Gateway", flag: "🇩🇯" },
  { img: portLamuImg,     location: "Port of Lamu, Kenya",       tag: "LAPSSET Corridor Deep-Water Terminal",  flag: "🇰🇪" },
  { img: portTangaImg,    location: "Port of Tanga, Tanzania",   tag: "Northern Tanzania Cargo Terminal",      flag: "🇹🇿" },
];

function PortCarousel() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 300);
  }, [transitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % portSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const slide = portSlides[current];

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] border border-white/10 aspect-[4/3]">
      {/* Image */}
      <img
        key={current}
        src={slide.img}
        alt={slide.location}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Caption */}
      <div className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ${transitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-base leading-none">{slide.flag}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-teal)]">{slide.tag}</span>
        </div>
        <div className="font-display text-lg font-bold text-white leading-tight flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-[var(--color-orange)]" />
          {slide.location}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute top-4 right-4 flex gap-1.5">
        {portSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-[var(--color-teal)]" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Nav arrows */}
      <button
        onClick={() => goTo((current - 1 + portSlides.length) % portSlides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 size-9 rounded-full glass-card-dark border border-white/20 grid place-items-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="size-4" />
      </button>
      <button
        onClick={() => goTo((current + 1) % portSlides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 size-9 rounded-full glass-card-dark border border-white/20 grid place-items-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="size-4" />
      </button>

      {/* Floating active-service badge */}
      <div className="absolute -left-8 top-8 glass-card-dark rounded-xl px-3 py-2.5 border border-white/15 shadow-xl animate-float hidden xl:block">
        <div className="text-[10px] text-white/50 mb-0.5">Coverage</div>
        <div className="text-sm font-bold text-white">East Africa &amp; Djibouti</div>
        <div className="text-[10px] text-[var(--color-teal)] font-semibold mt-1">4 Major Ports</div>
      </div>
    </div>
  );
}

function SplitHero() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center"
      style={{ background: "linear-gradient(135deg, oklch(0.14 0.07 250) 0%, oklch(0.20 0.08 249) 55%, oklch(0.26 0.09 240) 100%)" }}>
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      {/* Teal glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20" style={{ background: "radial-gradient(ellipse at 80% 20%, oklch(0.55 0.09 205 / 0.5) 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-10" style={{ background: "radial-gradient(ellipse at 20% 80%, oklch(0.66 0.18 38 / 0.4) 0%, transparent 60%)" }} />

      <div className="relative container-page py-20 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">
        {/* LEFT */}
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
            <Link to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold shadow-lg hover:opacity-90 hover:shadow-xl transition-all">
              Request Inspection Support <ArrowRight className="size-4" />
            </Link>
            <Link to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-white/8 backdrop-blur border border-white/15 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-all">
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

        {/* RIGHT — port image carousel */}
        <div className="relative hidden lg:block">
          <PortCarousel />
        </div>
      </div>
    </section>
  );
}

/* ─── HOW WE WORK ─────────────────────────────────────────────── */

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
          {process.map((p) => (
            <div key={p.n} className="group relative rounded-2xl glass-card-dark p-6 border border-white/8 hover:border-[var(--color-teal)]/50 hover:teal-glow transition-all">
              <div className="font-display text-4xl font-black text-white/8 mb-3 select-none">{p.n}</div>
              <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-[var(--color-teal)] transition-colors">{p.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
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

/* ─── CASE STUDIES ────────────────────────────────────────────── */

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
          <div key={c.type + c.industry} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all">
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
                <span className="font-semibold text-[var(--color-teal)]">Outcome: </span>
                <span className="text-muted-foreground">{c.outcome}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── HOME ────────────────────────────────────────────────────── */

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <SplitHero />

      {/* Port strip */}
      <section className="border-b border-border overflow-hidden">
        <div className="flex">
          {portSlides.map((p, i) => (
            <div key={p.location} className="relative flex-1 h-24 overflow-hidden group">
              <img src={p.img} alt={p.location} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                <span className="text-lg leading-none mb-0.5">{p.flag}</span>
                <span className="text-[10px] font-bold text-white/90 leading-tight">{p.location.split(",")[0]}</span>
              </div>
              {i < portSlides.length - 1 && <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" />}
            </div>
          ))}
        </div>
      </section>

      {/* Trust badges strip */}
      <section className="border-y border-border bg-card">
        <div className="container-page py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)]">
                <t.icon className="size-5" />
              </div>
              <div className="text-sm font-semibold text-navy">{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats counters */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container-page relative py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[["15+", "Years experience in marine and cargo inspection"], ["500+", "Inspection and survey assignments completed"], ["100+", "Clients across maritime, logistics and compliance"], ["24/7", "Technical response and advisory support"]].map(([n, l]) => (
            <div key={l as string} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-black text-white">{n}</div>
              <div className="mt-2 text-sm text-white/55 max-w-[12rem] mx-auto leading-snug">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="container-page py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">What We Do</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Our Services</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Independent inspection, technical reporting and quality assurance — delivered professionally and with full accountability.</p>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:underline shrink-0">
            View all services <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link key={s.title} to="/services" className="group rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)] hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="size-12 rounded-xl bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white mb-4 group-hover:shadow-[0_0_20px_rgba(0,122,138,0.4)] transition-shadow">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-display font-bold text-navy mb-2 group-hover:text-[var(--color-teal)] transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <HowWeWork />

      {/* Case Studies */}
      <CaseStudies />

      {/* Industries */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Industries</div>
            <h2 className="font-display text-3xl font-bold text-navy">Who We Support</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((i) => (
              <div key={i.label} className="flex items-center gap-3 rounded-xl bg-card border border-border p-4 hover:border-[var(--color-teal)] transition-colors">
                <div className="size-9 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)] shrink-0">
                  <i.icon className="size-4" />
                </div>
                <span className="text-sm font-semibold text-navy">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QMS Platform feature */}
      <section className="container-page py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold">Digital Platform</div>
          <h2 className="font-display text-3xl font-bold text-navy">QUALIFY QMS Platform</h2>
          <p className="text-muted-foreground leading-relaxed">
            Replace paper-based quality management with a structured, cloud-based digital system covering documentation, audits, CAPA, compliance monitoring and training records — implemented and supported by the QUALIFY team.
          </p>
          <ul className="space-y-2">
            {["Document control and version management", "Internal audit scheduling and tracking", "Corrective and preventive action (CAPA)", "Compliance monitoring dashboards", "Training records and competence tracking"].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />{f}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/qms-plug" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
              Explore Platform <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-navy hover:bg-muted transition-colors">
              Request Demo
            </Link>
          </div>
        </div>
        <img src={qmsImg} alt="QMS Platform" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)] border border-border" />
      </section>

      {/* Articles */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Knowledge Hub</div>
            <h2 className="font-display text-3xl font-bold text-navy">Insights & Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link key={a.title} to="/resources" className="group rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-card)] transition-all">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--color-orange)] mb-3">{a.tag}</div>
                <h3 className="font-display font-bold text-navy mb-2 group-hover:text-[var(--color-teal)] transition-colors">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-teal)]">
                  Read more <ArrowRight className="size-3" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/resources" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-navy hover:bg-muted transition-colors">
              Visit Knowledge Hub <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page py-20">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-orange)]/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 size-48 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Not sure which service you need?</h3>
            <p className="mt-3 text-white/70 leading-relaxed">Describe your situation and our technical team will identify the most appropriate service and engagement approach — at no obligation.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Talk to Our Team <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
