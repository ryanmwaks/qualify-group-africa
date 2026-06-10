import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  RefreshCw,
  Scale,
  Search,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

const CERT_URL = "https://quality.qualify.co.ke";

export const Route = createFileRoute("/services/certification-support")({
  head: () => ({
    meta: [
      { title: "Certification Support Services | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY supports organisations preparing for ISO certification through gap assessments, documentation, internal audits, corrective actions and continual improvement.",
      },
    ],
  }),
  component: CertificationSupportPage,
});

const audiences = [
  "Quality management (ISO 9001) - manufacturing and industrial sectors",
  "Food safety systems (ISO 22000, FSSC 22000) - food and beverage industry",
  "Healthcare and medical devices (ISO 13485) - health and pharmaceutical sector",
  "IT service management (ISO/IEC 20000-1) - technology and service providers",
  "Information security (ISO/IEC 27001) - data and cyber security",
  "Occupational health and safety (ISO 45001) - workplace safety compliance",
  "Environmental management (ISO 14001) - sustainability-focused organisations",
  "Energy management (ISO 50001) - energy-intensive industries",
  "TIC and laboratories (ISO/IEC 17020, 17025, 17065) - inspection, testing and certification bodies",
  "Integrated management systems (IMS) - multi-standard organisations",
];

const frameworks = [
  { code: "ISO 9001:2015", name: "Quality Management Systems", slug: "iso-9001" },
  { code: "ISO 14001:2015", name: "Environmental Management Systems", slug: "iso-14001" },
  { code: "ISO 14001 Transition Readiness", name: "Environmental management system updates and transition support", slug: "iso-14001-transition" },
  { code: "ISO 45001:2018", name: "Occupational Health and Safety Management Systems", slug: "iso-45001" },
  { code: "ISO 22000:2018", name: "Food Safety Management Systems", slug: "iso-22000" },
  { code: "FSSC 22000 v6", name: "Food Safety System Certification scheme", slug: "fssc-22000" },
  { code: "ISO/IEC 27001:2022", name: "Information Security Management Systems", slug: "iso-27001" },
  { code: "ISO/IEC 27000 Family", name: "Information Security standards family and guidance framework", slug: "iso-27000" },
  { code: "ISO/IEC 20000-1:2018", name: "IT Service Management Systems", slug: "iso-20000-1" },
  { code: "ISO 50001:2018", name: "Energy Management Systems", slug: "iso-50001" },
  { code: "GDP", name: "Good Distribution Practices", slug: "gdp" },
  { code: "HACCP", name: "Hazard Analysis and Critical Control Points", slug: "haccp" },
  { code: "GMP", name: "Good Manufacturing Practices", slug: "gmp" },
  { code: "RoHS", name: "Restriction of Hazardous Substances", slug: "rohs" },
  { code: "CE Marking", name: "European Product Conformity Readiness", slug: "ce-marking" },
];

const readinessJourney = [
  { Icon: Search, title: "Readiness Gap Assessment", desc: "Gap assessment against the target certification standard, with findings prioritised into a practical implementation roadmap." },
  { Icon: ClipboardCheck, title: "Scope & Objectives", desc: "Define the processes, sites and functions in scope, then establish policies, objectives and measurable system priorities." },
  { Icon: FileText, title: "System Documentation", desc: "Develop the quality manual, procedures, SOPs, forms and registers needed to operate and evidence the management system." },
  { Icon: GraduationCap, title: "Implementation & Competence", desc: "Embed risk-based thinking, clarify responsibilities and prepare personnel to implement the system consistently." },
  { Icon: ShieldCheck, title: "Internal Audit & Review", desc: "Conduct internal audits, support management review and track corrective actions through effective closure." },
  { Icon: RefreshCw, title: "Pre-Certification Readiness", desc: "Complete a final readiness assessment and strengthen remaining evidence before the certification body audit." },
];

const evidencePack = [
  "Certification readiness gap assessment report",
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
  "Management system documents exist, but routine operations do not consistently follow them.",
  "Certification scope, processes and responsibilities are not clearly defined.",
  "Internal audits identify findings without strong root-cause analysis or effectiveness checks.",
  "Management reviews are held without complete performance evidence or tracked decisions.",
  "Personnel understand their roles but competence and awareness records are incomplete.",
  "Corrective actions are closed administratively without evidence of sustainable improvement.",
];

const whenToEngage = [
  "Seeking ISO certification for the first time",
  "Expanding an existing certification to new standards or scopes",
  "Following a failed certification audit",
  "Maintaining and improving an existing certified management system",
];

const existingDeliverables = [
  "Gap assessment report",
  "Management system documentation suite",
  "Internal audit report",
  "Corrective action register with resolution evidence",
  "Pre-certification readiness summary",
];

function CertificationSupportPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Certification Support"
        title="Certification Readiness - From Gap to Audit-Ready"
        subtitle="QUALIFY supports organizations preparing for certification by accredited certification bodies through gap assessments, documentation development, internal audits, corrective action support and continual improvement activities. Certification decisions are made solely by authorized certification bodies."
        variant="certification-support"
      />

      <section className="py-16 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 size-96 rounded-full bg-[var(--color-teal)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="max-w-4xl">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Holistic Certification Readiness</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-5">Build an evidence-ready system before the assessor arrives.</h2>
              <p className="text-muted-foreground leading-relaxed">
                We work alongside your team from initial gap assessment through to audit-ready status. Our advisors understand what certification bodies look for - and help you build a management system that is genuinely operational, not just documented. We support all major ISO certification frameworks and sector-specific standards.
              </p>
          </div>

          <aside className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-4 mb-7">
                <div className="grid place-items-center size-11 rounded-xl bg-[var(--color-teal)]/12 border border-[var(--color-teal)]/25">
                  <Award className="size-5 text-[var(--color-teal)]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy">Who This Is For</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Organisations preparing for ISO certification and integrated management systems</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                {audiences.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
          </aside>

          <div className="mt-8 rounded-xl border border-[var(--color-teal)]/25 bg-card p-5 shadow-[var(--shadow-card)] md:flex md:items-center md:justify-between md:gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-2">Portal Access</div>
              <p className="text-sm text-muted-foreground">Continue to the certification portal when you are ready to access the online platform.</p>
            </div>
            <a href={CERT_URL} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-ocean)] transition-colors">
              Visit Certification Portal <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page relative">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Certification Pathways</div>
          <h2 className="font-display text-3xl font-bold text-white">Standards We Support</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            Internationally recognized management system standards we support organizations to implement, improve and achieve certification readiness.
          </p>
          <h3 className="font-display text-xl font-semibold text-white mt-8 mb-5">Certification Frameworks</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworks.map((framework) => (
              <Link key={framework.code} to="/certifications/$framework" params={{ framework: framework.slug }} className="group rounded-xl border border-white/15 p-5 hover:border-[var(--color-teal)]/60 hover:-translate-y-0.5 transition-all" style={{ background: "rgba(255,255,255,0.075)" }}>
                <div className="text-sm font-bold text-[var(--color-teal)] mb-2">{framework.code}</div>
                <p className="text-sm text-white/80 leading-relaxed">{framework.name}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/55 group-hover:text-white">View readiness guidance <ArrowRight className="size-3" /></div>
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
            <h2 className="font-display text-3xl font-bold text-navy">How We Prepare Your Organization</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {readinessJourney.map(({ Icon, title, desc }, index) => (
              <article key={title} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
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
        <div className="container-page relative">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">What We Deliver</div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">A Complete Readiness Evidence Pack</h2>
              <p className="text-white/70 leading-relaxed">
                The goal is not to create documents for show. The goal is to build evidence that reflects how your organisation actually works and can withstand assessor review.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {evidencePack.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/15 p-4" style={{ background: "rgba(255,255,255,0.075)" }}>
                  <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-14 pb-5 bg-background">
        <div className="container-page grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          <article className="h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
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
          </article>
          <article className="h-full rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/12 border border-[var(--color-teal)]/25">
                <Scale className="size-5 text-[var(--color-teal)]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy">Impartiality Note</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              QUALIFY provides certification readiness support, training, documentation assistance and independent advisory services. We do not perform certification audits or grant certification on behalf of any certification body.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our role is to strengthen your internal systems, evidence base and competence so your organisation is prepared for an independent certification audit and continual improvement.
            </p>
          </article>
        </div>
      </section>

      <section className="pt-5 pb-16 relative overflow-hidden bg-background">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,122,138,0.18) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container-page relative">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
            <div>
              <h2 className="font-display text-xl font-bold text-navy mb-6">When to Engage</h2>
              <ul className="space-y-3">
                {whenToEngage.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="size-4 shrink-0 mt-0.5 text-[var(--color-teal)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm"><span className="font-semibold text-navy">Who engages us: </span><span className="text-muted-foreground">SMEs, corporates, food manufacturers, healthcare organisations, IT service providers, logistics companies.</span></p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy mb-6">What We Deliver</h2>
              <ul className="space-y-3">
                {existingDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-[var(--shadow-card)]">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-[var(--color-teal)]" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">Start Certification Readiness</div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to build an audit-ready management system?</h2>
            <p className="text-white/70 leading-relaxed mb-8">Tell us your target standard, current status and expected certification timeline. We will help you define a practical route to readiness.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-all">
                Request Certification Support <ArrowRight className="size-4" />
              </Link>
              <a href={CERT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors">
                Visit Certification Portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
