import { createFileRoute } from "@tanstack/react-router";
import { Package } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/cargo-inspection")({
  head: () => ({
    meta: [
      { title: "Cargo Inspection & Surveying Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY provides independent cargo inspection and verification services covering condition, quantity, packaging, handling, loading, stowage and discharge across bulk, containerised and break-bulk cargo." },
    ],
  }),
  component: CargoInspectionPage,
});

function CargoInspectionPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Cargo Inspection & Surveying",
        title: "Third-Party Cargo Inspection Across All Cargo Types",
        subtitle: "We provide independent cargo inspection and verification services covering condition, quantity, packaging, handling, loading, stowage and discharge — across bulk, containerised, break-bulk and project cargo types.",
        Icon: Package,
        accentCss: "var(--color-ocean)",
        whoItems: [
          "Importers and exporters",
          "Freight forwarders and logistics firms",
          "Commodity traders and buyers",
          "Marine and cargo insurers",
          "Port terminal operators",
          "Pre-shipment verification clients",
        ],
        context: "Cargo inspection assignments are carried out at origin, port of loading, port of discharge or destination — wherever the inspection is most operationally relevant. Our surveyors work alongside stevedores, terminal operators and cargo handlers to provide an objective, third-party record of cargo condition and handling. We operate independently to ensure findings are trusted by all parties.",
        how: [
          "Pre-inspection briefing to confirm cargo type, quantity, scope and location",
          "Physical attendance at loading, discharge or cargo storage location",
          "Condition assessment — checking for damage, contamination, moisture, shortage or non-conformance",
          "Quantity verification against bill of lading, packing list and manifests",
          "Photographic and written documentation of all observations",
          "Technical report issued promptly after inspection completion",
        ],
        when: [
          "At loading or discharge when condition disputes are anticipated",
          "When cargo arrives in suspect condition",
          "For pre-shipment verification of quality or quantity",
          "To support an insurance claim or cargo loss investigation",
        ],
        who: "Importers, exporters, freight forwarders, traders, logistics firms, insurers.",
        deliv: [
          "Cargo condition report",
          "Quantity verification record",
          "Loading/discharge supervision notes",
          "Photographic evidence pack",
          "Discrepancy register",
        ],
      }}
    />
  );
}
