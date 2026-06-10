import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  CheckCircle2, ArrowRight, Search, FileText, GraduationCap,
  ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw,
  Microscope, HeartPulse, FlaskConical, Stethoscope,
  ChevronRight, TriangleAlert, Globe, Scale,
} from "lucide-react";

export const Route = createFileRoute("/certifications/iso-15189")({
  head: () => ({
    meta: [
      { title: "ISO 15189 Accreditation Readiness — Medical Laboratories | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY supports medical and clinical laboratories preparing for ISO 15189 accreditation — gap assessment, SOP development, personnel competence, method validation, internal audit and KENAS pre-assessment readiness.",
      },
    ],
  }),
  component: Iso15189Page,
});

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "ISO 15189:2022", label: "Current edition (updated 2022)" },
  { value: "3 Phases", label: "Pre-, examination & post-examination" },
  { value: "KENAS", label: "Accreditation body — Kenya" },
  { value: "Patient Safety", label: "Core driver of the standard" },
];

const examPhases = [
  {
    icon: FlaskConical,
    phase: "Pre-Examination",
    title: "Before the Test Begins",
    desc: "Covers everything from the point of patient referral to sample arrival at the analyser — request forms, patient preparation, sample collection instructions, transport conditions, receipt and labelling, primary sample handling and rejection criteria. Errors here are the leading source of clinical laboratory mistakes.",
    items: [
      "Test request management and clinician communication",
      "Patient preparation and sample collection guidance",
      "Primary sample transport and stability conditions",
      "Sample acceptance, rejection and labelling controls",
    ],
  },
  {
    icon: Microscope,
    phase: "Examination",
    title: "During Analysis",
    desc: "The analytical phase — method validation or verification, equipment calibration and maintenance, internal quality control, participation in external proficiency testing, measurement uncertainty estimation and the handling of interference and out-of-range results.",
    items: [
      "Method validation and verification documentation",
      "Equipment calibration traceability and maintenance",
      "Internal quality control (IQC) procedures",
      "External quality assessment (EQA/PT) participation",
    ],
  },
  {
    icon: Stethoscope,
    phase: "Post-Examination",
    title: "After the Result",
    desc: "How results are reviewed, interpreted, reported and communicated — critical value notification, reference interval documentation, result release authorisation, sample retention policies and result amendments. Clinicians act on what the laboratory reports, making this phase directly linked to patient outcomes.",
    items: [
      "Result review and authorisation procedures",
      "Critical value notification protocols",
      "Reference interval documentation for local populations",
      "Sample retention policy and amendment handling",
    ],
  },
];

const requirements = [
  {
    clause: "Clause 4",
    title: "General Requirements — Impartiality & Confidentiality",
    desc: "Medical laboratories must operate without pressure that could compromise the integrity of results. Patient confidentiality must be formally managed — covering storage, access, sharing with clinicians and handling of sensitive diagnostic information.",
  },
  {
    clause: "Clause 5",
    title: "Structural Requirements",
    desc: "Legal identity, defined scope of examination activities, organisational structure with clear roles and management responsibility. Laboratories must document the activities within their accredited scope and communicate any limitations to requesting clinicians.",
  },
  {
    clause: "Clause 6",
    title: "Resource Requirements",
    desc: "Competence of laboratory personnel (medical scientists, technologists, technicians and support staff), equipment validation and ongoing calibration, reagent and consumable controls, environmental conditions and management of external services including reference laboratories.",
  },
  {
    clause: "Clause 7",
    title: "Process Requirements",
    desc: "The full examination cycle — pre-examination, examination and post-examination processes — each with documented procedures. Method validation, measurement uncertainty, reference intervals, internal quality control and external quality assessment are all process requirements assessed in detail.",
  },
  {
    clause: "Clause 8",
    title: "Management System",
    desc: "Document control, records management, risk-based thinking applied to all phases, internal audit covering all examination processes, nonconformity management, corrective actions, management review and continual improvement — driven by patient safety outcomes, not just procedural compliance.",
  },
];

const journey = [
  {
    n: 1, icon: Search, title: "Gap Assessment",
    desc: "Systematic clause-by-clause assessment of your laboratory's quality system — pre-examination through management system — producing a structured gap report, readiness score and prioritised action roadmap specific to your examination scope.",
  },
  {
    n: 2, icon: FileText, title: "Quality Documentation",
    desc: "Quality manual, standard operating procedures for every examination and support process, work instructions and controlled forms — written to meet 15189's requirements. Existing SOPs are reviewed and upgraded; missing procedures are developed from scratch.",
  },
  {
    n: 3, icon: FlaskConical, title: "Method Validation & Verification",
    desc: "Supporting your technical team with method validation documentation — accuracy, precision, linearity, interference studies, reference interval verification and measurement uncertainty estimation — to satisfy assessors' technical scrutiny of each examination method.",
  },
  {
    n: 4, icon: GraduationCap, title: "Personnel Competence",
    desc: "Competence frameworks for all roles (analysts, seniors, authorisers), training records, observed performance assessments and authorisation matrices for every examination procedure in scope. Evidence packages built for individual assessor questioning.",
  },
  {
    n: 5, icon: ClipboardCheck, title: "Internal Audit",
    desc: "Full internal audit covering management system, pre-examination, examination and post-examination processes — raising nonconformities, reviewing records and verifying corrective actions before the KENAS assessment. Our auditors question personnel as assessors will.",
  },
  {
    n: 6, icon: AlertTriangle, title: "Corrective Actions",
    desc: "Root-cause analysis and corrective action management for all internal audit findings — with documented closure evidence and effectiveness verification. No open findings when assessment day arrives.",
  },
  {
    n: 7, icon: ShieldCheck, title: "Pre-Assessment Review",
    desc: "A simulated KENAS assessment — reviewing documentation, testing knowledge of procedures across the team, checking technical processes and verifying all evidence packages are complete and accessible for assessors.",
  },
  {
    n: 8, icon: RefreshCw, title: "Surveillance Readiness",
    desc: "Ongoing support between accreditation cycles — managing post-assessment findings, handling scope changes and supporting your team through KENAS surveillance assessments.",
  },
];

