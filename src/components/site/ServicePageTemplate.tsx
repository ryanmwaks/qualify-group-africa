import { Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight } from "lucide-react";

export interface ServicePageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  accentCss: string;
  heroVariant?: "port" | "inspector" | "lamu" | "djibouti" | "tanga" | "technical-reporting" | "accreditation-support" | "certification-support" | "sample-logistics" | "training-consultancy" | "auditing";
  whoItems: string[];
  context: string;
  how: string[];
  when: string[];
  who: string;
  deliv: string[];
  ctaExternal?: { label: string; href: string };
  extraSection?: React.ReactNode;
  compactIntro?: boolean;
  contextLabel?: string;
  portalDescription?: string;
  hideHow?: boolean;
  horizontalWho?: boolean;
}

export function ServicePageTemplate({ d }: { d: ServicePageData }) {
  const horizontalWho = d.horizontalWho !== false;

  return (
    <SiteLayout>
      <PageHero eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} variant={d.heroVariant ?? "inspector"} />

      {/* Intro */}
      <section className={`${d.compactIntro ? "py-10" : "py-16"} relative overflow-hidden bg-background`}>
        <div className="absolute top-0 right-0 size-96 rounded-full bg-[var(--color-teal)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <div className={`grid ${horizontalWho ? "grid-cols-1" : "md:grid-cols-[3fr_2fr]"} ${d.compactIntro ? "gap-8" : "gap-10"} items-start`}>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">
                {d.contextLabel ?? "Service Context"}
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">{d.context}</p>
            </div>
            <div
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="grid place-items-center size-10 rounded-xl"
                  style={{
                    background: `color-mix(in srgb, ${d.accentCss} 20%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${d.accentCss} 30%, transparent)`,
                  }}
                >
                  <d.Icon className="size-5" style={{ color: d.accentCss }} />
                </div>
                <h3 className="font-display font-semibold text-navy">Who This Is For</h3>
              </div>
              <ul className={`${horizontalWho ? "grid gap-x-10 gap-y-3 md:grid-cols-2" : "space-y-2.5"} text-sm text-muted-foreground`}>
                {d.whoItems.map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: d.accentCss }} />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {d.ctaExternal && (
            <div className="mt-8 rounded-2xl border border-[var(--color-teal)]/25 bg-card p-5 shadow-[var(--shadow-card)] md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-2">Portal Access</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d.portalDescription ?? "Continue to the dedicated portal for this service area when you are ready to access the online platform."}
                </p>
              </div>
              <a
                href={d.ctaExternal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--color-ocean)] transition-colors"
              >
                {d.ctaExternal.label} <ArrowRight className="size-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {d.extraSection}

      {/* How it's delivered */}
      {!d.hideHow && <section
        className="py-16 relative overflow-hidden"
        style={{ background: "var(--gradient-navy)" }}
      >
        <div className="absolute bottom-0 left-1/4 size-80 rounded-full bg-[var(--color-ocean)]/6 blur-3xl pointer-events-none" />
        <div className="container-page relative">
          <h2 className="font-display text-2xl font-bold text-white mb-2 text-center">How It's Delivered</h2>
          <p className="text-white/55 text-center mb-10 text-sm">Our step-by-step approach for this engagement</p>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-stretch">
            {d.how.map((step, i) => (
              <div
                key={i}
                className="flex h-full gap-4 rounded-xl border border-white/10 p-4"
                style={{ background: "rgba(6,43,79,0.5)" }}
              >
                <div
                  className="size-8 rounded-full grid place-items-center text-sm font-bold text-white shrink-0 mt-0.5"
                  style={{ background: d.accentCss }}
                >
                  {i + 1}
                </div>
                <p className="text-sm text-white/75 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>}

      {/* When + Deliverables */}
      <section
        className="py-16 relative overflow-hidden bg-background"
      >
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,122,138,0.18) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container-page relative">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-xl font-bold text-navy mb-6">When to Engage</h2>
              <ul className="space-y-3">
                {d.when.map((w, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <ArrowRight className="size-4 shrink-0 mt-0.5" style={{ color: d.accentCss }} />
                    {w}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm">
                <span className="font-semibold text-navy">Who engages us: </span>
                <span className="text-muted-foreground">{d.who}</span>
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-navy mb-6">What We Deliver</h2>
              <ul className="space-y-3">
                {d.deliv.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 shadow-[var(--shadow-card)]">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: d.accentCss }} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden border-y border-[var(--color-teal)]/35"
        style={{ background: "var(--gradient-navy)" }}
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-teal)]" />
        <div className="absolute inset-0 opacity-[0.055]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container-page relative py-16 md:py-20 text-center">
          <div className="inline-block text-xs uppercase tracking-[0.2em] font-semibold mb-4 px-3 py-1.5 rounded-full bg-[var(--color-teal)]/15 border border-[var(--color-teal)]/35" style={{ color: d.accentCss }}>
            Get Started
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 max-w-xl mx-auto">Ready to Get Started?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Contact us to discuss your requirements and how QUALIFY can support your operations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 shadow-[0_4px_24px_rgba(228,87,46,0.4)] transition-all"
            >
              Request This Service <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/8 text-white px-6 py-3 font-medium hover:bg-white/15 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
