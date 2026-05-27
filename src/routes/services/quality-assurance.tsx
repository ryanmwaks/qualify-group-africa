import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/quality-assurance")({
  head: () => ({
    meta: [
      { title: "Quality Assurance & Compliance Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY helps organisations build, strengthen and maintain quality systems, internal controls and compliance frameworks — making operations more consistent, audit-ready and aligned with applicable standards." },
    ],
  }),
  component: QualityAssurancePage,
});

function QualityAssurancePage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Quality Assurance & Compliance",
        title: "Building Systems That Keep You Compliant",
        subtitle: "We help organisations build, strengthen and maintain quality systems, internal controls and compliance frameworks — making operations more consistent, audit-ready and aligned with applicable standards.",
        Icon: Award,
        accentCss: "var(--color-teal)",
        whoItems: [
          "QA managers and compliance officers",
          "Operations managers seeking structured controls",
          "SME owners scaling their processes",
          "Logistics and transport companies",
          "Organisations preparing for certification or regulatory inspection",
          "Teams undergoing management changes requiring a systems review",
        ],
        context: "Our quality advisors work directly with your team on-site or remotely — reviewing existing systems, identifying gaps and supporting practical improvements. The approach is hands-on and focused on what actually works in your operational context, not generic templates. We review existing policies, procedures, records and controls, then develop or improve your QMS documentation to match your real-world operations.",
        how: [
          "Initial consultation to understand your operations, current systems and compliance requirements",
          "Gap assessment against applicable standards or your own quality objectives",
          "Review of existing policies, procedures, records and controls",
          "Development or improvement of QMS documentation — manuals, SOPs, forms, registers",
          "Internal audit planning and execution",
          "Corrective action tracking and resolution support",
          "Management review support and performance reporting",
          "Ongoing advisory as your system matures",
        ],
        when: [
          "Preparing for certification or regulatory inspection",
          "After an audit finding reveals systemic weaknesses",
          "When scaling operations and needing structured quality controls",
          "Following management changes requiring a systems review",
        ],
        who: "QA managers, compliance officers, operations managers, SME owners, logistics companies.",
        deliv: [
          "Gap assessment report",
          "QMS documentation suite (manual, SOPs, forms, registers)",
          "Internal audit reports",
          "Corrective action register",
          "Management review support package",
        ],
      }}
    />
  );
}
