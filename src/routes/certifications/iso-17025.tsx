import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  CheckCircle2, ArrowRight, Search, FileText, GraduationCap,
  ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw,
  FlaskConical, Ruler, Globe, TriangleAlert, Scale,
  ChevronRight, ChartBar,
} from "lucide-react";

export const Route = createFileRoute("/certifications/iso-17025")({
  head: () => ({
    meta: [
      { title: "ISO/IEC 17025 Accreditation Readiness — Testing & Calibration Labs | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY supports testing and calibration laboratories preparing for ISO/IEC 17025 accreditation — gap assessment, method validation, measurement uncertainty, internal audit and KENAS pre-assessment readiness.",
      },
    ],
  }),
  component: Iso17025Page,
});

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "ISO/IEC 17025:2017", label: "Current edition" },
  { value: "ILAC MRA", label: "Mutual recognition — 100+ countries" },
  { value: "KENAS", label: "Accreditation body — Kenya" },
  { value: "Option A / B", label: "Two management system pathways" },
];

const keyConcepts = [
  {
    icon: Ruler,
    concept: "Metrological Traceability",
    title: "Unbroken Chain to SI Units",
    desc: "Every measurement result must be traceable through an unbroken chain of calibrations to national or international measurement standards — ultimately to SI units. Traceability is not optional: it is the technical foundation that gives laboratory results their international validity. Assessors will follow this chain certificate by certificate.",
    items: [
      "Calibration certificates must reference a national standard",
      "Each instrument's calibration history must be documented",
      "Reference materials must have certified traceability",
      "Sub-contracted calibrations must come from accredited bodies",
    ],
  },
  {
    icon: ChartBar,
    concept: "Measurement Uncertainty",
    title: "Quantified Confidence in Results",
    desc: "ISO/IEC 17025 requires laboratories to estimate and report measurement uncertainty for all quantitative test and calibration results. Uncertainty of measurement is the range within which the true value is expected to lie — it transforms a bare number into a scientifically defensible result. This is among the most commonly absent requirements at first assessment.",
    items: [
      "Uncertainty budget developed for each quantitative method",
      "All significant uncertainty sources identified and quantified",
      "Combined and expanded uncertainty calculated and documented",
      "Uncertainty reported on test/calibration certificates where relevant",
    ],
  },
  {
    icon: FlaskConical,
    concept: "Method Validation vs. Verification",
    title: "Two Different Requirements",
    desc: "Validation is required when your laboratory develops a method or modifies a standard method — you must demonstrate the method is fit for its intended purpose. Verification is required when you adopt an established standard method unchanged — you confirm it performs to the published specifications in your specific laboratory environment. Both require documented studies.",
    items: [
      "Validation: accuracy, precision, linearity, selectivity, robustness",
      "Verification: confirming published performance against your conditions",
      "Scope of validation proportional to the method's intended use",
      "Documented records for every method in your accredited scope",
    ],
  },
];

const requirements = [
  {
    clause: "Clause 4",
    title: "General Requirements — Impartiality",
    desc: "Laboratories must be structured and operated to safeguard impartiality — identifying, assessing and managing commercial, financial and organisational risks to unbiased reporting. Confidentiality of client information and test results must be formally managed with documented controls.",
  },
  {
    clause: "Clause 5",
    title: "Structural Requirements",
    desc: "Legal identity, defined scope of testing and calibration activities, management responsibility and clearly documented organisational roles. The laboratory's declared scope must match what it actually performs — scope statements are examined closely during assessment.",
  },
  {
    clause: "Clause 6",
    title: "Resource Requirements",
    desc: "Personnel competence (education, training, technical skills and authorisation for each test method), equipment calibration with metrological traceability, reference standards, environmental condition controls and management of externally provided services including sub-contracted testing.",
  },
  {
    clause: "Clause 7",
    title: "Process Requirements",
    desc: "Method selection and validation, sampling procedures, handling of test and calibration items, technical records, measurement uncertainty estimation, ensuring results are valid, reporting results (including uncertainty where relevant) and managing complaints and nonconforming work.",
  },
  {
    clause: "Clause 8",
    title: "Management System",
    desc: "Option A: specific 17025 management system requirements — document control, internal audit, corrective actions, management review and continual improvement. Option B: ISO 9001-certified organisations may apply the 9001 management system to satisfy Clause 8 — QUALIFY will confirm your eligibility and any gaps.",
  },
];

