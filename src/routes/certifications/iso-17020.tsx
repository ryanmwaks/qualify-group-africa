import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  CheckCircle2, ArrowRight, Search, FileText, GraduationCap,
  ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw,
  Building2, Scale, Globe, TriangleAlert, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/certifications/iso-17020")({
  head: () => ({
    meta: [
      { title: "ISO/IEC 17020 Accreditation Readiness — Inspection Bodies | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY supports marine, cargo, structural and industrial inspection bodies preparing for ISO/IEC 17020 accreditation — gap assessment, impartiality documentation, procedures, internal audit and KENAS pre-assessment readiness.",
      },
    ],
  }),
  component: Iso17020Page,
});

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "ISO/IEC 17020:2012", label: "Current edition" },
  { value: "Type A / B / C", label: "Inspection body classifications" },
  { value: "KENAS", label: "Accreditation body — Kenya" },
  { value: "5 Clauses", label: "Covering competence, structure & process" },
];

const bodyTypes = [
  {
    type: "Type A",
    colour: "teal" as const,
    title: "Independent Third-Party",
    desc: "Fully independent of both the owner and user of the object being inspected. Type A carries the most stringent impartiality requirements and is the classification required for commercial, regulatory and most marine and cargo inspection mandates.",
    examples: ["Independent marine surveyors", "Commercial cargo inspection companies", "Pre-shipment inspection bodies", "Vehicle inspection authorities"],
  },
  {
    type: "Type B",
    colour: "ocean" as const,
    title: "In-House / Supplier Inspection",
    desc: "A separate, identifiable part of an organisation also involved in design, manufacture, supply or use of the objects inspected. Type B provides inspection solely within the parent organisation — not to external parties.",
    examples: ["Manufacturer QC inspection departments", "Port authority inspection units", "Process control inspection within an operator"],
  },
  {
    type: "Type C",
    colour: "orange" as const,
    title: "Partly Independent Inspection",
    desc: "Part of an organisation also involved in design, manufacture or supply of inspected objects, but that may also inspect for external clients. Type C must demonstrate robust impartiality controls and documented separation from commercial pressure.",
    examples: ["Industrial facilities offering inspection externally", "Government-linked inspection entities", "Technical bureaus providing multi-client inspection"],
  },
];

const requirements = [
  {
    clause: "Clause 4",
    title: "General Requirements — Impartiality",
    desc: "Your body must identify, assess and document all risks to impartiality — financial, commercial, relationship and organisational. Assessors test whether your documented independence is real, not merely stated.",
  },
  {
    clause: "Clause 5",
    title: "Structural Requirements",
    desc: "Legal identity, defined inspection scope, organisational structure with clearly documented responsibilities and lines of authority. Management must demonstrate active commitment — signed policies and reviewed records, not a wall poster.",
  },
  {
    clause: "Clause 6",
    title: "Resource Requirements",
    desc: "Competence of each inspector (education, training, technical knowledge, skills and field experience) must be documented. Equipment must be calibrated, with certificates traceable to national or international standards. Sub-contracting must be controlled.",
  },
  {
    clause: "Clause 7",
    title: "Process Requirements",
    desc: "All inspection methods must be documented as written procedures with defined acceptance criteria. Inspection items must be handled, recorded and reported consistently across all inspectors — field practice must match written procedures exactly.",
  },
  {
    clause: "Clause 8",
    title: "Management System",
    desc: "Option A: 17020-specific MS requirements including document control, internal audits, corrective actions and management review. Option B: ISO 9001-certified organisations may qualify under the 9001-compatible track — QUALIFY will confirm your eligibility.",
  },
];

