import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Container } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services/cargo-inspection")({
  head: () => ({
    meta: [
      { title: "Cargo Inspection & Surveying | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY provides independent cargo inspection and surveying, including quantity verification, condition assessment, loading and discharge supervision, damage surveys, sampling and testing coordination.",
      },
    ],
  }),
  component: CargoInspectionPage,
});

const inspectionTypes = [
  {
    title: "Condition Surveys",
    desc: "Independent assessment of cargo condition at loading, discharge, storage or transfer points, supported by photographs, observations and factual condition records.",
  },
  {
    title: "Loading & Discharge Supervision",
    desc: "Attendance throughout loading and discharge operations to monitor cargo handling, tally movements, identify operational risks and document exceptions as they arise.",
  },
  {
    title: "Quantity Surveys",
    desc: "Independent quantity verification using the appropriate method for the cargo, including draught survey, tally, scale weighing, ullage or volumetric measurement.",
  },
  {
    title: "Damage Surveys",
    desc: "Objective investigation and documentation of cargo loss or damage, including extent assessment, probable cause observations and evidence suitable for claims management.",
  },
  {
    title: "Sampling",
    desc: "Representative cargo sampling using agreed procedures, with sample identification, sealing and chain-of-custody controls maintained throughout the assignment.",
  },
  {
    title: "Testing",
    desc: "Coordination of cargo testing with suitable laboratories, supported by documented sample transfer, test requirements and traceable reporting of results.",
  },
];

function CargoInspectionPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Cargo Inspection & Surveying",
        title: "Independent Cargo Inspection Across Diverse Cargo Types",
        subtitle:
          "QUALIFY provides independent cargo inspection and surveying services across a wide range of commodities and cargo types. Our services include quantity verification, cargo condition assessments, loading and discharge supervision, draught surveys, damage assessments, sampling and testing coordination, and comprehensive chain-of-custody documentation to support operational integrity, claims management and commercial decision-making.",
        Icon: Container,
        accentCss: "var(--color-ocean)",
        heroVariant: "port",
        compactIntro: true,
        whoItems: [
          "Cargo owners and commodity traders",
          "Importers and exporters requiring independent verification",
          "Marine and cargo insurers",
          "P&I clubs and average adjusters",
          "Charterers and shipowners at loading and discharge",
          "Legal teams requiring independent cargo evidence",
        ],
        context:
          "QUALIFY surveyors undertake independent cargo inspections at loading, discharge and storage locations, delivering objective assessments supported by factual evidence. Our expertise spans dry bulk, break-bulk, project cargo, containerised cargo, bulk liquids and gaseous cargoes. We remain impartial in every assignment, with no financial interest in the outcome of the underlying commercial transaction.",
        how: [
          "Pre-inspection review of shipping documents, voyage data, loading records",
          "Attendance at port, terminal or warehouse for cargo inspection",
          "Quantity survey - draught survey, scale weighing, tally, ullage or volumetric measurement depending on cargo type",
          "Condition assessment - visual inspection, sampling where applicable",
          "Loading or discharge supervision - monitoring handling, stowage and securing",
          "Damage identification and quantification where loss or damage is present",
          "Evidence collection - photographs, measurements, samples, documentation",
          "Structured inspection report with findings, quantity figures and evidence",
        ],
        when: [
          "At loading - to verify quantity and condition before shipment",
          "At discharge - to identify short-delivery, condition issues or damage",
          "Following cargo damage for insurance or claims purposes",
          "When dispute resolution requires independent evidence",
        ],
        who: "Cargo owners, importers, exporters, insurers, P&I clubs, charterers, shipowners, legal teams.",
        deliv: [
          "Cargo inspection report - quantity and condition",
          "Draught survey report (where applicable)",
          "Damage and loss assessment report",
          "Sampling and laboratory coordination record",
          "Photographic and documentary evidence annex",
          "Chain-of-custody documentation",
        ],
        extraSection: (
          <>
            <section className="pt-8 pb-12 bg-background relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,122,138,0.18) 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="container-page relative">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">
                  Inspection Types
                </div>
                <h2 className="font-display text-3xl font-bold text-navy mb-3">Cargo Inspection & Surveying Services</h2>
                <p className="text-muted-foreground max-w-3xl mb-8">
                  Choose an inspection type to reveal its scope and request support for your cargo operation.
                </p>
                <Accordion type="multiple" className="grid lg:grid-cols-2 gap-4">
                  {inspectionTypes.map((type) => (
                    <AccordionItem
                      key={type.title}
                      value={type.title}
                      className="rounded-xl border border-border bg-card px-5 shadow-[var(--shadow-card)]"
                    >
                      <AccordionTrigger className="font-display text-base font-semibold text-navy hover:no-underline">
                        {type.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <p className="mb-4">{type.desc}</p>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white px-4 py-2 text-xs font-semibold hover:bg-[var(--color-ocean)] transition-colors"
                        >
                          Request This Service <ArrowRight className="size-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            <section
              className="py-14 relative overflow-hidden border-y border-[var(--color-teal)]/25"
              style={{ background: "linear-gradient(135deg, #041830 0%, #062b4f 58%, #075568 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-[0.055]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-teal)]" />
              <div className="container-page relative">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Cargo Types</div>
                <h2 className="font-display text-2xl font-bold text-white mb-6">Cargo Types We Cover</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { label: "Dry Bulk Cargo", desc: "Grains, coal, ore, fertilisers - quantity and condition surveys" },
                    { label: "Break-Bulk Cargo", desc: "Bagged, baled or palletised cargo - tally and condition" },
                    { label: "Project Cargo", desc: "Heavy-lift, over-dimensional and specialist cargo" },
                    { label: "Containerised Cargo", desc: "FCL and LCL - condition at stuffing, stripping and transit" },
                    { label: "Bulk Liquid Cargo", desc: "Petroleum products, edible oils, chemicals - ullage and quality" },
                    { label: "Gaseous Cargo", desc: "LPG and specialist gas cargoes - condition and compliance" },
                    { label: "Draught Surveys", desc: "Displacement-based quantity determination for bulk carriers" },
                  ].map((cargoType) => (
                    <div
                      key={cargoType.label}
                      className="rounded-xl border border-white/15 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
                      style={{ background: "rgba(255,255,255,0.09)" }}
                    >
                      <div className="text-sm font-semibold text-[var(--color-teal)] mb-1.5">{cargoType.label}</div>
                      <div className="text-xs text-white/85 leading-relaxed">{cargoType.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ),
      }}
    />
  );
}
