import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Ship, Package, ClipboardCheck, ShieldAlert, Award, BadgeCheck,
  GraduationCap, FileText, Cpu, ArrowRight, CheckCircle2, ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";

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

// ── Pillar groupings ──────────────────────────────────────────────
const QA_TITLES    = ["Certification Support", "Training & Consultancy", "Technical Reporting & Documentation"];
const MARINE_TITLES = ["Cargo Inspection & Surveying", "Vessel Condition Surveys", "Damage & Loss Assessment"];

const qaServices     = services.filter(s => QA_TITLES.includes(s.title));
const marineServices = services.filter(s => MARINE_TITLES.includes(s.title));
const qmsService     = services.find(s => s.title === "QMS Platform")!;

// ── ISO standards data ────────────────────────────────────────────
const ISO_STANDARDS = [
  { code: "ISO 9001:2015",      name: "Quality Management Systems",        scope: "Core QMS standard applicable to any organisation seeking to demonstrate consistent product and service quality." },
  { code: "ISO 14001:2015",     name: "Environmental Management Systems",  scope: "Framework for managing environmental responsibilities and reducing operational impact." },
  { code: "ISO 45001:2018",     name: "Occupational Health & Safety",      scope: "International standard for workplace safety management — reduces incidents and demonstrates duty of care." },
  { code: "ISO 22000:2018",     name: "Food Safety Management",            scope: "End-to-end food safety management for the entire food chain, from producers to retailers." },
  { code: "ISO/IEC 17025:2017", name: "Testing & Calibration Laboratories",scope: "Competence standard for laboratories producing technically valid results." },
  { code: "ISO 13485:2016",     name: "Medical Devices QMS",               scope: "Quality management standard specific to manufacturers and suppliers of medical devices." },
];

