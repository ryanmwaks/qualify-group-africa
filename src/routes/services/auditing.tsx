import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardList } from "lucide-react";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const auditServices = [
  {
    title: "Internal Audits",
    desc: "Independent internal audits assess whether your management system is implemented, effective and supported by traceable evidence. We identify gaps, grade findings and help your team establish practical corrective actions before certification, accreditation or regulatory assessment.",
  },
  {
    title: "Supplier Audits",
    desc: "Supplier audits provide objective assurance that critical suppliers can consistently meet agreed quality, delivery, safety and compliance requirements. We review their controls, operational capability, records and corrective action practices to support informed procurement decisions.",
  },
];

export const Route = createFileRoute("/services/auditing")({
  head: () => ({
    meta: [
      { title: "Auditing Services | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY provides internal audits, supplier audits, process audits, gap assessments and compliance audits — supporting governance, corrective action and certification readiness." },
    ],
  }),
  component: AuditingPage,
});

function AuditingPage() {
  return (
    <ServicePageTemplate
      d={{
        eyebrow: "Auditing",
        title: "Independent Audits That Drive Meaningful Improvement",
        subtitle: "QUALIFY provides independent auditing services to help organisations strengthen governance, improve operational effectiveness, maintain compliance, and enhance certification readiness. Our support includes internal audits, supplier audits, process audits, gap assessments, and corrective action verification to identify opportunities for improvement and support continual improvement initiatives.",
        Icon: ClipboardList,
        accentCss: "var(--color-teal)",
        heroVariant: "auditing",
        whoItems: [
          "Organisations preparing for first or re-certification audits",
          "QA managers needing an independent internal audit function",
          "Procurement teams requiring supplier quality audits",
          "Operations managers assessing process compliance",
          "Management teams seeking objective performance visibility",
          "Organisations responding to non-conformance findings",
        ],
        context: "Our auditors are experienced practitioners — not just trained checklist-readers. We conduct structured, evidence-based audits using sampling, observation and document review. Findings are graded, root causes are identified and corrective action plans are developed collaboratively with your team. We operate independently and have no financial interest in audit outcomes.",
        how: [
          "Audit scope and criteria agreement with client",
          "Audit plan preparation — schedule, areas, sampling approach",
          "Opening meeting with management team",
          "Evidence collection — document review, observation, interviews",
          "Finding identification, grading and root cause analysis",
          "Corrective action development support",
          "Closing meeting with preliminary findings",
          "Audit report with graded findings and recommendations",
          "Corrective action follow-up and verification",
        ],
        when: [
          "As part of a planned internal audit programme",
          "Before a scheduled certification or regulatory audit",
          "When a non-conformance requires independent investigation",
          "For supplier qualification or periodic supplier audits",
        ],
        who: "QA managers, operations managers, procurement teams, management, certification-seeking organisations.",
        deliv: [
          "Audit plan",
          "Audit report with graded findings",
          "Corrective action register",
          "Corrective action verification record",
          "Audit summary for management review",
        ],
        extraSection: (
          <section className="pt-8 pb-12 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,122,138,0.18) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="container-page relative">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-3">Auditing & Assurance</div>
              <h2 className="font-display text-3xl font-bold text-navy mb-3">Audit Services</h2>
              <p className="text-muted-foreground max-w-3xl mb-8">Explore the audit service that best matches your assurance and improvement requirements.</p>
              <Accordion type="multiple" className="grid md:grid-cols-2 gap-4">
                {auditServices.map((service) => (
                  <AccordionItem key={service.title} value={service.title} className="rounded-xl border border-border bg-card px-5 shadow-[var(--shadow-card)]">
                    <AccordionTrigger className="font-display text-base font-semibold text-navy hover:no-underline">{service.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      <p className="mb-4">{service.desc}</p>
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-navy)] text-white px-4 py-2 text-xs font-semibold hover:bg-[var(--color-teal)] transition-colors">
                        Request This Service <ArrowRight className="size-3.5" />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        ),
      }}
    />
  );
}