const journey = [
  { n: 1, icon: Search, title: "Gap Assessment", desc: "Clause-by-clause assessment producing a structured gap report with a readiness score, prioritised action list and realistic timeline — no generic checklists, no assumptions." },
  { n: 2, icon: Scale, title: "Impartiality Review", desc: "We map all conflicts of interest, document your structural independence and draft the impartiality declarations and risk analysis that KENAS assessors will scrutinise. This is where most bodies are weakest." },
  { n: 3, icon: FileText, title: "Documentation", desc: "Quality manual, inspection procedures, work instructions and controlled forms written to 17020's requirements. Existing documents adapted where sound; new procedures developed where gaps are confirmed." },
  { n: 4, icon: GraduationCap, title: "Personnel Competence", desc: "Competence frameworks, qualification records, training matrices and witnessed field assessments for every discipline in your declared scope. Evidence packages built to satisfy assessor questioning." },
  { n: 5, icon: ClipboardCheck, title: "Internal Audit", desc: "Full internal audit against all 17020 clauses — raising nonconformities, reviewing records and confirming corrective actions are implemented before KENAS arrives." },
  { n: 6, icon: AlertTriangle, title: "Corrective Actions", desc: "Root-cause analysis of every audit finding, corrective action plans and tracked closure with documented evidence. Every finding addressed, every action verified — no open items on assessment day." },
  { n: 7, icon: ShieldCheck, title: "Pre-Assessment Review", desc: "A simulated KENAS assessment by QUALIFY's lead auditors — reviewing your system, questioning your personnel and stress-testing your evidence exactly as assessors will." },
  { n: 8, icon: RefreshCw, title: "Surveillance Support", desc: "Ongoing support between accreditation cycles — addressing post-assessment findings, managing scope changes and preparing for KENAS surveillance assessments." },
];

const challenges = [
  { icon: TriangleAlert, title: "Impartiality Documentation", desc: "Most inspection bodies assert independence but cannot demonstrate it systematically. Assessors require a documented risk analysis identifying every commercial, financial and organisational pressure and showing how each is controlled." },
  { icon: FileText, title: "Inspection Method Validity", desc: "Inspection procedures exist as informal practice rather than validated, documented methods with defined acceptance criteria. The standard requires that what is written and what is done in the field match exactly." },
  { icon: GraduationCap, title: "Personnel Competence Records", desc: "Inspector qualifications and field experience are real but unrecorded. Assessors cannot credit competence without a framework, witnessed assessments, training records and authorisation documents for each discipline." },
  { icon: ClipboardCheck, title: "Calibration Traceability", desc: "Equipment is calibrated, but certificates lack traceability to national or international standards. Every certificate in the calibration register will be reviewed — and untraced equipment stops an assessment." },
];

const deliverables = [
  "ISO/IEC 17020 gap assessment report and readiness roadmap",
  "Impartiality risk analysis and declaration documents",
  "Quality manual and controlled inspection procedures",
  "Inspector competence frameworks and training matrix",
  "Equipment calibration and maintenance register",
  "Witnessed assessment records per inspection discipline",
  "Sub-contractor and external service controls register",
  "Internal audit report and nonconformity register",
  "Corrective and preventive action (CAPA) register",
  "Pre-assessment review report and scope draft",
];

// ── Component ──────────────────────────────────────────────────────────────────

