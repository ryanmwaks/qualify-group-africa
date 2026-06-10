import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/technical-reporting")({
  head: () => ({
    meta: [
      { title: "Technical Reporting & Documentation | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY prepares and reviews technical reports, quality documents, inspection records, compliance evidence and audit documentation — structured to withstand regulatory, legal and certification scrutiny." },
    ],
  }),
  component: TechnicalReportingPage,
});

function TechnicalReportingPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Technical Reporting & Documentation",
        title: "Reports and Documents That Hold Up Under Scrutiny",
        subtitle: "QUALIFY prepares and reviews technical reports, quality documents, inspection records, compliance evidence, audit documentation and operational records — structured for decision-making, certification readiness, claims support and continual improvement.",
        Icon: FileText,
        accentCss: "var(--color-teal)",
        heroVariant: "technical-reporting",
        whoItems: [
          "Inspection bodies requiring structured, audit-ready reports",
          "Organisations building certification documentation",
          "Legal and insurance teams needing defensible inspection records",
          "Cargo owners requiring damage and loss documentation",
          "QA managers developing management system documentation",
          "Companies with incomplete or poorly structured quality records",
        ],
        context: "Technical documentation is only as valuable as its accuracy, completeness and structure. Poorly written reports create disputes; well-written ones resolve them. We prepare documentation that is clear, structured to the relevant standard or requirement, and supported by adequate evidence — whether for certification, regulatory compliance, legal proceedings or operational management.",
        how: [
          "Review of existing documentation against applicable requirements",
          "Gap identification — missing sections, unsupported claims, inadequate evidence",
          "Preparation of new reports or documents from inspection findings and records",
          "Structuring reports to meet certification body, legal or regulatory requirements",
          "Photographic evidence compilation and annotation",
          "Reference to applicable standards, codes and regulatory requirements",
          "Peer review of draft documents before issue",
          "Final issue in agreed format — hard copy, PDF or electronic submission",
        ],
        when: [
          "Before a certification audit when documentation is incomplete",
          "Following an inspection where a structured report is required for claims",
          "When regulatory or legal proceedings require documented evidence",
          "For management system documentation development or overhaul",
        ],
        who: "Inspection bodies, QA managers, legal teams, insurance adjusters, cargo owners, certification-seeking organisations.",
        deliv: [
          "Technical report or documentation suite",
          "Evidence annex — photographs, measurements, references",
          "Gap analysis of existing documentation",
          "Corrective documentation revisions where required",
          "Final issue confirmation and distribution record",
        ],
      }}
    />
  );
}
