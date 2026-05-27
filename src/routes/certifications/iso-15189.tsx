import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, Search, FileText, GraduationCap, ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw, Microscope } from "lucide-react";

export const Route = createFileRoute("/certifications/iso-15189")({
  head: () => ({
    meta: [
      { title: "ISO 15189 Accreditation Readiness | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports medical laboratories preparing for ISO 15189 accreditation — gap assessments, quality system documentation, internal audits and pre-assessment readiness." },
    ],
  }),
  component: Iso15189Page,
});

const requirements = [
  { clause: "Clause 4", title: "General Requirements", desc: "Impartiality, confidentiality and ethical conduct — foundational obligations for medical laboratory accreditation." },
  { clause: "Clause 5", title: "Structural Requirements", desc: "Legal identity, organisational structure, defined roles, management responsibility and laboratory scope documentation." },
  { clause: "Clause 6", title: "Resource Requirements", desc: "Personnel competence, equipment validation, reagent controls, environmental conditions and external services management." },
  { clause: "Clause 7", title: "Process Requirements", desc: "Pre-examination, examination and post-examination procedures — sample handling, method validation, reference ranges and result reporting." },
  { clause: "Clause 8", title: "Management System", desc: "Document control, records management, risk-based thinking, internal audit, nonconformity management and continual improvement." },
];

const journey = [
  { n: 1, icon: Search,         title: "Gap Assessment",           desc: "Systematic clause-by-clause assessment of your laboratory's current quality system against ISO 15189 — with a structured gap report and readiness roadmap." },
  { n: 2, icon: FileText,       title: "Quality Documentation",    desc: "Quality manual, standard operating procedures, work instructions and laboratory forms developed or improved to meet 15189 requirements." },
  { n: 3, icon: GraduationCap,  title: "Competence & Training",    desc: "Staff competence frameworks, training records, observed performance assessments and competency verification for all examination personnel." },
  { n: 4, icon: ClipboardCheck, title: "Internal Audit",           desc: "Full internal audit against ISO 15189 — covering management system, technical processes and pre/post-examination procedures before external assessment." },
  { n: 5, icon: AlertTriangle,  title: "Corrective Actions",       desc: "Root-cause analysis and corrective action management for all audit findings — with documented closure evidence for assessors." },
  { n: 6, icon: ShieldCheck,    title: "Pre-Assessment Review",    desc: "Simulated assessment visit verifying documentation, evidence packages, personnel readiness and technical processes before KENAS assessment." },
  { n: 7, icon: RefreshCw,      title: "Surveillance Readiness",   desc: "Ongoing support between accreditation cycles — managing changes, addressing post-assessment findings and preparing for surveillance visits." },
];

const deliverables = [
  "ISO 15189 gap assessment report and readiness roadmap",
  "Laboratory quality manual",
  "Standard operating procedures (SOPs) suite",
  "Personnel competence records and training matrix",
  "Equipment validation and calibration register",
  "Method validation documentation",
  "Internal audit report and nonconformity register",
  "Corrective and preventive action (CAPA) register",
];

function Iso15189Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ISO 15189"
        title="Accreditation Readiness for Medical Laboratories"
        subtitle="QUALIFY supports clinical and medical laboratories preparing for KENAS accreditation to ISO 15189 — from gap assessment through documentation, internal audit and pre-assessment review."
        variant="inspector"
      />

      {/* Intro */}
      <section className="container-page py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">What is ISO 15189?</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              ISO 15189 specifies the quality and competence requirements for medical laboratories. It covers the full examination cycle — from patient sample collection through analysis to result reporting — ensuring laboratories produce clinically reliable results consistently.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Accreditation to ISO 15189 by KENAS (Kenya Accreditation Service) demonstrates that your laboratory operates with validated methods, qualified personnel, maintained equipment and a documented quality management system.
            </p>
            <p className="text-white/70 leading-relaxed">
              QUALIFY does not issue accreditation. We prepare your laboratory to meet the standard genuinely — ensuring your documentation, personnel and processes withstand rigorous external assessment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6" style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.8) 0%, rgba(0,122,138,0.2) 100%)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30">
                <Microscope className="size-5 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-display font-semibold text-white">Who This Is For</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {["Clinical and diagnostic laboratories", "Hospital-based medical laboratories", "Point-of-care testing facilities", "Pathology and haematology labs", "Microbiology and virology laboratories", "Laboratories seeking KENAS accreditation"].map(w => (
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
          <p className="text-white/55 text-center mb-10 text-sm">Key clause areas of ISO 15189 that your laboratory quality system must address</p>
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
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Contact us to discuss your laboratory's current position and how QUALIFY can support your path to ISO 15189 accreditation.</p>
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
