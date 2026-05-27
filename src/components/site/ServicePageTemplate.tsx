import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight } from "lucide-react";

export interface ServicePageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  accentCss: string;
  whoItems: string[];
  context: string;
  how: string[];
  when: string[];
  who: string;
  deliv: string[];
  ctaExternal?: { label: string; href: string };
  extraSection?: React.ReactNode;
}

export function ServicePageTemplate({ d }: { d: ServicePageData }) {
  return (
    <SiteLayout>
      <PageHero eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} variant="inspector" />

      {/* Intro */}
      <section className="container-page py-16 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-white/70 leading-relaxed">{d.context}</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6" style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.8) 0%, rgba(0,122,138,0.2) 100%)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="grid place-items-center size-10 rounded-xl" style={{ background: `color-mix(in srgb, ${d.accentCss} 20%, transparent)`, border: `1px solid color-mix(in srgb, ${d.accentCss} 30%, transparent)` }}>
                <d.Icon className="size-5" style={{ color: d.accentCss }} />
              </div>
              <h3 className="font-display font-semibold text-white">Who This Is For</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-white/70">
              {d.whoItems.map(w => (
                <li key={w} className="flex items-start gap-2">
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: d.accentCss }} />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {d.extraSection}

      {/* How it's delivered */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.4) 0%, transparent 100%)" }}>
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">How It's Delivered</h2>
          <p className="text-white/55 text-center mb-10 text-sm">Our step-by-step approach for this engagement</p>
          <div className="max-w-3xl mx-auto space-y-3">
            {d.how.map((step, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-white/10 p-4" style={{ background: "rgba(6,43,79,0.4)" }}>
                <div className="size-8 rounded-full grid place-items-center text-sm font-bold text-white shrink-0 mt-0.5" style={{ background: d.accentCss }}>
                  {i + 1}
                </div>
                <p className="text-sm text-white/75 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When + Deliverables */}
      <section className="container-page py-16 grid md:grid-cols-2 gap-12 max-w-5xl">
        <div>
          <h2 className="font-display text-xl font-bold text-white mb-6">When to Engage</h2>
          <ul className="space-y-3">
            {d.when.map((w, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/70">
                <ArrowRight className="size-4 shrink-0 mt-0.5" style={{ color: d.accentCss }} />
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <span className="font-semibold text-white/80">Who engages us: </span>
            <span className="text-white/50">{d.who}</span>
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl font-bold text-white mb-6">What We Deliver</h2>
          <ul className="space-y-2.5">
            {d.deliv.map(item => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: d.accentCss }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "rgba(6,43,79,0.35)" }}>
        <div className="container-page text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Contact us to discuss your requirements and how QUALIFY can support your operations.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
              Request This Service <ArrowRight className="size-4" />
            </Link>
            {d.ctaExternal && (
              <a href={d.ctaExternal.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white/80 px-6 py-3 font-medium hover:bg-white/5 transition-colors">
                {d.ctaExternal.label} <ArrowRight className="size-4" />
              </a>
            )}
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white/80 px-6 py-3 font-medium hover:bg-white/5 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
