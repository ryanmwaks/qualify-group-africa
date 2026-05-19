import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Building2, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/industry/sme")({
  head: () => ({
    meta: [
      { title: "SME QMS Solutions | QUALIFY Group Africa" },
      { name: "description", content: "Affordable digital quality management for small and medium enterprises — ISO 9001 certification readiness, CAPA, and compliance without the overhead." },
    ],
  }),
  component: SmeIndustry,
});

function SmeIndustry() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industry Solutions"
        title="SMEs"
        subtitle="Practical, affordable quality management for small and medium enterprises ready to achieve ISO 9001 certification and build a culture of continual improvement."
        icon={<Building2 className="size-8 text-[var(--color-teal)]" />}
      />

      <section className="container-page py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Sector Challenges We Address</h2>
          <ul className="space-y-3">
            {[
              "Resource-light compliance without a dedicated QMS team",
              "ISO 9001 certification readiness from the ground up",
              "Customer complaint management and resolution tracking",
              "Document control without physical filing systems",
              "Basic risk management and preventive action planning",
              "Supplier qualification and approved vendor management",
              "Staff training and onboarding records",
              "KPI tracking for management review",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Standards &amp; Frameworks</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {["ISO 9001:2015", "CAPA Framework"].map((s) => (
              <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-3">Key Platform Modules</h3>
          <ul className="space-y-2">
            {[
              "Document Management — quality manual and procedure control",
              "CAPA Tracking — customer complaints and improvement actions",
              "Audit Management — simple internal audit scheduling",
              "Risk Management — basic risk register and controls",
              "Supplier Management — approved vendor list",
              "Training Management — staff competence records",
            ].map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-sm text-foreground">
                <BadgeCheck className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-navy)] text-white py-14">
        <div className="container-page text-center max-w-2xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Start Your Quality Journey — Without the Complexity</h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            You don't need a large team or a big budget to build a strong QMS. QUALIFY's Starter plan gives SMEs everything they need to manage quality and work toward certification.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white font-bold px-6 py-3 text-sm hover:opacity-90 transition-all">
              Contact Us <ArrowRight className="size-4" />
            </Link>
            <Link to="/qms-solutions" className="inline-flex items-center gap-2 rounded-lg border border-white/25 text-white font-semibold px-6 py-3 text-sm hover:bg-white/10 transition-all">
              View QMS Platform
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
