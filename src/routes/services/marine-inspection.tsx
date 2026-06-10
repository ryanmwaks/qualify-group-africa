import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Container, ScanSearch, FileText, Anchor, ArrowRight, ClipboardCheck, ShieldAlert, Package } from "lucide-react";

export const Route = createFileRoute("/services/marine-inspection")({
  head: () => ({
    meta: [
      { title: "Inspection & Surveying | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY provides independent marine and cargo inspection, vessel surveys, damage assessment, sample logistics and technical reporting." },
    ],
  }),
  component: MarineInspectionPage,
});

const subServices = [
  {
    Icon: ScanSearch,
    label: "Marine Inspection & Surveying",
    url: "/services/condition-surveys",
    desc: "Independent condition, damage and bunker surveys covering vessel structures, machinery, equipment and critical shipboard systems.",
  },
  {
    Icon: Container,
    label: "Cargo Inspection & Surveying",
    url: "/services/cargo-inspection",
    desc: "Independent quantity verification, condition assessment, loading and discharge supervision across dry bulk, break-bulk, containers, liquids and project cargo.",
  },
  {
    Icon: ClipboardCheck,
    label: "Vessel Condition Surveys",
    url: "/services/vessel-surveys",
    desc: "Independent vessel condition, equipment status, safety system and operational readiness assessments.",
  },
  {
    Icon: ShieldAlert,
    label: "Damage & Loss Assessment",
    url: "/services/damage-loss",
    desc: "Evidence-based damage investigation, cause analysis and loss quantification for claims and disputes.",
  },
  {
    Icon: Package,
    label: "Sample Logistics",
    url: "/services/sample-logistics",
    desc: "Controlled sample storage, secure transport and traceable chain-of-custody management.",
  },
  {
    Icon: FileText,
    label: "Technical Reporting & Documentation",
    url: "/services/technical-reporting",
    desc: "Survey reports, damage reports, draught survey documentation, cargo condition reports and marine claims documentation.",
  },
];

const marineOperations = [
  "Pre-Purchase Vessel Surveys",
  "On-Hire / Off-Hire Surveys",
  "Hull and Machinery Surveys",
  "Damage Surveys",
  "P&I Condition Surveys",
  "Bunker Surveys",
  "Cargo Hold / Tank Cleanliness Inspections",
  "Lashing and Securing Inspections",
  "Marine Casualty and Incident Investigations",
  "Flag State / Port State Surveys",
  "Draught Surveys",
  "Hatch Cover Integrity Inspections",
];

function MarineInspectionPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Inspection & Surveying"
        title="Independent Inspection and Surveying Across East Africa"
        subtitle="QUALIFY provides independent marine inspection, cargo surveying, vessel condition surveys, damage assessment, sample logistics and technical documentation services."
        variant="djibouti"
      />

      {/* Intro */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.96) 0%, rgba(9,58,91,0.92) 100%)" }}>
        <div className="absolute top-0 right-0 size-96 rounded-full bg-[var(--color-ocean)]/14 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 items-start">
            <div>
              <p className="text-white/70 leading-relaxed text-base mb-6">
                Our marine surveyors attend operations at East African ports and terminals — conducting evidence-based assessments that provide a clear, factual picture of vessel condition, cargo quantity and cargo condition. Every survey is independent. We have no affiliation with brokers, sellers, operators or insurers.
              </p>
              <p className="text-white/70 leading-relaxed text-base">
                We operate across the East African coast — Mombasa, Dar es Salaam, Djibouti, Lamu and regional ports — with rapid mobilisation for time-sensitive cargo and vessel operations.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 glass-card-dark">
              <div className="flex items-center gap-2 mb-4">
                <Anchor className="size-5 text-[var(--color-ocean)]" />
                <h3 className="font-display font-semibold text-white">Survey Operations</h3>
              </div>
              <ul className="space-y-2">
                {marineOperations.map((op) => (
                  <li key={op} className="flex items-start gap-2 text-sm text-white/65">
                    <span className="size-1.5 rounded-full bg-[var(--color-ocean)] shrink-0 mt-1.5" />
                    {op}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-16" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ocean)] font-bold mb-3">Our Services</div>
          <h2 className="font-display text-3xl font-bold text-white mb-10">Marine Inspection Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map(({ Icon, label, url, desc }) => (
              <Link
                key={label}
                to={url as any}
                className="group rounded-2xl border border-white/10 p-6 hover:border-[var(--color-ocean)]/40 hover:bg-white/5 transition-all flex flex-col gap-4"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.035) 100%)" }}
              >
                <div
                  className="size-11 rounded-xl grid place-items-center"
                  style={{ background: "rgba(10,111,174,0.2)", border: "1px solid rgba(10,111,174,0.3)" }}
                >
                  <Icon className="size-5 text-[var(--color-ocean)]" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-2 group-hover:text-[var(--color-ocean)] transition-colors">
                    {label}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-[var(--color-ocean)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="size-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.96) 0%, rgba(10,111,174,0.84) 100%)" }}>
        <div className="absolute top-0 right-0 size-80 rounded-full bg-[var(--color-ocean)]/14 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-60 rounded-full bg-[var(--color-orange)]/12 blur-3xl pointer-events-none" />
        <div className="container-page relative text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Need an independent marine survey?</h2>
          <p className="text-white/65 leading-relaxed mb-8">
            Contact our team to discuss your vessel, cargo or survey requirement. We mobilise rapidly across East African ports and terminals.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity"
            >
              Request a Survey <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
