import { createFileRoute } from "@tanstack/react-router";
import { Ship } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/marine-inspection")({
  head: () => ({
    meta: [
      { title: "Marine Inspection & Surveying Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY provides independent, impartial marine inspection and survey services covering vessel assets, marine equipment, operations and documentation across ports in Kenya and the region." },
    ],
  }),
  component: MarineInspectionPage,
});

function MarineInspectionPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Marine Inspection & Surveying",
        title: "Independent Marine Surveys You Can Rely On",
        subtitle: "QUALIFY provides independent, impartial marine inspection and survey services covering vessel assets, marine equipment, operations and related documentation across ports and locations in Kenya and the region.",
        Icon: Ship,
        accentCss: "var(--color-ocean)",
        whoItems: [
          "Shipowners and ship operators",
          "Charterers and flag state representatives",
          "Marine insurers and P&I clubs",
          "Ship financiers and lenders",
          "Port authorities and terminal operators",
          "Cargo interests and freight forwarders",
        ],
        context: "Our marine surveyors attend vessel assignments on behalf of owners, operators, insurers, charterers and cargo interests. Each inspection is conducted systematically — from access and pre-inspection briefing through to findings documentation and report delivery. We operate independently, with no affiliation to any shipping line, terminal operator or cargo handler.",
        how: [
          "Initial consultation to define scope, location, vessel details and objectives",
          "On-site attendance by a qualified surveyor at the agreed port or location",
          "Systematic visual inspection, measurement and evidence gathering",
          "Review of vessel documentation, certificates and maintenance records",
          "Findings discussion with relevant parties where required",
          "Structured technical report issued within the agreed turnaround",
        ],
        when: [
          "Before purchasing, chartering or financing a vessel",
          "Following an incident, grounding or machinery failure",
          "For pre-voyage, on-hire or off-hire condition assessments",
          "During disputes involving vessel condition or operational readiness",
        ],
        who: "Shipowners, ship operators, charterers, insurers, financiers, port authorities.",
        deliv: [
          "Comprehensive survey report with findings",
          "Photographic evidence register",
          "Observations and recommendations",
          "Certificate and document review notes",
        ],
      }}
    />
  );
}
