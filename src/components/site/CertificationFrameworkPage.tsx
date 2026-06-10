import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileCheck2, HelpCircle, Search, ShieldCheck } from "lucide-react";
import type { CertificationFramework } from "@/data/certification-frameworks";
import { PageHero, SiteLayout } from "./SiteLayout";
import readinessJourneyImg from "@/assets/generated/certification-readiness-journey.png";

const evidenceDeliverables = [
  "Readiness gap assessment and prioritised implementation roadmap",
  "Controlled policies, procedures, forms and evidence registers",
  "Competence, awareness and responsibility records",
  "Internal audit report and corrective action tracker",
  "Management review evidence and readiness summary",
  "Support responding to independent assessment findings",
];

export function CertificationFrameworkPage({ framework }: { framework: CertificationFramework }) {
  return (
    <SiteLayout>
      <PageHero eyebrow={framework.code} title={framework.name} subtitle={framework.summary} variant="certification-support" />

      <section className="py-16 bg-background">
        <div className="container-page grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">{framework.category}</div>
            <h2 className="font-display text-3xl font-bold text-navy mb-5">What this framework addresses</h2>
            <p className="text-muted-foreground leading-relaxed">{framework.overview}</p>
            <div className="mt-7 rounded-xl border border-[var(--color-teal)]/25 bg-card p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                QUALIFY provides readiness support, gap assessment, implementation guidance, training and internal audit assistance. Certification, conformity assessment and approval decisions remain with authorised independent bodies.
              </p>
            </div>
          </div>
          <aside className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="size-5 text-[var(--color-teal)]" />
              <h3 className="font-display text-xl font-bold text-navy">Key Benefits</h3>
            </div>
            <ul className="space-y-3">
              {framework.benefits.map((benefit) => <li key={benefit} className="flex gap-3 text-sm text-muted-foreground"><CheckCircle2 className="size-4 shrink-0 mt-0.5 text-[var(--color-teal)]" />{benefit}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Readiness Focus</div>
          <h2 className="font-display text-3xl font-bold text-white mb-8">What your organisation needs to control</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {framework.focusAreas.map((area) => <article key={area} className="rounded-xl border border-white/15 p-5 bg-white/[0.075]"><FileCheck2 className="size-5 text-[var(--color-teal)] mb-4" /><h3 className="font-display font-semibold text-white">{area}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elegant)]">
            <img src={readinessJourneyImg} alt="QUALIFY certification readiness journey illustration" className="aspect-video h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">From Intention to Evidence</div>
            <h2 className="font-display text-3xl font-bold text-navy mb-5">A management system that works before the auditor arrives</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              QUALIFY helps your team translate framework requirements into controlled daily practice. The work connects process ownership, documented controls, competence, internal assurance and continual improvement so assessment evidence reflects genuine implementation.
            </p>
            <ul className="grid gap-3">
              {evidenceDeliverables.slice(0, 4).map((item) => <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground"><CheckCircle2 className="size-4 shrink-0 mt-0.5 text-[var(--color-teal)]" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Search className="size-6 text-[var(--color-teal)] mx-auto mb-3" />
            <h2 className="font-display text-3xl font-bold text-navy">QUALIFY Readiness Pathway</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {framework.readiness.map((step, index) => <article key={step} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"><div className="text-xs font-bold text-[var(--color-orange)] mb-3">STEP {index + 1}</div><p className="text-sm text-muted-foreground leading-relaxed">{step}</p></article>)}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90">Request Readiness Support <ArrowRight className="size-4" /></Link>
            <Link to="/services/certification-support" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card text-navy px-6 py-3 font-semibold hover:bg-muted">All Certification Frameworks</Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">What We Deliver</div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">A complete readiness evidence pack</h2>
            <p className="text-white/75 leading-relaxed">Deliverables are tailored to your framework, scope, operations and current level of maturity.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {evidenceDeliverables.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.075] p-4"><CheckCircle2 className="size-4 shrink-0 mt-0.5 text-[var(--color-teal)]" /><span className="text-sm text-white/85">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-9">
            <HelpCircle className="size-6 text-[var(--color-teal)] mx-auto mb-3" />
            <h2 className="font-display text-3xl font-bold text-navy">Common Questions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Does QUALIFY issue certification?", "No. QUALIFY provides implementation and readiness support. Certification or approval decisions are made only by authorised independent bodies."],
              ["Can an existing system be improved?", "Yes. We assess what already works, retain sound controls and focus effort on confirmed gaps, weak evidence and implementation risks."],
              ["How long does readiness take?", "Timing depends on scope, framework complexity, available evidence and team capacity. A gap assessment establishes a realistic, prioritised roadmap."],
            ].map(([question, answer]) => <article key={question} className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"><h3 className="font-display font-bold text-navy mb-3">{question}</h3><p className="text-sm text-muted-foreground leading-relaxed">{answer}</p></article>)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
