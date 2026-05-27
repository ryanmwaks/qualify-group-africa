import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage, type ServiceDetail } from "@/components/site/ServiceDetailPage";
import { ClipboardCheck, Ship, Package, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/services/vessel-condition-surveys")({
  head: () => ({
    meta: [
      { title: "Vessel Condition Surveys | Marine Surveyors Kenya | QUALIFY" },
      { name: "description", content: "Independent vessel condition surveys for pre-purchase, charter, financing and insurance purposes — covering hull, machinery, safety systems and documentation at Kenya ports." },
    ],
  }),
  component: VesselConditionSurveys,
});

const data: ServiceDetail = {
  category: {
    label: "Marine Inspection & Surveying",
    accent: "var(--color-ocean)",
    gradient: "linear-gradient(135deg, var(--color-ocean), var(--color-navy))",
    icon: Ship,
  },
  icon: ClipboardCheck,
  title: "Vessel Condition Surveys",
  tagline: "An independent, factual picture of every vessel we attend.",
  desc: "We conduct structured, independent assessments of vessel overall condition, equipment status, safety systems, maintenance standard and operational readiness — giving all parties a clear, factual picture before a transaction, charter or operational commitment.",
  context: "Condition surveys are attended on-board by a QUALIFY surveyor at the agreed port. The assessment covers hull and superstructure, deck equipment, machinery spaces, safety gear, accommodation and certificates. Findings are graded and recorded with photographic evidence, producing a structured report that is clear, factual and defensible for use by buyers, charterers, financiers and flag state representatives. Surveys can be scoped for a specific purpose — pre-purchase, pre-charter, financing, insurance renewal or periodic fleet monitoring.",
  who: "Prospective vessel buyers, charterers, shipowners entering new charter arrangements, ship financiers and banks, marine insurers at policy inception or renewal, and fleet operators commissioning periodic condition monitoring.",
  deliv: [
    "Condition assessment report with graded findings",
    "Equipment and systems status register",
    "Deficiency list with priority grading — critical, major, minor",
    "Certificate validity review and upcoming renewal schedule",
    "Photographic evidence annex — referenced to report sections",
    "Recommendations for corrective action where deficiencies are identified",
  ],
  how: [
    "Pre-survey briefing with client to clarify scope, priority areas and any specific technical concerns",
    "Coordination with vessel owners or managers to confirm attendance logistics and access",
    "Boarding vessel at agreed port — at the arranged time with the master or chief officer",
    "Systematic walkthrough of all accessible compartments — accommodation, deck, engine room, steering flat, pump room where applicable",
    "Machinery space review — main engine, auxiliaries, fuel systems, bilge, pumps, steering gear, electrical systems",
    "Deck equipment check — cargo gear, mooring equipment, anchoring arrangements, hatch covers",
    "Safety equipment inspection — life-saving appliances, fire detection and suppression, emergency equipment",
    "Certificate and document review — class, flag state, trading certificates, log books",
    "Condition grading applied to findings — prioritised deficiency list compiled",
    "Report issued with graded findings, evidence annex and recommended corrective actions",
  ],
  when: [
    "Pre-purchase due diligence — before committing to a vessel acquisition",
    "Before a new charter party is signed — to establish the vessel's condition at delivery",
    "For financing or insurance underwriting where an independent condition opinion is required",
    "Annual or periodic condition monitoring for fleet operators managing multiple vessels",
  ],
  secondaryCta: { label: "Request a Survey", href: "/contact" },
  related: [
    {
      title: "Cargo Inspection & Surveying",
      desc: "Independent cargo condition and quantity verification at loading, discharge or destination.",
      route: "/services/cargo-inspection-surveying",
      icon: Package,
      accent: "var(--color-ocean)",
    },
    {
      title: "Damage & Loss Assessment",
      desc: "Post-incident damage assessment for vessels following collision, grounding or machinery casualty.",
      route: "/services/damage-loss-assessment",
      icon: ShieldAlert,
      accent: "var(--color-ocean)",
    },
    {
      title: "Marine Inspection & Surveying",
      desc: "Full range of independent marine survey services across Kenya and the region.",
      route: "/services/",
      icon: Ship,
      accent: "var(--color-ocean)",
    },
  ],
};

function VesselConditionSurveys() {
  return <ServiceDetailPage data={data} />;
}
