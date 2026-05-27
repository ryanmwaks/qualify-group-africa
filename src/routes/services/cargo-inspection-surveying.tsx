import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage, type ServiceDetail } from "@/components/site/ServiceDetailPage";
import { Package, Ship, ClipboardCheck, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/services/cargo-inspection-surveying")({
  head: () => ({
    meta: [
      { title: "Cargo Inspection & Surveying | Kenya Ports | QUALIFY" },
      { name: "description", content: "Independent cargo inspection — condition, quantity, loading, discharge and pre-shipment surveys for bulk, containerised, break-bulk and project cargo across Kenya and the region." },
    ],
  }),
  component: CargoInspection,
});

const data: ServiceDetail = {
  category: {
    label: "Marine Inspection & Surveying",
    accent: "var(--color-ocean)",
    gradient: "linear-gradient(135deg, var(--color-ocean), var(--color-navy))",
    icon: Ship,
  },
  icon: Package,
  title: "Cargo Inspection & Surveying",
  tagline: "Impartial eyes on every load, every discharge, every claim.",
  desc: "We provide independent cargo inspection and verification services covering condition, quantity, packaging, handling, loading, stowage and discharge across bulk, containerised, break-bulk and project cargo types.",
  context: "Cargo inspection assignments are carried out at origin, port of loading, port of discharge or destination — wherever the inspection is most operationally relevant. Our surveyors work alongside stevedores, terminal operators and cargo handlers to provide an objective, third-party record of cargo condition and handling. Evidence is documented systematically and reports are structured to support trade resolution, claims and compliance. We serve clients at the Port of Mombasa, Lamu, inland container depots and facilities across the region.",
  who: "Importers, exporters, freight forwarders, commodity traders, logistics and supply chain companies, marine insurers, P&I clubs, and cargo owners requiring independent verification of condition or quantity.",
  deliv: [
    "Cargo condition report with photographic evidence",
    "Quantity verification record against shipping documents",
    "Loading or discharge supervision notes",
    "Discrepancy register — shortages, damages, non-conformances",
    "Stowage and lashing inspection report where applicable",
    "Draft survey report for bulk cargo quantity verification",
  ],
  how: [
    "Pre-inspection briefing — confirm cargo type, quantity declared, inspection scope, vessel or container details and attendance location",
    "Mobilisation to port, ICD or cargo facility — coordinated with the terminal, ship's agent or cargo handler",
    "Physical attendance at loading, discharge or storage location — our surveyor is present throughout the relevant operation",
    "Condition assessment — systematic check for damage, contamination, moisture ingress, packaging failure, shortage or non-conformance with specifications",
    "Quantity verification — tally against bill of lading, packing list, manifest and weight/volume measurements where applicable",
    "Photographic and written documentation of all findings — timestamped and geotagged where possible",
    "Liaison with master, chief officer or terminal supervisor on findings where appropriate",
    "Technical report issued promptly after inspection — usually within 24–48 hours",
  ],
  when: [
    "At loading or discharge when cargo condition disputes are anticipated or cargo is high-value",
    "When cargo arrives in suspect condition — visible damage, moisture, contamination or apparent shortage",
    "For pre-shipment verification of quality or quantity at origin — before goods leave the seller's facility",
    "To support an insurance claim or cargo loss investigation requiring independent evidence",
  ],
  secondaryCta: { label: "Request an Inspection", href: "/contact" },
  related: [
    {
      title: "Damage & Loss Assessment",
      desc: "Independent damage assessment and loss quantification when cargo arrives in damaged condition.",
      route: "/services/damage-loss-assessment",
      icon: ShieldAlert,
      accent: "var(--color-ocean)",
    },
    {
      title: "Vessel Condition Surveys",
      desc: "On-board vessel condition assessments covering cargo-handling equipment and stowage systems.",
      route: "/services/vessel-condition-surveys",
      icon: ClipboardCheck,
      accent: "var(--color-ocean)",
    },
    {
      title: "Marine Inspection & Surveying",
      desc: "Full scope of independent marine survey services across Kenya and the region.",
      route: "/services/",
      icon: Ship,
      accent: "var(--color-ocean)",
    },
  ],
};

function CargoInspection() {
  return <ServiceDetailPage data={data} />;
}