function IsoAccordion() {
  const [openCode, setOpenCode] = useState<string | null>(null);

  return (
    <div className="mt-6 rounded-xl border border-[var(--color-teal)]/30 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 bg-[var(--color-teal)]/8 border-b border-[var(--color-teal)]/20">
        <BadgeCheck className="size-4 text-[var(--color-teal)] shrink-0" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-teal)]">Standards We Support</span>
      </div>

      {/* Accordion rows */}
      {ISO_STANDARDS.map((std) => {
        const isOpen = openCode === std.code;
        return (
          <div key={std.code} className="border-b border-[var(--color-teal)]/10 last:border-0">
            <button
              onClick={() => setOpenCode(isOpen ? null : std.code)}
              aria-expanded={isOpen}
              aria-controls={`iso-panel-${std.code}`}
              className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[var(--color-teal)]/5 transition-colors group"
            >
              <div>
                <span className="text-xs font-bold text-[var(--color-teal)] mr-2">{std.code}</span>
                <span className="text-sm font-medium text-foreground">{std.name}</span>
              </div>
              <ChevronDown
                className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              id={`iso-panel-${std.code}`}
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <div className="px-4 pb-4 pt-1">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{std.scope}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-teal)] bg-[var(--color-teal)]/10 border border-[var(--color-teal)]/25 rounded-full px-3 py-1">
                    <BadgeCheck className="size-3" /> QUALIFY supports readiness for this standard
                  </span>
                  <Link to="/standards" className="text-xs text-[var(--color-ocean)] hover:underline font-semibold">
                    View standards →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SubServiceCard({
  service: s,
  accent,
  expanded,
  onToggle,
}: {
  service: Service;
  accent: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  const isCertSupport = s.title === "Certification Support";

  return (
    <article className={`rounded-2xl bg-card border overflow-hidden transition-all duration-300 ${expanded ? "border-[var(--color-teal)]/40 shadow-lg" : "border-border hover:-translate-y-0.5 hover:shadow-md"}`}>
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: accent }} />

      {/* Collapsed header — always visible */}
      <div className="p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="size-10 rounded-xl grid place-items-center shrink-0" style={{ background: `color-mix(in srgb, ${accent} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${accent} 25%, transparent)` }}>
            <s.icon className="size-5" style={{ color: accent }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-base text-foreground leading-tight">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{s.desc}</p>
          </div>
        </div>

        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between pt-3 border-t border-border text-xs font-semibold transition-colors"
          style={{ color: expanded ? accent : undefined }}
        >
          <span>{expanded ? "Collapse" : "Explore service"}</span>
          <ChevronDown className={`size-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} style={{ color: accent }} />
        </button>
      </div>

      {/* Expanded detail panel */}
      <div
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: expanded ? "3000px" : "0px" }}
      >
        <div className="px-5 pb-6 border-t border-border bg-muted/20">
          {/* Full description */}
          <p className="text-sm text-muted-foreground leading-relaxed pt-5">{s.context}</p>

          {/* ISO accordion for Certification Support */}
          {isCertSupport && <IsoAccordion />}

          {/* Deliverables */}
          <div className="mt-5">
            <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">Key Deliverables</div>
            <ul className="space-y-1.5">
              {s.deliv.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: accent }} />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* How it's delivered */}
          <div className="mt-5">
            <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">How It's Delivered</div>
            <ol className="space-y-2">
              {s.how.map((step, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm">
                  <span className="size-5 rounded-full grid place-items-center text-xs font-bold shrink-0 mt-0.5 text-white" style={{ background: accent }}>
                    {idx + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* When to engage */}
          <div className="mt-5">
            <div className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">When to Engage</div>
            <ul className="space-y-2">
              {s.when.map((w, idx) => (
                <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="size-4 shrink-0 mt-0.5" style={{ color: accent }} />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Who needs this */}
          <p className="mt-4 text-xs text-muted-foreground">
            <span className="font-bold text-foreground">Who needs this: </span>{s.who}
          </p>

          {/* CTAs */}
          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-md text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--color-orange)" }}
            >
              Request This Service <ArrowRight className="size-4" />
            </Link>
            {s.cta?.kind === "external" && (
              <a
                href={s.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
              >
                {s.cta.label} <ArrowRight className="size-4" />
              </a>
            )}
            {s.internalLink && (
              <Link
                to={s.internalLink}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-semibold hover:bg-muted transition-colors"
              >
                View Full Details <ArrowRight className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function SubServiceGrid({
  items,
  accent,
}: {
  items: Service[];
  accent: string;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Reset when the grid re-mounts (different pillar shown)
  useEffect(() => { setExpanded(null); }, [items]);

  const toggle = (title: string) =>
    setExpanded((prev) => (prev === title ? null : title));

  return (
    <div className="mt-8">
      {/* Branching connector */}
      <div className="relative mb-6 flex items-start justify-center gap-0">
        {/* Horizontal spine */}
        <div
          className="absolute top-3 left-[16.67%] right-[16.67%] h-px"
          style={{ background: `color-mix(in srgb, ${accent} 40%, transparent)` }}
        />
        {/* Three downward stems */}
        {items.map((_, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="w-px h-6" style={{ background: `color-mix(in srgb, ${accent} 40%, transparent)` }} />
            <div className="size-2 rounded-full" style={{ background: accent }} />
          </div>
        ))}
      </div>

      {/* 3-column card grid */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {items.map((s) => (
          <SubServiceCard
            key={s.title}
            service={s}
            accent={accent}
            expanded={expanded === s.title}
            onToggle={() => toggle(s.title)}
          />
        ))}
      </div>
    </div>
  );
}

const PILLARS = [
  {
    id: "qa" as const,
    label: "Quality Assurance & Compliance",
    number: "01",
    icon: Award,
    gradient: "linear-gradient(135deg, #062B4F 0%, #007A8A 100%)",
    accent: "var(--color-teal)",
    accentHex: "#007A8A",
    oneliner: "Building the systems, standards and capability that keep your operations compliant and consistently excellent.",
    chips: ["Certification Support", "Training & Consultancy", "Technical Reporting"],
  },
  {
    id: "marine" as const,
    label: "Marine Inspection & Surveying",
    number: "02",
    icon: Ship,
    gradient: "linear-gradient(135deg, #062B4F 0%, #0A6FAE 100%)",
    accent: "var(--color-ocean)",
    accentHex: "#0A6FAE",
    oneliner: "Independent, impartial inspection and survey services across vessels, cargo and marine assets in Kenya and the region.",
    chips: ["Cargo Inspection", "Vessel Surveys", "Damage & Loss"],
  },
] as const;

type TabId = "qa" | "marine";

function PillarHeroSection({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabId;
  setActiveTab: (t: TabId) => void;
}) {
  const scrollToTabs = () => {
    document.getElementById("service-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="container-page py-14 grid gap-6 grid-cols-1 lg:grid-cols-2">
      {PILLARS.map((p) => {
        const isActive = activeTab === p.id;
        return (
          <button
            key={p.id}
            onClick={() => { setActiveTab(p.id); scrollToTabs(); }}
            className={`group relative rounded-2xl p-8 text-left text-white overflow-hidden transition-all duration-300 cursor-pointer ${
              isActive
                ? "scale-[1.01]"
                : "hover:scale-[1.005] hover:shadow-xl"
            }`}
            style={{
              background: p.gradient,
              boxShadow: isActive
                ? `0 0 0 2px ${p.accentHex}99, 0 20px 60px -10px ${p.accentHex}44`
                : undefined,
            }}
          >
            {/* Blueprint grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
            />
            {/* Glow orb */}
            <div className="absolute -top-10 -right-10 size-40 rounded-full blur-3xl opacity-30 pointer-events-none" style={{ background: p.accentHex }} />

            {/* Pillar number badge */}
            <div className="absolute top-5 right-5 text-xs font-bold tracking-[0.2em] text-white/40">
              {p.number}
            </div>

            {/* Icon */}
            <div
              className="size-14 rounded-xl grid place-items-center mb-5"
              style={{ background: `${p.accentHex}33`, border: `1px solid ${p.accentHex}55` }}
            >
              <p.icon className="size-7" style={{ color: p.accent }} />
            </div>

            {/* Title */}
            <h2 className="font-display text-xl font-bold leading-tight mb-2">{p.label}</h2>
            <p className="text-sm text-white/70 leading-relaxed mb-5">{p.oneliner}</p>

            {/* Sub-service chips */}
            <div className="flex flex-wrap gap-2">
              {p.chips.map((chip) => (
                <span
                  key={chip}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: `${p.accentHex}2A`, border: `1px solid ${p.accentHex}44`, color: "rgba(255,255,255,0.85)" }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Active indicator arrow */}
            <div
              className={`absolute bottom-4 right-5 transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-60 group-hover:translate-y-0"}`}
              style={{ color: p.accent }}
            >
              <ChevronDown className="size-5" />
            </div>
          </button>
        );
      })}
    </section>
  );
}

