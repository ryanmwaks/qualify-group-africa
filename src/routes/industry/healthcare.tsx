import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { HeartPulse, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/industry/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare QMS Solutions | QUALIFY Group Africa" },
      { name: "description", content: "Digital quality management for healthcare providers — patient safety records, regulatory compliance, ISO 9001 and ISO 45001 readiness." },
    ],
  }),
  component: HealthcareIndustry,
});

function HealthcareIndustry() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industry Solutions"
        title="Healthcare"
        subtitle="Patient-centred quality management and regulatory compliance for hospitals, clinics, and healthcare service providers."
        icon={<HeartPulse className="size-8 text-[var(--color-teal)]" />}
      />

      <section className="container-page py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Sector Challenges We Address</h2>
          <ul className="space-y-3">
            {[
              "Patient safety incident reporting and root-cause analysis",
              "Regulatory submission documentation and compliance tracking",
              "Staff competence verification and training management",
              "Medical equipment calibration and maintenance records",
              "Infection control and clinical audit management",
              "Supplier and pharmaceutical vendor qualification",
              "Policy and procedure document control",
              "Accreditation readiness and continual improvement",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Standards &amp; Frameworks</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["ISO 9001:2015", "ISO 45001:2018"].map((s) => (
              <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-3">Key Platform Modules</h3>
          <ul className="space-y-2">
            {[
              "Incident Reporting — patient safety events and near-misses",
              "Document Management — clinical policies and SOPs",
              "Training Management — clinical and non-clinical staff competence",
              "Audit Management — internal clinical and quality audits",
              "Asset Management — medical equipment calibration",
              "CAPA Tracking — corrective actions from audits and incidents",
            ].map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-sm text-foreground">
                <BadgeCheck className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] text-white py-14">
        <div className="container-page text-center max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Elevate Patient Safety Through Better Quality Systems</h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            A structured, digital quality management system supports better patient outcomes, regulatory compliance, and accreditation readiness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white font-bold px-6 py-3 text-sm hover:opacity-90 transition-all">
              Contact Us <ArrowRight className="size-4" />
            </Link>
            <Link to="/qms-solutions" className="inline-flex items-center gap-2 rounded-lg border border-white/25 text-white font-semibold px-6 py-3 text-sm hover:bg-white/10 transition-all">
              View QMS Platform
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
