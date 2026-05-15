import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { ShieldCheck, Scale, Award, Lock, FileSearch, Smile, TrendingUp, BookOpen } from "lucide-react";

export const Route = createFileRoute("/quality-policy")({
  head: () => ({
    meta: [
      { title: "Quality Policy | Qualify Group Africa" },
      { name: "description", content: "QUALIFY Group Africa's commitment to impartial, competent, evidence-based, and continually improving inspection, quality assurance and certification support services." },
    ],
  }),
  component: QualityPolicy,
});

const items = [
  { icon: ShieldCheck, title: "Our Commitment to Quality", text: "We deliver professional, impartial, reliable and evidence-based services aligned with applicable standards and regulatory expectations." },
  { icon: Scale, title: "Impartiality and Independence", text: "We safeguard objectivity in every assignment by managing conflicts of interest and protecting the integrity of our work." },
  { icon: Award, title: "Competence and Professionalism", text: "Our team maintains current technical knowledge, skills and ethical standards across all service areas." },
  { icon: Lock, title: "Confidentiality", text: "Client information, findings and reports are handled with strict confidentiality and controlled access." },
  { icon: FileSearch, title: "Evidence-Based Reporting", text: "Conclusions are supported by traceable evidence, structured documentation and clear records." },
  { icon: Smile, title: "Client Satisfaction", text: "We listen to client needs, communicate clearly, and deliver work that supports informed decisions." },
  { icon: TrendingUp, title: "Continuous Improvement", text: "We monitor performance, learn from feedback and continually improve our processes and services." },
  { icon: BookOpen, title: "Compliance with Applicable Standards", text: "We align our work with recognized international standards and sector-relevant frameworks where applicable." },
];

function QualityPolicy() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quality Policy"
        title="Quality Policy"
        subtitle="Our commitment to impartial, competent, confidential and evidence-based inspection, quality assurance, training and certification support services."
      />
      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((i) => (
            <article key={i.title} className="rounded-2xl bg-card border border-border p-7 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="size-12 rounded-xl bg-[var(--gradient-accent)] grid place-items-center text-white mb-4"><i.icon className="size-6" /></div>
              <h2 className="font-display font-bold text-navy text-xl">{i.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
