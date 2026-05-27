import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage, type ServiceDetail } from "@/components/site/ServiceDetailPage";
import { BadgeCheck, GraduationCap, FileText, Award } from "lucide-react";

export const Route = createFileRoute("/services/certification-support")({
  head: () => ({
    meta: [
      { title: "Certification Support Services | ISO Readiness | QUALIFY Kenya" },
      { name: "description", content: "Gap assessments, documentation, internal audits and full certification readiness support for ISO 9001, ISO 14001, ISO 45001, ISO 22000 and related standards in Kenya." },
    ],
  }),
  component: CertificationSupport,
});

const data: ServiceDetail = {
  category: {
    label: "Quality Assurance & Compliance",
    accent: "var(--color-teal)",
    gradient: "linear-gradient(135deg, var(--color-teal), var(--color-ocean))",
    icon: Award,
  },
  icon: BadgeCheck,
  title: "Certification Support",
  tagline: "From gap assessment to audit-ready — and beyond.",
  desc: "We support organisations preparing for, maintaining and improving compliance with internationally recognised management system standards — through gap assessments, documentation, training, internal audits, corrective actions and post-certification support.",
  context: "QUALIFY does not issue certificates — certification is granted by authorised third-party certification bodies. Our role is to help your organisation get genuinely ready, remain compliant and continuously improve. We work across the full certification lifecycle: from first-time readiness to surveillance and re-certification preparation. Every engagement is tailored — no generic templates, no checkbox exercises.",
  who: "Organisations in any sector pursuing or maintaining ISO or sector-specific certification — including inspection bodies, laboratories, manufacturers, logistics companies, healthcare providers and SMEs.",
  deliv: [
    "Gap assessment report with prioritised findings",
    "Certification readiness roadmap with milestones",
    "QMS documentation suite — policies, procedures, forms",
    "Internal audit report and findings register",
    "CAPA tracking register",
    "Pre-certification readiness review",
    "Post-certification improvement support package",
  ],
  how: [
    "Discovery meeting to understand your target standard, current position and timeline",
    "Gap assessment against the applicable standard requirements — documenting what exists, what's missing and what needs to be improved",
    "Roadmap development — structured preparation plan with milestones, responsibilities and target dates",
    "Documentation support — drafting or reviewing quality manual, policies, SOPs, forms and records templates",
    "Staff competence and awareness sessions — ensuring your team understands the standard and their role in it",
    "Internal audit against the standard — identifying remaining gaps before the certification body visits",
    "Corrective action support — root-cause analysis, action planning and resolution tracking",
    "Pre-certification review — final independent check before the external audit",
    "Post-certification surveillance readiness and continuous improvement advisory",
  ],
  when: [
    "Pursuing ISO 9001, 14001, 45001, 22000 or related standards for the first time",
    "Preparing for a surveillance or recertification audit",
    "After a major nonconformity that threatens certification status",
    "When expanding into a new sector or geography requiring certification",
  ],
  primaryCta: { label: "Visit Certification Portal", href: "https://quality.qualify.co.ke", external: true },
  secondaryCta: { label: "Request Consultation", href: "/contact" },
  certStandards: [
    {
      code: "ISO/IEC 17020",
      name: "Inspection Bodies",
      scope: "General requirements for the operation of inspection bodies across any technical discipline — including marine, cargo, industrial and environmental inspection.",
      tag: "Inspection",
      route: "/certifications/iso-17020",
    },
    {
      code: "ISO 15189",
      name: "Medical Laboratories",
      scope: "Quality and competence requirements for medical laboratories providing diagnostic, monitoring and research services in patient care.",
      tag: "Medical Labs",
      route: "/certifications/iso-15189",
    },
    {
      code: "ISO/IEC 17025",
      name: "Testing & Calibration Labs",
      scope: "General requirements for the competence, impartiality and consistent operation of testing and calibration laboratories across all technical fields.",
      tag: "Laboratories",
      route: "/certifications/iso-17025",
    },
  ],
  related: [
    {
      title: "Training & Consultancy",
      desc: "Practical staff training in auditing, QMS and compliance — paired with certification readiness.",
      route: "/services/training-consultancy",
      icon: GraduationCap,
      accent: "var(--color-teal)",
    },
    {
      title: "Technical Reporting & Documentation",
      desc: "Professional report writing and QMS documentation support for audit-ready organisations.",
      route: "/services/technical-reporting-documentation",
      icon: FileText,
      accent: "var(--color-teal)",
    },
    {
      title: "Quality Assurance & Compliance",
      desc: "Broader QA system design, gap analysis and compliance framework development.",
      route: "/services/",
      icon: Award,
      accent: "var(--color-teal)",
    },
  ],
};

function CertificationSupport() {
  return <ServiceDetailPage data={data} />;
}
