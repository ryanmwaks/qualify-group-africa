import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Package } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const logisticsServices = [
  {
    title: "Storage",
    desc: "Controlled temporary storage protects sample identity, condition and integrity before dispatch or laboratory submission. Storage requirements are matched to the sample type, including preservation, security, segregation and temperature controls where applicable.",
  },
  {
    title: "Transport",
    desc: "Secure sample transport maintains chain-of-custody and appropriate handling conditions from collection to the receiving laboratory. Every transfer is documented, tracked and coordinated to preserve sample integrity and evidential value.",
  },
];

export const Route = createFileRoute("/services/sample-logistics")({
  head: () => ({
    meta: [
      { title: "Sample Logistics Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY identifies accredited laboratories, coordinates sample collection, manages chain-of-custody documentation and facilitates secure sample transportation for testing and analysis." },
    ],
  }),
  component: SampleLogisticsPage,
});

function SampleLogisticsPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Sample Logistics",
        title: "Secure Sample Handling From Collection to Laboratory",
        subtitle: "QUALIFY identifies reputable and accredited laboratories for required testing and analysis, and facilitates secure, documented sample transportation — maintaining chain-of-custody integrity from collection to final result.",
        Icon: Package,
        accentCss: "var(--color-teal)",
        heroVariant: "sample-logistics",
        compactIntro: true,
        horizontalWho: true,
        whoItems: [
          "Cargo owners and importers requiring commodity testing",
          "Exporters needing quality verification before shipment",
          "Insurance and P&I clubs requiring independent sample evidence",
          "Manufacturers requiring raw material or finished goods testing",
          "Regulators and government agencies requiring third-party sampling",
          "Legal teams needing chain-of-custody documentation for disputes",
        ],
        context: "We manage the full sample logistics chain — from identifying the right laboratory for your specific test requirement, through coordinated sample collection, proper preservation, documented chain-of-custody, secure transport and laboratory submission. Every step is documented to ensure samples arrive at the laboratory in the correct condition and with an unbroken, legally defensible record of handling.",
        how: [
          "Laboratory identification and selection — matching your test requirement to accredited, capable laboratories",
          "Sample collection coordination — planning access, timing and personnel",
          "Sample identification and labelling to prevent mix-up",
          "Chain-of-custody documentation from the point of collection",
          "Appropriate packaging and preservation for the sample type",
          "Sample storage and handling controls before dispatch",
          "Temperature-controlled transport where required by the commodity",
          "Secure sample transportation to the selected laboratory",
          "Laboratory submission, test coordination and communication",
          "Sample tracking and client status updates throughout",
        ],
        when: [
          "Before cargo discharge when commodity quality is in dispute",
          "For pre-shipment quality verification",
          "When legal proceedings require independently managed sample evidence",
          "For routine quality monitoring programmes",
        ],
        who: "Cargo owners, importers, exporters, P&I clubs, insurers, manufacturers, legal teams, government agencies.",
        deliv: [
          "Laboratory identification report and recommendation",
          "Sample collection record",
          "Chain-of-custody documentation",
          "Sample condition and packaging record",
          "Laboratory submission receipt and test coordination record",
        ],
        extraSection: (
          <section className="pt-8 pb-12 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,122,138,0.18) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="container-page relative">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Sample Logistics</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-3">Storage & Transport Services</h2>
              <p className="text-muted-foreground max-w-3xl mb-8">Explore the controls used to preserve sample integrity throughout storage and transportation.</p>
              <Accordion type="multiple" className="grid md:grid-cols-2 gap-4">
                {logisticsServices.map((service) => (
                  <AccordionItem key={service.title} value={service.title} className="rounded-xl border border-border bg-card px-5 shadow-[var(--shadow-card)]">
                    <AccordionTrigger className="font-display text-base font-semibold text-navy hover:no-underline">{service.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      <p className="mb-4">{service.desc}</p>
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white px-4 py-2 text-xs font-semibold hover:bg-[var(--color-teal)] transition-colors">
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
