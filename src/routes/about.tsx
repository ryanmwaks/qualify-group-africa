import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import inspectorImg from "@/assets/inspector.jpg";
import { CheckCircle2, Target, Eye, Heart, Shield, Zap, Users, FileText, Award, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Qualify Group Africa | Independent Marine Inspection Experts" },
      { name: "description", content: "QUALIFY Group Africa Ltd is an independent inspection, marine surveying, cargo inspection and quality assurance company based in Mombasa, Kenya." },
    ],
  }),
  component: About,
});

const values = ["Integrity", "Independence", "Professionalism", "Accuracy", "Confidentiality", "Continuous Improvement", "Client Focus"];

const isoStandards = [
  { code: "ISO 9001",      year: "2015",  name: "Quality Management Systems" },
  { code: "ISO 14001",     year: "2015",  name: "Environmental Management Systems" },
  { code: "ISO 45001",     year: "2018",  name: "Occupational Health & Safety" },
  { code: "ISO 22000",     year: "2018",  name: "Food Safety Management" },
  { code: "ISO/IEC 17020", year: "2012",  name: "Inspection Body Requirements" },
  { code: "ISO/IEC 17021-1", year: "2015", name: "Conformity Assessment — Certification Bodies" },
  { code: "ISO/IEC 17024", year: "2012",  name: "Personnel Certification" },
  { code: "ISO/IEC 17025", year: "2017",  name: "Testing & Calibration Laboratories" },
  { code: "ISO 27001",     year: "2022",  name: "Information Security Management" },
  { code: "ISO 22301",     year: "2019",  name: "Business Continuity Management" },
  { code: "HACCP",         year: "Codex", name: "Food Hazard Analysis & Critical Control" },
];

const whyTrust = [
  { icon: Shield,   title: "Independent & Impartial",     desc: "We have no commercial interest in outcomes — our findings are objective, evidence-based and defensible in any context." },
  { icon: FileText, title: "Technical Reporting Quality",  desc: "Reports are structured for the intended audience — the right technical detail, clearly written, issued on time." },
  { icon: Zap,      title: "Responsive & Reliable",        desc: "We mobilise quickly, communicate clearly and deliver within agreed timelines without exception." },
  { icon: Users,    title: "Sector Understanding",         desc: "Our team understands maritime, cargo, logistics, insurance and quality compliance operations at operational depth." },
  { icon: Award,    title: "Standards-Aligned Approach",   desc: "Our work aligns with internationally recognised inspection, auditing and quality management frameworks." },
  { icon: Target,   title: "Practical & Hands-On",         desc: "We engage at operational level — not just theory. Findings and recommendations are specific and actionable." },
];

