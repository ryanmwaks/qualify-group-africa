import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Ship, Package, ClipboardCheck, ShieldAlert, Award, BadgeCheck,
  GraduationCap, FileText, Cpu, ArrowRight, CheckCircle2, ChevronDown, ExternalLink,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Marine, Cargo & Quality Inspection Services | Qualify Kenya" },
      { name: "description", content: "Independent inspection, surveying, technical reporting and quality assurance services for maritime, cargo, logistics, insurance and compliance operations." },
    ],
  }),
  component: Services,
});

interface SubService {
  id: string;
  slug: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  context: string;
  how: string[];
  when: string[];
  who: string;
  deliv: string[];
  primaryCta?: { label: string; href: string; external?: boolean };
  internalLink?: string;
}

interface ServiceCategory {
  id: string;
  slug: string;
  icon: React.ElementType;
  label: string;
  tagline: string;
  desc: string;
  accent: string;
  gradient: string;
  services: SubService[];
}

const categories: ServiceCategory[] = [
  {
    id: "service-4",
    slug: "quality-assurance-compliance",
    icon: Award,
    label: "Quality Assurance & Compliance",
    tagline: "Building systems that work under scrutiny.",
    desc: "We help organisations design, implement and maintain quality systems, compliance frameworks and certification readiness programmes — from documentation and internal auditing through to digital QMS adoption.",
    accent: "var(--color-teal)",
    gradient: "linear-gradient(135deg, var(--color-teal), var(--color-ocean))",
    services: [
      {
        id: "service-5",
        slug: "certification-support",
        icon: BadgeCheck,
        title: "Certification Support",
        desc: "We support organisations preparing for, maintaining and improving compliance with internationally recognised management system standards — through gap assessments, documentation, training, internal audits, corrective actions and post-certification support.",
        context: "QUALIFY does not issue certificates — certification is granted by authorised third-party certification bodies. Our role is to help your organisation get genuinely ready, remain compliant and continuously improve.",
        how: [
          "Discovery meeting to understand your target standard, current position and timeline",
          "Gap assessment against the applicable standard requirements",
          "Roadmap development — structured preparation plan with milestones",
          "Documentation support — policies, procedures, records and forms",
          "Staff competence and awareness training",
          "Internal audit against the standard",
          "Corrective action support — root-cause analysis and resolution",
          "Pre-certification review — final readiness check before the certification body audit",
        ],
        when: [
          "Pursuing ISO 9001, ISO 14001, ISO 45001, ISO 22000 or related standards for the first time",
          "Preparing for a surveillance or recertification audit",
          "After a major nonconformity that threatens certification status",
          "When expanding into a new sector requiring certification",
        ],
        who: "Organisations in any sector pursuing or maintaining ISO or sector-specific certification.",
        deliv: ["Gap assessment report", "Certification readiness roadmap", "QMS documentation suite", "Internal audit report and findings", "CAPA tracking register", "Pre-certification readiness review"],
        primaryCta: { label: "Visit Certification Portal", href: "https://quality.qualify.co.ke", external: true },
        internalLink: "/services/certification-support",
      },
      {
        id: "service-6",
        slug: "training-consultancy",
        icon: GraduationCap,
        title: "Training & Consultancy",
        desc: "QUALIFY delivers practical, sector-grounded training programmes and advisory services in inspection, quality management, auditing, documentation, compliance and continuous improvement — tailored to your team's role and experience level.",
        context: "Training is delivered on-site, at an agreed venue, or in a blended format. Content is developed specifically for each engagement — not off-the-shelf slides.",
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
        primaryCta: { label: "Explore Training Portal", href: "https://training.qualify.co.ke", external: true },
        internalLink: "/services/training-consultancy",
      },
      {
        id: "service-7",
        slug: "technical-reporting-documentation",
        icon: FileText,
        title: "Technical Reporting & Documentation",
        desc: "We produce clear, structured, professionally written technical reports and documentation that support decision-making, claims resolution, audit compliance and management review — written to be understood by technical and non-technical audiences alike.",
        context: "Our technical writers and surveyors work together to produce reports that are factually accurate, logically structured and defensible. Reports follow a consistent format and are issued within the agreed turnaround time.",
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
        internalLink: "/services/technical-reporting-documentation",
      },
    ],
  },
  {
    id: "service-0",
    slug: "marine-inspection-surveying",
    icon: Ship,
    label: "Marine Inspection & Surveying",
    tagline: "Independent eyes at every port, every vessel, every cargo.",
    desc: "Our marine surveyors provide impartial, evidence-based inspection and survey services across vessels, cargo, damage assessment and condition reports — attending on behalf of owners, charterers, insurers and cargo interests throughout Kenya and the wider region.",
    accent: "var(--color-ocean)",
    gradient: "linear-gradient(135deg, var(--color-ocean), var(--color-navy))",
    services: [
      {
        id: "service-1",
        slug: "cargo-inspection-surveying",
        icon: Package,
        title: "Cargo Inspection & Surveying",
        desc: "We provide independent cargo inspection and verification services covering condition, quantity, packaging, handling, loading, stowage and discharge across bulk, containerised, break-bulk and project cargo types.",
        context: "Cargo inspection assignments are carried out at origin, port of loading, port of discharge or destination. Our surveyors provide an objective, third-party record of cargo condition and handling.",
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
        internalLink: "/services/cargo-inspection-surveying",
      },
      {
        id: "service-2",
        slug: "vessel-condition-surveys",
        icon: ClipboardCheck,
        title: "Vessel Condition Surveys",
        desc: "We conduct structured, independent assessments of vessel overall condition, equipment status, safety systems, maintenance standard and operational readiness — giving all parties a clear, factual picture before a transaction, charter or operational commitment.",
        context: "Condition surveys are attended on-board by a QUALIFY surveyor, covering hull, superstructure, deck equipment, machinery spaces, safety gear, accommodation and documentation.",
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
        internalLink: "/services/vessel-condition-surveys",
      },
      {
        id: "service-3",
        slug: "damage-loss-assessment",
        icon: ShieldAlert,
        title: "Damage & Loss Assessment",
        desc: "QUALIFY provides independent, evidence-based damage and loss assessments for cargo, vessels and marine equipment — supporting claims resolution, legal proceedings and insurance decision-making with accurate, structured technical findings.",
        context: "Our surveyors attend the damaged asset promptly and conduct an objective assessment. We identify the nature, extent and likely cause of damage — and quantify the loss where applicable.",
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
        internalLink: "/services/damage-loss-assessment",
      },
    ],
  },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Quality Assurance, Compliance & Marine Inspection"
        subtitle="From certification readiness and quality systems through to cargo inspection and damage assessment — independent, professional services across Kenya and the region."
        variant="inspector"
      />

      {/* Quick-jump index */}
      <section className="border-b border-border bg-card">
        <div className="container-page py-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-wrap items-center gap-1.5">
              <a
                href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border-2 transition-colors hover:opacity-90"
                style={{ borderColor: cat.accent, color: cat.accent, backgroundColor: `color-mix(in srgb, ${cat.accent} 8%, transparent)` }}
              >
                <cat.icon className="size-3.5" /> {cat.label}
              </a>
              {cat.services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-muted border border-border hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] transition-colors text-muted-foreground"
                >
                  <s.icon className="size-3" /> {s.title}
                </a>
              ))}
            </div>
          ))}
          <a
            href="#qms-platform"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-muted border border-border hover:border-[var(--color-orange)] hover:text-[var(--color-orange)] transition-colors text-muted-foreground"
          >
            <Cpu className="size-3" /> QMS Platform
          </a>
        </div>
      </section>

      {/* Category sections */}
      <div className="divide-y divide-border">
        {categories.map((cat, catIdx) => (
          <CategorySection key={cat.id} category={cat} index={catIdx} />
        ))}
      </div>

      {/* QMS Platform — standalone featured section */}
      <section id="qms-platform" className="container-page py-16">
        <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
          <div className="bg-navy p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 size-64 rounded-full blur-3xl" style={{ background: "var(--color-orange)", opacity: 0.15 }} />
            <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="size-16 rounded-2xl grid place-items-center shrink-0" style={{ background: "linear-gradient(135deg, var(--color-orange), #d97706)" }}>
                <Cpu className="size-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3" style={{ background: "color-mix(in srgb, var(--color-orange) 15%, transparent)", color: "var(--color-orange)" }}>
                  Digital Solution
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">QUALIFY QMS Platform</h2>
                <p className="mt-2 text-white/70 leading-relaxed max-w-2xl">
                  A cloud-based digital quality management system that replaces paper-based processes with structured, traceable and accessible digital workflows.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <Link to="/qms-plug" className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90" style={{ background: "var(--color-orange)" }}>
                  Learn More <ArrowRight className="size-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 bg-card">
            <div>
              <h3 className="font-display font-bold text-navy mb-4">Key deliverables</h3>
              <ul className="space-y-2">
                {["Configured cloud QMS platform", "Document and procedure library", "Audit and CAPA module setup", "User training and onboarding", "Go-live support", "Ongoing technical support package"].map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: "var(--color-orange)" }} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-navy mb-4">When to adopt</h3>
              <ul className="space-y-2">
                {[
                  "Replacing paper-based or spreadsheet quality management",
                  "Preparing for certification and needing an auditable system",
                  "Scaling a team and needing centralised quality controls",
                  "After an audit finding about record-keeping or traceability",
                ].map((w) => (
                  <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="size-4 shrink-0 mt-0.5" style={{ color: "var(--color-orange)" }} />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-navy text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 size-64 rounded-full blur-3xl" style={{ background: "var(--color-orange)", opacity: 0.2 }} />
          <div className="relative max-w-2xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold">Not sure which service you need?</h3>
            <p className="mt-3 text-white/80 leading-relaxed">Describe your situation and our technical team will identify the most appropriate service and engagement approach — at no obligation.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-semibold hover:opacity-95" style={{ background: "var(--color-orange)" }}>
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

function CategorySection({ category: cat, index }: { category: ServiceCategory; index: number }) {
  return (
    <section id={cat.id} className="scroll-mt-20">
      <div className="relative overflow-hidden" style={{ background: `color-mix(in srgb, ${cat.accent} 6%, var(--color-card, #fff))` }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="container-page py-10 md:py-14 relative">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="size-20 rounded-2xl grid place-items-center shrink-0 shadow-lg" style={{ background: cat.gradient }}>
              <cat.icon className="size-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3" style={{ background: `color-mix(in srgb, ${cat.accent} 12%, transparent)`, color: cat.accent }}>
                Service Category {String(index + 1).padStart(2, "0")}
              </div>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-navy">{cat.label}</h2>
              <p className="mt-1 font-display text-lg font-medium" style={{ color: cat.accent }}>{cat.tagline}</p>
              <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">{cat.desc}</p>
            </div>
            <div className="shrink-0 text-right hidden md:block">
              <div className="text-5xl font-display font-black" style={{ color: `color-mix(in srgb, ${cat.accent} 20%, transparent)` }}>{cat.services.length}</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full" style={{ background: cat.gradient }} />
      </div>

      <div className="container-page py-10 space-y-6">
        {cat.services.map((s, i) => (
          <SubServiceCard key={s.id} service={s} index={i} accent={cat.accent} />
        ))}
      </div>
    </section>
  );
}

function SubServiceCard({ service: s, index: i, accent }: { service: SubService; index: number; accent: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article id={s.id} className="rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden scroll-mt-24">
      <div className="flex">
        <div className="w-1 shrink-0" style={{ background: accent }} />
        <div className="flex-1">
          <div className="p-6 md:p-8 grid lg:grid-cols-12 gap-6">
            <div className="flex lg:flex-col items-center lg:items-start gap-3 lg:col-span-1">
              <div className="size-14 rounded-xl grid place-items-center text-white shrink-0" style={{ background: accent }}>
                <s.icon className="size-7" />
              </div>
              <div className="text-xs font-bold tracking-wider" style={{ color: accent }}>{String(i + 1).padStart(2, "0")}</div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-display text-xl md:text-2xl font-bold text-navy">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.context}</p>
              <div className="pt-1">
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">Who needs this: </span>
                <span className="text-xs text-muted-foreground">{s.who}</span>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div>
                <div className="text-xs font-semibold text-navy uppercase tracking-wider mb-2">Key deliverables</div>
                <ul className="space-y-1.5">
                  {s.deliv.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="size-4 shrink-0 mt-0.5" style={{ color: accent }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {s.primaryCta?.external ? (
                  <a href={s.primaryCta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90" style={{ background: "var(--color-orange)" }}>
                    {s.primaryCta.label} <ExternalLink className="size-4" />
                  </a>
                ) : (
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-md text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90" style={{ background: "var(--color-orange)" }}>
                    Request This Service <ArrowRight className="size-4" />
                  </Link>
                )}
                {s.internalLink && (
                  <Link to={s.internalLink as any} className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-navy hover:bg-muted">
                    Full Details <ArrowRight className="size-3.5" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-border">
            <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between px-6 md:px-8 py-4 text-sm font-semibold text-navy hover:bg-muted/50 transition-colors">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full" style={{ background: accent }} />
                How this service is delivered
              </span>
              <ChevronDown className={`size-4 text-muted-foreground transition-transform ${expanded ? "rotate-180" : ""}`} />
            </button>
            {expanded && (
              <div className="px-6 md:px-8 pb-8 grid md:grid-cols-2 gap-8 bg-muted/30">
                <div>
                  <h4 className="font-display font-semibold text-navy mb-4 flex items-center gap-2">
                    <span className="size-6 rounded-full grid place-items-center text-white text-xs font-bold shrink-0" style={{ background: accent }}>↓</span>
                    Delivery process
                  </h4>
                  <ol className="space-y-3">
                    {s.how.map((step, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="size-6 rounded-full grid place-items-center text-xs font-bold shrink-0 mt-0.5" style={{ background: `color-mix(in srgb, ${accent} 15%, transparent)`, color: accent }}>{idx + 1}</span>
                        <span className="text-muted-foreground leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-navy mb-4 flex items-center gap-2">
                    <span className="size-6 rounded-full grid place-items-center text-white text-xs font-bold shrink-0" style={{ background: accent }}>?</span>
                    When to engage us
                  </h4>
                  <ul className="space-y-3">
                    {s.when.map((w, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <ArrowRight className="size-4 shrink-0 mt-0.5" style={{ color: "var(--color-orange)" }} />
                        <span className="text-muted-foreground leading-relaxed">{w}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl p-4 border" style={{ background: `color-mix(in srgb, ${accent} 5%, transparent)`, borderColor: `color-mix(in srgb, ${accent} 20%, transparent)` }}>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Not sure if this applies? <Link to="/contact" className="font-semibold hover:underline" style={{ color: accent }}>Contact our team</Link> — we'll advise honestly.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
