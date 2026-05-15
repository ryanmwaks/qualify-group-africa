import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { GraduationCap, Wrench, ShieldCheck, Award, Building2, Cpu, Anchor } from "lucide-react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners and Strategic Collaborations | Qualify Group Africa" },
      { name: "description", content: "QUALIFY collaborates with trusted training, technical, quality, certification and industry partners to support clients across the region." },
    ],
  }),
  component: Partners,
});

const groups = [
  { icon: GraduationCap, label: "Training Partners", text: "Specialist trainers and institutions delivering practical, sector-relevant programs." },
  { icon: Wrench, label: "Technical Partners", text: "Engineering, marine and inspection experts supporting complex assignments." },
  { icon: ShieldCheck, label: "Quality & Compliance Partners", text: "Quality professionals supporting documentation, audits and compliance readiness." },
  { icon: Award, label: "Certification Support Partners", text: "Collaborators helping clients prepare for certification by authorized bodies." },
  { icon: Building2, label: "Industry Collaborators", text: "Sector stakeholders engaged in operations, regulation and continuous improvement." },
  { icon: Cpu, label: "Technology Partners", text: "Digital and platform partners supporting QMS Platform and digital quality solutions." },
  { icon: Anchor, label: "Maritime & Logistics Stakeholders", text: "Port, shipping, cargo and logistics partners across Kenya and the wider region." },
];

function Partners() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Partners"
        title="Partners and Strategic Collaborations"
        subtitle="QUALIFY works with trusted partners, trainers, consultants, technical experts, quality professionals, industry stakeholders and authorized bodies — where applicable — to support clients in achieving competence, compliance, certification readiness and continuous improvement."
      />
      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <article key={g.label} className="rounded-2xl bg-card border border-border p-7 hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="size-12 rounded-xl bg-[var(--gradient-accent)] grid place-items-center text-white mb-4"><g.icon className="size-6" /></div>
              <h2 className="font-display font-bold text-navy text-lg">{g.label}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.text}</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[1,2,3].map((n) => (
                  <div key={n} className="aspect-[3/2] rounded-md bg-muted border border-border grid place-items-center text-[10px] uppercase tracking-wider text-muted-foreground">Logo</div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
