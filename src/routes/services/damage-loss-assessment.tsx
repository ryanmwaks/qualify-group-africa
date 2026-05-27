import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage, type ServiceDetail } from "@/components/site/ServiceDetailPage";
import { ShieldAlert, Ship, Package, ClipboardCheck, FileText } from "lucide-react";

export const Route = createFileRoute("/services/damage-loss-assessment")({
  head: () => ({
    meta: [
      { title: "Damage & Loss Assessment | Marine Claims Kenya | QUALIFY" },
      { name: "description", content: "Independent, evidence-based damage and loss assessments for cargo, vessels and marine equipment — supporting insurance claims, legal proceedings and arbitration in Kenya." },
    ],
  }),
  component: DamageLossAssessment,
});

const data: ServiceDetail = {
  category: {
    label: "Marine Inspection & Surveying",
    accent: "var(--color-ocean)",
    gradient: "linear-gradient(135deg, var(--color-ocean), var(--color-navy))",
    icon: Ship,
  },
  icon: ShieldAlert,
  title: "Damage & Loss Assessment",
  tagline: "Independent. Evidence-based. Built to withstand scrutiny.",
  desc: "QUALIFY provides independent, evidence-based damage and loss assessments for cargo, vessels and marine equipment — supporting claims resolution, legal proceedings and insurance decision-making with accurate, structured technical findings.",
  context: "Our surveyors attend the damaged asset promptly and conduct an objective assessment — identifying the nature, extent and likely cause of damage, and quantifying the loss where applicable. Reports are structured to withstand scrutiny from average adjusters, legal teams and arbitration panels. We work on behalf of insurers, cargo owners, P&I clubs, average adjusters, legal counsel and shipowners — always maintaining our independence and objectivity regardless of who instructs us.",
  who: "Marine insurers, P&I clubs, average adjusters, loss adjusters, cargo owners, shipowners, charterers, legal teams, and arbitrators requiring independent technical evidence on damage, cause and quantum.",
  deliv: [
    "Damage assessment report with findings and evidence",
    "Cause analysis — proximate and contributing factors",
    "Loss quantification — volume, weight, commercial value impact",
    "Photographic and documentary evidence register",
    "Expert observations structured for claims and legal use",
    "Addendum or expert statement where legal proceedings require it",
  ],
  how: [
    "Immediate receipt of instruction — we review the scope and confirm attendance logistics without delay",
    "Mobilisation to the site — port, warehouse, vessel, or storage facility as required",
    "Preservation of evidence — we attend promptly to ensure perishable evidence is captured before conditions change",
    "On-site inspection of the damaged cargo, vessel, equipment or asset — systematic and fully documented",
    "Evidence gathering — photographs, measurements, sampling where relevant, review of temperature logs, handling records, stow plans",
    "Review of shipping and trade documents — bills of lading, manifests, mate's receipts, voyage data, loading records",
    "Cause analysis — identifying proximate cause, contributing factors and any failures of care or procedure",
    "Quantification of loss — measuring the extent of damage against undamaged portions, applying market values where applicable",
    "Structured damage assessment report — cause, extent, quantum and supporting evidence, formatted for claims and legal use",
  ],
  when: [
    "Following cargo damage discovered at discharge — contamination, breakage, moisture damage, shortage",
    "After a vessel collision, grounding, machinery casualty or operational incident",
    "When an insurance claim is being prepared or when a disputed claim requires independent expert assessment",
    "For subrogation recovery investigations where a third party's liability needs to be established",
  ],
  secondaryCta: { label: "Report a Damage Incident", href: "/contact" },
  related: [
    {
      title: "Cargo Inspection & Surveying",
      desc: "Pre-emptive cargo condition recording at loading — establishing evidence before any claim arises.",
      route: "/services/cargo-inspection-surveying",
      icon: Package,
      accent: "var(--color-ocean)",
    },
    {
      title: "Vessel Condition Surveys",
      desc: "Condition assessment before or after an incident to establish the vessel's pre-loss state.",
      route: "/services/vessel-condition-surveys",
      icon: ClipboardCheck,
      accent: "var(--color-ocean)",
    },
    {
      title: "Technical Reporting & Documentation",
      desc: "Professional structured reporting for claims, legal proceedings and management review.",
      route: "/services/technical-reporting-documentation",
      icon: FileText,
      accent: "var(--color-teal)",
    },
  ],
};

function DamageLossAssessment() {
  return <ServiceDetailPage data={data} />;
}
