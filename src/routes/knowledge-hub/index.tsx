import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Search, BookOpen, FileDown, ArrowRight, FileText, ClipboardCheck, Ship, BarChart3 } from "lucide-react";
import { useMemo, useState } from "react";
import { articles as allArticles } from "@/data/articles";

export const Route = createFileRoute("/knowledge-hub/")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub | Marine, Cargo & Quality Insights — QUALIFY Group Africa" },
      { name: "description", content: "Technical articles on draft surveying, cargo inspection, quality management and ISO certification from the QUALIFY team." },
    ],
  }),
  component: KnowledgeHub,
});

const CATS = ["All", "Draft Survey", "Cargo Inspection", "Quality Management", "ISO", "Marine Operations", "Announcements"];

// Map imported articles to the shape expected by this page
const articles = allArticles.map((a) => ({
  slug: a.slug,
  cat: a.cats[0] ?? "Draft Survey",
  title: a.title,
  author: a.author,
  date: a.date,
  excerpt: a.excerpt,
  readTime: a.readTime,
  coverImage: a.coverImage,
}));

const downloads = [
  { icon: FileText, title: "Company Profile", desc: "Overview of QUALIFY Group Africa Ltd — services, credentials, standards alignment and contact information.", label: "Download PDF", color: "var(--color-ocean)" },
  { icon: ClipboardCheck, title: "ISO 9001:2015 Readiness Checklist", desc: "Self-assessment checklist against key ISO 9001 clauses — identify gaps before your certification audit.", label: "Download Checklist", color: "var(--color-teal)" },
  { icon: Ship, title: "Cargo Inspection Preparation Guide", desc: "What to prepare, who to involve and what to expect during a QUALIFY cargo inspection or survey.", label: "Download Guide", color: "var(--color-ocean)" },
  { icon: BarChart3, title: "QMS Implementation Guide", desc: "Step-by-step guidance on implementing a quality management system aligned with ISO 9001:2015.", label: "Download Guide", color: "var(--color-teal)" },
];

const legacyResources = [
  { cat: "Maritime", title: "What to prepare before a marine survey", desc: "Documentation, access, crew availability and condition records that make surveys faster and more useful." },
  { cat: "Inspection", title: "Why cargo inspection matters before discharge", desc: "How timely condition checks protect buyers, sellers and insurers from avoidable disputes." },
  { cat: "Maritime", title: "Common vessel inspection findings and how to address them", desc: "Patterns seen across vessel condition surveys and the maintenance actions that reduce risk." },
  { cat: "ISO", title: "Understanding ISO 9001:2015 clause by clause", desc: "A plain-language breakdown of clauses and what they mean for documentation and operations." },
  { cat: "Compliance", title: "Building audit readiness in logistics operations", desc: "Operational practices that improve evidence trails and compliance posture across logistics teams." },
  { cat: "QMS", title: "Benefits of a digital quality management system", desc: "How digital QMS workflows improve accountability, audit preparation and visibility." },
  { cat: "Technical Reporting", title: "How technical reporting supports insurance and claims", desc: "What makes an inspection report defensible and useful under review." },
  { cat: "Training", title: "Training inspection teams for consistent reporting", desc: "Standardising findings, language and evidence capture across distributed inspection teams." },
];

function KnowledgeHub() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(
    () => articles.filter((a) =>
      (cat === "All" || a.cat === cat) &&
      (q === "" || a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase()))
    ),
    [q, cat]
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Marine, Cargo & Quality Insights"
        subtitle="Technical articles, guides and practical insights from the QUALIFY team — covering draft surveying, cargo inspection, quality management and ISO certification."
        variant="lamu"
      />

      <section className="container-page pt-12 pb-4">
        <div className="flex flex-col gap-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..."
              className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)] transition-shadow" />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${cat === c ? "bg-navy text-white shadow-md" : "bg-card border border-border text-navy hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-8 pb-16">
        {/* Recent posts strip */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          </p>
          <span className="text-xs text-[var(--color-teal)] font-semibold uppercase tracking-wider">Recent Posts</span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <article key={a.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all">
                <div className="h-40 relative overflow-hidden bg-navy">
                  <img src={a.coverImage} alt="" loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041830]/70 via-[#041830]/20 to-transparent" />
                  <BookOpen className="absolute right-5 bottom-4 size-12 text-white/25 group-hover:text-white/35 transition-colors" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 text-[11px] font-bold text-navy tracking-wide">{a.cat}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-navy text-[1.05rem] leading-snug mb-2 group-hover:text-[var(--color-ocean)] transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] text-muted-foreground">
                      <span>{a.author} · {a.date}</span>
                      <span className="ml-2">{a.readTime}</span>
                    </div>
                    {a.slug ? (
                      <Link
                        to="/knowledge-hub/$slug"
                        params={{ slug: a.slug }}
                        className="text-xs font-semibold text-[var(--color-teal)] hover:text-[var(--color-ocean)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Read &rarr;
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <Search className="size-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">No articles match your search.</p>
            <button onClick={() => { setQ(""); setCat("All"); }} className="mt-3 text-sm text-[var(--color-teal)] hover:underline font-semibold">Clear filters</button>
          </div>
        )}
      </section>

      <section className="container-page pb-16">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Original Resource Library</div>
          <h2 className="font-display text-3xl font-bold text-navy">Marine, Cargo & Quality Topics</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            These broader resource topics from the original QUALIFY site are preserved as planned guides alongside the newer draft-survey article library.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {legacyResources.map((item) => (
            <article key={item.title} className="rounded-2xl bg-card border border-border p-5 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-card)] transition-all">
              <div className="text-[11px] uppercase tracking-wider font-bold text-[var(--color-orange)] mb-2">{item.cat}</div>
              <h3 className="font-display font-bold text-navy leading-snug mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              <div className="mt-4 text-xs font-semibold text-[var(--color-teal)]">Coming soon</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container-page">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Downloads</div>
            <h2 className="font-display text-3xl font-bold text-navy">Guides & Reference Documents</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">Downloadable resources to support inspection preparation, certification readiness and quality system implementation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {downloads.map((d) => (
              <div key={d.title} className="group rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all flex flex-col">
                <div className="size-12 rounded-xl grid place-items-center text-white mb-4 group-hover:shadow-[0_0_20px_rgba(0,122,138,0.35)] transition-shadow"
                  style={{ background: `linear-gradient(135deg, var(--color-ocean), ${d.color})` }}>
                  <d.icon className="size-6" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2 leading-snug">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{d.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-ocean)] transition-colors group-hover:gap-3">
                  <FileDown className="size-4 shrink-0" />{d.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 size-48 rounded-full bg-[var(--color-orange)]/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Need a specific guide or technical document?</h3>
            <p className="text-white/70 leading-relaxed mb-7">Our team can provide tailored technical information, checklist templates or briefing documents for your inspection, certification or compliance need.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
                Request a Document <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition-colors">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
