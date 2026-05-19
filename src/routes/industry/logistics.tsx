import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Truck, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/industry/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics & Supply Chain QMS Solutions | QUALIFY Group Africa" },
      { name: "description", content: "Digital quality management for logistics and supply chain organizations — ISO 9001, ISO 45001, multi-site compliance and supplier qualification." },
    ],
  }),
  component: LogisticsIndustry,
});

function LogisticsIndustry() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industry Solutions"
        title="Logistics & Supply Chain"
        subtitle="Scalable compliance and quality management across warehouses, freight operations, and multi-site supply chains."
        icon={<Truck className="size-8 text-[var(--color-teal)]" />}
      />

      <section className="container-page py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Sector Challenges We Address</h2>
          <ul className="space-y-3">
            {[
              "Multi-site quality compliance coordination",
              "Supplier and contractor qualification and monitoring",
              "Cargo handling incident reporting and investigation",
              "Driver and workforce competence tracking",
              "Fleet maintenance and asset calibration records",
              "CAPA management across distributed operations",
              "KPI reporting for management review",
              "Customer complaint and feedback management",
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
            {["ISO 9001:2015", "ISO 45001:2018"].map((s) => (
              <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-3">Key Platform Modules</h3>
          <ul className="space-y-2">
            {[
              "Supplier Management — approved vendor lists and audits",
              "Incident Reporting — cargo damage and near-miss tracking",
              "Audit Management — internal site audits",
              "Training Management — driver and warehouse competence",
              "Asset Management — fleet and equipment records",
              "KPI Dashboards — operational performance reporting",
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
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Streamline Your Supply Chain Compliance</h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            Connect your sites, suppliers, and teams on one compliance platform — purpose-built for logistics operations.
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
