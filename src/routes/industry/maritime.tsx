import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Ship, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/industry/maritime")({
  head: () => ({
    meta: [
      { title: "Maritime & Shipping QMS Solutions | QUALIFY Group Africa" },
      { name: "description", content: "Digital quality management for maritime and shipping organizations — ISM Code, MLC, ISPS, SOLAS, MARPOL and ISO 9001 compliance on one platform." },
    ],
  }),
  component: MaritimeIndustry,
});

function MaritimeIndustry() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industry Solutions"
        title="Maritime & Shipping"
        subtitle="End-to-end digital quality and compliance management for vessels, shipping companies, ports, and maritime service providers."
        icon={<Ship className="size-8 text-[var(--color-teal)]" />}
      />

      <section className="container-page py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Sector Challenges We Address</h2>
          <ul className="space-y-3">
            {[
              "ISM Code compliance and Designated Person Ashore (DPA) management",
              "Port State Control (PSC) audit preparation and deficiency tracking",
              "SOLAS safety management and emergency procedure documentation",
              "MARPOL environmental compliance records and reporting",
              "MLC crew welfare, rest hours, and certification tracking",
              "ISPS security plans and access control documentation",
              "Vessel inspection and condition survey management",
              "Supplier and contractor qualification for marine operations",
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
            {["ISO 9001:2015", "MLC 2006", "ISPS Code", "ISM Code", "SOLAS", "MARPOL"].map((s) => (
              <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-3">Key Platform Modules</h3>
          <ul className="space-y-2">
            {[
              "Document Management — controlled SMS documentation",
              "Audit Management — ISM internal and external audits",
              "Incident Reporting — near-miss, deficiency, and accident tracking",
              "Training Management — crew competence and STCW records",
              "Risk Management — voyage risk assessments and HIRA",
              "Record Management — log books and statutory records",
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
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Digitise Your Maritime QMS?</h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            Our team understands the unique demands of maritime compliance. Let us show you how QUALIFY QMS
            can be configured for your fleet, port, or maritime operation.
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
