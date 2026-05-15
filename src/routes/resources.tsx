import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Search, BookOpen, FileDown, ArrowRight, FileText, ClipboardCheck, Ship, BarChart3 } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub | Marine, Cargo & Quality Resources — QUALIFY Group Africa" },
      { name: "description", content: "Practical guides, articles and downloadable resources on marine inspection, cargo surveying, ISO certification, quality assurance and digital QMS from the QUALIFY team." },
    ],
  }),
  component: Resources,
});

const CATS = ["All", "Inspection", "Compliance", "ISO", "Training", "Maritime", "QMS", "Risk Management", "Technical Reporting"];

const articles = [
  {
    cat: "Maritime",
    title: "What to prepare before a marine survey",
    excerpt: "A practical checklist covering documentation, access, crew availability and condition records that make your survey faster and more useful.",
    readTime: "4 min read",
  },
  {
    cat: "Inspection",
    title: "Why cargo inspection matters before discharge",
    excerpt: "Catching condition issues at the right stage protects buyers, sellers and insurers from costly disputes and liability exposure.",
    readTime: "5 min read",
  },
  {
    cat: "Maritime",
    title: "Common vessel inspection findings and how to address them",
    excerpt: "The patterns we see most across vessel condition surveys — and what proactive maintenance can prevent.",
    readTime: "6 min read",
  },
  {
    cat: "ISO",
    title: "Understanding ISO 9001:2015 clause by clause",
    excerpt: "A plain-language breakdown of each clause and what it means for your management system documentation and operations.",
    readTime: "8 min read",
  },
  {
    cat: "Compliance",
    title: "Building audit readiness in logistics operations",
    excerpt: "Five operational practices that measurably improve compliance posture across logistics and supply chain functions.",
    readTime: "5 min read",
  },
  {
    cat: "QMS",
    title: "Benefits of a digital quality management system",
    excerpt: "How moving from paper-based quality management to a digital QMS unlocks faster audits, clearer accountability and real-time visibility.",
    readTime: "6 min read",
  },
  {
    cat: "Technical Reporting",
    title: "How technical reporting supports insurance and claims",
    excerpt: "Evidence-led inspection reports that hold up under scrutiny — what makes a report defensible and how to commission one.",
    readTime: "5 min read",
  },
  {
    cat: "Training",
    title: "Training inspection teams for consistent reporting",
    excerpt: "Standardising findings, language and evidence capture across distributed inspection teams to ensure consistent, reliable reports.",
    readTime: "4 min read",
  },
  {
    cat: "Risk Management",
    title: "Risk-based thinking in ISO management systems",
    excerpt: "How to embed genuine risk identification and treatment into your QMS rather than treating it as a checkbox exercise.",
    readTime: "7 min read",
  },
  {
    cat: "ISO",
    title: "ISO 45001 vs OHSAS 18001 — what changed and why it matters",
    excerpt: "Key differences between the old and new occupational health and safety standard, and what transition means for your organisation.",
    readTime: "6 min read",
  },
  {
    cat: "Inspection",
    title: "Damage assessment methodology for cargo claims",
    excerpt: "How QUALIFY approaches damage quantification — sampling, evidence capture, independent verification and report structure.",
    readTime: "5 min read",
  },
  {
    cat: "Compliance",
    title: "HACCP implementation for food importers and processors",
    excerpt: "A practical introduction to hazard analysis and critical control point planning for food safety compliance in East Africa.",
    readTime: "7 min read",
  },
];

const downloads = [
  {
    icon: FileText,
    title: "Company Profile",
    desc: "Overview of QUALIFY Group Africa Ltd — services, credentials, standards alignment and contact information.",
    label: "Download PDF",
    color: "var(--color-ocean)",
  },
  {
    icon: ClipboardCheck,
    title: "ISO 9001:2015 Readiness Checklist",
    desc: "Self-assessment checklist against key ISO 9001 clauses — identify gaps before your certification audit.",
    label: "Download Checklist",
    color: "var(--color-teal)",
  },
  {
    icon: Ship,
    title: "Cargo Inspection Preparation Guide",
    desc: "What to prepare, who to involve and what to expect during a QUALIFY cargo inspection or survey.",
    label: "Download Guide",
    color: "var(--color-ocean)",
  },
  {
    icon: BarChart3,
    title: "QMS Implementation Guide",
    desc: "Step-by-step guidance on implementing a quality management system aligned with ISO 9001:2015.",
    label: "Download Guide",
    color: "var(--color-teal)",
  },
];

function Resources() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() =>
    articles.filter((a) =>
      (cat === "All" || a.cat === cat) &&
      (q === "" || a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase()))
    ),
    [q, cat]
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Marine, Cargo & Quality Resources"
        subtitle="Practical guides, articles and insights from the QUALIFY team — helping clients understand inspection, certification, compliance and quality management."
        variant="lamu"
      />

      {/* Search + Filters */}
      <section className="container-page pt-12 pb-4">
        <div className="flex flex-col gap-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles and guides..."
              className="w-full rounded-xl border border-border bg-card pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-teal)] transition-shadow"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  cat === c
                    ? "bg-navy text-white shadow-md"
                    : "bg-card border border-border text-navy hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container-page py-8 pb-16">
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <article
                key={a.title}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all"
              >
                <div className="h-36 relative overflow-hidden" style={{ background: "var(--gradient-accent)" }}>
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <BookOpen className="absolute right-5 bottom-4 size-14 text-white/20 group-hover:text-white/30 transition-colors" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 text-[11px] font-bold text-navy tracking-wide">
                    {a.cat}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-navy text-[1.05rem] leading-snug mb-2 group-hover:text-[var(--color-ocean)] transition-colors">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">{a.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-teal)] bg-[var(--color-teal)]/10 px-2.5 py-1 rounded-full">
                      Coming soon
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <Search className="size-10 text-muted-foreground/40 mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">No articles match your search.</p>
            <button onClick={() => { setQ(""); setCat("All"); }} className="mt-3 text-sm text-[var(--color-teal)] hover:underline font-semibold">
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Downloads Section */}
      <section className="bg-muted/40 py-16">
        <div className="container-page">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Downloads</div>
            <h2 className="font-display text-3xl font-bold text-navy">Guides & Reference Documents</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">Downloadable resources to support inspection preparation, certification readiness and quality system implementation. Request access via our contact page.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {downloads.map((d) => (
              <div
                key={d.title}
                className="group rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-elegant)] transition-all flex flex-col"
              >
                <div
                  className="size-12 rounded-xl grid place-items-center text-white mb-4 group-hover:shadow-[0_0_20px_rgba(0,122,138,0.35)] transition-shadow"
                  style={{ background: `linear-gradient(135deg, var(--color-ocean), ${d.color})` }}
                >
                  <d.icon className="size-6" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2 leading-snug">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{d.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] hover:text-[var(--color-ocean)] transition-colors group-hover:gap-3"
                >
                  <FileDown className="size-4 shrink-0" />
                  {d.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
          <div className="absolute -left-10 bottom-0 size-48 rounded-full bg-[var(--color-orange)]/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Need a specific guide or technical document?</h3>
            <p className="text-white/70 leading-relaxed mb-7">Our team can provide tailored technical information, checklist templates or briefing documents for your specific inspection, certification or compliance need.</p>
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
