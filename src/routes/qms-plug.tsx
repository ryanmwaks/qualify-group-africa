import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FileText, ClipboardCheck, AlertTriangle, GitBranch, ShieldCheck, BarChart3, Users, GraduationCap, TrendingUp, ArrowRight, CheckCircle2, Zap, Globe, Cpu } from "lucide-react";
import qmsImg from "@/assets/qms-mockup.jpg";
import inspectorImg from "@/assets/inspector.jpg";

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
  { icon: FileText,       title: "Document Control",      desc: "Centralised, version-controlled policy and procedure management with approval workflows and access control." },
  { icon: ClipboardCheck, title: "Audit Management",       desc: "Schedule, conduct and track internal and external audits with digital checklists and evidence capture." },
  { icon: AlertTriangle,  title: "CAPA Tracking",          desc: "Root-cause analysis, corrective and preventive action planning with deadline tracking and closure verification." },
  { icon: ShieldCheck,    title: "Compliance Monitoring",  desc: "Real-time visibility of compliance status against applicable standards, regulations and your own objectives." },
  { icon: TrendingUp,     title: "Risk Management",        desc: "Structured risk register with likelihood and impact scoring, controls and review schedules." },
  { icon: GraduationCap,  title: "Training Records",       desc: "Competence tracking, training schedules, staff qualification records and training effectiveness evaluations." },
  { icon: GitBranch,      title: "Workflow Automation",    desc: "Configurable approval chains, task routing, notification triggers and escalation rules." },
  { icon: BarChart3,      title: "Reporting Dashboards",   desc: "Management review-ready reports, KPI charts, compliance trend analytics and audit summary views." },
];

const steps = [
  { n: "01", title: "Discovery & Scoping",     desc: "We understand your operations, team structure, compliance requirements and platform objectives." },
  { n: "02", title: "Platform Configuration",  desc: "Modules, document libraries, audit templates, risk registers and workflows are configured for your context." },
  { n: "03", title: "Data Migration",          desc: "Existing policies, procedures and records are transferred and structured within the platform." },
  { n: "04", title: "User Setup & Training",   desc: "Roles, access levels and permissions are configured. Staff are onboarded through practical training sessions." },
  { n: "05", title: "Go-Live Support",         desc: "Guided launch with the QUALIFY team available to resolve issues and support adoption from day one." },
  { n: "06", title: "Ongoing Advisory",        desc: "Post-implementation review, optimisation, technical support and continuous improvement guidance." },
];

const whys = [
  "Guided implementation — not a self-serve product drop",
  "Configured to your operations, not generic templates",
  "Training included for all user levels",
  "Supports ISO 9001, 14001, 45001 and sector frameworks",
  "Accessible from any device, anywhere",
  "Reduces audit preparation time significantly",
];

function QMSDashboard() {
  return (
    <div className="relative">
      <div className="rounded-2xl glass-card-dark border border-white/10 p-5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 mb-5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/60" />
            <span className="size-2.5 rounded-full bg-yellow-400/60" />
            <span className="size-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="text-[11px] text-white/40 font-medium">QMS Dashboard — QUALIFY Platform</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[["94%", "ISO 9001 Readiness", "var(--color-teal)"], ["12", "Active Audits", "var(--color-ocean)"], ["3", "Open CAPAs", "var(--color-orange)"], ["100%", "Doc Control", "var(--color-teal)"]].map(([v, l, c]) => (
            <div key={l as string} className="rounded-xl bg-white/5 border border-white/8 p-3">
              <div className="font-display text-xl font-bold" style={{ color: c as string }}>{v}</div>
              <div className="text-[10px] text-white/40 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        {[["Audit Completion", 72, "#E4572E"], ["Document Control", 100, "#007A8A"], ["CAPA Resolution", 85, "#0A6FAE"]].map(([l, pct, c]) => (
          <div key={l as string} className="mb-3">
            <div className="flex justify-between text-[10px] text-white/45 mb-1"><span>{l}</span><span>{pct}%</span></div>
            <div className="h-1.5 rounded-full bg-white/8">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: c as string }} />
            </div>
          </div>
        ))}
        <div className="space-y-2 pt-1">
          {[{ dot: "#007A8A", text: "CAPA #18 — Root Cause Identified", time: "1h ago" }, { dot: "#E4572E", text: "Audit report pending review", time: "3h ago" }, { dot: "#0A6FAE", text: "ISO 9001 readiness updated", time: "6h ago" }].map((r) => (
            <div key={r.text} className="flex items-center gap-2.5 text-[10px]">
              <span className="size-1.5 rounded-full shrink-0" style={{ background: r.dot }} />
              <span className="text-white/60 flex-1">{r.text}</span>
              <span className="text-white/30">{r.time}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -left-10 bottom-12 glass-card-dark rounded-xl p-3 border border-white/10 shadow-xl animate-float">
        <div className="text-[10px] text-white/50">CAPA #18</div>
        <div className="text-sm font-bold text-white mt-0.5">Root Cause Identified</div>
        <div className="text-[10px] text-[var(--color-teal)] mt-1 font-semibold">In Progress</div>
      </div>
    </div>
  );
}

function QMSPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white min-h-[85vh] flex items-center"
        style={{ background: "linear-gradient(135deg, oklch(0.14 0.07 250) 0%, oklch(0.20 0.08 249) 60%, oklch(0.26 0.09 240) 100%)" }}>
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
              Replace paper-based quality management with a structured, traceable and accessible digital system covering documentation, audits, CAPA, compliance and training records — implemented and supported by the QUALIFY team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Request a Demo <ArrowRight className="size-4" />
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white/8 border border-white/15 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-colors">
                See Features
              </a>
            </div>
            <div className="flex flex-wrap gap-5 pt-2">
              {(["Cloud-Based", "Enterprise-Grade", "Implementation Included"] as const).map((l) => (
                <div key={l} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="size-4 text-[var(--color-teal)]" />{l}
                </div>
              ))}
            </div>
          </div>
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

      {/* Implementation */}
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

      {/* Why choose */}
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
          {/* Real photo card */}
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/3]">
            <img src={qmsImg} alt="Quality management in practice" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-bold text-white mb-2">Ready to digitise your quality management?</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">See the platform in action — configured for your operational context.</p>
              <div className="flex gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
                  Request a Demo <ArrowRight className="size-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white/15 border border-white/25 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/25 transition-colors">
                  Speak to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspector image banner */}
      <div className="relative h-56 overflow-hidden">
        <img src={inspectorImg} alt="On-site quality inspection" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center container-page">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-2">Implementation Included</p>
            <h3 className="font-display text-2xl font-bold text-white">The QUALIFY team sets it up, trains your staff, and supports you from day one.</h3>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