function Iso17020Page() {
  return (
    <SiteLayout className="accreditation-theme">
      <PageHero
        eyebrow="ISO/IEC 17020 · Inspection Bodies"
        title="Accreditation Readiness for Inspection Bodies"
        subtitle="For organisations performing marine, cargo, structural, environmental and industrial inspection — demonstrating technical competence and genuine impartiality to KENAS and international markets."
        variant="cert-iso-17020"
      />

      {/* Stats strip */}
      <div className="border-b border-white/8" style={{ background: "rgba(6,43,79,0.75)" }}>
        <div className="container-page py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-bold text-[var(--color-teal)] text-base md:text-lg">{s.value}</div>
              <div className="text-xs text-white/50 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 relative overflow-hidden" style={{ background: "rgba(6,43,79,0.22)" }}>
        <div className="absolute -top-20 right-0 size-96 rounded-full bg-[var(--color-teal)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">What is ISO/IEC 17020?</h2>
              <p className="text-white/75 leading-relaxed mb-4">
                ISO/IEC 17020:2012 specifies the requirements for the competence of bodies performing inspection and for the impartiality and consistency of their inspection activities. It is the internationally recognised framework for inspection body accreditation — covering marine, cargo, pre-shipment, structural, environmental and industrial inspection across all sectors.
              </p>
              <p className="text-white/75 leading-relaxed mb-4">
                Accreditation by KENAS under ISO/IEC 17020 is formal, third-party confirmation that your inspection body operates with documented competence, genuine structural independence and consistent technical processes — not merely that you have policies in place.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                QUALIFY does not issue accreditation. That is the sole role of KENAS. We prepare your organisation to meet the standard genuinely — ensuring your documentation, impartiality controls and personnel evidence withstand the full rigour of formal assessment.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-[0_4px_20px_rgba(228,87,46,0.35)]">
                  Request a Free Gap Check <ArrowRight className="size-4" />
                </Link>
                <Link to="/certification-portal" className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white/70 px-5 py-2.5 text-sm font-medium hover:bg-white/8 transition-colors">
                  All Certification Support <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6" style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.85) 0%, rgba(0,122,138,0.25) 100%)" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30">
                  <Building2 className="size-5 text-[var(--color-teal)]" />
                </div>
                <h3 className="font-display font-semibold text-white">Who This Is For</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-white/70">
                {["Marine and cargo inspection bodies", "Pre-shipment inspection companies", "Technical inspection service providers", "Structural and civil inspection bodies", "Environmental inspection organisations", "Vehicle and equipment inspection authorities", "Industrial inspection departments", "Bodies seeking KENAS accreditation"].map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />{w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(228,87,46,0.09) 0%, rgba(0,122,138,0.14) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Why Accreditation Matters</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-xl mx-auto">
            ISO/IEC 17020 accreditation is market access, legal defensibility and professional standing — not just a certificate
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Globe, title: "International Recognition", desc: "ILAC mutual recognition means your findings are accepted by inspection authorities, ports and regulators worldwide — not just in Kenya." },
              { icon: Scale, title: "Legal Defensibility", desc: "Accredited inspection reports carry formal evidentiary weight in commercial disputes, insurance claims and regulatory proceedings." },
              { icon: Building2, title: "Tender & Contract Access", desc: "Major commodity buyers, shipping lines and government agencies specify ISO/IEC 17020 accredited bodies in their contract requirements." },
              { icon: ShieldCheck, title: "Client Confidence", desc: "Third-party confirmation of your impartiality and competence removes doubt for clients who cannot audit you themselves." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 p-5" style={{ background: "rgba(6,43,79,0.55)" }}>
                <div className="grid place-items-center size-10 rounded-lg bg-[var(--color-orange)]/15 border border-[var(--color-orange)]/25 mb-3">
                  <Icon className="size-5 text-[var(--color-orange)]" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Types */}
      <section className="py-16 relative overflow-hidden" style={{ background: "rgba(6,43,79,0.5)" }}>
        <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-[var(--color-teal)]/5 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Inspection Body Classifications</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-xl mx-auto">
            ISO/IEC 17020 defines three types based on independence structure — your classification determines the level of impartiality evidence required
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {bodyTypes.map((bt) => {
              const c = bt.colour === "teal"
                ? { pill: "bg-[var(--color-teal)]/20 text-[var(--color-teal)] border-[var(--color-teal)]/30", dot: "bg-[var(--color-teal)]" }
                : bt.colour === "ocean"
                ? { pill: "bg-[var(--color-ocean)]/20 text-[var(--color-ocean)] border-[var(--color-ocean)]/30", dot: "bg-[var(--color-ocean)]" }
                : { pill: "bg-[var(--color-orange)]/20 text-[var(--color-orange)] border-[var(--color-orange)]/30", dot: "bg-[var(--color-orange)]" };
              return (
                <div key={bt.type} className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(4,24,48,0.5)" }}>
                  <div className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${c.pill} mb-3`}>{bt.type}</div>
                  <h3 className="font-display font-semibold text-white text-lg mb-3">{bt.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed mb-4">{bt.desc}</p>
                  <div className="border-t border-white/8 pt-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/35 font-semibold mb-2">Typical examples</div>
                    <ul className="space-y-1.5">
                      {bt.examples.map((e) => (
                        <li key={e} className="flex items-center gap-2 text-xs text-white/60">
                          <span className={`size-1.5 rounded-full shrink-0 ${c.dot}`} />{e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.55) 0%, rgba(4,24,48,0.15) 100%)" }}>
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Standard Requirements — Clause by Clause</h2>
          <p className="text-white/55 text-center mb-10 text-sm">The five principal clause areas your inspection body's system must satisfy</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requirements.map((r) => (
              <div key={r.clause} className="rounded-xl border border-white/10 p-5 hover:border-[var(--color-teal)]/40 transition-colors" style={{ background: "rgba(6,43,79,0.6)" }}>
                <div className="text-xs font-bold text-[var(--color-teal)] uppercase tracking-widest mb-1">{r.clause}</div>
                <h3 className="font-display font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 relative overflow-hidden" style={{ background: "rgba(10,111,174,0.08)" }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="absolute -bottom-16 right-0 size-80 rounded-full bg-[var(--color-ocean)]/8 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Our Readiness Journey</h2>
          <p className="text-white/55 text-center mb-10 text-sm">How QUALIFY guides your inspection body from current state to KENAS accreditation-ready</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {journey.map(({ n, icon: Icon, title, desc }) => (
              <div key={n} className="rounded-xl border border-white/10 p-5" style={{ background: "rgba(6,43,79,0.55)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid place-items-center size-9 rounded-lg bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30 shrink-0">
                    <Icon className="size-4 text-[var(--color-teal)]" />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-teal)] uppercase tracking-widest">Step {n}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-2">{title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 relative overflow-hidden" style={{ background: "rgba(6,43,79,0.42)" }}>
        <div className="absolute top-0 left-1/4 size-72 rounded-full bg-[var(--color-teal)]/5 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Common Assessment Failure Points</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-xl mx-auto">
            The four areas where inspection bodies most frequently fail KENAS assessments — and how QUALIFY addresses each
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {challenges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-xl border border-white/10 p-5" style={{ background: "rgba(4,24,48,0.5)" }}>
                <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-orange)]/15 border border-[var(--color-orange)]/25 shrink-0 mt-0.5">
                  <Icon className="size-5 text-[var(--color-orange)]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(0,122,138,0.12) 0%, rgba(6,43,79,0.45) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">What We Deliver</h2>
          <p className="text-white/55 text-center mb-10 text-sm">Every engagement produces a complete, assessment-ready evidence package</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-lg border border-white/10 p-4" style={{ background: "rgba(6,43,79,0.5)" }}>
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <span className="text-sm text-white/75">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.95) 0%, rgba(0,122,138,0.3) 100%)" }}>
        <div className="absolute -top-20 right-0 size-80 rounded-full bg-[var(--color-teal)]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-60 rounded-full bg-[var(--color-ocean)]/10 blur-3xl pointer-events-none" />
        <div className="container-page relative py-16 md:py-20 text-center">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
            Start Your Journey
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl mx-auto">
            Ready to Pursue ISO/IEC 17020 Accreditation?
          </h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
            Contact QUALIFY to discuss your inspection body's current position, your KENAS target timeline and the specific support you need — from a single gap assessment to full end-to-end readiness preparation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 shadow-[0_4px_24px_rgba(228,87,46,0.4)] transition-all">
              Start the Conversation <ArrowRight className="size-4" />
            </Link>
            <Link to="/certification-portal" className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white/80 px-6 py-3 font-medium hover:bg-white/8 transition-colors">
              All Certification Support
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
