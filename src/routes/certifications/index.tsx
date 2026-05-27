import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, ArrowRight, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/certifications/")({
  head: () => ({
    meta: [
      { title: "Accreditation Support | ISO Standards | QUALIFY Group Africa" },
      { name: "description", content: "QUALIFY supports organisations seeking KENAS accreditation under ISO/IEC 17020, ISO 15189 and ISO/IEC 17025 — from gap assessment to accreditation readiness." },
    ],
  }),
  component: CertificationsIndex,
});

const standards = [
  {
    code: "ISO/IEC 17020",
    name: "Inspection Bodies",
    desc: "General requirements for the operation of inspection bodies across any technical discipline — including marine, cargo, industrial and environmental inspection.",
    tag: "Inspection",
    to: "/certifications/iso-17020",
  },
  {
    code: "ISO 15189",
    name: "Medical Laboratories",
    desc: "Quality and competence requirements for medical laboratories providing diagnostic, monitoring and research services in patient care.",
    tag: "Medical Labs",
    to: "/certifications/iso-15189",
  },
  {
    code: "ISO/IEC 17025",
    name: "Testing & Calibration Laboratories",
    desc: "General requirements for the competence of laboratories performing testing, sampling and calibration across all technical disciplines.",
    tag: "Laboratories",
    to: "/certifications/iso-17025",
  },
];

function CertificationsIndex() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden text-white" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-20 right-0 size-96 rounded-full bg-[var(--color-teal)]/15 blur-3xl" />
        <div className="container-page relative py-20 md:py-28 max-w-4xl">
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-bold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10">
            Accreditation Support
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            Supporting Your Path to{" "}
            <span style={{ background: "linear-gradient(90deg,var(--color-teal),var(--color-ocean))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              KENAS Accreditation
            </span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
            QUALIFY provides structured readiness support for organisations pursuing accreditation through the{" "}
            <strong className="text-white">Kenya Accreditation Service (KENAS)</strong> under ISO/IEC 17020, ISO 15189 and ISO/IEC 17025.
            Accreditation decisions are made solely by KENAS.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-orange)] text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity">
              Request Accreditation Support <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tab nav */}
      <div className="border-b border-border bg-background sticky top-16 z-40">
        <div className="container-page">
          <div className="flex gap-1 overflow-x-auto py-2">
            {standards.map((s) => (
              <Link key={s.code} to={s.to} className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-[var(--color-ocean)] hover:bg-[var(--color-ocean)]/5 transition-colors">
                {s.code}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Standards cards */}
      <section className="container-page py-16 grid md:grid-cols-3 gap-6">
        {standards.map((s) => (
          <Link key={s.code} to={s.to} className="group rounded-2xl border border-border bg-card p-6 hover:border-[var(--color-teal)] hover:shadow-[0_0_24px_rgba(0,122,138,0.12)] transition-all flex flex-col">
            <div className="inline-flex text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--color-ocean)]/10 text-[var(--color-ocean)] border border-[var(--color-ocean)]/20 mb-4 self-start">
              {s.tag}
            </div>
            <h2 className="font-display text-xl font-bold text-navy mb-1">{s.code}</h2>
            <p className="text-sm font-semibold text-[var(--color-teal)] mb-3">{s.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ocean)] group-hover:gap-3 transition-all">
              View Accreditation Support <ArrowRight className="size-4" />
            </div>
          </Link>
        ))}
      </section>

      {/* KENAS note */}
      <section className="container-page pb-16">
        <div className="rounded-2xl border border-[var(--color-teal)]/25 bg-[var(--color-teal)]/5 p-8 max-w-3xl">
          <div className="flex gap-3 mb-3">
            <BadgeCheck className="size-5 text-[var(--color-teal)] shrink-0 mt-0.5" />
            <h3 className="font-display font-bold text-navy">About Kenya Accreditation Service (KENAS)</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            KENAS is Kenya's national accreditation body, established under the Kenya Bureau of Standards Act. It is a full member of the International Laboratory Accreditation Cooperation (ILAC) and the International Accreditation Forum (IAF), providing internationally recognised accreditation for laboratories, inspection bodies and certification bodies in Kenya.
          </p>
          <ul className="space-y-2">
            {[
              "Accredits testing and calibration laboratories under ISO/IEC 17025",
              "Accredits medical laboratories under ISO 15189",
              "Accredits inspection bodies under ISO/IEC 17020",
              "Full ILAC and IAF member — international mutual recognition",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="size-4 text-[var(--color-teal)] shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted-foreground">
            <strong>Important:</strong> QUALIFY supports organisations in readiness preparation. Accreditation is granted solely by KENAS following their assessment process.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
