import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Ship, Package, ClipboardCheck, ShieldAlert, Award, BadgeCheck,
  GraduationCap, FileText, Cpu, ArrowRight, CheckCircle2, ChevronDown
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Marine, Cargo & Quality Inspection Services | Qualify Kenya" },
      { name: "description", content: "Independent inspection, surveying, technical reporting and quality assurance services for maritime, cargo, logistics, insurance and compliance operations." },
    ],
  }),
  component: Services,
});

type CTA = { kind: "internal" | "external"; label: string; href: string };

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  context: string;
  how: string[];
  when: string[];
  who: string;
  deliv: string[];
  cta?: CTA;
  internalLink?: string;
}

const services: Service[] = [
  {
    icon: Ship,
    title: "Marine Inspection & Surveying",
    desc: "QUALIFY provides independent, impartial marine inspection and survey services covering vessel assets, marine equipment, operations and related documentation across ports and locations in Kenya and the region.",
    context: "Our marine surveyors attend vessel assignments on behalf of owners, operators, insurers, charterers and cargo interests. Each inspection is conducted systematically — from access and pre-inspection briefing through to findings documentation and report delivery.",
    how: [
      "Initial consultation to define scope, location, vessel details and objectives",
      "On-site attendance by a qualified surveyor at the agreed port or location",
      "Systematic visual inspection, measurement and evidence gathering",
      "Review of vessel documentation, certificates and maintenance records",
      "Findings discussion with relevant parties where required",
      "Structured technical report issued within the agreed turnaround",
    ],
    when: [
      "Before purchasing, chartering or financing a vessel",
      "Following an incident, grounding or machinery failure",
      "For pre-voyage, on-hire or off-hire condition assessments",
      "During disputes involving vessel condition or operational readiness",
    ],
    who: "Shipowners, ship operators, charterers, insurers, financiers, port authorities.",
    deliv: ["Comprehensive survey report with findings", "Photographic evidence register", "Observations and recommendations", "Certificate and document review notes"],
  },
  {
    icon: Package,
    title: "Cargo Inspection & Surveying",
    desc: "We provide independent cargo inspection and verification services covering condition, quantity, packaging, handling, loading, stowage and discharge across bulk, containerised, break-bulk and project cargo types.",
    context: "Cargo inspection assignments are carried out at origin, port of loading, port of discharge or destination — wherever the inspection is most operationally relevant. Our surveyors work alongside stevedores, terminal operators and cargo handlers to provide an objective, third-party record of cargo condition and handling.",
    how: [
      "Pre-inspection briefing to confirm cargo type, quantity, scope and location",
      "Physical attendance at loading, discharge or cargo storage location",
      "Condition assessment — checking for damage, contamination, moisture, shortage or non-conformance",
      "Quantity verification against bill of lading, packing list and manifests",
      "Photographic and written documentation of all observations",
      "Technical report issued promptly after inspection completion",
    ],
    when: [
      "At loading or discharge when condition disputes are anticipated",
      "When cargo arrives in suspect condition",
      "For pre-shipment verification of quality or quantity",
      "To support an insurance claim or cargo loss investigation",
    ],
    who: "Importers, exporters, freight forwarders, traders, logistics firms, insurers.",
    deliv: ["Cargo condition report", "Quantity verification record", "Loading/discharge supervision notes", "Photographic evidence pack", "Discrepancy register"],
  },
  {
    icon: ClipboardCheck,
    title: "Vessel Condition Surveys",
    desc: "We conduct structured, independent assessments of vessel overall condition, equipment status, safety systems, maintenance standard and operational readiness — giving all parties a clear, factual picture before a transaction, charter or operational commitment.",
    context: "Condition surveys are attended on-board by a QUALIFY surveyor. The assessment covers hull, superstructure, deck equipment, machinery spaces, safety gear, accommodation and documentation. Findings are graded and recorded with photographic evidence to support decision-making by buyers, charterers, financiers or flag state representatives.",
    how: [
      "Pre-survey briefing with client to clarify scope and priority areas",
      "Boarding vessel at agreed port — coordinated with owners or managers",
      "Systematic walkthrough of all accessible compartments and systems",
      "Machinery space review — main engine, auxiliaries, pumps, steering",
      "Deck and safety equipment check — life-saving appliances, fire systems, mooring gear",
      "Certificate and log review",
      "Condition grading and deficiency list compiled",
      "Report issued with findings, grading and recommended actions",
    ],
    when: [
      "Pre-purchase due diligence",
      "Before a new charter party is signed",
      "For financing or insurance underwriting purposes",
      "Annual or periodic condition monitoring for fleet operators",
    ],
    who: "Prospective buyers, charterers, ship financiers, fleet managers, marine insurers.",
    deliv: ["Condition assessment report", "Equipment status register", "Deficiency list with priority grading", "Certificate validity review", "Photographic evidence annex"],
  },
  {
    icon: ShieldAlert,
    title: "Damage & Loss Assessment",
    desc: "QUALIFY provides independent, evidence-based damage and loss assessments for cargo, vessels and marine equipment — supporting claims resolution, legal proceedings and insurance decision-making with accurate, structured technical findings.",
    context: "Our surveyors attend the damaged asset promptly and conduct an objective assessment. We identify the nature, extent and likely cause of damage — and quantify the loss where applicable. Reports are structured to withstand scrutiny from adjusters, legal teams and arbitration panels.",
    how: [
      "Immediate mobilisation upon instruction — rapid attendance where required",
      "On-site inspection of damaged cargo, vessel, equipment or asset",
      "Evidence gathering — photographs, measurements, samples where relevant",
      "Review of shipping documents, voyage data, loading records and handling procedures",
      "Cause analysis — identifying proximate and contributing factors",
      "Quantification of loss — volume, weight, value impact",
      "Structured damage report with cause analysis, quantum and supporting evidence",
    ],
    when: [
      "Following cargo damage discovered at discharge",
      "After a vessel collision, grounding or machinery casualty",
      "When an insurance claim is being prepared or disputed",
      "For subrogation recovery investigations",
    ],
    who: "Insurers, P&I clubs, average adjusters, loss adjusters, cargo owners, shipowners, legal teams.",
    deliv: ["Damage assessment report", "Cause analysis", "Loss quantification", "Photographic and documentary evidence", "Expert observations for claims support"],
  },
  {
    icon: Award,
    title: "Quality Assurance & Compliance",
    desc: "We help organizations build, strengthen and maintain quality systems, internal controls and compliance frameworks — making operations more consistent, audit-ready and aligned with applicable standards.",
    context: "Our quality advisors work directly with your team on-site or remotely — reviewing existing systems, identifying gaps and supporting practical improvements. The approach is hands-on and focused on what actually works in your operational context, not generic templates.",
    how: [
      "Initial consultation to understand your operations, current systems and compliance requirements",
      "Gap assessment against applicable standards or your own quality objectives",
      "Review of existing policies, procedures, records and controls",
      "Development or improvement of QMS documentation — manuals, SOPs, forms, registers",
      "Internal audit planning and execution",
      "Corrective action tracking and resolution support",
      "Management review support and performance reporting",
      "Ongoing advisory as your system matures",
    ],
    when: [
      "Preparing for certification or regulatory inspection",
      "After an audit finding reveals systemic weaknesses",
      "When scaling operations and needing structured quality controls",
      "Following management changes requiring a systems review",
    ],
    who: "QA managers, compliance officers, operations managers, SME owners, logistics companies.",
    deliv: ["Gap assessment report", "QMS documentation suite", "Internal audit reports", "Corrective action register", "Management review support package"],
    cta: { kind: "internal", label: "Request This Service", href: "/contact" },
  },
  {
    icon: BadgeCheck,
    title: "Certification Support",
    desc: "We support organizations preparing for, maintaining and improving compliance with internationally recognized management system standards — through gap assessments, documentation, training, internal audits, corrective actions and post-certification support.",
    context: "QUALIFY does not issue certificates — certification is granted by authorized third-party certification bodies. Our role is to help your organization get genuinely ready, remain compliant and continuously improve. We work across the full certification lifecycle: from first-time readiness to surveillance and re-certification preparation.",
    how: [
      "Discovery meeting to understand your target standard, current position and timeline",
      "Gap assessment against the applicable standard requirements",
      "Roadmap development — structured preparation plan with milestones",
      "Documentation support — policies, procedures, records and forms",
      "Staff competence and awareness training",
      "Internal audit against the standard",
      "Corrective action support — root-cause analysis and resolution",
      "Pre-certification review — final readiness check before the certification body audit",
      "Post-certification improvement support and surveillance readiness",
    ],
    when: [
      "Pursuing ISO 9001, ISO 14001, ISO 45001, ISO 22000 or related standards for the first time",
      "Preparing for a surveillance or recertification audit",
      "After a major nonconformity that threatens certification status",
      "When expanding into a new sector requiring certification",
    ],
    who: "Organizations in any sector pursuing or maintaining ISO or sector-specific certification.",
    deliv: ["Gap assessment report", "Certification readiness roadmap", "QMS documentation suite", "Internal audit report and findings", "CAPA tracking register", "Pre-certification readiness review"],
    cta: { kind: "external", label: "Visit Certification Portal", href: "https://quality.qualify.co.ke" },
    internalLink: "/certification-portal",
  },
  {
    icon: GraduationCap,
    title: "Training & Consultancy",
    desc: "QUALIFY delivers practical, sector-grounded training programs and advisory services in inspection, quality management, auditing, documentation, compliance and continuous improvement — tailored to your team's role and experience level.",
    context: "Training is delivered on-site at your premises, at an agreed venue, or in a blended format combining in-person and remote sessions. Content is developed specifically for each engagement — not off-the-shelf slides. Each session is structured to translate theory into practical competence that participants can apply immediately.",
    how: [
      "Training needs assessment — understanding your team's current competence and learning gaps",
      "Programme design — topics, depth, format and duration tailored to your context",
      "Content development — practical exercises, case studies and sector-relevant examples",
      "Delivery — on-site, virtual or blended sessions by experienced practitioners",
      "Competence assessment — practical exercises and evaluation where required",
      "Participant materials — workbooks, reference guides, checklists",
      "Post-training follow-up advisory to reinforce application",
    ],
    when: [
      "Onboarding new inspection or quality staff",
      "Before a certification audit or regulatory inspection",
      "When building an internal audit capability from scratch",
      "Following process changes that require retraining of staff",
    ],
    who: "Inspection teams, quality officers, operations staff, compliance managers, training institutions.",
    deliv: ["Custom training programme", "Participant materials and workbooks", "Attendance and competence records", "Post-training assessment results", "Follow-up advisory report"],
    cta: { kind: "external", label: "Explore Training Portal", href: "https://training.qualify.co.ke" },
  },
  {
    icon: FileText,
    title: "Technical Reporting & Documentation",
    desc: "We produce clear, structured, professionally written technical reports and documentation that support decision-making, claims resolution, audit compliance and management review — written to be understood by technical and non-technical audiences alike.",
    context: "Our technical writers and surveyors work together to produce reports that are factually accurate, logically structured and defensible. Reports follow a consistent format — executive summary, findings, evidence, analysis and recommendations — and are issued within the agreed turnaround time.",
    how: [
      "Briefing to understand the assignment, audience and purpose of the report",
      "Evidence gathering — inspection findings, data, documents, photographs",
      "Drafting — structured report with executive summary, body findings and annexes",
      "Internal quality review before issue",
      "Client review opportunity where required",
      "Final issuance in PDF and editable formats as agreed",
      "Follow-up clarification or addendum support where requested",
    ],
    when: [
      "After an inspection or survey where a formal report is required",
      "When supporting an insurance claim, legal proceeding or arbitration",
      "For management review or board reporting on quality or operational matters",
      "When audit findings need to be formally documented and communicated",
    ],
    who: "Insurers, legal teams, management boards, auditors, certification bodies.",
    deliv: ["Structured technical report", "Executive summary", "Evidence and photographic annex", "Findings register", "Recommendations section", "Editable and PDF formats"],
  },
  {
    icon: Cpu,
    title: "QMS Platform",
    desc: "QUALIFY QMS Platform is a cloud-based digital quality management system that replaces paper-based processes with structured, traceable and accessible digital workflows — covering documentation, audits, corrective actions, approvals, compliance monitoring and training records.",
    context: "The platform is implemented by the QUALIFY team — from setup and configuration through to staff training and go-live support. Organizations can access the system from any device, assign tasks, track compliance status and generate management reports in real time. Implementation is guided and supported, not a self-serve product drop.",
    how: [
      "Discovery and scoping — understanding your processes, team structure and compliance requirements",
      "Platform configuration — setting up modules, document libraries, audit templates and workflows",
      "Data migration — transferring existing policies, procedures and records into the platform",
      "User setup — roles, access levels and permissions configured per department",
      "Staff training — practical onboarding sessions for all user levels",
      "Go-live support — guided launch with the QUALIFY team on hand",
      "Post-implementation review — assessing adoption, resolving issues, optimising workflows",
      "Ongoing support — technical assistance, updates and continuous improvement advisory",
    ],
    when: [
      "Replacing paper-based or spreadsheet quality management",
      "Preparing for certification and needing a documented, auditable system",
      "Scaling a team and needing centralised quality controls",
      "After an audit finding about record-keeping or traceability",
    ],
    who: "Quality managers, compliance officers, operations teams, SMEs, logistics companies, institutions.",
    deliv: ["Configured cloud QMS platform", "Document and procedure library", "Audit and CAPA module setup", "User training and onboarding", "Go-live support", "Ongoing technical support package"],
    internalLink: "/qms-plug",
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Marine, Cargo & Quality Inspection Services"
        subtitle="Independent inspection, technical reporting and quality assurance services — delivered professionally, efficiently and with full accountability across Kenya and the region."
        variant="inspector"
      />

      {/* Service index */}
      <section className="border-b border-border bg-card">
        <div className="container-page py-5 flex flex-wrap gap-2">
          {services.map((s, i) => (
            <a key={s.title} href={`#service-${i}`} className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-muted border border-border hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-colors text-navy">
              <s.icon className="size-3.5" /> {s.title}
            </a>
          ))}
        </div>
      </section>

      <section className="container-page py-16 space-y-8">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </section>

      <section className="container-page pb-16">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-orange)]/20 blur-3xl" />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Not sure which service you need?</h3>
            <p className="mt-3 text-white/80 leading-relaxed">Describe your situation and our technical team will identify the most appropriate service and engagement approach — at no obligation.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-[var(--color-orange)] px-6 py-3 font-semibold hover:opacity-95">
                Talk to Our Team <ArrowRight className="size-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/20 px-6 py-3 font-semibold hover:bg-white/20">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ServiceCard({ service: s, index: i }: { service: Service; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article id={`service-${i}`} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-6">
        {/* Icon + number */}
        <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:col-span-1">
          <div className="size-14 rounded-xl bg-[var(--gradient-accent)] grid place-items-center text-white shrink-0">
            <s.icon className="size-7" />
          </div>
          <div className="text-xs font-bold text-[var(--color-orange)] tracking-wider">
            {String(i + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-7 space-y-3">
          <h2 className="font-display text-2xl font-bold text-navy">{s.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.context}</p>
          <div className="pt-1">
            <span className="text-xs font-semibold text-navy uppercase tracking-wider">Who needs this: </span>
            <span className="text-xs text-muted-foreground">{s.who}</span>
          </div>
        </div>

        {/* Deliverables + CTA */}
        <div className="lg:col-span-4 space-y-4">
          <div>
            <div className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">Key deliverables</div>
            <ul className="space-y-1.5">
              {s.deliv.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {s.cta?.kind === "external" ? (
              <a href={s.cta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[var(--color-orange)] text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90">
                {s.cta.label} <ArrowRight className="size-4" />
              </a>
            ) : (
              <Link to={s.cta?.href ?? "/contact"} className="inline-flex items-center gap-2 rounded-md bg-[var(--color-orange)] text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90">
                {s.cta?.label ?? "Request This Service"} <ArrowRight className="size-4" />
              </Link>
            )}
            {s.internalLink && (
              <Link to={s.internalLink} className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-navy hover:bg-muted">
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Expandable: How it's delivered + When to engage */}
      <div className="border-t border-border">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-6 md:px-8 py-4 text-sm font-semibold text-navy hover:bg-muted/50 transition-colors"
        >
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[var(--color-teal)]" />
            How this service is delivered
          </span>
          <ChevronDown className={`size-4 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>

        {expanded && (
          <div className="px-6 md:px-8 pb-8 grid md:grid-cols-2 gap-8 bg-muted/30">
            <div>
              <h4 className="font-display font-semibold text-navy mb-4 flex items-center gap-2">
                <span className="size-6 rounded-full bg-[var(--gradient-accent)] grid place-items-center text-white text-xs font-bold shrink-0">↓</span>
                Delivery process
              </h4>
              <ol className="space-y-3">
                {s.how.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <span className="size-6 rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)] grid place-items-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-display font-semibold text-navy mb-4 flex items-center gap-2">
                <span className="size-6 rounded-full bg-[var(--gradient-accent)] grid place-items-center text-white text-xs font-bold shrink-0">?</span>
                When to engage us
              </h4>
              <ul className="space-y-3">
                {s.when.map((w, idx) => (
                  <li key={idx} className="flex gap-3 text-sm">
                    <ArrowRight className="size-4 text-[var(--color-orange)] shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-[var(--color-teal)]/5 border border-[var(--color-teal)]/20 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Not sure if this applies to your situation? <Link to="/contact" className="font-semibold text-[var(--color-ocean)] hover:underline">Contact our team</Link> — we'll advise honestly on the best approach.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
