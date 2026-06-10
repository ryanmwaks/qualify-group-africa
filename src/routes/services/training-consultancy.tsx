import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

const TRAINING_URL = "https://training.qualify.co.ke";

export const Route = createFileRoute("/services/training-consultancy")({
  head: () => ({
    meta: [
      { title: "Training and Capacity Building | QUALIFY Group Africa" },
      { name: "description", content: "Professional training services and competence development programmes delivered by QUALIFY." },
    ],
  }),
  component: TrainingCapacityBuildingPage,
});

function TrainingCapacityBuildingPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Competence & Skills Development",
        title: "Training and Capacity Building",
        subtitle: "Our competence and skills development services strengthen organisational capability by building skilled, quality-conscious personnel who understand quality requirements and know how to apply them effectively in real operations.",
        Icon: GraduationCap,
        accentCss: "var(--color-teal)",
        heroVariant: "training-consultancy",
        whoItems: [
          "Marine and cargo surveyors needing structured skills development",
          "Quality officers and compliance managers building internal audit capability",
          "Inspection teams requiring standardised reporting competence",
          "Operations staff with quality management responsibilities",
          "Training institutions seeking specialist maritime or quality content",
          "Organisations onboarding new technical or inspection staff",
        ],
        contextLabel: "Professional Training Services",
        context: "Training is delivered on-site at your premises, at an agreed venue, or in a blended format. Content is developed specifically for each engagement - not off-the-shelf slides. Each session translates theory into practical competence that participants can apply immediately. We also assess competence post-training to ensure skills have genuinely transferred.",
        horizontalWho: true,
        how: [],
        hideHow: true,
        when: [
          "Onboarding new team members.",
          "Continual competence enhancement.",
        ],
        who: "Operations Team, Administration team, compliance team, training of trainers.",
        deliv: [
          "Custom training programme.",
          "Participant materials and workbooks",
          "Competency assessment records.",
          "Attendance and participation records.",
          "Post-training advisory report.",
          "Certificate of Training.",
        ],
        ctaExternal: { label: "Visit Training Portal", href: TRAINING_URL },
        portalDescription: "Continue to our dedicated training portal when you are ready to access the online platform.",
        extraSection: (
          <section className="relative overflow-hidden border-y border-[var(--color-teal)]/30 py-16" style={{ background: "var(--gradient-navy)" }}>
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="container-page relative">
              <div className="max-w-3xl">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-teal)]">Competence Development Programs</div>
                <h2 className="mb-5 max-w-2xl font-display text-2xl font-bold leading-tight text-white md:text-3xl">Develop practical skills that translate into workplace performance.</h2>
                <div className="space-y-4 text-base leading-relaxed text-white/80">
                  <p>Our training programmes are delivered through our online Learning Management System (LMS), featuring engaging and informative content specifically developed for self-paced learning. The courses are designed and delivered by practicing industry professionals with hands-on experience in their respective fields - not generic, off-the-shelf training materials.</p>
                  <p>Each programme bridges the gap between theory and practice, equipping participants with competencies that can be applied immediately in real-world situations. To ensure effective knowledge transfer, we assess participant competence through in-course assessments, practical exercises, and dedicated post-training competency evaluation quizzes.</p>
                  <p>In addition to self-paced learning, training is also offered through scheduled live online instructor-led sessions, providing opportunities for interactive learning, discussion, and direct engagement with subject matter experts.</p>
                </div>
              </div>
            </div>
          </section>
        ),
      }}
    />
  );
}
