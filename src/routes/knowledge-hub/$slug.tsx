import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowLeft, Calendar, Clock, Tag, Share2, Facebook, Twitter } from "lucide-react";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/knowledge-hub/$slug")({
  head: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    return {
      meta: article
        ? [
            { title: `${article.title} | QUALIFY Group Africa` },
            { name: "description", content: article.excerpt },
            { property: "og:title", content: article.title },
            { property: "og:description", content: article.excerpt },
          ]
        : [{ title: "Article Not Found | QUALIFY Group Africa" }],
    };
  },
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-navy mb-4">Article Not Found</h1>
        <Link to="/knowledge-hub" className="text-[var(--color-teal)] hover:underline font-semibold">
          Back to Knowledge Hub
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  const pageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${import.meta.env.BASE_URL}knowledge-hub/${article.slug}`
      : `https://qualify.co.ke${import.meta.env.BASE_URL}knowledge-hub/${article.slug}`;

  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const xShare = `https://x.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(pageUrl)}`;

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Article hero */}
      <div
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #062B4F 0%, #041830 100%)" }}
      >
        <img src={article.coverImage} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-28" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041830]/95 via-[#062B4F]/78 to-[#041830]/45" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-page relative max-w-3xl mx-auto">
          <Link
            to="/knowledge-hub"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-[var(--color-teal)] transition-colors mb-8"
          >
            <ArrowLeft className="size-4" /> Knowledge Hub
          </Link>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-5">
            {article.cats.map((c) => (
              <span
                key={c}
                className="px-2.5 py-1 rounded-full bg-[var(--color-teal)]/15 border border-[var(--color-teal)]/30 text-[10px] font-bold uppercase tracking-wider text-[var(--color-teal)]"
              >
                {c}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/50">
            <span className="font-semibold text-white/70">{article.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-page py-12 max-w-3xl mx-auto">
        {/* SVG Sketch */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm overflow-hidden">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
            <Tag className="size-3.5" /> Technical Illustration
          </div>
          {article.sketch}
        </div>

        {/* Body */}
        <div
          className="text-navy/90 leading-relaxed space-y-4
            [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-3
            [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-slate-700
            [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-teal)] [&_blockquote]:pl-4 [&_blockquote]:my-6 [&_blockquote]:text-slate-600 [&_blockquote]:italic
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ul]:text-slate-700
            [&_strong]:font-semibold [&_strong]:text-navy"
        >
          {article.body}
        </div>

        {/* Tags row */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <Tag className="size-4 text-slate-400 shrink-0" />
          {article.cats.map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600 hover:bg-[var(--color-teal)]/10 hover:text-[var(--color-teal)] transition-colors cursor-default"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Social share */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-slate-500 flex items-center gap-1.5">
            <Share2 className="size-4" /> Share:
          </span>
          <a
            href={fbShare}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] text-white px-4 py-2 text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <Facebook className="size-3.5" /> Facebook
          </a>
          <a
            href={xShare}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-4 py-2 text-xs font-semibold hover:opacity-80 transition-opacity"
          >
            <Twitter className="size-3.5" /> X / Twitter
          </a>
        </div>

        {/* Author box */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 flex items-start gap-4">
          <div className="size-12 rounded-full bg-[var(--color-teal)]/20 border-2 border-[var(--color-teal)]/30 grid place-items-center shrink-0 text-[var(--color-teal)] font-bold text-lg">
            {article.author.charAt(0)}
          </div>
          <div>
            <div className="font-display font-bold text-navy">{article.author}</div>
            <div className="text-sm text-slate-500 mt-0.5">Marine Surveyor · QUALIFY Group Africa</div>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Sebastian Muoka is a practising marine surveyor with extensive experience in draft surveys, cargo
              inspection and vessel condition assessments across East African ports.
            </p>
          </div>
        </div>
      </div>

      {/* Related articles */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 mt-8">
        <div className="container-page max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy mb-8">Recent Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((a) => (
              <Link
                key={a.slug}
                to="/knowledge-hub/$slug"
                params={{ slug: a.slug }}
                className="group rounded-2xl bg-white border border-slate-200 p-5 hover:border-[var(--color-teal)] hover:shadow-md transition-all block"
              >
                <div className="flex flex-wrap gap-1 mb-3">
                  {a.cats.slice(0, 2).map((c) => (
                    <span
                      key={c}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-navy text-sm leading-snug mb-2 group-hover:text-[var(--color-ocean)] transition-colors">
                  {a.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {a.author} · {a.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
