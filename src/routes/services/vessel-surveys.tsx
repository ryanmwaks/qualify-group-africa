import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/vessel-surveys")({
  head: () => ({
    meta: [
      { title: "Vessel Condition Surveys | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY conducts structured, independent assessments of vessel overall condition, equipment status, safety systems, maintenance standard and operational readiness before transactions, charters or operational commitments." },
    ],
  }),
  component: VesselSurveysPage,
});

function VesselSurveysPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Vessel Condition Surveys",
        title: "Independent Vessel Assessments Before You Commit",
        subtitle: "We conduct structured, independent assessments of vessel overall condition, equipment status, safety systems, maintenance standard and operational readiness — giving all parties a clear, factual picture before a transaction, charter or operational commitment.",
        Icon: ClipboardCheck,
        accentCss: "var(--color-ocean)",
        heroVariant: "djibouti",
        whoItems: [
          "Prospective vessel buyers",
          "Charterers signing new charter parties",
          "Ship financiers and lenders",
          "Fleet managers and vessel operators",
          "Marine insurers and underwriters",
          "Flag state representatives",
        ],
        context: "Condition surveys are attended on-board by a QUALIFY surveyor. The assessment covers hull, superstructure, deck equipment, machinery spaces, safety gear, accommodation and documentation. Findings are graded and recorded with photographic evidence to support decision-making by buyers, charterers, financiers or flag state representatives. Every survey is independent — we have no affiliation with brokers, sellers or operators.",
        how: [
          "Pre-survey briefing with client to clarify scope and priority areas",
          "Boarding vessel at agreed port — coordinated with owners or managers",
          "Systematic walkthrough of all accessible compartments and systems",
          "Machinery space review — main engine, auxiliaries, pumps, steering",
          "Deck and safety equipment check — life-saving appliances, fire systems, mooring gear",
          "Certificate and log review",
          "Condition grading and deficiency list compiled",
          "Report issued with findings, grading and recommended actions",
        ],
        when: [
          "Pre-purchase due diligence",
          "Before a new charter party is signed",
          "For financing or insurance underwriting purposes",
          "Annual or periodic condition monitoring for fleet operators",
        ],
        who: "Prospective buyers, charterers, ship financiers, fleet managers, marine insurers.",
        deliv: [
          "Condition assessment report",
          "Equipment status register",
          "Deficiency list with priority grading",
          "Certificate validity review",
          "Photographic evidence annex",
        ],
      }}
    />
  );
}
