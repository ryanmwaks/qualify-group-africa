import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, Search, FileText, GraduationCap, ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw, Building2 } from "lucide-react";

export const Route = createFileRoute("/certifications/iso-17020")({
  head: () => ({
    meta: [
      { title: "ISO/IEC 17020 Accreditation Readiness | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports inspection bodies preparing for ISO/IEC 17020 accreditation — gap assessments, documentation, internal audits, corrective actions and pre-assessment readiness." },
    ],
  }),
  component: Iso17020Page,
});

const requirements = [
  { clause: "Clause 4", title: "General Requirements", desc: "Impartiality, independence and confidentiality — structural requirements for Type A, B and C inspection bodies." },
  { clause: "Clause 5", title: "Structural Requirements", desc: "Legal identity, organisational structure, management commitment, defined responsibilities and documented authority." },
  { clause: "Clause 6", title: "Resource Requirements", desc: "Personnel competence, training records, equipment calibration, sub-contracting controls and facility adequacy." },
  { clause: "Clause 7", title: "Process Requirements", desc: "Inspection methods, documented procedures, handling of inspection items, records and reports." },
  { clause: "Clause 8", title: "Management System Requirements", desc: "Option A (own MS requirements) or Option B (ISO 9001-compatible) — document control, internal audits, corrective actions, management review." },
];

const journey = [
  { n: 1, icon: Search,         title: "Gap Assessment",           desc: "We assess your inspection body against ISO/IEC 17020 clause by clause — producing a structured gap report with priorities and a readiness score." },
  { n: 2, icon: FileText,       title: "Documentation Development", desc: "Quality manual, procedures, work instructions, forms and records aligned to the standard's specific documentation requirements." },
  { n: 3, icon: GraduationCap,  title: "Personnel Competence",     desc: "Inspector competence frameworks, training records, witnessed assessments and evidence packages for each inspection discipline." },
  { n: 4, icon: ClipboardCheck, title: "Internal Audit",           desc: "Full internal audit against 17020 clauses — identifying gaps, raising nonconformities and verifying corrective actions before KENAS assessment." },
  { n: 5, icon: AlertTriangle,  title: "Corrective Actions",       desc: "Root-cause analysis of audit findings, corrective action plans and tracked closure — with documented evidence ready for assessors." },
  { n: 6, icon: ShieldCheck,    title: "Pre-Assessment Review",    desc: "Final readiness review simulating the KENAS assessment visit — verifying your system, evidence and personnel are ready." },
  { n: 7, icon: RefreshCw,      title: "Surveillance Support",     desc: "Ongoing support between accreditation cycles — addressing findings, managing changes and preparing for surveillance assessments." },
];

const deliverables = [
  "ISO/IEC 17020 gap assessment report",
  "Quality manual and documented procedures",
  "Inspector competence records and training matrix",
  "Equipment calibration and maintenance register",
  "Internal audit report and nonconformity register",
  "Corrective action tracking register (CAPA)",
  "Pre-assessment readiness review report",
  "Impartiality and independence declaration documents",
];

function Iso17020Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="ISO/IEC 17020:2012"
        title="Accreditation Readiness for Inspection Bodies"
        subtitle="QUALIFY supports inspection bodies — marine, cargo, technical and general — preparing for KENAS accreditation and ongoing compliance with ISO/IEC 17020:2012."
        variant="inspector"
      />

      {/* Intro */}
      <section className="container-page py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">What is ISO/IEC 17020?</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              ISO/IEC 17020:2012 specifies the requirements for the competence of bodies performing inspection and for the impartiality and consistency of their inspection activities. It applies to Type A, B and C inspection bodies across all sectors.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Accreditation to ISO/IEC 17020 by a national accreditation body (KENAS in Kenya) demonstrates that your inspection body operates with documented competence, structural independence and consistent technical processes.
            </p>
            <p className="text-white/70 leading-relaxed">
              QUALIFY does not issue accreditation — that is the role of KENAS. We prepare your organisation to meet the standard genuinely and withstand the rigour of the formal assessment.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6" style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.8) 0%, rgba(0,122,138,0.2) 100%)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30">
                <Building2 className="size-5 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-display font-semibold text-white">Who This Is For</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {["Marine and cargo inspection bodies", "Technical inspection service providers", "Pre-shipment inspection companies", "Vehicle and equipment inspection bodies", "Industrial inspection service providers", "Bodies seeking KENAS accreditation"].map(w => (
                <li key={w} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Standard requirements */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.4) 0%, transparent 100%)" }}>
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Standard Requirements Overview</h2>
          <p className="text-white/55 text-center mb-10 text-sm">Key clause areas of ISO/IEC 17020:2012 that your system must address</p>
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
        <p className="text-white/55 text-center mb-10 text-sm">How QUALIFY guides your inspection body from current state to accreditation-ready</p>
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
        <p className="text-white/60 mb-8 max-w-xl mx-auto">Contact us to discuss your inspection body's current position and how QUALIFY can support your path to ISO/IEC 17020 accreditation.</p>
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
