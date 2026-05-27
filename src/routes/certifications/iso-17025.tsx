import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, Search, FileText, GraduationCap, ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/certifications/iso-17025")({
  head: () => ({
    meta: [
      { title: "ISO/IEC 17025 Accreditation Readiness | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports testing and calibration laboratories preparing for ISO/IEC 17025 accreditation — gap assessments, quality system documentation, internal audits and pre-assessment readiness." },
    ],
  }),
  component: Iso17025Page,
});

const requirements = [
  { clause: "Clause 4", title: "General Requirements", desc: "Impartiality, confidentiality and independence — structural obligations applying to all testing and calibration laboratory activities." },
  { clause: "Clause 5", title: "Structural Requirements", desc: "Legal identity, management responsibility, organisational structure and defined roles throughout the laboratory." },
  { clause: "Clause 6", title: "Resource Requirements", desc: "Personnel competence, equipment calibration, reference standards traceability, environmental conditions and externally provided products and services." },
  { clause: "Clause 7", title: "Process Requirements", desc: "Method selection and validation, sampling, handling of test items, measurement uncertainty, reporting results and managing complaints." },
  { clause: "Clause 8", title: "Management System", desc: "Option A (own MS requirements) or Option B (ISO 9001-compatible) — document control, internal audit, management review, corrective actions and continual improvement." },
];

const journey = [
  { n: 1, icon: Search,         title: "Gap Assessment",           desc: "Clause-by-clause assessment of your laboratory's current quality system against ISO/IEC 17025 — producing a structured gap report, readiness score and prioritised roadmap." },
  { n: 2, icon: FileText,       title: "Quality Documentation",    desc: "Quality manual, standard operating procedures, method validation records, uncertainty budgets and laboratory forms developed or improved to meet 17025 requirements." },
  { n: 3, icon: GraduationCap,  title: "Competence & Training",    desc: "Personnel competence frameworks, training records, authorisation matrices and observed performance assessments for all testing and calibration activities." },
  { n: 4, icon: ClipboardCheck, title: "Internal Audit",           desc: "Full internal audit against ISO/IEC 17025 clauses — covering management system, technical processes, method validation and measurement traceability before KENAS assessment." },
  { n: 5, icon: AlertTriangle,  title: "Corrective Actions",       desc: "Root-cause analysis and corrective action management for all audit findings — with documented closure evidence and effectiveness verification for assessors." },
  { n: 6, icon: ShieldCheck,    title: "Pre-Assessment Review",    desc: "Simulated assessment visit verifying documentation, evidence packages, equipment calibration status and personnel readiness before the formal KENAS assessment." },
  { n: 7, icon: RefreshCw,      title: "Surveillance Readiness",   desc: "Ongoing support between accreditation cycles — managing scope changes, addressing post-assessment findings and preparing for surveillance visits." },
];

const deliverables = [
  "ISO/IEC 17025 gap assessment report and readiness roadmap",
  "Laboratory quality manual",
  "Standard operating procedures (SOPs) suite",
  "Method validation and verification records",
  "Measurement uncertainty budgets",
  "Equipment calibration and traceability register",
  "Internal audit report and nonconformity register",
  "Corrective and preventive action (CAPA) register",
];

function Iso17025Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ISO/IEC 17025"
        title="Accreditation Readiness for Testing & Calibration Laboratories"
        subtitle="QUALIFY supports testing and calibration laboratories preparing for KENAS accreditation to ISO/IEC 17025 — from gap assessment through method validation, internal audit and pre-assessment review."
        variant="inspector"
      />

      {/* Intro */}
      <section className="container-page py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">What is ISO/IEC 17025?</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              ISO/IEC 17025 specifies the general requirements for the competence, impartiality and consistent operation of testing and calibration laboratories. It covers both technical competence and the quality management system that supports reliable laboratory results.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Accreditation to ISO/IEC 17025 by KENAS (Kenya Accreditation Service) demonstrates that your laboratory produces technically valid results using validated methods, traceable measurements and qualified personnel operating within a robust quality management system.
            </p>
            <p className="text-white/70 leading-relaxed">
              QUALIFY does not issue accreditation. We prepare your laboratory to meet the standard genuinely — ensuring your documentation, measurement processes and personnel withstand rigorous external assessment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6" style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.8) 0%, rgba(0,122,138,0.2) 100%)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30">
                <FlaskConical className="size-5 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-display font-semibold text-white">Who This Is For</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {["Testing laboratories (chemical, mechanical, environmental)", "Calibration laboratories and metrology facilities", "Food and water testing laboratories", "Construction materials testing laboratories", "Electrical and electronics testing facilities", "Laboratories seeking KENAS accreditation"].map(w => (
                <li key={w} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.4) 0%, transparent 100%)" }}>
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Standard Requirements Overview</h2>
          <p className="text-white/55 text-center mb-10 text-sm">Key clause areas of ISO/IEC 17025 that your laboratory quality system must address</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requirements.map(r => (
              <div key={r.clause} className="rounded-xl border border-white/10 p-5 hover:border-[var(--color-teal)]/40 transition-colors" style={{ background: "rgba(6,43,79,0.5)" }}>
                <div className="text-xs font-bold text-[var(--color-teal)] uppercase tracking-widest mb-1">{r.clause}</div>
                <h3 className="font-display font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="container-page py-16">
        <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Our Readiness Journey</h2>
        <p className="text-white/55 text-center mb-10 text-sm">How QUALIFY guides your laboratory from current state to accreditation-ready</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {journey.map(({ n, icon: Icon, title, desc }) => (
            <div key={n} className="rounded-xl border border-white/10 p-5 flex gap-4" style={{ background: "rgba(6,43,79,0.4)" }}>
              <div className="shrink-0">
                <div className="grid place-items-center size-9 rounded-lg bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30">
                  <Icon className="size-4 text-[var(--color-teal)]" />
                </div>
              </div>
              <div>
                <div className="text-xs text-[var(--color-teal)] font-bold mb-1">Step {n}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16" style={{ background: "rgba(6,43,79,0.35)" }}>
        <div className="container-page max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-white mb-8 text-center">What We Deliver</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {deliverables.map(d => (
              <div key={d} className="flex items-start gap-3 rounded-lg border border-white/8 p-4" style={{ background: "rgba(6,43,79,0.4)" }}>
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <span className="text-sm text-white/75">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 text-center">
        <h2 className="font-display text-2xl font-bold text-white mb-3">Ready to Begin Your Accreditation Journey?</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Contact us to discuss your laboratory's current position and how QUALIFY can support your path to ISO/IEC 17025 accreditation.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
            Start the Conversation <ArrowRight className="size-4" />
          </Link>
          <Link to="/certification-portal" className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white/80 px-6 py-3 font-medium hover:bg-white/5 transition-colors">
            View All Certification Support
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