const journey = [
  {
    n: 1, icon: Search, title: "Gap Assessment",
    desc: "Clause-by-clause assessment of your laboratory's quality system against ISO/IEC 17025 — covering technical requirements (methods, uncertainty, calibration, competence) and management system requirements. Gap report with a readiness score and prioritised action roadmap.",
  },
  {
    n: 2, icon: FileText, title: "Quality Documentation",
    desc: "Quality manual, standard operating procedures for all test and calibration methods, sampling procedures, instrument operation procedures and controlled forms — written to 17025 requirements. Existing documents revised; missing documents developed.",
  },
  {
    n: 3, icon: Ruler, title: "Method Validation & Uncertainty",
    desc: "Supporting your technical team with method validation or verification studies and measurement uncertainty estimation for every quantitative method in your declared scope. Documented budgets, validation reports and all supporting data prepared for assessor scrutiny.",
  },
  {
    n: 4, icon: GraduationCap, title: "Personnel Competence",
    desc: "Competence frameworks, training records, witnessed performance assessments and formal authorisation documents for every test or calibration method in scope. Evidence packages built to hold up under direct assessor questioning of your technical staff.",
  },
  {
    n: 5, icon: ClipboardCheck, title: "Internal Audit",
    desc: "Full internal audit against all ISO/IEC 17025 clauses — technical and management system — raising nonconformities, reviewing calibration records and verifying corrective actions before the KENAS assessment. Our auditors apply the same rigour as external assessors.",
  },
  {
    n: 6, icon: AlertTriangle, title: "Corrective Actions",
    desc: "Root-cause analysis for every audit finding, corrective action plans and tracked closure with documented effectiveness verification. Every finding resolved, every action evidenced — no open items on assessment day.",
  },
  {
    n: 7, icon: ShieldCheck, title: "Pre-Assessment Review",
    desc: "Simulated KENAS assessment — reviewing documentation, testing technical knowledge of your staff, checking calibration traceability chains and verifying all evidence packages and uncertainty budgets are complete and accessible.",
  },
  {
    n: 8, icon: RefreshCw, title: "Surveillance Readiness",
    desc: "Ongoing support between accreditation cycles — managing scope expansions, addressing post-assessment findings, updating uncertainty budgets for new equipment and preparing for KENAS surveillance assessments.",
  },
];

const challenges = [
  {
    icon: Ruler,
    title: "Measurement Uncertainty Budgets",
    desc: "The most consistently absent requirement at first assessment. Most laboratories perform accurate tests but have never documented an uncertainty budget. Assessors require a complete, quantified uncertainty estimate for every quantitative method — not a generic statement that uncertainty is 'acceptable'.",
  },
  {
    icon: TriangleAlert,
    title: "Calibration Traceability Gaps",
    desc: "Equipment is serviced and calibrated, but calibration certificates cannot be traced to national or international measurement standards through an unbroken chain. Assessors review every certificate. A single untraceable calibration in the register can stop an assessment.",
  },
  {
    icon: FlaskConical,
    title: "Method Validation Documentation",
    desc: "Laboratories use established test methods — some standard, some modified — without documented validation or verification studies. Each method in the declared scope must have a documented validation or verification record with supporting data, not just a reference to a published standard.",
  },
  {
    icon: GraduationCap,
    title: "Staff Competence Records",
    desc: "Technical staff are experienced and capable, but their competence is not formally documented. Assessors require competence frameworks, witnessed assessments for each test method, authorisation records and evidence of periodic competence re-assessment — not just job descriptions and certificates.",
  },
];

const labTypes = [
  { label: "Chemical & Environmental Testing", items: ["Water quality and potability testing", "Soil and sediment analysis", "Air quality and emissions testing", "Environmental contaminants"] },
  { label: "Food & Agricultural Testing", items: ["Food safety and composition analysis", "Pesticide residue testing", "Microbiological food testing", "Feed and agricultural product testing"] },
  { label: "Construction & Materials Testing", items: ["Concrete, aggregate and cement testing", "Steel and structural materials", "Bitumen and pavement materials", "Geotechnical testing"] },
  { label: "Calibration Laboratories", items: ["Dimensional calibration", "Pressure and temperature calibration", "Electrical and electronic calibration", "Mass and force calibration"] },
];

const deliverables = [
  "ISO/IEC 17025 gap assessment report and readiness roadmap",
  "Laboratory quality manual",
  "Standard operating procedures for all test methods in scope",
  "Method validation and verification documentation",
  "Measurement uncertainty budgets for all quantitative methods",
  "Equipment calibration register with traceability documentation",
  "Reference standard and reference material register",
  "Personnel competence frameworks and authorisation records",
  "Internal audit report and nonconformity register",
  "Corrective and preventive action (CAPA) register",
  "Proficiency testing participation plan",
  "Pre-assessment review report and scope statement draft",
];

// ── Component ──────────────────────────────────────────────────────────────────

