import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, ClipboardCheck, FileText, GraduationCap, AlertTriangle, ShieldCheck, RefreshCw, Search } from "lucide-react";
import inspectorImg from "@/assets/inspector.jpg";
import portImg from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/certification-portal")({
  head: () => ({
    meta: [
      { title: "Certification Readiness Support | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports organisations before, during and after ISO certification — gap assessments, documentation, internal audits, CAPA and continual improvement." },
    ],
  }),
  component: CertificationPortal,
});

const journey = [
  { n: 1, icon: Search,         title: "Gap Assessment",          desc: "We assess your current position against the target standard — identifying strengths, gaps and priorities with a structured gap analysis report." },
  { n: 2, icon: FileText,       title: "Documentation Review",    desc: "Policies, procedures, records and forms are reviewed, developed or improved to meet the specific clause requirements of the standard." },
  { n: 3, icon: GraduationCap,  title: "Competence Development",  desc: "Staff awareness and competence training aligned to the standard, your operational context and role-specific responsibilities." },
  { n: 4, icon: ClipboardCheck, title: "Internal Audit",          desc: "Structured internal audit against the standard — identifying remaining gaps, nonconformities and opportunities before external assessment." },
  { n: 5, icon: AlertTriangle,  title: "Corrective Actions",      desc: "Root-cause analysis and resolution of audit findings with tracked corrective and preventive actions through to verified closure." },
  { n: 6, icon: ShieldCheck,    title: "Certification Readiness", desc: "Final readiness review — we verify your system is genuinely ready before the certification body conducts its assessment. No surprises." },
  { n: 7, icon: RefreshCw,      title: "Continual Improvement",   desc: "Post-certification surveillance readiness, improvement planning and ongoing advisory support to maintain and strengthen your system." },
];

const standards = [
  "ISO 9001:2015 — Quality Management Systems",
  "ISO 14001:2015 — Environmental Management Systems",
  "ISO 45001:2018 — Occupational Health & Safety",
  "ISO 22000:2018 — Food Safety Management",
  "ISO/IEC 17020:2012 — Inspection Bodies",
  "ISO/IEC 17021-1:2015 — Certification Bodies",
  "ISO/IEC 17024:2012 — Personnel Certification",
  "ISO/IEC 17025:2017 — Testing & Calibration Laboratories",
  "ISO 27001:2022 — Information Security Management",
  "ISO 22301:2019 — Business Continuity Management",
  "HACCP — Food Hazard Analysis & Critical Control Points",
];

const accreditationReadiness = [
  {
    code: "ISO/IEC 17020",
    title: "Inspection Bodies",
    desc: "For organisations performing inspection activities, including marine, cargo, structural, environmental and industrial inspection.",
    to: "/certifications/iso-17020",
  },
  {
    code: "ISO 15189",
    title: "Medical Laboratories",
    desc: "For medical and clinical laboratories providing diagnostic, monitoring and research testing for patient care.",
    to: "/certifications/iso-15189",
  },
  {
    code: "ISO/IEC 17025",
    title: "Testing & Calibration Laboratories",
    desc: "For testing and calibration laboratories demonstrating technical competence, traceability and valid results.",
    to: "/certifications/iso-17025",
  },
];

function CertificationPortal() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        {/* Background port image */}
        <img src={portImg} alt="Port operations" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-20 right-0 size-96 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
        <div className="container-page relative py-20 md:py-28 max-w-4xl">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
            Certification Readiness Support
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            Supporting Your Certification Journey —{" "}
            <span className="text-gradient-navy">Before, During and After</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
            QUALIFY helps organisations achieve genuine certification readiness through gap assessments, documentation, training, internal audits, corrective actions and continual improvement support. Certification is issued only by authorised certification bodies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
              Assess Your Readiness <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white/8 border border-white/15 text-white px-7 py-3.5 font-semibold hover:bg-white/15 transition-colors">
              Speak to a Quality Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="container-page py-20">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">The Journey</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Certification Readiness in 7 Stages</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">A structured journey from where you are today to genuine, sustainable certification readiness.</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-teal)] via-[var(--color-ocean)] to-transparent md:-translate-x-px" />
          <div className="space-y-8">
            {journey.map((j, i) => (
              <div key={j.n} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className={`rounded-2xl bg-card border border-border p-5 shadow-[var(--shadow-card)] hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all md:max-w-sm ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-8 rounded-lg bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white shrink-0">
                        <j.icon className="size-4" />
                      </div>
                      <div className="text-xs font-bold text-[var(--color-orange)] uppercase tracking-wider">Stage {j.n}</div>
                    </div>
                    <h3 className="font-display font-bold text-navy mb-1.5">{j.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 top-5 size-5 rounded-full bg-[var(--color-teal)] ring-4 ring-background -translate-x-1/2 grid place-items-center z-10">
                  <span className="text-[8px] font-black text-white">{j.n}</span>
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspector image break */}
      <div className="relative h-64 overflow-hidden">
        <img src={inspectorImg} alt="Inspector conducting quality assessment" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center container-page">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-2">On-Site & Independent</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white max-w-lg">Professional assessors. Evidence-based findings. Defensible reports.</h3>
          </div>
        </div>
      </div>

      {/* Standards */}
      <section className="bg-muted/40 py-20">
        <div className="container-page">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Standards We Support</div>
            <h2 className="font-display text-3xl font-bold text-navy">ISO & Sector Frameworks</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">QUALIFY provides readiness support across a broad range of international management system standards and compliance frameworks.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {standards.map((s) => (
              <div key={s} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4 hover:border-[var(--color-teal)] transition-colors">
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                <span className="text-sm text-navy font-medium">{s}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-xl bg-[var(--color-teal)]/5 border border-[var(--color-teal)]/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-navy">Important:</strong> QUALIFY supports organisations in implementation, competence development, documentation, internal audits, certification readiness and continual improvement. Certification decisions are made only by authorised certification bodies.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation readiness */}
      <section className="container-page py-20">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Accreditation Readiness</div>
          <h2 className="font-display text-3xl font-bold text-navy">KENAS Accreditation Readiness</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            QUALIFY also supports inspection bodies and laboratories preparing for accreditation by authorised accreditation bodies. We help teams organise evidence, close gaps and prepare for assessment with practical readiness support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {accreditationReadiness.map((item) => (
            <Link
              key={item.code}
              to={item.to as any}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="text-xs font-bold text-[var(--color-orange)] uppercase tracking-wider mb-2">{item.code}</div>
              <h3 className="font-display font-bold text-navy mb-2 group-hover:text-[var(--color-ocean)] transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)]">
                View Support <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-[var(--color-teal)]/20 bg-[var(--color-teal)]/5 p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            QUALIFY does not grant accreditation. Accreditation decisions are made only by authorised accreditation bodies.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-orange)]/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 size-48 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to start your certification journey?</h3>
            <p className="text-white/70 leading-relaxed mb-7">Tell us which standard you are targeting and where you currently stand — we will give you an honest picture of what genuine readiness requires.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Request Certification Support <ArrowRight className="size-4" />
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
