import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Flame, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/industry/oil-gas")({
  head: () => ({
    meta: [
      { title: "Oil & Gas QMS Solutions | QUALIFY Group Africa" },
      { name: "description", content: "Digital HSE and quality management for oil and gas operations — ISO 45001, ISO 14001, permit-to-work, and regulatory compliance." },
    ],
  }),
  component: OilGasIndustry,
});

function OilGasIndustry() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industry Solutions"
        title="Oil & Gas"
        subtitle="Robust HSE and quality management for upstream, midstream, and downstream oil and gas operations — built for high-consequence environments."
        icon={<Flame className="size-8 text-[var(--color-teal)]" />}
      />

      <section className="container-page py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Sector Challenges We Address</h2>
          <ul className="space-y-3">
            {[
              "HSE regulatory compliance and regulatory reporting",
              "Permit-to-work (PTW) system management",
              "Environmental incident reporting and MARPOL-aligned records",
              "Risk assessment and HAZOP documentation",
              "Contractor and third-party competence verification",
              "Emergency response procedure management",
              "Equipment inspection and calibration tracking",
              "Management of change (MOC) documentation",
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
            {["ISO 45001:2018", "ISO 14001:2015"].map((s) => (
              <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-3">Key Platform Modules</h3>
          <ul className="space-y-2">
            {[
              "Risk Management — HAZOP, HIRA, and risk register",
              "Incident Reporting — near-miss to major incident tracking",
              "Document Management — PTW and safety procedure control",
              "Audit Management — HSE and environmental audits",
              "Training Management — workforce competence and certification",
              "Compliance Tracking — regulatory obligation register",
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
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Strengthen Your HSE Management System</h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            High-consequence operations demand a management system that matches the risk. QUALIFY QMS brings structure, traceability, and control to your HSE programme.
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
