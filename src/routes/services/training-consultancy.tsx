import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage, type ServiceDetail } from "@/components/site/ServiceDetailPage";
import { GraduationCap, BadgeCheck, FileText, Award } from "lucide-react";

export const Route = createFileRoute("/services/training-consultancy")({
  head: () => ({
    meta: [
      { title: "Training & Consultancy | Inspection & Quality | QUALIFY Kenya" },
      { name: "description", content: "Practical, sector-grounded training programmes in inspection, quality management, auditing and compliance — delivered on-site, virtually or blended across Kenya." },
    ],
  }),
  component: TrainingConsultancy,
});

const data: ServiceDetail = {
  category: {
    label: "Quality Assurance & Compliance",
    accent: "var(--color-teal)",
    gradient: "linear-gradient(135deg, var(--color-teal), var(--color-ocean))",
    icon: Award,
  },
  icon: GraduationCap,
  title: "Training & Consultancy",
  tagline: "Theory that sticks — delivered by practitioners, not presenters.",
  desc: "QUALIFY delivers practical, sector-grounded training programmes and advisory services in inspection, quality management, auditing, documentation, compliance and continuous improvement — tailored to your team's role and experience level.",
  context: "Training is delivered on-site at your premises, at an agreed venue, or in a blended format combining in-person and remote sessions. Content is developed specifically for each engagement — not off-the-shelf slides. Every session is built around real scenarios from your industry and structured to translate theory into practical competence that participants can apply immediately. We also provide ongoing advisory support between sessions to reinforce application.",
  who: "Inspection teams, quality officers, operations staff, compliance managers, internal auditors, training institutions, and organisations preparing for certification or regulatory inspection.",
  deliv: [
    "Custom training programme design document",
    "Participant workbooks and reference materials",
    "Attendance and competence records",
    "Post-training assessment results",
    "Practical exercises and case study packs",
    "Follow-up advisory report and action checklist",
  ],
  how: [
    "Training needs assessment — structured interview or survey with line managers and team leads to identify current competence gaps and learning priorities",
    "Programme design — topics, depth, format (classroom/virtual/blended), duration and sequence tailored to your context",
    "Content development — practical exercises, real case studies, sector-relevant examples and assessments built from scratch for your audience",
    "Scheduling and logistics coordination with your HR or operations team",
    "Delivery — facilitated sessions by experienced practitioners from the QUALIFY team",
    "Competence assessment — practical exercises, scenario-based tests or observed tasks where formal evaluation is required",
    "Issuance of participant attendance records and competence certificates where applicable",
    "Post-training advisory session — review application, resolve questions, update action plan",
  ],
  when: [
    "Onboarding new inspection, quality or compliance staff who need structured grounding",
    "Before a certification audit or regulatory inspection — building competence under time pressure",
    "When building an internal audit capability from scratch within your organisation",
    "Following process, system or standard changes that require staff to be retrained",
  ],
  primaryCta: { label: "Explore Training Portal", href: "https://training.qualify.co.ke", external: true },
  secondaryCta: { label: "Discuss Your Needs", href: "/contact" },
  related: [
    {
      title: "Certification Support",
      desc: "Pair training with full certification readiness — gap assessment, documentation and pre-audit review.",
      route: "/services/certification-support",
      icon: BadgeCheck,
      accent: "var(--color-teal)",
    },
    {
      title: "Technical Reporting & Documentation",
      desc: "Professional documentation and report writing services to complement your training outcomes.",
      route: "/services/technical-reporting-documentation",
      icon: FileText,
      accent: "var(--color-teal)",
    },
    {
      title: "Quality Assurance & Compliance",
      desc: "Broader QA system design and compliance framework development.",
      route: "/services/",
      icon: Award,
      accent: "var(--color-teal)",
    },
  ],
};

function TrainingConsultancy() {
  return <ServiceDetailPage data={data} />;
}
