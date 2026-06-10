import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  ShieldCheck,
  Award,
  Settings2,
  Package,
  GraduationCap,
  ClipboardList,
  FileText,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/services/quality-assurance")({
  head: () => ({
    meta: [
      { title: "Quality Assurance & Compliance Services | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY provides accreditation support, certification readiness, quality system implementation, sample logistics, competence development, auditing and technical reporting services across East Africa.",
      },
    ],
  }),
  component: QualityAssurancePage,
});

const subServices = [
  {
    Icon: ShieldCheck,
    label: "Accreditation Support",
    url: "/services/accreditation-support",
    desc: "KENAS readiness for inspection bodies and laboratories.",
  },
  {
    Icon: Award,
    label: "Certification Support",
    url: "/services/certification-support",
    desc: "ISO readiness through gaps, documentation and audits.",
  },
  {
    Icon: Settings2,
    label: "Quality Management Portal",
    url: "/services/quality-system-implementation",
    desc: "Bespoke QMS setup and subscription-based QMaaS.",
  },
  {
    Icon: ClipboardList,
    label: "Auditing",
    url: "/services/auditing",
    desc: "Internal, supplier and process audits.",
  },
  {
    Icon: GraduationCap,
    label: "Training and Capacity Building",
    url: "/services/training-consultancy",
    desc: "Professional training and competence development.",
  },
  {
    Icon: Package,
    label: "Sample Logistics",
    url: "/services/sample-logistics",
    desc: "Lab selection, chain-of-custody and secure transport.",
  },
  {
    Icon: FileText,
    label: "Technical Reporting & Documentation",
    url: "/services/technical-reporting",
    desc: "Technical reports and compliance records.",
  },
];

const focusAreas = [
  "Auditing",
  "Process Mapping",
  "Procedure Development",
  "Awareness Training",
  "Risk Management",
];

function QualityAssurancePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quality Assurance & Compliance"
        title="Standards-Aligned Quality Support Across the Full Compliance Lifecycle"
        subtitle="Our Quality Assurance & Compliance services establish, strengthen and sustain high standards across organisational processes: from accreditation readiness and certification support to auditing, competence development and digital QMS implementation."
        variant="inspector"
      />

      <section className="py-16 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 size-96 rounded-full bg-[var(--color-teal)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">
                Service Context
              </div>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                Our quality management support services help organisations build management systems that are genuinely operational, not just documented. We work hands-on with your team to map processes, close compliance gaps, build competence and sustain continual improvement.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                QUALIFY supports organisations in accreditation readiness, certification readiness, documentation, implementation, internal audits, corrective actions, competence development and continual improvement. Certification and accreditation decisions are made only by authorised certification or accreditation bodies.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center size-10 rounded-xl bg-[var(--color-teal)]/12 border border-[var(--color-teal)]/25">
                  <ShieldCheck className="size-5 text-[var(--color-teal)]" />
                </div>
                <h3 className="font-display font-semibold text-navy">Core Focus Areas</h3>
              </div>
              <ul className="space-y-2.5">
                {focusAreas.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-[var(--color-ocean)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">
            Our Services
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">
                Quality Assurance & Compliance Services
              </h2>
              <p className="mt-3 text-white/60 max-w-2xl">
                Choose the quality, certification, audit or documentation support stream that matches your immediate requirement.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white hover:bg-white/14 transition-colors w-fit"
            >
              All Services <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map(({ Icon, label, url, desc }) => (
              <Link
                key={label}
                to={url as any}
                className="group rounded-2xl border border-white/10 p-6 hover:border-[var(--color-teal)]/45 hover:bg-white/8 transition-all flex flex-col gap-4 shadow-[0_18px_45px_-34px_rgba(0,0,0,0.75)]"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.035) 100%)" }}
              >
                <div
                  className="size-11 rounded-xl grid place-items-center"
                  style={{ background: "rgba(0,122,138,0.16)", border: "1px solid rgba(0,122,138,0.32)" }}
                >
                  <Icon className="size-5 text-[var(--color-teal)]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-2 group-hover:text-[var(--color-teal)] transition-colors">
                    {label}
                  </h3>
                  <p className="text-sm text-white/62 leading-relaxed">{desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-[var(--color-teal)] opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Learn more <ArrowRight className="size-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-teal)]/15 blur-3xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 size-48 rounded-full bg-[var(--color-orange)]/12 blur-3xl pointer-events-none" />
          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
              Get Started
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Ready to strengthen your quality systems?
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Talk to our team about your specific compliance, certification or accreditation requirement. We'll assess where you are and what it takes to get where you need to be.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 shadow-[0_4px_24px_rgba(228,87,46,0.4)] transition-all"
              >
                Request Quality Support <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
