import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  FlaskConical,
  GraduationCap,
  Microscope,
  RefreshCw,
  Scale,
  Search,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const Route = createFileRoute("/services/accreditation-support")({
  head: () => ({
    meta: [
      { title: "Accreditation Support Services | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY supports KENAS accreditation readiness for inspection bodies, medical laboratories, testing laboratories and calibration laboratories through gap assessments, documentation, competence records, internal audits and corrective action support.",
      },
    ],
  }),
  component: AccreditationSupportPage,
});

const frameworks = [
  {
    Icon: ShieldCheck,
    code: "ISO/IEC 17020",
    title: "Inspection Bodies",
    to: "/certifications/iso-17020",
    desc: "For organisations performing inspection activities: marine, cargo, industrial, structural, environmental and technical inspection.",
    focus: ["Impartiality controls", "Inspection methods", "Inspector competence", "Report consistency"],
  },
  {
    Icon: Microscope,
    code: "ISO 15189",
    title: "Medical Laboratories",
    to: "/certifications/iso-15189",
    desc: "For clinical and medical laboratories producing diagnostic, monitoring and patient-care examination results.",
    focus: ["Patient safety", "Method verification", "Sample handling", "Result authorisation"],
  },
  {
    Icon: FlaskConical,
    code: "ISO/IEC 17025",
    title: "Testing & Calibration Laboratories",
    to: "/certifications/iso-17025",
    desc: "For laboratories demonstrating technical competence, metrological traceability and valid test or calibration results.",
    focus: ["Measurement uncertainty", "Traceability", "Method validation", "Proficiency testing"],
  },
];

const readinessJourney = [
  {
    Icon: Search,
    title: "Readiness Gap Assessment",
    desc: "Clause-by-clause review of your current system against the target accreditation standard, with evidence sampling and a prioritised action roadmap.",
  },
  {
    Icon: FileText,
    title: "Documentation Development",
    desc: "Quality manuals, procedures, forms, registers, work instructions and records aligned to your real operations and declared scope.",
  },
  {
    Icon: GraduationCap,
    title: "Competence Evidence",
    desc: "Training matrices, authorisation records, witnessed assessments and role-based competence files for technical and quality personnel.",
  },
  {
    Icon: ClipboardCheck,
    title: "Internal Audit & Review",
    desc: "Internal audit against the applicable standard, management review support, nonconformity tracking and readiness verification.",
  },
  {
    Icon: TriangleAlert,
    title: "Corrective Action Support",
    desc: "Root-cause analysis, CAPA registers, corrective action evidence and effectiveness checks for internal or external assessment findings.",
  },
  {
    Icon: RefreshCw,
    title: "Assessment & Surveillance Support",
    desc: "Mock assessment, assessment-day preparation, post-assessment response support and ongoing surveillance readiness.",
  },
];

const deliverables = [
  "Accreditation readiness gap assessment report",
  "Clause-by-clause action plan and implementation roadmap",
  "Quality manual and controlled procedure set",
  "Documented scope and evidence register",
  "Competence matrix and personnel authorisation records",
  "Internal audit plan, checklist and audit report",
  "Corrective and preventive action tracker",
  "Management review agenda and evidence pack",
  "Mock assessment report and readiness summary",
  "Post-assessment finding response support",
];

const commonGaps = [
  "Procedures exist, but field practice does not match the documented method.",
  "Personnel are competent, but the competence evidence is incomplete or informal.",
  "Equipment is calibrated, but traceability and maintenance records are fragmented.",
  "Internal audits are performed as checklists, not as evidence-based system audits.",
  "Corrective actions are closed without root-cause analysis or effectiveness checks.",
  "Declared scope is broader than the evidence available to support it.",
];

function AccreditationSupportPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Accreditation Support"
        title="Accreditation Readiness Support for Organizations"
        subtitle="A comprehensive readiness service designed for inspection bodies, medical laboratories, testing laboratories and calibration laboratories preparing for accreditation assessments."
        variant="accreditation-support"
      />

      <section className="py-16 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 size-96 rounded-full bg-[var(--color-teal)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">
                Holistic Accreditation Readiness
              </div>
              <h2 className="font-display text-3xl font-bold text-navy mb-5">
                Build an evidence-ready system before the assessor arrives.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Accreditation is not only about having a quality manual. Assessors test whether your documented system is implemented, whether personnel are competent, whether technical work is valid and whether evidence can be traced across the whole operation.
                </p>
                <p>
                  QUALIFY helps organisations move from intention to readiness: identifying gaps, organising documentation, preparing competence evidence, conducting internal audits and supporting corrective actions before formal assessment.
                </p>
                <p>
                  We do not grant accreditation. Accreditation decisions are made only by authorised accreditation bodies such as KENAS. Our role is to help you arrive prepared, organised and honest about your readiness.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="grid place-items-center size-11 rounded-xl bg-[var(--color-teal)]/12 border border-[var(--color-teal)]/25">
                  <Award className="size-5 text-[var(--color-teal)]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy">Who This Is For</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">This service is designed for organisations and teams preparing for formal accreditation assessment.</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Inspection bodies pursuing ISO/IEC 17020 accreditation",
                  "Medical laboratories preparing for ISO 15189 accreditation",
                  "Testing and calibration laboratories working towards ISO/IEC 17025 accreditation",
                  "Quality managers coordinating KENAS readiness and assessment preparation",
                  "Technical managers and laboratory directors responsible for system implementation and compliance readiness",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-[var(--color-ocean)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">
            Accreditation Pathways
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">Standards We Support</h2>
              <p className="mt-3 text-white/60 max-w-2xl">
                Each standard has different evidence expectations. Choose the pathway that matches your organisation and scope.
              </p>
            </div>
            <Link
              to="/certification-portal"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white hover:bg-white/14 transition-colors w-fit"
            >
              Certification Hub <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {frameworks.map(({ Icon, code, title, to, desc, focus }) => (
              <Link
                key={code}
                to={to as any}
                className="group rounded-2xl border border-white/10 p-6 hover:border-[var(--color-teal)]/45 hover:bg-white/8 transition-all flex flex-col gap-5"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.035) 100%)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center size-12 rounded-xl bg-[var(--color-teal)]/15 border border-[var(--color-teal)]/30 shrink-0">
                    <Icon className="size-6 text-[var(--color-teal)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-teal)] mb-1">{code}</div>
                    <h3 className="font-display font-semibold text-white group-hover:text-[var(--color-teal)] transition-colors">{title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/62 leading-relaxed">{desc}</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-[10px] uppercase tracking-wider text-white/35 font-bold mb-2">Readiness focus</div>
                  <div className="grid gap-2">
                    {focus.map((item) => (
                      <span key={item} className="flex items-center gap-2 text-xs text-white/60">
                        <CheckCircle2 className="size-3.5 text-[var(--color-teal)] shrink-0" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-teal)] group-hover:translate-x-1 transition-transform">
                  View detailed pathway <ArrowRight className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,122,138,0.18) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container-page relative">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Readiness Journey</div>
            <h2 className="font-display text-3xl font-bold text-navy">How We Prepare Your Organisation</h2>
            <p className="mt-3 text-muted-foreground">
              A practical route from current-state review to assessment-ready evidence, designed for technical teams that need clarity and discipline.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readinessJourney.map(({ Icon, title, desc }, index) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/12 border border-[var(--color-teal)]/25">
                    <Icon className="size-5 text-[var(--color-teal)]" />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-orange)] uppercase tracking-wider">Step {index + 1}</span>
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute top-0 right-0 size-80 rounded-full bg-[var(--color-teal)]/8 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">
                What We Deliver
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">A Complete Readiness Evidence Pack</h2>
              <p className="text-white/62 leading-relaxed">
                The goal is not to create documents for show. The goal is to build evidence that reflects how your organisation actually works and can withstand assessor review.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 p-4" style={{ background: "rgba(255,255,255,0.055)" }}>
                  <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/75">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-page">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-orange)]/12 border border-[var(--color-orange)]/25">
                  <TriangleAlert className="size-5 text-[var(--color-orange)]" />
                </div>
                <h2 className="font-display text-2xl font-bold text-navy">Common Readiness Gaps</h2>
              </div>
              <div className="space-y-3">
                {commonGaps.map((gap) => (
                  <div key={gap} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="size-4 text-[var(--color-orange)] shrink-0 mt-0.5" />
                    {gap}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/12 border border-[var(--color-teal)]/25">
                  <Scale className="size-5 text-[var(--color-teal)]" />
                </div>
                <h2 className="font-display text-2xl font-bold text-navy">Impartiality Note</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                QUALIFY provides readiness support, training, documentation assistance and independent advisory services. We do not perform assessments or grant accreditation on behalf of any accreditation body.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our role is to strengthen your internal systems, evidence base and competence so that your organisation is fully prepared for formal assessment. The goal is to ensure the process is transparent, well-documented and reflects genuine implementation across your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-teal)]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 size-48 rounded-full bg-[var(--color-orange)]/12 blur-3xl pointer-events-none" />
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
              Start Accreditation Readiness
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Need a clear picture of your accreditation readiness?</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Tell us your target standard, current status and expected assessment timeline. We will help you understand the practical route from where you are now to evidence-ready.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 shadow-[0_4px_24px_rgba(228,87,46,0.4)] transition-all"
              >
                Request Accreditation Support <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services/quality-assurance"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors"
              >
                Back to Quality Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
