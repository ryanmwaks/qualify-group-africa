import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ArrowRight, ArrowLeft, CheckCircle2, ChevronRight,
  BadgeCheck, ExternalLink,
} from "lucide-react";

export interface CertStandard {
  code: string;
  name: string;
  scope: string;
  tag: string;
  route: string;
}

export interface RelatedService {
  title: string;
  desc: string;
  route: string;
  icon: React.ElementType;
  accent: string;
}

export interface ServiceDetail {
  category: {
    label: string;
    accent: string;
    gradient: string;
    icon: React.ElementType;
  };
  icon: React.ElementType;
  title: string;
  tagline: string;
  desc: string;
  context: string;
  who: string;
  deliv: string[];
  how: string[];
  when: string[];
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
  certStandards?: CertStandard[];
  related: RelatedService[];
}

interface Props {
  data: ServiceDetail;
}

export function ServiceDetailPage({ data: d }: Props) {
  const accent = d.category.accent;

  return (
    <SiteLayout>
      {/* Breadcrumb */}
      <nav className="border-b border-border bg-card">
        <div className="container-page py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-navy transition-colors">Home</Link>
          <ChevronRight className="size-3.5" />
          <Link to="/services/" className="hover:text-navy transition-colors">Services</Link>
          <ChevronRight className="size-3.5" />
          <span className="font-medium" style={{ color: accent }}>{d.title}</span>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="relative overflow-hidden" style={{ background: `color-mix(in srgb, ${accent} 7%, var(--color-card, #fff))` }}>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="container-page py-12 md:py-16 relative">
          <Link to="/services/" className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:opacity-70 transition-opacity" style={{ color: accent }}>
            <ArrowLeft className="size-4" /> Back to all services
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="size-24 rounded-2xl grid place-items-center shrink-0 shadow-xl" style={{ background: d.category.gradient }}>
              <d.icon className="size-12 text-white" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-3">
                <d.category.icon className="size-4" style={{ color: accent }} />
                <span className="text-sm font-bold tracking-wider uppercase" style={{ color: accent }}>
                  {d.category.label}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight">
                {d.title}
              </h1>
              <p className="mt-3 font-display text-lg font-medium" style={{ color: accent }}>{d.tagline}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">{d.desc}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {d.primaryCta && (
                  d.primaryCta.external ? (
                    <a href={d.primaryCta.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md text-white px-6 py-3 font-semibold hover:opacity-90"
                      style={{ background: "var(--color-orange)" }}>
                      {d.primaryCta.label} <ExternalLink className="size-4" />
                    </a>
                  ) : (
                    <Link to={d.primaryCta.href as any}
                      className="inline-flex items-center gap-2 rounded-md text-white px-6 py-3 font-semibold hover:opacity-90"
                      style={{ background: "var(--color-orange)" }}>
                      {d.primaryCta.label} <ArrowRight className="size-4" />
                    </Link>
                  )
                )}
                {d.secondaryCta && (
                  <Link to={d.secondaryCta.href as any}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 font-semibold text-navy hover:bg-muted">
                    {d.secondaryCta.label}
                  </Link>
                )}
                {!d.primaryCta && (
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 rounded-md text-white px-6 py-3 font-semibold hover:opacity-90"
                    style={{ background: "var(--color-orange)" }}>
                    Request This Service <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-1" style={{ background: d.category.gradient }} />
      </div>

      {/* Body */}
      <div className="container-page py-12 grid lg:grid-cols-3 gap-10">
        {/* Main content — 2 cols */}
        <div className="lg:col-span-2 space-y-10">
          {/* Context */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy mb-3">About This Service</h2>
            <p className="text-muted-foreground leading-relaxed">{d.context}</p>
          </section>

          {/* How we deliver */}
          <section>
            <h2 className="font-display text-xl font-bold text-navy mb-6 flex items-center gap-2">
              <span className="size-7 rounded-lg grid place-items-center text-white text-xs font-black shrink-0" style={{ background: accent }}>↓</span>
              How This Service Is Delivered
            </h2>
            <ol className="space-y-4">
              {d.how.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="size-8 rounded-full grid place-items-center text-sm font-black shrink-0 mt-0.5"
                    style={{ background: `color-mix(in srgb, ${accent} 12%, transparent)`, color: accent }}
                  >{i + 1}</span>
                  <div className="flex-1 pt-1">
                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                    {i < d.how.length - 1 && (
                      <div className="mt-4 ml-[-2rem] pl-[2rem] border-l-2 h-4" style={{ borderColor: `color-mix(in srgb, ${accent} 20%, transparent)` }} />
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </div>

        {/* Sidebar — 1 col */}
        <div className="space-y-6">
          {/* Who needs this */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-display font-bold text-navy mb-3 text-sm uppercase tracking-wider">Who Needs This</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d.who}</p>
          </div>

          {/* Deliverables */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-display font-bold text-navy mb-4 text-sm uppercase tracking-wider">Key Deliverables</h3>
            <ul className="space-y-2.5">
              {d.deliv.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Engage CTA box */}
          <div className="rounded-2xl p-6" style={{ background: `color-mix(in srgb, ${accent} 8%, transparent)`, border: `1px solid color-mix(in srgb, ${accent} 20%, transparent)` }}>
            <h3 className="font-display font-bold text-navy mb-2">Ready to engage?</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">Contact our team to discuss your specific situation — no obligation, honest advice.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80" style={{ color: accent }}>
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* When to engage */}
      <section className="border-t border-border bg-muted/30">
        <div className="container-page py-12">
          <h2 className="font-display text-xl font-bold text-navy mb-8">When to Engage Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.when.map((item, i) => (
              <div key={i} className="rounded-xl bg-card border border-border p-5 shadow-[var(--shadow-card)]">
                <div className="size-8 rounded-full grid place-items-center mb-3 font-black text-sm" style={{ background: `color-mix(in srgb, ${accent} 12%, transparent)`, color: accent }}>
                  {i + 1}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Standards section — only for certification-support */}
      {d.certStandards && d.certStandards.length > 0 && (
        <section className="border-t border-border">
          <div className="container-page py-12">
            <div className="flex items-center gap-3 mb-2">
              <BadgeCheck className="size-6" style={{ color: "var(--color-teal)" }} />
              <h2 className="font-display text-xl font-bold text-navy">Standards We Support</h2>
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              We prepare organisations for accreditation under the following internationally recognised standards. Each standard has its own readiness pathway — click below to explore.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {d.certStandards.map((s) => (
                <Link
                  key={s.code}
                  to={s.route as any}
                  className="group rounded-2xl border-2 border-border bg-card p-6 hover:border-[var(--color-teal)] hover:shadow-lg transition-all block"
                >
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-4 bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                    {s.tag}
                  </div>
                  <div className="text-2xl font-display font-black text-navy mb-1">{s.code}</div>
                  <div className="text-sm font-semibold text-muted-foreground mb-3">{s.name}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.scope}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all" style={{ color: "var(--color-teal)" }}>
                    View Readiness Guide <ArrowRight className="size-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {d.related.length > 0 && (
        <section className="border-t border-border bg-muted/20">
          <div className="container-page py-12">
            <h2 className="font-display text-xl font-bold text-navy mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {d.related.map((r) => (
                <Link
                  key={r.route}
                  to={r.route as any}
                  className="group rounded-2xl border border-border bg-card p-6 hover:shadow-md hover:border-opacity-60 transition-all block"
                  style={{ ["--hover-border" as string]: r.accent }}
                >
                  <div className="size-10 rounded-xl grid place-items-center mb-4 text-white" style={{ background: r.accent }}>
                    <r.icon className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-sm mb-1 group-hover:underline">{r.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{r.desc}</p>
                  <span className="text-xs font-semibold flex items-center gap-1" style={{ color: r.accent }}>
                    Learn more <ArrowRight className="size-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-12 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full blur-3xl" style={{ background: "var(--color-orange)", opacity: 0.15 }} />
          <div className="relative max-w-xl">
            <h3 className="font-display text-2xl font-bold">Not sure if this is the right service?</h3>
            <p className="mt-3 text-white/80 leading-relaxed">Tell us about your situation and we'll advise honestly on the best approach — at no obligation.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md px-5 py-3 font-semibold hover:opacity-95 text-sm" style={{ background: "var(--color-orange)" }}>
                Talk to Our Team <ArrowRight className="size-4" />
              </Link>
              <Link to="/services/" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 font-semibold hover:bg-white/20 text-sm">
                ← All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
