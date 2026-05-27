import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/training-consultancy")({
  head: () => ({
    meta: [
      { title: "Training & Consultancy Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY delivers practical, sector-grounded training programmes in inspection, quality management, auditing, documentation, compliance and continuous improvement — tailored to your team." },
    ],
  }),
  component: TrainingConsultancyPage,
});

function TrainingConsultancyPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Training & Consultancy",
        title: "Practical Training That Builds Real Competence",
        subtitle: "QUALIFY delivers practical, sector-grounded training programmes and advisory services in inspection, quality management, auditing, documentation, compliance and continuous improvement — tailored to your team's role and experience level.",
        Icon: GraduationCap,
        accentCss: "var(--color-teal)",
        whoItems: [
          "Inspection teams and technical officers",
          "Quality officers and compliance managers",
          "Operations staff requiring structured upskilling",
          "Training institutions seeking specialist content",
          "Teams onboarding new inspection or quality staff",
          "Organisations building internal audit capability",
        ],
        context: "Training is delivered on-site at your premises, at an agreed venue, or in a blended format combining in-person and remote sessions. Content is developed specifically for each engagement — not off-the-shelf slides. Each session is structured to translate theory into practical competence that participants can apply immediately.",
        how: [
          "Training needs assessment — understanding your team's current competence and learning gaps",
          "Programme design — topics, depth, format and duration tailored to your context",
          "Content development — practical exercises, case studies and sector-relevant examples",
          "Delivery — on-site, virtual or blended sessions by experienced practitioners",
          "Competence assessment — practical exercises and evaluation where required",
          "Participant materials — workbooks, reference guides, checklists",
          "Post-training follow-up advisory to reinforce application",
        ],
        when: [
          "Onboarding new inspection or quality staff",
          "Before a certification audit or regulatory inspection",
          "When building an internal audit capability from scratch",
          "Following process changes that require retraining of staff",
        ],
        who: "Inspection teams, quality officers, operations staff, compliance managers, training institutions.",
        deliv: [
          "Custom training programme",
          "Participant materials and workbooks",
          "Attendance and competence records",
          "Post-training assessment results",
          "Follow-up advisory report",
        ],
        ctaExternal: { label: "Explore Training Portal", href: "https://training.qualify.co.ke" },
      }}
    />
  );
}
