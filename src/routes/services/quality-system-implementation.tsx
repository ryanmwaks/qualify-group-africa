import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import qmsImg from "@/assets/qms-mockup.jpg";
import inspectorImg from "@/assets/inspector.jpg";

const QMS_PORTAL_URL = "https://quality.qualify.co.ke";
const DEMO_URL = "https://qms.mlglobtech.com/login";

export const Route = createFileRoute("/services/quality-system-implementation")({
  head: () => ({
    meta: [
      { title: "Quality Management Portal | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY implements practical quality management systems and digital QMS platforms for document control, audits, CAPA, risk, training records, compliance monitoring and reporting.",
      },
    ],
  }),
  component: QualitySystemImplementationPage,
});

const features = [
  { icon: FileText, title: "Document Control", desc: "Centralised, version-controlled policy and procedure management with approval workflows and access control." },
  { icon: ClipboardCheck, title: "Audit Management", desc: "Schedule, conduct and track internal and external audits with digital checklists and evidence capture." },
  { icon: AlertTriangle, title: "CAPA Tracking", desc: "Root-cause analysis, corrective and preventive action planning with deadline tracking and closure verification." },
  { icon: ShieldCheck, title: "Compliance Monitoring", desc: "Real-time visibility of compliance status against applicable standards, regulations and your own objectives." },
  { icon: TrendingUp, title: "Risk Management", desc: "Structured risk register with likelihood and impact scoring, controls and review schedules." },
  { icon: GraduationCap, title: "Training Records", desc: "Competence tracking, training schedules, staff qualification records and training effectiveness evaluations." },
  { icon: GitBranch, title: "Workflow Automation", desc: "Configurable approval chains, task routing, notification triggers and escalation rules." },
  { icon: BarChart3, title: "Reporting Dashboards", desc: "Management review-ready reports, KPI charts, compliance trend analytics and audit summary views." },
];

const steps = [
  { n: "01", title: "Discovery & Scoping", desc: "We understand your operations, team structure, compliance requirements and platform objectives." },
  { n: "02", title: "Platform Configuration", desc: "Modules, document libraries, audit templates, risk registers and workflows are configured for your context." },
  { n: "03", title: "Data Migration", desc: "Existing policies, procedures and records are transferred and structured within the platform." },
  { n: "04", title: "User Setup & Training", desc: "Roles, access levels and permissions are configured. Staff are onboarded through practical training sessions." },
  { n: "05", title: "Go-Live Support", desc: "Guided launch with the QUALIFY team available to resolve issues and support adoption from day one." },
  { n: "06", title: "Ongoing Advisory", desc: "Post-implementation review, optimisation, technical support and continuous improvement guidance." },
];