const technicalApproach = [
  "Every assignment begins with a structured briefing to define scope, objectives and expected deliverables.",
  "On-site attendance is systematic — we follow inspection frameworks aligned with industry standards and client requirements.",
  "Evidence is gathered objectively — photographs, measurements, documents, observations — recorded contemporaneously.",
  "Findings are reviewed internally before report issue to ensure accuracy, consistency and completeness.",
  "Reports are structured with executive summary, findings, evidence and recommendations — formatted for the intended audience.",
  "We follow up on findings where required — supporting corrective actions, not just issuing a report.",
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="About QUALIFY Group Africa Ltd"
        subtitle="Independent inspection, marine surveying, cargo inspection, quality assurance and certification readiness — based in Mombasa, Kenya."
        variant="lamu"
      />

      {/* Who We Are */}
      <section className="container-page py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            QUALIFY Group Africa Ltd provides independent marine inspection, cargo surveying, quality assurance, certification readiness, technical reporting and digital QMS services to clients across Kenya and the wider region.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We work with shipowners, cargo interests, insurers, exporters, importers, compliance teams, logistics companies and institutions that need reliable, evidence-based technical support — delivered professionally and on time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our approach is hands-on, independent and standards-aligned. We do not just produce reports — we help clients understand findings, resolve issues and build lasting operational confidence.
          </p>
        </div>
        <img src={inspectorImg} alt="Inspector conducting assessment at port" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-[var(--shadow-elegant)]" />
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-muted/40 py-16">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", text: "To provide reliable, independent and professional inspection, surveying and quality assurance services that help clients reduce risk and build operational confidence." },
            { icon: Eye,    title: "Vision",  text: "To be the leading trusted partner for marine, cargo, inspection and quality assurance services across Kenya and the wider East African region." },
            { icon: Heart,  title: "Values",  text: values.join("  ·  ") },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-card)] hover:border-[var(--color-teal)] transition-colors">
              <div className="size-12 rounded-xl bg-gradient-to-br from-[var(--color-ocean)] to-[var(--color-teal)] grid place-items-center text-white mb-4">
                <b.icon className="size-6" />
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Trust */}
      <section className="container-page py-16">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Why Us</div>
          <h2 className="font-display text-3xl font-bold text-navy">Why Organisations Trust QUALIFY</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Clients come to QUALIFY because they need independent, accurate, timely technical support — not a generic service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyTrust.map((w) => (
            <div key={w.title} className="rounded-2xl bg-card border border-border p-6 hover:border-[var(--color-teal)] hover:shadow-[var(--shadow-card)] transition-all">
              <div className="size-10 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)] mb-4">
                <w.icon className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-navy mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-16" style={{ background: "var(--gradient-navy)" }}>
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">How We Work</div>
            <h2 className="font-display text-3xl font-bold text-white mb-5">Our Technical Approach</h2>
            <p className="text-white/65 leading-relaxed mb-6">Consistent, structured and evidence-based — from the first briefing to the final report and follow-up.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
              Discuss an Assignment <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {technicalApproach.map((t, i) => (
              <div key={i} className="flex gap-4 glass-card-dark rounded-xl p-4 border border-white/8">
                <div className="size-7 rounded-full bg-[var(--color-teal)]/20 border border-[var(--color-teal)]/30 grid place-items-center text-[var(--color-teal)] text-xs font-bold shrink-0">{i + 1}</div>
                <p className="text-sm text-white/65 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Standards Cards */}
      <section className="container-page py-16">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Standards</div>
          <h2 className="font-display text-3xl font-bold text-navy">Standards & Frameworks We Align With</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">QUALIFY supports clients in aligning systems, documentation, competence and operations with recognised international standards.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {isoStandards.map((s) => (
            <div key={s.code} className="group rounded-2xl bg-card border border-border p-5 hover:border-[var(--color-teal)] hover:shadow-[0_0_20px_rgba(0,122,138,0.15)] transition-all cursor-default">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="font-display text-sm font-black text-navy group-hover:text-[var(--color-teal)] transition-colors leading-tight">{s.code}</div>
                <div className="text-[10px] font-semibold text-white bg-[var(--color-ocean)] px-1.5 py-0.5 rounded-md shrink-0">{s.year}</div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.name}</p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-[var(--color-teal)]">
                <CheckCircle2 className="size-3" /> Readiness Support
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-5 rounded-xl bg-[var(--color-teal)]/5 border border-[var(--color-teal)]/20">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-navy">Disclaimer:</strong> QUALIFY supports organisations in implementation, competence development, documentation, internal audits, certification readiness and continual improvement. Certification decisions are made only by authorised certification bodies.
          </p>
        </div>
      </section>

      {/* Partners + CTA */}
      <section className="bg-muted/40 py-16">
        <div className="container-page flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Network</div>
            <h2 className="font-display text-2xl font-bold text-navy">Partners & Strategic Collaborations</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">QUALIFY works with trusted training, technical, quality, certification support and industry partners — to help clients build competence, compliance readiness and continuous improvement.</p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <Link to="/partners" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
              View Partners <ArrowRight className="size-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-navy hover:bg-muted transition-colors">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
