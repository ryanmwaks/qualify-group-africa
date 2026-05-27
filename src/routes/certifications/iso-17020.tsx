import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, Search, FileText, GraduationCap, ClipboardCheck, AlertTriangle, ShieldCheck, RefreshCw, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/certifications/iso-17020")({
  head: () => ({
    meta: [
      { title: "ISO/IEC 17020 Accreditation Support — Inspection Bodies | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports inspection bodies in Kenya pursuing KENAS accreditation under ISO/IEC 17020 — gap assessments, documentation, impartiality management, internal audits and readiness reviews." },
    ],
  }),
  component: Iso17020Page,
});

const tabs = [
  { label: "ISO/IEC 17020", to: "/certifications/iso-17020" },
  { label: "ISO 15189",     to: "/certifications/iso-15189" },
  { label: "ISO/IEC 17025", to: "/certifications/iso-17025" },
];

const journey = [
  { n: 1, icon: Search,         title: "Gap Assessment",          desc: "Structured review of your current inspection management system against all ISO/IEC 17020 clause requirements — identifying gaps, nonconformities, and priorities." },
  { n: 2, icon: FileText,       title: "Documentation",           desc: "Development and review of quality manual, inspection procedures, impartiality declarations, method descriptions and record formats to meet standard requirements." },
  { n: 3, icon: GraduationCap,  title: "Competence Development",  desc: "Inspector authorisation frameworks, training records, competence assessments and ongoing CPD tracking aligned to ISO/IEC 17020 personnel requirements." },
  { n: 4, icon: ClipboardCheck, title: "Internal Audit",          desc: "Full internal audit against ISO/IEC 17020 clause requirements — including impartiality, independence, and inspection process verification." },
  { n: 5, icon: AlertTriangle,  title: "Corrective Actions",      desc: "Root-cause analysis and structured CAPA management for audit findings through to verified closure with objective evidence." },
  { n: 6, icon: ShieldCheck,    title: "Accreditation Readiness", desc: "Pre-assessment readiness review to verify your system is genuinely ready before KENAS conducts its formal assessment. Honest, evidence-based findings." },
  { n: 7, icon: RefreshCw,      title: "Continual Improvement",   desc: "Post-accreditation support — surveillance readiness, system improvements, annual internal audit planning and ongoing advisory." },
];

function Iso17020Page() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-20 right-0 size-96 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
        <div className="container-page relative py-20 md:py-28 max-w-4xl">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
            Accreditation Support · Inspection Bodies
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            ISO/IEC 17020{" "}
            <span className="block text-[var(--color-teal)]">Accreditation Readiness</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
            QUALIFY supports inspection bodies in Kenya in building a compliant management system and achieving genuine readiness for accreditation by the{" "}
            <strong className="text-white">Kenya Accreditation Service (KENAS)</strong> under ISO/IEC 17020:2012.
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
          <h2 className="font-display text-3xl font-bold text-navy mb-4">What is ISO/IEC 17020?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ISO/IEC 17020:2012 specifies requirements for the competence of bodies performing inspection and for the impartiality and consistency of their inspection activities. It covers inspection in any technical discipline — including marine, cargo, structural, environmental, and process inspection.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Accreditation under this standard by KENAS demonstrates to clients, regulators and trading partners that your inspection body meets internationally recognised requirements for independence, technical competence and consistent inspection quality.
          </p>
          <div className="space-y-2">
            {[
              "Type A — independent inspection body (no affiliation with inspected parties)",
              "Type B — inspection body that is part of the organisation that designs, manufactures or supplies",
              "Type C — inspection body that is part of a regulatory or statutory body",
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
            { title: "Impartiality & Independence", desc: "Documented impartiality policies, conflict-of-interest declarations and management commitments." },
            { title: "Inspection Procedures", desc: "Controlled inspection method documentation, work instructions and reporting formats." },
            { title: "Personnel Competence", desc: "Inspector authorisation frameworks, training records and ongoing competence evaluation." },
            { title: "Equipment & Calibration", desc: "Equipment registers, calibration schedules and traceability to national/international standards." },
            { title: "Subcontracting Controls", desc: "Subcontractor qualification, competence verification and inspection oversight records." },
            { title: "Complaints & Appeals", desc: "Structured complaints and appeals management process with investigation and closure records." },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">ISO/IEC 17020 Readiness in 7 Stages</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl">A structured journey from where you are today to genuine KENAS accreditation readiness.</p>
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
            <strong>Important:</strong> QUALIFY supports organisations in implementing ISO/IEC 17020 requirements and preparing for external assessment. Accreditation is granted solely by{" "}
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
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to pursue ISO/IEC 17020 accreditation?</h3>
            <p className="text-white/70 leading-relaxed mb-7">Tell us about your inspection body and where you currently stand — we will give you an honest picture of what KENAS accreditation readiness requires.</p>
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