const whys = [
  "Guided implementation and onboarding support - not just a self-service software product",
  "Comprehensive tools to manage all aspects of your Quality Management System (QMS)",
  "User training and ongoing support for administrators, managers and operational teams",
  "Flexible configuration to support any management system standard and industry-specific framework",
  "Secure, cloud-based access from anywhere, on any device",
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
          <div className="text-[11px] text-white/40 font-medium">QMS Dashboard - QUALIFY Platform</div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            ["94%", "ISO 9001 Readiness", "var(--color-teal)"],
            ["12", "Active Audits", "var(--color-ocean)"],
            ["3", "Open CAPAs", "var(--color-orange)"],
            ["100%", "Doc Control", "var(--color-teal)"],
          ].map(([value, label, color]) => (
            <div key={label} className="rounded-xl bg-white/5 border border-white/8 p-3">
              <div className="font-display text-xl font-bold" style={{ color }}>{value}</div>
              <div className="text-[10px] text-white/40 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {[
          ["Audit Completion", 72, "#E4572E"],
          ["Document Control", 100, "#007A8A"],
          ["CAPA Resolution", 85, "#0A6FAE"],
        ].map(([label, percent, color]) => (
          <div key={label as string} className="mb-3">
            <div className="flex justify-between text-[10px] text-white/45 mb-1">
              <span>{label}</span>
              <span>{percent}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/8">
              <div className="h-full rounded-full" style={{ width: `${percent}%`, background: color as string }} />
            </div>
          </div>
        ))}

        <div className="space-y-2 pt-1">
          {[
            { dot: "#007A8A", text: "CAPA #18 - Root Cause Identified", time: "1h ago" },
            { dot: "#E4572E", text: "Audit report pending review", time: "3h ago" },
            { dot: "#0A6FAE", text: "ISO 9001 readiness updated", time: "6h ago" },
          ].map((row) => (
            <div key={row.text} className="flex items-center gap-2.5 text-[10px]">
              <span className="size-1.5 rounded-full shrink-0" style={{ background: row.dot }} />
              <span className="text-white/60 flex-1">{row.text}</span>
              <span className="text-white/30">{row.time}</span>
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

function QualitySystemImplementationPage() {
  return (
    <SiteLayout>
      <section
        className="relative overflow-hidden text-white min-h-[85vh] flex items-center"
        style={{ background: "linear-gradient(135deg, oklch(0.14 0.07 250) 0%, oklch(0.20 0.08 249) 60%, oklch(0.26 0.09 240) 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-0 right-0 w-2/3 h-full" style={{ background: "radial-gradient(ellipse at 90% 30%, oklch(0.55 0.09 205 / 0.25) 0%, transparent 60%)" }} />
        <div className="container-page relative py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-teal)]">
              <Cpu className="size-3.5" /> Quality System Management Portal
            </div>
            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Smart Digital<br />
              <span className="text-gradient-navy">Quality Management</span><br />
              Platform
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              Transform paper-based quality processes into a structured, traceable and accessible digital quality management system. The platform streamlines document control, audits, corrective and preventive actions (CAPA), compliance monitoring and training record management - all implemented and supported by the QUALIFY team.
            </p>
            <p className="text-base text-white/70 leading-relaxed max-w-lg">
              Choose a Quality Management as a Service (QMaaS) model for a fully managed solution, or opt for a bespoke QMS configuration tailored to your organisation's specific operational and compliance requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={QMS_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Access QMS Portal <ArrowRight className="size-4" />
              </a>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/8 border border-white/20 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-colors">
                See Our Demo
              </a>
            </div>
            <div className="flex flex-wrap gap-5 pt-2">
              {(["Cloud-Based", "Enterprise-Grade", "Implementation Included"] as const).map((label) => (
                <div key={label} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="size-4 text-[var(--color-teal)]" />{label}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <QMSDashboard />
          </div>
        </div>
      </section>

      <section id="features" className="container-page py-20">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Platform Features</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Everything your QMS needs in one place</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Eight core modules, configured for your operations and supported by the QUALIFY team from day one.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="group rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="size-12 rounded-xl bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white mb-4 group-hover:shadow-[0_0_20px_rgba(0,122,138,0.4)] transition-shadow">
                <feature.icon className="size-6" />
              </div>
              <h3 className="font-display font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Implementation</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">How we implement it</h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">QUALIFY manages the full implementation, from configuration to go-live and beyond. You are not left to figure it out alone.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div key={step.n} className="glass-card-dark rounded-2xl p-6 border border-white/8 hover:border-[var(--color-teal)]/40 transition-all">
                <div className="font-display text-3xl font-black text-white/10 mb-3">{step.n}</div>
                <h3 className="font-display font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Why Choose Us</div>
            <h2 className="font-display text-3xl font-bold text-navy mb-4">More Than Software - A Supported Quality Management Solution</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our platform combines powerful digital tools with expert guidance to help you successfully implement, manage and continually improve your quality management system.
            </p>
            <ul className="space-y-3">
              {whys.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/3]">
            <img src={qmsImg} alt="Quality management in practice" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-bold text-white mb-2">Ready to digitise your quality management?</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">See the platform in action, configured for your operational context.</p>
              <div className="flex flex-wrap gap-3">
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
                  See Demo <ArrowRight className="size-4" />
                </a>
                <a href={QMS_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/15 border border-white/25 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/25 transition-colors">
                  Digitize Your QMS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Certification Management</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-4">Manage Your QMS in One Place</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Keep certification records, audit evidence, renewal schedules and readiness actions visible in one managed quality environment.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-7">
                {["Certification status tracking", "Audit evidence library", "Renewal and surveillance reminders", "Corrective action visibility"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={QMS_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-ocean)] transition-colors">
                  Access QMS Portal <ArrowRight className="size-4" />
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-navy hover:bg-muted transition-colors">
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="bg-navy p-8 md:p-10 text-white flex items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-teal)] mb-5">
                  <Globe className="size-3.5" /> Online Portal
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Portal access follows the service journey.</h3>
                <p className="text-white/65 leading-relaxed">
                  Clients can first understand the relevant service, then continue to the right platform when access, demo or certification tracking is needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
