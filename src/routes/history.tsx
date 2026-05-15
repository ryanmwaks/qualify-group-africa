import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Our History | Qualify Group Africa Ltd" },
      { name: "description", content: "The story of QUALIFY Group Africa Ltd — built around inspection excellence, quality assurance and maritime sector support." },
    ],
  }),
  component: History,
});

const timeline = [
  { year: "2010", title: "Built around purpose", text: "Founded to bring independent, professional inspection and quality assurance to maritime and cargo operations in Kenya." },
  { year: "2014", title: "Inspection & quality services expand", text: "Service portfolio broadens across cargo verification, vessel surveys and quality systems." },
  { year: "2018", title: "Deeper maritime and cargo support", text: "Growing client base across shipowners, insurers and cargo interests across East Africa." },
  { year: "2022", title: "Digital transformation begins", text: "Development of QMS Platform — a digital quality management platform for documentation, audits and corrective actions." },
  { year: "2026", title: "Digital, professional, client-centered", text: "A focus on dependable technical reporting, modern delivery and long-term client partnerships." },
];

function History() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Story" title="Our History" subtitle="A company built around inspection excellence, quality assurance and professional technical reporting." variant="tanga" />
      <section className="container-page py-16">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div key={t.title} className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className="text-xs uppercase tracking-widest text-[var(--color-orange)] font-bold">{t.year}</div>
                  <h3 className="font-display text-xl font-bold text-navy mt-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{t.text}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 size-4 rounded-full bg-[var(--color-teal)] ring-4 ring-background" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