function Iso17025Page() {
  return (
    <SiteLayout className="accreditation-theme">
      <PageHero
        eyebrow="ISO/IEC 17025 · Testing & Calibration Laboratories"
        title="Accreditation Readiness for Testing & Calibration Laboratories"
        subtitle="For laboratories demonstrating technical competence and metrological traceability — chemical, environmental, food, construction materials, electrical and calibration testing, recognised internationally through ILAC mutual recognition."
        variant="cert-iso-17025"
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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-5">What is ISO/IEC 17025?</h2>
            <p className="text-white/75 leading-relaxed mb-4">
              ISO/IEC 17025:2017 specifies the general requirements for the competence, impartiality and consistent operation of testing and calibration laboratories. It is the internationally recognised accreditation standard for laboratories that produce test results or calibration values — from water quality and food safety to structural materials and precision measurement.
            </p>
            <p className="text-white/75 leading-relaxed mb-4">
              The 2017 revision introduced a risk-based approach, strengthened measurement traceability requirements and expanded the concept of metrologically valid results — including explicit requirements for measurement uncertainty estimation across all quantitative test and calibration activities. These requirements go significantly beyond a general quality management system.
            </p>
            <p className="text-white/75 leading-relaxed mb-5">
              KENAS accreditation to ISO/IEC 17025 connects your laboratory to the ILAC Mutual Recognition Arrangement — meaning results produced in your laboratory are accepted by regulatory authorities, buyers and technical bodies in over 100 countries without re-testing.
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
                <FlaskConical className="size-5 text-[var(--color-teal)]" />
              </div>
              <h3 className="font-display font-semibold text-white">Who This Is For</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                "Chemical and environmental testing laboratories",
                "Food safety and agricultural testing labs",
                "Water quality and potability testing labs",
                "Construction materials testing facilities",
                "Electrical and electronic testing laboratories",
                "Calibration laboratories and metrology facilities",
                "Petroleum and petrochemical testing labs",
                "Laboratories seeking KENAS accreditation",
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
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Why ISO/IEC 17025 Accreditation Matters</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-2xl mx-auto">
            Accreditation connects your laboratory to global trade, regulatory acceptance and technical credibility
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Globe, title: "ILAC Mutual Recognition", desc: "KENAS is a signatory to the ILAC MRA. Accredited test and calibration results are accepted in 100+ countries — removing the need for costly re-testing by importers, regulators and international buyers." },
              { icon: Scale, title: "Regulatory Acceptance", desc: "Government agencies, KEBS, NEMA, health authorities and export certification bodies specify ISO/IEC 17025 accredited results. Without accreditation, your results may simply not be accepted." },
              { icon: ShieldCheck, title: "Technical Credibility", desc: "Accreditation confirms that your results are produced using validated methods, traceable measurements and qualified personnel — not merely that you have procedures and equipment." },
              { icon: FlaskConical, title: "Commercial Advantage", desc: "Export markets, commodity buyers, port authorities and international project owners increasingly mandate accredited laboratory results as a contractual requirement for acceptance." },
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

      {/* Key Technical Concepts */}
      <section className="py-16 relative overflow-hidden" style={{ background: "rgba(6,43,79,0.50)" }}>
        <div className="absolute bottom-0 right-1/4 size-80 rounded-full bg-[var(--color-ocean)]/8 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Three Technical Concepts That Define 17025</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-2xl mx-auto">
            These requirements are technically specific to ISO/IEC 17025 — they go beyond what a general quality management system requires
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {keyConcepts.map(({ icon: Icon, concept, title, desc, items }) => (
              <div key={concept} className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(6,43,79,0.6)" }}>
                <div className="grid place-items-center size-12 rounded-xl bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30 mb-4">
                  <Icon className="size-6 text-[var(--color-teal)]" />
                </div>
                <div className="text-xs font-bold text-[var(--color-teal)] uppercase tracking-widest mb-1">{concept}</div>
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

      {/* Laboratory Types */}
      <section className="py-14" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.45) 0%, transparent 100%)" }}>
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Applicable Laboratory Types</h2>
          <p className="text-white/55 text-center mb-10 text-sm">ISO/IEC 17025 covers all testing and calibration — these are the most common sectors in the East African context</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {labTypes.map(({ label, items }) => (
              <div key={label} className="rounded-xl border border-white/10 p-5" style={{ background: "rgba(6,43,79,0.5)" }}>
                <h3 className="font-display font-semibold text-white text-sm mb-3 pb-3 border-b border-white/10">{label}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-white/60">
                      <CheckCircle2 className="size-3.5 text-[var(--color-teal)] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.55) 0%, rgba(4,24,48,0.15) 100%)" }}>
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
        <div className="absolute top-0 left-1/3 size-72 rounded-full bg-[var(--color-ocean)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">Common Assessment Failure Points</h2>
          <p className="text-white/55 text-center mb-10 text-sm max-w-2xl mx-auto">
            The four areas where testing and calibration laboratories most frequently fail KENAS assessments
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
            Ready to Pursue ISO/IEC 17025 Accreditation?
          </h2>
          <p className="text-white/65 mb-8 max-w-xl mx-auto leading-relaxed">
            Contact QUALIFY to discuss your laboratory's declared scope, current system maturity and KENAS target timeline — from a focused gap assessment to complete end-to-end readiness preparation including uncertainty budgets and method validation.
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