const challenges = [
  {
    icon: TriangleAlert,
    title: "Method Validation Documentation",
    desc: "Laboratories routinely perform validated examinations but have no documented validation or verification studies. Assessors require written evidence — accuracy data, precision studies, reference interval verification and measurement uncertainty estimates — for every examination method in scope.",
  },
  {
    icon: FlaskConical,
    title: "Measurement Uncertainty",
    desc: "Many medical laboratories have not estimated measurement uncertainty for their quantitative examinations. ISO 15189 requires a documented uncertainty budget for each quantitative method — a specific technical requirement that routinely catches laboratories unprepared.",
  },
  {
    icon: GraduationCap,
    title: "Staff Competence Evidence",
    desc: "Staff competence is real but informal. Assessors require competence frameworks, documented observed assessments for each procedure, authorisation records and evidence that competence is re-assessed at defined intervals — not just during initial training.",
  },
  {
    icon: Scale,
    title: "Reference Interval Validity",
    desc: "Laboratories may rely on manufacturer or textbook reference intervals without documenting that they are appropriate for the intended examinations. ISO 15189 requires documented verification or establishment of reference intervals where relevant to the laboratory service.",
  },
];

const deliverables = [
  "ISO 15189 gap assessment report and readiness roadmap",
  "Laboratory quality manual",
  "Standard operating procedures (SOPs) for all examination processes",
  "Method validation and verification documentation",
  "Measurement uncertainty budgets for quantitative methods",
  "Reference interval verification or establishment records",
  "Personnel competence frameworks and training matrix",
  "Equipment validation, calibration and maintenance records",
  "Internal quality control (IQC) procedures and records",
  "Internal audit report and nonconformity register",
  "Corrective and preventive action (CAPA) register",
  "Pre-assessment review report and scope draft",
];

// ── Component ──────────────────────────────────────────────────────────────────

