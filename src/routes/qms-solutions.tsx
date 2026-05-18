import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  FileText,
  ClipboardCheck,
  AlertTriangle,
  TrendingUp,
  AlertOctagon,
  ShieldCheck,
  GraduationCap,
  BarChart3,
  Truck,
  Package,
  GitBranch,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Lock,
  Database,
  RefreshCw,
  Cloud,
  Server,
  Layers,
  Building2,
  Ship,
  Factory,
  Flame,
  HeartPulse,
  FlaskConical,
  Landmark,
  Search,
  BadgeCheck,
} from "lucide-react";

export const Route = createFileRoute("/qms-solutions")({
  head: () => ({
    meta: [
      {
        title:
          "QMS Solutions | Enterprise Digital Quality Management | QUALIFY Group Africa",
      },
      {
        name: "description",
        content:
          "QUALIFY QMS Solutions — a complete Digital Quality, Compliance & Operational Excellence Ecosystem. SaaS subscriptions and bespoke enterprise solutions for modern organizations.",
      },
    ],
  }),
  component: QMSSolutions,
});

// ─── Dashboard Mockup ────────────────────────────────────────────────────────
function EnterpriseDashboard() {
  return (
    <div className="relative">
      {/* Floating notification */}
      <div
        className="absolute -top-5 -right-4 z-10 rounded-xl border border-white/20 px-4 py-2.5 shadow-2xl text-xs font-semibold text-white flex items-center gap-2 animate-pulse"
        style={{ background: "rgba(0,122,138,0.85)", backdropFilter: "blur(12px)" }}
      >
        <CheckCircle2 className="size-3.5 text-green-300" />
        Workflow Approved
      </div>

      <div
        className="rounded-2xl border border-white/10 p-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
        style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(24px)" }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/50 font-semibold">
              QUALIFY QMS Dashboard
            </p>
            <p className="text-sm text-white/80 font-medium">
              Enterprise Control Center
            </p>
          </div>
          <span className="text-[10px] rounded-full px-2.5 py-1 font-semibold bg-green-500/20 text-green-300 border border-green-500/30">
            LIVE
          </span>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl p-3 border border-white/10 bg-white/5">
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">
              Compliance Score
            </p>
            <p className="text-2xl font-bold text-white">96%</p>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-[var(--color-teal)] to-green-400" />
            </div>
          </div>
          <div className="rounded-xl p-3 border border-white/10 bg-white/5">
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">
              Active Audits
            </p>
            <p className="text-2xl font-bold text-white">8</p>
            <p className="text-[10px] text-[var(--color-teal)] mt-1">
              3 pending review
            </p>
          </div>
          <div className="rounded-xl p-3 border border-white/10 bg-white/5">
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">
              Pending Approvals
            </p>
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-[10px] text-yellow-400 mt-1">Action required</p>
          </div>
          <div className="rounded-xl p-3 border border-white/10 bg-white/5">
            <p className="text-[10px] text-white/50 uppercase tracking-wide mb-1">
              Risk Level
            </p>
            <p className="text-2xl font-bold text-green-400">Low</p>
            <p className="text-[10px] text-white/40 mt-1">All controls active</p>
          </div>
        </div>

        {/* ISO Progress */}
        <div className="mb-5 space-y-2.5">
          <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">
            ISO Readiness
          </p>
          {[
            { label: "ISO 9001:2015", pct: 94 },
            { label: "ISO 14001:2015", pct: 88 },
            { label: "ISO 45001:2018", pct: 91 },
          ].map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-[10px] text-white/60 mb-1">
                <span>{s.label}</span>
                <span>{s.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--color-ocean)] to-[var(--color-teal)]"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div>
          <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mb-2">
            Recent Activity
          </p>
          <div className="space-y-2">
            {[
              { label: "CAPA #047 closed", time: "2 min ago", color: "text-green-400" },
              { label: "Internal audit scheduled", time: "18 min ago", color: "text-[var(--color-teal)]" },
              { label: "Document Rev 3 approved", time: "1 hr ago", color: "text-white/60" },
            ].map((a) => (
              <div
                key={a.label}
                className="flex justify-between items-center text-[10px]"
              >
                <span className={a.color}>{a.label}</span>
                <span className="text-white/30">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Demo Form ───────────────────────────────────────────────────────────────
function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    industry: "",
    users: "",
    deployment: "",
    challenges: "",
    date: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.organization) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-8 text-center">
        <CheckCircle2 className="size-12 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">
          Demo Request Received
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Thank you, {form.name}. Our enterprise team will contact you within 24
          hours to schedule your demo and discuss your requirements.
        </p>
      </div>
    );
  }

  const fieldCls =
    "w-full rounded-lg bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm px-4 py-3 focus:outline-none focus:border-[var(--color-teal)] focus:ring-1 focus:ring-[var(--color-teal)] transition-colors";
  const labelCls = "block text-xs font-semibold text-white/60 uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            name="name"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={fieldCls}
          />
        </div>
        <div>
          <label className={labelCls}>Organization *</label>
          <input
            name="organization"
            required
            placeholder="Your organization"
            value={form.organization}
            onChange={handleChange}
            className={fieldCls}
          />
        </div>
      </div>

      <div>
        <label className={labelCls}>Industry</label>
        <select
          name="industry"
          value={form.industry}
          onChange={handleChange}
          className={fieldCls}
        >
          <option value="">Select your industry</option>
          {[
            "Maritime & Shipping",
            "Logistics & Supply Chain",
            "Manufacturing",
            "Oil & Gas",
            "Healthcare",
            "Laboratories",
            "Government Institutions",
            "Inspection Bodies",
            "SMEs",
            "Other",
          ].map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Number of Users</label>
          <select
            name="users"
            value={form.users}
            onChange={handleChange}
            className={fieldCls}
          >
            <option value="">Select range</option>
            <option value="1-10">1 – 10</option>
            <option value="11-50">11 – 50</option>
            <option value="51-200">51 – 200</option>
            <option value="200+">200+</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Deployment Type</label>
          <select
            name="deployment"
            value={form.deployment}
            onChange={handleChange}
            className={fieldCls}
          >
            <option value="">Select option</option>
            <option value="cloud">Cloud SaaS</option>
            <option value="private">Private Enterprise</option>
            <option value="hybrid">Hybrid</option>
            <option value="unsure">Not Sure</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Current Challenges</label>
        <textarea
          name="challenges"
          rows={3}
          placeholder="Describe your quality management pain points..."
          value={form.challenges}
          onChange={handleChange}
          className={fieldCls}
        />
      </div>

      <div>
        <label className={labelCls}>Preferred Demo Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={fieldCls}
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-orange)] text-white font-bold px-6 py-3.5 text-sm hover:opacity-90 transition-all shadow-lg hover:shadow-[0_8px_30px_rgba(224,90,43,0.4)]"
      >
        Book Enterprise Demo <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
function QMSSolutions() {
  return (
    <SiteLayout>
      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-white min-h-[92vh] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.07 250) 0%, oklch(0.18 0.08 249) 60%, oklch(0.24 0.09 240) 100%)",
        }}
      >
        {/* Grid dots overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-32 -right-32 size-[600px] rounded-full bg-[var(--color-teal)]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 size-[500px] rounded-full bg-[var(--color-ocean)]/10 blur-3xl pointer-events-none" />

        <div className="container-page relative py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-6 px-4 py-2 rounded-full bg-white/8 border border-white/10">
                <Zap className="size-3.5" />
                Enterprise Quality Ecosystem
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Smart Digital Quality Management Solutions{" "}
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(90deg, var(--color-teal), var(--color-ocean))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  for Modern Organizations
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                QUALIFY QMS Solutions transforms how organizations manage quality,
                compliance, and operational excellence — through a scalable SaaS
                platform and fully bespoke enterprise deployments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white font-bold px-6 py-3.5 text-sm hover:opacity-90 transition-all shadow-lg hover:shadow-[0_8px_30px_rgba(224,90,43,0.4)]"
                >
                  Start Subscription <ArrowRight className="size-4" />
                </Link>
                <a
                  href="#book-demo"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 text-white font-semibold px-6 py-3.5 text-sm hover:bg-white/10 transition-all"
                >
                  Request Enterprise Demo
                </a>
              </div>
            </div>

            {/* Right — Dashboard mockup */}
            <div className="hidden lg:block">
              <EnterpriseDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — REPOSITIONING STATEMENT
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-12 text-white"
        style={{ background: "oklch(0.13 0.06 250)" }}
      >
        <div className="container-page text-center">
          <p className="text-lg md:text-xl font-semibold text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed">
            No longer just a QMS tool —{" "}
            <span className="text-[var(--color-teal)]">
              a complete Digital Quality, Compliance &amp; Operational Excellence
              Ecosystem
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Enterprise SaaS",
              "Governance Workflows",
              "Audit Management",
              "Risk Intelligence",
              "Certification Readiness",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-[var(--color-teal)]/40 text-[var(--color-teal)] bg-[var(--color-teal)]/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — DUAL SERVICE MODEL
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
              Two Paths to Enterprise Quality
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Choose the model that fits your organization — a ready-to-deploy
              SaaS subscription or a fully custom enterprise build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card A */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-elegant)] hover:shadow-2xl transition-shadow">
              <div className="size-14 rounded-xl flex items-center justify-center mb-6 bg-[var(--color-ocean)]/10">
                <Cloud className="size-7 text-[var(--color-ocean)]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[var(--color-navy)] mb-3">
                SaaS Subscription Platform
              </h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6">
                A fully hosted, cloud-based quality management system ready to
                deploy from day one. Access all core modules on a flexible
                monthly or annual plan — with no infrastructure overhead.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Monthly / annual subscription options",
                  "Multi-user access with role management",
                  "Cloud hosting — no infrastructure needed",
                  "Real-time dashboards and reporting",
                  "Automated workflows and notifications",
                  "Continuous product updates included",
                  "Priority technical support",
                  "Scalable module activation",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--foreground)]">
                    <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-ocean)] text-white font-semibold px-5 py-3 text-sm hover:opacity-90 transition-all"
              >
                Start Subscription <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Card B */}
            <div
              className="rounded-2xl border border-white/10 p-8 shadow-2xl text-white"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.18 0.08 249), oklch(0.24 0.09 240))",
              }}
            >
              <div className="size-14 rounded-xl flex items-center justify-center mb-6 bg-white/10">
                <Layers className="size-7 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                Bespoke Enterprise Solutions
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                For organizations that need a quality ecosystem built precisely
                around their operations, systems, and governance structures.
                Fully custom — from workflows to integrations.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Custom workflows and approval chains",
                  "Department-specific module design",
                  "Role-based access control architecture",
                  "ERP and API integrations",
                  "Multi-site and multi-entity deployment",
                  "White-label capability",
                  "Enterprise analytics and BI integration",
                  "Dedicated implementation support team",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white font-bold px-5 py-3 text-sm hover:opacity-90 transition-all"
              >
                Request a Custom Solution <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — PRICING PLANS
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 text-white"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.16 0.07 250), oklch(0.20 0.08 249))",
        }}
      >
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Flexible Plans for Every Organization
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From growing teams to multi-site enterprises — QUALIFY QMS scales
              with your ambitions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Starter",
                subtitle: "Small teams & growing organizations",
                badge: null,
                features: [
                  "Up to 10 users",
                  "Document control",
                  "Basic audit management",
                  "CAPA tracking",
                  "Email support",
                ],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Professional",
                subtitle: "Mid-size compliance-driven operations",
                badge: "POPULAR",
                features: [
                  "Up to 50 users",
                  "All Starter features",
                  "Risk management module",
                  "Advanced workflows",
                  "API access",
                  "Analytics dashboards",
                  "Priority support",
                ],
                cta: "Start Free Trial",
                highlight: true,
              },
              {
                name: "Enterprise",
                subtitle: "Large multi-site organizations",
                badge: null,
                features: [
                  "Unlimited users",
                  "All Professional features",
                  "Custom modules",
                  "ERP integration",
                  "SLA guarantee",
                  "Dedicated support",
                ],
                cta: "Contact Sales",
                highlight: false,
              },
              {
                name: "Bespoke",
                subtitle: "Fully tailored digital ecosystem",
                badge: null,
                features: [
                  "Everything in Enterprise",
                  "White-label capability",
                  "On-premise option",
                  "Custom integrations",
                  "Dedicated build team",
                  "Custom SLA",
                ],
                cta: "Request Proposal",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 flex flex-col relative transition-transform hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-[var(--color-teal)] bg-[var(--color-teal)]/10 shadow-[0_0_40px_rgba(0,122,138,0.25)]"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[var(--color-teal)] text-white">
                    {plan.badge}
                  </span>
                )}
                <div className="mb-5">
                  <h3 className="font-display text-lg font-bold mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {plan.subtitle}
                  </p>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                      <CheckCircle2 className="size-3.5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold px-4 py-2.5 text-sm transition-all ${
                    plan.highlight
                      ? "bg-[var(--color-teal)] text-white hover:opacity-90"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — ENTERPRISE MODULES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
              12 Core Platform Modules
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Each module is purpose-built and works seamlessly within the wider
              QUALIFY QMS ecosystem.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: FileText,
                name: "Document Management",
                desc: "Centralised version-controlled document library with approval workflows.",
              },
              {
                icon: ClipboardCheck,
                name: "Audit Management",
                desc: "Schedule, conduct, and track internal and external audits digitally.",
              },
              {
                icon: AlertTriangle,
                name: "CAPA Tracking",
                desc: "Root-cause analysis, corrective actions, and closure verification.",
              },
              {
                icon: TrendingUp,
                name: "Risk Management",
                desc: "Structured risk register with scoring, controls, and review cycles.",
              },
              {
                icon: AlertOctagon,
                name: "Incident Reporting",
                desc: "Capture, classify, and resolve incidents with automated escalation.",
              },
              {
                icon: ShieldCheck,
                name: "Compliance Tracking",
                desc: "Real-time visibility of compliance status against standards and regs.",
              },
              {
                icon: GraduationCap,
                name: "Training Records",
                desc: "Competence tracking, training schedules, and qualification records.",
              },
              {
                icon: BarChart3,
                name: "KPI Dashboards",
                desc: "Management review-ready reports and compliance trend analytics.",
              },
              {
                icon: Truck,
                name: "Supplier Management",
                desc: "Approved vendor lists, supplier audits, and performance monitoring.",
              },
              {
                icon: Package,
                name: "Asset Management",
                desc: "Asset registers, calibration schedules, and maintenance tracking.",
              },
              {
                icon: GitBranch,
                name: "Workflow Automation",
                desc: "Configurable approval chains, task routing, and escalation rules.",
              },
              {
                icon: Users,
                name: "Management Reviews",
                desc: "Structured management review meetings with action tracking.",
              },
            ].map(({ icon: Icon, name, desc }) => (
              <div
                key={name}
                className="group rounded-xl border border-[var(--border)] bg-white p-5 hover:border-[var(--color-teal)] hover:shadow-[0_0_20px_rgba(0,122,138,0.15)] transition-all"
              >
                <div className="size-10 rounded-lg flex items-center justify-center mb-4 bg-[var(--color-ocean)]/10 group-hover:bg-[var(--color-teal)]/15 transition-colors">
                  <Icon className="size-5 text-[var(--color-ocean)] group-hover:text-[var(--color-teal)] transition-colors" />
                </div>
                <h4 className="font-semibold text-[var(--color-navy)] text-sm mb-1.5">
                  {name}
                </h4>
                <p className="text-[var(--muted-foreground)] text-xs leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — INDUSTRY SOLUTIONS
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 text-white"
        style={{ background: "oklch(0.17 0.07 250)" }}
      >
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Designed for Your Industry
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              QUALIFY QMS is configured for sector-specific compliance requirements
              and operational realities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Ship,
                name: "Maritime & Shipping",
                challenges: ["ISM Code compliance", "Port State Control audits"],
                tag: "ISO 9001 · ISM · MLC",
              },
              {
                icon: Truck,
                name: "Logistics & Supply Chain",
                challenges: ["Multi-site compliance", "Supplier qualification"],
                tag: "ISO 9001 · ISO 45001",
              },
              {
                icon: Factory,
                name: "Manufacturing",
                challenges: ["Production QC traceability", "CAPA management"],
                tag: "ISO 9001 · ISO 14001",
              },
              {
                icon: Flame,
                name: "Oil & Gas",
                challenges: ["HSE regulatory compliance", "Permit-to-work systems"],
                tag: "ISO 45001 · ISO 14001",
              },
              {
                icon: HeartPulse,
                name: "Healthcare",
                challenges: ["Patient safety records", "Regulatory submissions"],
                tag: "ISO 9001 · ISO 45001",
              },
              {
                icon: FlaskConical,
                name: "Laboratories",
                challenges: ["Calibration management", "Test method validation"],
                tag: "ISO/IEC 17025",
              },
              {
                icon: Landmark,
                name: "Government Institutions",
                challenges: ["Policy compliance tracking", "Audit trail requirements"],
                tag: "ISO 9001 · Governance",
              },
              {
                icon: Search,
                name: "Inspection Bodies",
                challenges: ["Inspector competence records", "Impartiality management"],
                tag: "ISO/IEC 17020",
              },
              {
                icon: Building2,
                name: "SMEs",
                challenges: ["Resource-light compliance", "Certification readiness"],
                tag: "ISO 9001 · CAPA",
              },
            ].map(({ icon: Icon, name, challenges, tag }) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[var(--color-teal)]/50 hover:bg-white/8 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="size-10 rounded-lg bg-[var(--color-teal)]/15 flex items-center justify-center shrink-0">
                    <Icon className="size-5 text-[var(--color-teal)]" />
                  </div>
                  <h3 className="font-semibold text-white text-sm leading-snug pt-1">
                    {name}
                  </h3>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {challenges.map((c) => (
                    <li key={c} className="text-xs text-white/60 flex items-start gap-2">
                      <span className="text-[var(--color-orange)] mt-0.5">·</span>
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[var(--color-ocean)]/20 text-[var(--color-teal)] border border-[var(--color-teal)]/20">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — CERTIFICATION READINESS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
              Supporting Certification Readiness &amp; Continual Improvement
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              QUALIFY QMS is built to support organizations on their certification
              journey — from initial gap analysis to post-certification
              surveillance readiness.
            </p>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              "Automated gap analysis tools mapped to ISO clause requirements",
              "Document templates aligned to ISO 9001, 14001, 45001, and sector standards",
              "Internal audit scheduling with digital checklists and nonconformity tracking",
              "CAPA management linked directly to audit findings",
              "Management review packages generated automatically from live system data",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <BadgeCheck className="size-5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <span className="text-[var(--foreground)] text-sm">{point}</span>
              </li>
            ))}
          </ul>

          {/* Disclaimer */}
          <div className="rounded-xl border border-[var(--color-ocean)]/30 bg-[var(--color-ocean)]/5 px-6 py-5 mb-8">
            <p className="text-sm text-[var(--foreground)] leading-relaxed">
              <strong>Important:</strong> Certification decisions are made only
              by authorized certification bodies. QUALIFY supports readiness,
              implementation and continual improvement — we do not issue, grant,
              or guarantee certification outcomes.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/certification-portal"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white font-semibold px-6 py-3.5 text-sm hover:opacity-90 transition-all"
            >
              Explore Certification Portal <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — DEPLOYMENT OPTIONS
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 text-white"
        style={{ background: "oklch(0.15 0.07 250)" }}
      >
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Deployment Options
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose how and where QUALIFY QMS runs for your organization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                icon: Cloud,
                name: "Cloud SaaS",
                hosting: "Fully hosted on QUALIFY infrastructure",
                security: "TLS encryption, regular security audits",
                scalability: "Elastic scaling — add users and modules instantly",
                governance: "Shared responsibility model; SOC-2 aligned",
              },
              {
                icon: Server,
                name: "Private Enterprise",
                hosting: "Deployed on your own servers or private cloud",
                security: "Full data sovereignty and network isolation",
                scalability: "Custom capacity planning by your IT team",
                governance: "Complete organizational control over governance",
              },
              {
                icon: Layers,
                name: "Hybrid",
                hosting: "Core cloud + sensitive data on-premise",
                security: "Split architecture with end-to-end encryption",
                scalability: "Flexible: scale cloud components independently",
                governance: "Balanced control — best of both worlds",
              },
            ].map(({ icon: Icon, name, hosting, security, scalability, governance }) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[var(--color-teal)]/50 transition-all"
              >
                <div className="size-12 rounded-xl bg-[var(--color-teal)]/15 flex items-center justify-center mb-5">
                  <Icon className="size-6 text-[var(--color-teal)]" />
                </div>
                <h3 className="font-display text-xl font-bold mb-5">{name}</h3>
                <div className="space-y-4 text-sm">
                  {[
                    { label: "Hosting", val: hosting },
                    { label: "Security", val: security },
                    { label: "Scalability", val: scalability },
                    { label: "Governance", val: governance },
                  ].map((row) => (
                    <div key={row.label}>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--color-teal)] font-semibold mb-0.5">
                        {row.label}
                      </p>
                      <p className="text-white/70 leading-snug">{row.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — SECURITY & GOVERNANCE
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 text-white"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.13 0.06 250) 0%, oklch(0.17 0.07 250) 100%)",
        }}
      >
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Enterprise Security &amp; Governance
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Built with enterprise controls from the ground up — not bolted on
              afterwards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lock,
                name: "Role-Based Access",
                desc: "Granular permissions by role, department, site, and module — no over-privileged accounts.",
              },
              {
                icon: ClipboardCheck,
                name: "Audit Trails",
                desc: "Every action logged and timestamped — who did what, when, with full change history.",
              },
              {
                icon: ShieldCheck,
                name: "Data Encryption",
                desc: "AES-256 encryption at rest and TLS 1.3 in transit for all organizational data.",
              },
              {
                icon: RefreshCw,
                name: "Backup & Recovery",
                desc: "Automated daily backups with point-in-time restore and disaster recovery protocols.",
              },
              {
                icon: Globe,
                name: "Access Controls",
                desc: "MFA, IP allowlisting, SSO integration, and session management for enterprise security.",
              },
              {
                icon: GitBranch,
                name: "Governance Workflows",
                desc: "Configurable approval chains and escalation rules that enforce your governance model.",
              },
            ].map(({ icon: Icon, name, desc }) => (
              <div
                key={name}
                className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[var(--color-teal)]/40 transition-all"
              >
                <div className="size-10 rounded-lg bg-[var(--color-teal)]/15 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-[var(--color-teal)]" />
                </div>
                <h4 className="font-semibold text-white mb-2">{name}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 10 — IMPLEMENTATION FRAMEWORK
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-page">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4">
              Implementation Framework
            </h2>
            <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
              A structured 7-step process ensuring rapid deployment, user
              adoption, and long-term success.
            </p>
          </div>
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-ocean)] to-[var(--color-teal)] opacity-30 mx-16" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6">
              {[
                { n: 1, title: "Discovery &\nConsultation", desc: "Understanding your organization's operations and goals." },
                { n: 2, title: "Workflow\nAssessment", desc: "Mapping existing processes and compliance gaps." },
                { n: 3, title: "System\nArchitecture", desc: "Designing the configuration blueprint for your deployment." },
                { n: 4, title: "Configuration &\nCustomization", desc: "Building and configuring modules to your specifications." },
                { n: 5, title: "User Training", desc: "Role-specific onboarding and competence sessions." },
                { n: 6, title: "Deployment", desc: "Guided go-live with full QUALIFY team support." },
                { n: 7, title: "Support &\nOptimization", desc: "Ongoing advisory, updates, and continual improvement." },
              ].map((step) => (
                <div key={step.n} className="relative text-center">
                  <div className="size-16 rounded-full border-2 border-[var(--color-teal)] bg-white flex items-center justify-center mx-auto mb-4 shadow-lg z-10 relative">
                    <span className="font-display text-xl font-bold text-[var(--color-navy)]">
                      {step.n}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[var(--color-navy)] text-xs mb-2 whitespace-pre-line leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-[var(--muted-foreground)] text-[11px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 11 — CLIENT BENEFITS
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 text-white"
        style={{ background: "oklch(0.18 0.07 250)" }}
      >
        <div className="container-page max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Organizations Choose QUALIFY QMS Platform
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "One platform replacing multiple disconnected tools",
              "Guided implementation — not a self-serve product drop",
              "Configured to your operations, not generic templates",
              "Dramatically reduces audit preparation time",
              "Real-time compliance visibility for management",
              "Training and competence tracking built in",
              "Supports ISO 9001, 14001, 45001 and sector frameworks",
              "Accessible from any device, anywhere in the world",
              "Dedicated support team — not a chatbot ticketing queue",
              "Continuous product improvements and regulatory updates",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <CheckCircle2 className="size-5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <span className="text-white/85 text-sm leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 12 — BOOK ENTERPRISE DEMO
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="book-demo"
        className="py-20 text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.07 250), oklch(0.20 0.08 249))",
        }}
      >
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left — selling points */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-6 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
                <Zap className="size-3.5" />
                Enterprise Demo
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                See the Platform in Action — Built Around Your Needs
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Our enterprise demo is not a generic product walkthrough. We
                configure a session around your industry, compliance challenges,
                and organizational goals — so you see exactly what QUALIFY QMS
                looks like running your operations.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle2,
                    text: "Live demo tailored to your industry and use case",
                  },
                  {
                    icon: CheckCircle2,
                    text: "One-on-one session with our enterprise team",
                  },
                  {
                    icon: CheckCircle2,
                    text: "No hard selling — genuine consultation first",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Walk away with a proposed solution framework",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="size-5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                    <span className="text-white/75 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              className="rounded-2xl border border-white/15 p-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(24px)",
              }}
            >
              <h3 className="font-display text-xl font-bold mb-6">
                Book Your Enterprise Demo
              </h3>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 13 — FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-16 text-white text-center"
        style={{ background: "oklch(0.13 0.06 250)" }}
      >
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Ready to Transform Your Quality Operations?
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-8">
            Join organizations across Africa and beyond who manage quality,
            compliance, and operational excellence on the QUALIFY platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white font-bold px-7 py-3.5 text-sm hover:opacity-90 transition-all shadow-lg hover:shadow-[0_8px_30px_rgba(224,90,43,0.4)]"
            >
              Start Subscription <ArrowRight className="size-4" />
            </Link>
            <a
              href="#book-demo"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 text-white font-semibold px-7 py-3.5 text-sm hover:bg-white/10 transition-all"
            >
              Request Enterprise Demo
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
