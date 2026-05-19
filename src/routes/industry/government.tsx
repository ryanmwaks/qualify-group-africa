import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Landmark, CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/industry/government")({
  head: () => ({
    meta: [
      { title: "Government Institutions QMS Solutions | QUALIFY Group Africa" },
      { name: "description", content: "Digital quality and governance management for government institutions — ISO 9001, policy compliance, audit trail requirements, and service delivery." },
    ],
  }),
  component: GovernmentIndustry,
});

function GovernmentIndustry() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industry Solutions"
        title="Government Institutions"
        subtitle="Structured quality and governance management for public sector organizations — improving service delivery, accountability, and compliance."
        icon={<Landmark className="size-8 text-[var(--color-teal)]" />}
      />

      <section className="container-page py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy mb-4">Sector Challenges We Address</h2>
          <ul className="space-y-3">
            {[
              "Policy compliance tracking and regulatory obligation management",
              "Comprehensive audit trail requirements for accountability",
              "Service delivery quality standards and citizen feedback",
              "Document version control for official policies and procedures",
              "Staff competence and training records management",
              "Risk management for public sector governance",
              "Inter-departmental workflow coordination and approvals",
              "Performance reporting and KPI dashboards for leadership",
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
            {["ISO 9001:2015", "Public Sector Governance"].map((s) => (
              <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-navy mb-3">Key Platform Modules</h3>
          <ul className="space-y-2">
            {[
              "Document Management — policy and procedure version control",
              "Audit Management — internal and external government audits",
              "Compliance Tracking — regulatory obligation register",
              "Risk Management — governance and operational risk register",
              "Workflow Automation — approval chains and escalations",
              "KPI Dashboards — service delivery performance reporting",
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
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Modernise Public Sector Quality Management</h2>
          <p className="text-white/70 mb-8 text-sm leading-relaxed">
            Help your institution deliver better services, meet governance requirements, and demonstrate accountability — on a single digital platform.
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
