import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/technical-reporting")({
  head: () => ({
    meta: [
      { title: "Technical Reporting & Documentation Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY produces clear, structured, professionally written technical reports and documentation supporting decision-making, claims resolution, audit compliance and management review." },
    ],
  }),
  component: TechnicalReportingPage,
});

function TechnicalReportingPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Technical Reporting & Documentation",
        title: "Clear, Structured Reports That Hold Up to Scrutiny",
        subtitle: "We produce technically accurate, logically structured reports and documentation that support decision-making, claims resolution, audit compliance and management review — written to be understood by technical and non-technical audiences alike.",
        Icon: FileText,
        accentCss: "var(--color-teal)",
        whoItems: [
          "Insurers and average adjusters",
          "Legal teams and arbitration panels",
          "Management boards and directors",
          "Auditors and certification bodies",
          "Port authorities and regulatory bodies",
          "Cargo owners and logistics managers",
        ],
        context: "Our technical writers and surveyors work together to produce reports that are factually accurate, logically structured and defensible. Reports follow a consistent format — executive summary, findings, evidence, analysis and recommendations — and are issued within the agreed turnaround time. Every report is internally reviewed for accuracy and clarity before issue.",
        how: [
          "Briefing to understand the assignment, audience and purpose of the report",
          "Evidence gathering — inspection findings, data, documents, photographs",
          "Drafting — structured report with executive summary, body findings and annexes",
          "Internal quality review before issue",
          "Client review opportunity where required",
          "Final issuance in PDF and editable formats as agreed",
          "Follow-up clarification or addendum support where requested",
        ],
        when: [
          "After an inspection or survey where a formal report is required",
          "When supporting an insurance claim, legal proceeding or arbitration",
          "For management review or board reporting on quality or operational matters",
          "When audit findings need to be formally documented and communicated",
        ],
        who: "Insurers, legal teams, management boards, auditors, certification bodies.",
        deliv: [
          "Structured technical report",
          "Executive summary",
          "Evidence and photographic annex",
          "Findings register",
          "Recommendations section",
          "Editable and PDF formats",
        ],
      }}
    />
  );
}
