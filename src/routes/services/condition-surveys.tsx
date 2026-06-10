import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ScanSearch } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services/condition-surveys")({
  head: () => ({
    meta: [
      { title: "Marine Inspection & Surveying | QUALIFY Group Africa" },
      {
        name: "description",
        content:
          "QUALIFY provides independent marine inspection and surveying covering vessel structures, machinery, equipment, condition, damage and bunker surveys.",
      },
    ],
  }),
  component: ConditionSurveysPage,
});

const inspectionTypes = [
  {
    title: "Condition Surveys",
    desc: "Systematic, evidence-based assessment of vessel hulls, hatch covers, cargo holds, machinery, equipment, safety systems and relevant documentation to establish their condition at a defined point in time.",
  },
  {
    title: "Damage Surveys",
    desc: "Independent investigation and documentation of vessel, machinery or equipment damage, including extent assessment, factual observations, probable cause indicators and evidence for claims or dispute resolution.",
  },
  {
    title: "Bunker Surveys",
    desc: "Independent verification of bunker quantities through tank measurements, temperature and density records, calculation checks and documented evidence before or after fuel transfer.",
  },
];

function ConditionSurveysPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Marine Inspection & Surveying",
        title: "Independent Technical Assessments for Informed Decision-Making",
        subtitle:
          "QUALIFY provides independent marine inspection and surveying services covering vessel hulls, hatch covers, cargo holds, machinery, equipment and other critical shipboard systems. Our surveys deliver clear, objective and evidence-based technical insights to support buyers, owners, charterers, insurers, P&I Clubs and legal representatives in making informed decisions before transactions, contractual commitments or claims resolution.",
        Icon: ScanSearch,
        accentCss: "var(--color-ocean)",
        heroVariant: "djibouti",
        compactIntro: true,
        whoItems: [
          "Prospective vessel buyers requiring pre-purchase surveys",
          "Charterers signing new charter parties - on-hire/off-hire",
          "Ship financiers and lenders requiring condition evidence",
          "Marine insurers and underwriters assessing risk",
          "P&I clubs requiring independent condition records",
          "Fleet managers conducting periodic condition monitoring",
        ],
        context:
          "QUALIFY surveyors conduct condition surveys onboard vessels or at relevant operational sites using a systematic and evidence-based approach. Assessments cover accessible structural areas, machinery and equipment, cargo spaces, safety systems, and relevant statutory and operational documentation. Findings are objectively evaluated, graded according to their significance, and supported by detailed photographic evidence. All surveys are performed independently and impartially. QUALIFY has no commercial affiliation with brokers, sellers, operators, insurers or any other party with an interest in the outcome of the assessment.",
        how: [
          "Pre-survey scope agreement with client - confirming survey type and priority areas",
          "Vessel boarding or site attendance at agreed location",
          "Systematic inspection of hull, superstructure, deck equipment and accommodation",
          "Machinery space review - main engine, auxiliaries, pumps, steering gear",
          "Hatch cover integrity inspection - sealing, cleanliness, condition",
          "Safety equipment check - life-saving appliances, fire systems, mooring gear",
          "Certificate and log review",
          "Condition grading and deficiency list compiled during survey",
          "Report issued with findings, grading, photographic evidence and recommended actions",
        ],
        when: [
          "Pre-purchase due diligence for vessel acquisition",
          "Before signing a charter party - on-hire condition record",
          "At charter completion - off-hire condition comparison",
          "For marine financing or insurance underwriting",
          "Annual or periodic fleet condition monitoring",
        ],
        who: "Vessel buyers, charterers, financiers, fleet managers, marine insurers, P&I clubs, legal teams.",
        deliv: [
          "Condition survey report",
          "Equipment status and deficiency register",
          "Hatch cover inspection record",
          "Certificate validity review",
          "Photographic evidence annex",
          "Recommended actions with priority grading",
        ],
        extraSection: (
          <section className="pt-8 pb-12 bg-background relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,122,138,0.18) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="container-page relative">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Inspection Types</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-3">Marine Inspection & Surveying Services</h2>
              <p className="text-muted-foreground max-w-3xl mb-8">
                Choose an inspection type to reveal its scope and request support for your vessel or marine operation.
              </p>
              <Accordion type="multiple" className="grid lg:grid-cols-3 gap-4">
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
        ),
      }}
    />
  );
}
