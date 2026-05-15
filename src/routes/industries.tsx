import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Ship, Truck, Anchor, ShieldAlert, Building2, Warehouse, Award, Users, GraduationCap, Briefcase } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Sectors We Support | Qualify Group Africa" },
      { name: "description", content: "Professional inspection, quality, compliance, training and certification support for high-risk and quality-driven sectors across Kenya and the region." },
    ],
  }),
  component: Industries,
});

const industries = [
  { icon: Ship, label: "Maritime & Shipping", desc: "Vessel surveys, marine inspection, condition assessments and operational reporting.", challenges: "Asset condition, regulatory expectations, claim disputes.", how: "Independent reporting and survey expertise.", related: "Marine Inspection, Vessel Surveys" },
  { icon: Truck, label: "Cargo & Logistics", desc: "Cargo verification, condition reporting and supervisory inspections.", challenges: "Cargo integrity, documentation, handling losses.", how: "On-site cargo surveying with structured reporting.", related: "Cargo Inspection, Damage Assessment" },
  { icon: Anchor, label: "Port Operations", desc: "Inspection, quality and compliance support for port and terminal operators.", challenges: "Operational variability, audit readiness.", how: "Quality systems, training and audits.", related: "QA & Compliance, Training" },
  { icon: ShieldAlert, label: "Insurance & Claims", desc: "Independent damage and loss assessments to support fair claims.", challenges: "Quantifying loss, evidence quality.", how: "Evidence-based reports and clear documentation.", related: "Damage Assessment, Technical Reporting" },
  { icon: Building2, label: "Importers & Exporters", desc: "Pre-shipment, loading and discharge inspections.", challenges: "Quality disputes across borders.", how: "Independent third-party verification.", related: "Cargo Inspection" },
  { icon: Warehouse, label: "Warehousing & Distribution", desc: "Condition surveys, stock verification and process audits.", challenges: "Stock accuracy, condition control.", how: "Inspection, audit and QMS deployment.", related: "QA & Compliance, QMS Platform" },
  { icon: Award, label: "Quality Management Teams", desc: "Documentation, audit prep, corrective actions, continuous improvement.", challenges: "Manual documentation, audit fatigue.", how: "QMS Platform + advisory.", related: "QMS Platform, Consultancy" },
  { icon: Users, label: "Compliance & Audit Teams", desc: "Compliance reviews, evidence gathering, structured reporting.", challenges: "Evidence trails and traceability.", how: "Independent audit support.", related: "QA & Compliance" },
  { icon: GraduationCap, label: "Training Institutions", desc: "Practical, sector-specific training in inspection and quality systems.", challenges: "Industry-relevant content.", how: "Custom training delivered by practitioners.", related: "Training & Consultancy" },
  { icon: Briefcase, label: "Consultancy Clients", desc: "Project-based advisory across inspection and quality management.", challenges: "Specialist input on demand.", how: "Tailored consultancy engagements.", related: "Consultancy" },
];

function Industries() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Industries" title="Industries & Sectors We Support" subtitle="Professional inspection, quality, compliance, training, and certification support for high-risk and quality-driven sectors." variant="djibouti" />
      <section className="container-page py-16 grid md:grid-cols-2 gap-6">
        {industries.map((i) => (
          <article key={i.label} className="rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-12 rounded-xl bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)]"><i.icon className="size-6" /></div>
              <h2 className="font-display text-xl font-bold text-navy">{i.label}</h2>
            </div>
            <p className="text-sm text-muted-foreground">{i.desc}</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
              <div><div className="font-semibold text-navy">Common challenges</div><div className="text-muted-foreground mt-1">{i.challenges}</div></div>
              <div><div className="font-semibold text-navy">How we help</div><div className="text-muted-foreground mt-1">{i.how}</div></div>
            </div>
            <div className="mt-4 text-xs text-[var(--color-orange)] font-semibold">Related: {i.related}</div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}
