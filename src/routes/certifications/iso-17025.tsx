import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, Search, FileText, GraduationCap, ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/certifications/iso-17025")({
  head: () => ({
    meta: [
      { title: "ISO/IEC 17025 Accreditation Support — Testing & Calibration Labs | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports testing and calibration laboratories in Kenya pursuing KENAS accreditation under ISO/IEC 17025 — gap assessments, method documentation, calibration management, internal audits and readiness reviews." },
    ],
  }),
  component: Iso17025Page,
});

const tabs = [
  { label: "ISO/IEC 17020", to: "/certifications/iso-17020" },
  { label: "ISO 15189",     to: "/certifications/iso-15189" },
  { label: "ISO/IEC 17025", to: "/certifications/iso-17025" },
];

const journey = [
  { n: 1, icon: Search,         title: "Gap Assessment",          desc: "Structured review of your laboratory against all ISO/IEC 17025:2017 clause requirements — both management and technical — with a detailed gap analysis report and prioritised action plan." },
  { n: 2, icon: FileText,       title: "Documentation",           desc: "Quality manual, method documentation, uncertainty of measurement records, calibration procedures, sampling methods and associated record formats developed to meet standard requirements." },
  { n: 3, icon: GraduationCap,  title: "Competence Development",  desc: "Personnel competence evaluation frameworks, training records, authorisation registers and ongoing competence monitoring aligned to ISO/IEC 17025 personnel requirements." },
  { n: 4, icon: ClipboardCheck, title: "Internal Audit",          desc: "Full internal audit covering both management and technical clauses — including method validation, calibration traceability, equipment management and PT participation records." },
  { n: 5, icon: AlertTriangle,  title: "Corrective Actions",      desc: "Root-cause analysis and structured CAPA management for all audit findings, with objective evidence of effective corrective actions through to verified closure." },
  { n: 6, icon: ShieldCheck,    title: "Accreditation Readiness", desc: "Pre-assessment readiness review confirming your laboratory is genuinely ready — including scope of accreditation clarity — before KENAS conducts its formal assessment." },
  { n: 7, icon: RefreshCw,      title: "Continual Improvement",   desc: "Post-accreditation support — surveillance readiness, scope extension support, annual internal audit planning, proficiency testing coordination and ongoing advisory." },
];

function Iso17025Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-20 right-0 size-96 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
        <div className="container-page relative py-20 md:py-28 max-w-4xl">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
            Accreditation Support · Testing & Calibration Laboratories
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            ISO/IEC 17025{" "}
            <span className="block text-[var(--color-teal)]">Accreditation Readiness</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
            QUALIFY supports testing and calibration laboratories in Kenya in building a compliant management system and achieving genuine readiness for accreditation by the{" "}
            <strong className="text-white">Kenya Accreditation Service (KENAS)</strong> under ISO/IEC 17025:2017.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
              Request Accreditation Support <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white/8 border border-white/15 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-colors">
              Speak to a Quality Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Tab nav */}
      <div className="border-b border-border bg-background sticky top-16 z-40">
        <div className="container-page">
          <div className="flex gap-1 overflow-x-auto py-2">
            {tabs.map((t) => (
              <Link
                key={t.label}
                to={t.to}
                className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                activeProps={{ className: "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] font-semibold" }}
                activeOptions={{ exact: true }}
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* About the standard */}
      <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">The Standard</div>
          <h2 className="font-display text-3xl font-bold text-navy mb-4">What is ISO/IEC 17025?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ISO/IEC 17025:2017 specifies the general requirements for the competence, impartiality and consistent operation of laboratories performing testing, calibration and sampling. It applies to all organisations operating laboratories, regardless of the number of personnel or the extent of the scope of testing or calibration activities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            KENAS accreditation under ISO/IEC 17025 demonstrates to customers, regulators and trade bodies that your laboratory produces technically valid and metrologically traceable results. It is increasingly a contractual requirement in export, regulatory, environmental and industrial testing markets in Kenya and the region.
          </p>
          <div className="space-y-2">
            {[
              "Provides internationally recognised proof of technical competence",
              "Ensures metrological traceability of test and calibration results",
              "Reduces re-testing costs for customers in cross-border trade",
              "Increasingly required for regulatory and export compliance in Kenya",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-6 space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-2">Key Requirements QUALIFY Supports</div>
          {[
            { title: "Method Validation & Verification", desc: "Method validation records, measurement uncertainty estimation, fitness-for-purpose assessments and scope of accreditation definition." },
            { title: "Calibration & Traceability",       desc: "Calibration schedules, equipment registers, calibration certificates review, and traceability chains to national/international measurement standards." },
            { title: "Proficiency Testing",              desc: "Proficiency testing (PT) / interlaboratory comparison participation plans, result evaluation and corrective action records." },
            { title: "Sampling Procedures",              desc: "Documented sampling plans, deviation records and environmental condition monitoring — for laboratories that also perform sampling." },
            { title: "Personnel Competence",             desc: "Competence evaluation frameworks, authorisation records, training documentation and ongoing monitoring for all technical staff." },
            { title: "Impartiality & Confidentiality",  desc: "Impartiality risk assessment, conflict-of-interest management, and customer confidentiality policies and controls." },
          ].map((r) => (
            <div key={r.title} className="flex gap-3">
              <BadgeCheck className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-navy">{r.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">How We Support You</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">ISO/IEC 17025 Readiness in 7 Stages</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">A structured journey from your current laboratory quality position to genuine KENAS accreditation readiness.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {journey.map((j) => (
              <div key={j.n} className="rounded-xl bg-card border border-border p-5 hover:border-[var(--color-teal)] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-9 rounded-lg bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white shrink-0">
                    <j.icon className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-[var(--color-orange)] uppercase tracking-wider">Stage {j.n}</span>
                </div>
                <h3 className="font-display font-bold text-navy text-sm mb-1.5">{j.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KENAS note */}
      <section className="container-page py-16 max-w-3xl">
        <div className="rounded-xl border border-[var(--color-ocean)]/30 bg-[var(--color-ocean)]/5 px-6 py-5">
          <p className="text-sm text-foreground leading-relaxed">
            <strong>Important:</strong> QUALIFY supports laboratories in implementing ISO/IEC 17025 requirements and preparing for external assessment. Accreditation is granted solely by{" "}
            <strong>Kenya Accreditation Service (KENAS)</strong> following their formal assessment process. QUALIFY does not issue, guarantee, or represent accreditation outcomes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-orange)]/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 size-48 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to pursue ISO/IEC 17025 accreditation?</h3>
            <p className="text-white/70 leading-relaxed mb-7">Tell us about your laboratory and your target scope — we will give you an honest picture of what KENAS accreditation readiness requires.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Request Accreditation Support <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors">
                Speak to a Quality Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
