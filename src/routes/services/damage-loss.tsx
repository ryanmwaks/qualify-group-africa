import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/damage-loss")({
  head: () => ({
    meta: [
      { title: "Damage & Loss Assessment Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY provides independent, evidence-based damage and loss assessments for cargo, vessels and marine equipment — supporting claims resolution, legal proceedings and insurance decision-making." },
    ],
  }),
  component: DamageLossPage,
});

function DamageLossPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Damage & Loss Assessment",
        title: "Independent Damage Assessment That Stands Up to Scrutiny",
        subtitle: "QUALIFY provides independent, evidence-based damage and loss assessments for cargo, vessels and marine equipment — supporting claims resolution, legal proceedings and insurance decision-making with accurate, structured technical findings.",
        Icon: ShieldAlert,
        accentCss: "var(--color-ocean)",
        whoItems: [
          "Marine and cargo insurers",
          "P&I clubs and protection associations",
          "Average adjusters and loss adjusters",
          "Cargo owners and shipowners",
          "Legal teams and arbitration panels",
          "Subrogation recovery specialists",
        ],
        context: "Our surveyors attend the damaged asset promptly and conduct an objective assessment. We identify the nature, extent and likely cause of damage — and quantify the loss where applicable. Reports are structured to withstand scrutiny from adjusters, legal teams and arbitration panels. We operate independently and have no financial interest in any outcome.",
        how: [
          "Immediate mobilisation upon instruction — rapid attendance where required",
          "On-site inspection of damaged cargo, vessel, equipment or asset",
          "Evidence gathering — photographs, measurements, samples where relevant",
          "Review of shipping documents, voyage data, loading records and handling procedures",
          "Cause analysis — identifying proximate and contributing factors",
          "Quantification of loss — volume, weight, value impact",
          "Structured damage report with cause analysis, quantum and supporting evidence",
        ],
        when: [
          "Following cargo damage discovered at discharge",
          "After a vessel collision, grounding or machinery casualty",
          "When an insurance claim is being prepared or disputed",
          "For subrogation recovery investigations",
        ],
        who: "Insurers, P&I clubs, average adjusters, loss adjusters, cargo owners, shipowners, legal teams.",
        deliv: [
          "Damage assessment report",
          "Cause analysis",
          "Loss quantification",
          "Photographic and documentary evidence",
          "Expert observations for claims support",
        ],
      }}
    />
  );
}
