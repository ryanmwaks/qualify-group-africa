import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Search, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/industry/inspection")({
  head: () => ({
    meta: [
      { title: "Inspection Bodies QMS Solutions | QUALIFY Group Africa" },
      { name: "description", content: "Digital quality management for inspection bodies — ISO/IEC 17020 compliance, inspector competence records, and impartiality management." },
    ],
  }),
  component: InspectionIndustry,
});

function InspectionIndustry() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industry Solutions"
        title="Inspection Bodies"
        subtitle="ISO/IEC 17020-aligned management system for inspection organizations — maintaining competence, impartiality, and consistent inspection quality."
        icon={<Search className="size-8 text-[var(--color-teal)]" />}
      />

      <section className="container-page py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Sector Challenges We Address</h2>
          <ul className="space-y-3">
            {[
              "Inspector competence records and authorisation management",
              "Impartiality management and conflict-of-interest records",
              "Inspection report version control and distribution",
              "Non-conformance tracking and corrective action management",
              "Equipment calibration and maintenance schedules",
              "Accreditation body audit preparation and surveillance readiness",
              "Subcontractor and technical expert qualification",
              "Appeals and complaints management process",
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
            {["ISO/IEC 17020:2012"].map((s) => (
              <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-3">Key Platform Modules</h3>
          <ul className="space-y-2">
            {[
              "Training Management — inspector competence and authorisations",
              "Document Management — inspection procedures and report templates",
              "CAPA Tracking — non-conformances and corrective actions",
              "Asset Management — equipment calibration and maintenance",
              "Audit Management — internal quality audits",
              "Record Management — inspection records and impartiality declarations",
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
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Strengthen Your Inspection Management System</h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            From inspector competence to impartiality management — QUALIFY QMS gives inspection bodies the structured system they need for accreditation and consistent service delivery.
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
