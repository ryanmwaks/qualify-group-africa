import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { BookOpen } from "lucide-react";

export const Route = createFileRoute("/standards")({
  head: () => ({
    meta: [
      { title: "Standards and Frameworks We Align With | Qualify Group Africa" },
      { name: "description", content: "QUALIFY supports clients in aligning systems, documentation and operations with recognized international standards and sector-relevant frameworks." },
    ],
  }),
  component: Standards,
});

const standards = [
  ["ISO 9001", "Quality Management Systems"],
  ["ISO 14001", "Environmental Management Systems"],
  ["ISO 45001", "Occupational Health and Safety Management Systems"],
  ["ISO 22000", "Food Safety Management Systems"],
  ["ISO/IEC 17020", "Requirements for Inspection Bodies"],
  ["ISO/IEC 17021-1", "Audit and Certification of Management Systems"],
  ["ISO/IEC 17024", "Certification of Persons"],
  ["ISO/IEC 17025", "Testing and Calibration Laboratories"],
  ["ISO 27001", "Information Security Management Systems"],
  ["ISO 22301", "Business Continuity Management Systems"],
  ["HACCP", "Hazard Analysis and Critical Control Points"],
  ["Risk & Compliance", "Risk Management and Compliance Frameworks"],
  ["Internal Audit", "Internal Audit and Continual Improvement Frameworks"],
];

function Standards() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Standards & Frameworks"
        title="Standards and Frameworks We Align With"
        subtitle="QUALIFY supports clients in aligning their systems, documentation, competence and operations with recognized international standards and sector-relevant frameworks."
        variant="inspector"
      />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {standards.map(([code, name]) => (
            <article key={code} className="rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="size-11 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)] mb-3"><BookOpen className="size-5" /></div>
              <div className="font-display font-bold text-navy text-lg">{code}</div>
              <p className="mt-1 text-sm text-muted-foreground">{name}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-card border border-border p-7 max-w-4xl">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-2">Disclaimer</div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            QUALIFY supports clients in readiness, competence development, documentation, implementation, internal audits, and continuous improvement. Certification decisions are made only by authorized certification bodies.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