function ServiceTabBar({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabId;
  setActiveTab: (t: TabId) => void;
}) {
  return (
    <div
      id="service-tabs"
      className="sticky top-16 z-30 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="container-page py-3 flex items-center gap-1">
        {PILLARS.map((p) => {
          const isActive = activeTab === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
              style={
                isActive
                  ? { background: `linear-gradient(135deg, #062B4F, ${p.accentHex})` }
                  : undefined
              }
            >
              <p.icon className="size-4 shrink-0" />
              <span className="hidden sm:inline">{p.label}</span>
              <span className="sm:hidden">{p.id === "qa" ? "Quality Assurance" : "Marine Inspection"}</span>
            </button>
          );
        })}

        <div className="ml-auto text-xs text-muted-foreground hidden md:block">
          3 services
        </div>
      </div>
    </div>
  );
}

function QmsBanner() {
  return (
    <section className="container-page pt-16">
      <div className="rounded-2xl border border-[var(--color-orange)]/25 overflow-hidden" style={{ background: "linear-gradient(135deg, #062B4F 0%, #1a0a00 100%)" }}>
        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-orange)]/15 border border-[var(--color-orange)]/30 text-[var(--color-orange)] text-xs font-bold uppercase tracking-wider mb-4">
              <Cpu className="size-3.5" /> Digital QMS
            </div>
            <h3 className="font-display text-2xl font-bold text-white leading-tight mb-3">
              QUALIFY QMS Platform
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">{qmsService.desc}</p>
          </div>
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">Platform delivers</div>
            {qmsService.deliv.slice(0, 4).map((d) => (
              <div key={d} className="flex items-center gap-2 text-sm text-white/75">
                <CheckCircle2 className="size-4 text-[var(--color-orange)] shrink-0" />
                {d}
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/qms-plug"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--color-orange)] text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Explore the Platform <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomCta() {
  return (
    <section className="container-page py-16">
      <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 size-64 rounded-full bg-[var(--color-orange)]/20 blur-3xl" />
        <div className="relative max-w-2xl">
          <h3 className="font-display text-2xl md:text-3xl font-bold">Not sure which service you need?</h3>
          <p className="mt-3 text-white/80 leading-relaxed">
            Describe your situation and our technical team will identify the most appropriate service and engagement approach — at no obligation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-orange)] px-6 py-3 font-semibold hover:opacity-95"
            >
              Talk to Our Team <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/20 px-6 py-3 font-semibold hover:bg-white/20"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [activeTab, setActiveTab] = useState<TabId>("qa");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Marine, Cargo & Quality Inspection Services"
        subtitle="Independent inspection, technical reporting and quality assurance services — delivered professionally, efficiently and with full accountability across Kenya and the region."
        variant="inspector"
      />

      <PillarHeroSection activeTab={activeTab} setActiveTab={setActiveTab} />

      <ServiceTabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <section className="container-page py-12">
        <div
          key={activeTab}
          className="tab-panel-enter"
        >
          {activeTab === "qa" ? (
            <SubServiceGrid items={qaServices} accent="var(--color-teal)" />
          ) : (
            <SubServiceGrid items={marineServices} accent="var(--color-ocean)" />
          )}
        </div>
      </section>

      <QmsBanner />
      <BottomCta />
    </SiteLayout>
  );
}