function Iso15189Page() {
  return (
    <SiteLayout className="accreditation-theme">
      <PageHero
        eyebrow="ISO 15189 · Medical Laboratories"
        title="Accreditation Readiness for Medical Laboratories"
        subtitle="For clinical and medical laboratories providing diagnostic, monitoring and research testing for patient care — demonstrating technical competence, examination reliability and quality management to KENAS."
        variant="cert-iso-15189"
      />

      {/* Stats strip */}
      <div className="border-b border-white/8" style={{ background: "rgba(6,43,79,0.7)" }}>
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
        <div className="absolute top-0 right-0 size-96 rounded-full bg-[var(--color-teal)]/8 blur-3xl pointer-events-none" />
        <div className="container-page relative">
        <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">What is ISO 15189?</h2>
            <p className="text-white/75 leading-relaxed mb-4">
              ISO 15189 specifies the quality and competence requirements for medical laboratories. Unlike ISO/IEC 17025 — which applies to general testing and calibration — ISO 15189 is written specifically for the clinical environment, recognising that laboratory results directly inform patient care decisions with real consequences for patient safety.
            </p>
            <p className="text-white/75 leading-relaxed mb-4">
              The standard covers the full examination cycle: pre-examination (sample collection through receipt), examination (analysis, quality control, method validation) and post-examination (result authorisation, reporting and critical value notification). Each phase carries specific, documented requirements that go significantly beyond general quality management.
            </p>
            <p className="text-white/75 leading-relaxed mb-5">
              KENAS accreditation to ISO 15189 is the formal third-party confirmation that your laboratory produces clinically reliable results using validated methods, maintained equipment and qualified personnel — and that your quality system actively protects patients from laboratory error.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
                Request a Free Gap Check <ArrowRight className="size-4" />
              </Link>
              <Link to="/certification-portal" className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white/70 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition-colors">
                All Certification Support <ChevronRight className="size-4" />
              </Link>
            </div>
          </div>
          <div
            className="rounded-2xl border border-white/10 p-6"
            style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.9) 0%, rgba(0,122,138,0.25) 100%)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30">
                <Microscope className="size-5 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-display font-semibold text-white">Who This Is For</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                "Clinical chemistry and biochemistry laboratories",
                "Haematology and coagulation laboratories",
                "Microbiology and virology laboratories",
                "Pathology and histology laboratories",
                "Hospital-based medical laboratories",
                "Diagnostic imaging support laboratories",
                "Point-of-care testing programmes",
                "Blood banks and transfusion services",
              ].map((w) => (
                <li key={w} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(228,87,46,0.08) 0%, rgba(0,122,138,0.12) 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Why ISO 15189 Accreditation Matters</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-2xl mx-auto">
            Laboratory results inform 70% of clinical decisions — the standard exists to ensure those results are reliable enough to act on
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: HeartPulse, title: "Patient Safety", desc: "Wrong laboratory results lead to misdiagnosis, mistreatment and direct patient harm. ISO 15189 systematises the controls that prevent analytical errors reaching clinicians." },
              { icon: Globe, title: "International Recognition", desc: "KENAS accreditation is recognised through AFRAC and ILAC — meaning your results are accepted by hospitals, insurance providers and health authorities regionally and internationally." },
              { icon: Scale, title: "Regulatory & Contractual Access", desc: "Health ministry contracting, insurance panel listing and international health programme participation increasingly require ISO 15189 accreditation as a baseline qualification." },
              { icon: ShieldCheck, title: "Clinical Confidence", desc: "Clinicians, patients and referring institutions gain documented assurance that results from your laboratory are produced under a verified, audited quality system." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-white/10 p-5" style={{ background: "rgba(6,43,79,0.5)" }}>
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

      {/* Examination Phases */}
      <section className="py-16 relative overflow-hidden" style={{ background: "rgba(6,43,79,0.50)" }}>
        <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-[var(--color-ocean)]/8 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">The Three Examination Phases</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-2xl mx-auto">
            ISO 15189 structures requirements around the complete patient examination journey — errors at any phase can affect clinical decisions
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {examPhases.map(({ icon: Icon, phase, title, desc, items }) => (
              <div key={phase} className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(6,43,79,0.6)" }}>
                <div className="grid place-items-center size-12 rounded-xl bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30 mb-4">
                  <Icon className="size-6 text-[var(--color-teal)]" />
                </div>
                <div className="text-xs font-bold text-[var(--color-teal)] uppercase tracking-widest mb-1">{phase}</div>
                <h3 className="font-display font-semibold text-white text-lg mb-3">{title}</h3>
                <p className="text-sm text-white/65 leading-relaxed mb-4">{desc}</p>
                <div className="border-t border-white/8 pt-4 space-y-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-white/55">
                      <CheckCircle2 className="size-3.5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.5) 0%, transparent 100%)" }}>
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Standard Requirements — Clause by Clause</h2>
          <p className="text-white/55 text-center mb-10 text-sm">The five principal clause areas your laboratory quality system must satisfy</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requirements.map((r) => (
              <div
                key={r.clause}
                className="rounded-xl border border-white/10 p-5 hover:border-[var(--color-teal)]/40 transition-colors"
                style={{ background: "rgba(6,43,79,0.55)" }}
              >
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
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-[var(--color-ocean)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Our Readiness Journey</h2>
          <p className="text-white/55 text-center mb-10 text-sm">How QUALIFY guides your laboratory from current state to KENAS accreditation-ready</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {journey.map(({ n, icon: Icon, title, desc }) => (
              <div key={n} className="rounded-xl border border-white/10 p-5" style={{ background: "rgba(6,43,79,0.5)" }}>
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
      <section className="py-16 relative" style={{ background: "rgba(6,43,79,0.35)" }}>
        <div className="absolute top-0 right-1/4 size-72 rounded-full bg-[var(--color-teal)]/5 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Common Assessment Failure Points</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-2xl mx-auto">
            The four areas where medical laboratories most frequently fail KENAS assessments — and how QUALIFY addresses each
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {challenges.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-white/10 p-5"
                style={{ background: "rgba(6,43,79,0.5)" }}
              >
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
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">What We Deliver</h2>
          <p className="text-white/55 text-center mb-10 text-sm">Every engagement produces a complete, assessment-ready evidence package</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deliverables.map((d) => (
              <div
                key={d}
                className="flex items-start gap-3 rounded-lg border border-white/8 p-4"
                style={{ background: "rgba(6,43,79,0.5)" }}
              >
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <span className="text-sm text-white/75">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.9) 0%, rgba(0,122,138,0.3) 100%)" }}
      >
        <div className="absolute -top-20 right-0 size-80 rounded-full bg-[var(--color-teal)]/10 blur-3xl pointer-events-none" />
        <div className="container-page relative py-16 md:py-20 text-center">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
            Start Your Journey
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl mx-auto">
            Ready to Pursue ISO 15189 Accreditation?
          </h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
            Contact QUALIFY to discuss your laboratory's current position, examination scope and KENAS target timeline — from a focused gap assessment to full end-to-end readiness preparation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 shadow-[0_4px_24px_rgba(228,87,46,0.4)] transition-all"
            >
              Start the Conversation <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/certification-portal"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white/80 px-6 py-3 font-medium hover:bg-white/8 transition-colors"
            >
              All Certification Support
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
