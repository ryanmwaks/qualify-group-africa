import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage, type ServiceDetail } from "@/components/site/ServiceDetailPage";
import { FileText, BadgeCheck, GraduationCap, Award } from "lucide-react";

export const Route = createFileRoute("/services/technical-reporting-documentation")({
  head: () => ({
    meta: [
      { title: "Technical Reporting & Documentation | QUALIFY Kenya" },
      { name: "description", content: "Professionally written technical reports and quality documentation — surveys, inspections, audits, management review and claims support — structured and defensible." },
    ],
  }),
  component: TechnicalReporting,
});

const data: ServiceDetail = {
  category: {
    label: "Quality Assurance & Compliance",
    accent: "var(--color-teal)",
    gradient: "linear-gradient(135deg, var(--color-teal), var(--color-ocean))",
    icon: Award,
  },
  icon: FileText,
  title: "Technical Reporting & Documentation",
  tagline: "Clear findings. Defensible evidence. Reports that hold up.",
  desc: "We produce clear, structured, professionally written technical reports and documentation that support decision-making, claims resolution, audit compliance and management review — written to be understood by technical and non-technical audiences alike.",
  context: "Our technical writers and surveyors work together to produce reports that are factually accurate, logically structured and defensible under scrutiny. Every report follows a consistent format — executive summary, findings, evidence, analysis and recommendations — and is issued within the agreed turnaround time. We work across inspection, survey, audit and management reporting assignments and can support clients who need documents that will be submitted to insurers, certification bodies, legal teams or boards.",
  who: "Insurers, P&I clubs, legal teams, average adjusters, management boards, certification bodies, auditors, and organisations requiring formal documentation of inspection or quality management activities.",
  deliv: [
    "Structured technical report with consistent format",
    "Executive summary for senior or non-technical audiences",
    "Findings and observations register",
    "Evidence and photographic annex",
    "Recommendations section with priority grading",
    "Editable source file and PDF as agreed",
    "Follow-up addendum or clarification where required",
  ],
  how: [
    "Briefing to understand the assignment, purpose, audience and required turnaround — we align on scope before starting",
    "Evidence gathering — review of inspection findings, survey notes, audit records, photographs, data and supporting documents",
    "Structural planning — agreement on report format, sections and level of technical depth appropriate for the audience",
    "Drafting — executive summary, findings narrative, analysis and recommendations written by an experienced technical writer",
    "Internal quality review — report checked for accuracy, consistency, logical flow and evidence alignment before issue",
    "Client review opportunity — draft shared for factual correction where required",
    "Final issuance in PDF and agreed editable format, within the agreed turnaround",
    "Addendum or clarification support where questions arise after issue",
  ],
  when: [
    "After an inspection or survey where a formal, professionally structured report is required for third-party submission",
    "When supporting an insurance claim, legal proceeding or arbitration that requires defensible documentation",
    "For management review or board reporting on quality, operational or compliance matters",
    "When audit findings need to be formally documented and communicated to certification bodies or regulators",
  ],
  secondaryCta: { label: "Discuss a Reporting Assignment", href: "/contact" },
  related: [
    {
      title: "Certification Support",
      desc: "Full certification readiness including documentation of quality systems and audit reports.",
      route: "/services/certification-support",
      icon: BadgeCheck,
      accent: "var(--color-teal)",
    },
    {
      title: "Training & Consultancy",
      desc: "Build in-house reporting competence with structured training in technical writing.",
      route: "/services/training-consultancy",
      icon: GraduationCap,
      accent: "var(--color-teal)",
    },
    {
      title: "Damage & Loss Assessment",
      desc: "Independent damage assessments paired with our structured technical reporting.",
      route: "/services/damage-loss-assessment",
      icon: FileText,
      accent: "var(--color-ocean)",
    },
  ],
};

function TechnicalReporting() {
  return <ServiceDetailPage data={data} />;
}
