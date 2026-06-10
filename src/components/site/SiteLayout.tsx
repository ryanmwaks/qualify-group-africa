import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ReturnToTopButton } from "./ReturnToTopButton";
import heroPortImg from "@/assets/hero-port.jpg";
import inspectorImg from "@/assets/inspector.jpg";
import portLamuImg from "@/assets/port-lamu.jpg";
import portDjiboutiImg from "@/assets/port-djibouti.jpg";
import portTangaImg from "@/assets/port-tanga.jpg";
import heroTechnicalReportingImg from "@/assets/generated/hero-technical-reporting.jpg";
import heroAccreditationSupportImg from "@/assets/generated/hero-accreditation-support.jpg";
import heroCertificationSupportImg from "@/assets/generated/hero-certification-support-v2.png";
import heroCertIso17020Img from "@/assets/generated/hero-cert-iso-17020.png";
import heroCertIso15189Img from "@/assets/generated/hero-cert-iso-15189.png";
import heroCertIso17025Img from "@/assets/generated/hero-cert-iso-17025.png";
import heroSampleLogisticsImg from "@/assets/generated/hero-sample-logistics.jpg";
import heroTrainingConsultancyImg from "@/assets/generated/hero-training-consultancy.jpg";
import heroAuditingImg from "@/assets/generated/hero-auditing.jpg";

export function SiteLayout({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`min-h-screen flex flex-col bg-background text-foreground ${className}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ReturnToTopButton />
      <WhatsAppButton />
    </div>
  );
}

type PageHeroVariant =
  | "port"
  | "inspector"
  | "lamu"
  | "djibouti"
  | "tanga"
  | "technical-reporting"
  | "accreditation-support"
  | "certification-support"
  | "cert-iso-17020"
  | "cert-iso-15189"
  | "cert-iso-17025"
  | "sample-logistics"
  | "training-consultancy"
  | "auditing";

const variantImages: Record<PageHeroVariant, string> = {
  port:      heroPortImg,
  inspector: inspectorImg,
  lamu:      portLamuImg,
  djibouti:  portDjiboutiImg,
  tanga:     portTangaImg,
  "technical-reporting": heroTechnicalReportingImg,
  "accreditation-support": heroAccreditationSupportImg,
  "certification-support": heroCertificationSupportImg,
  "cert-iso-17020": heroCertIso17020Img,
  "cert-iso-15189": heroCertIso15189Img,
  "cert-iso-17025": heroCertIso17025Img,
  "sample-logistics": heroSampleLogisticsImg,
  "training-consultancy": heroTrainingConsultancyImg,
  auditing: heroAuditingImg,
};

export function PageHero({
  eyebrow, title, subtitle, variant = "port",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: PageHeroVariant;
}) {
  const bgImg = variantImages[variant];
  return (
    <section className="relative overflow-hidden text-white min-h-[340px] flex items-center" style={{ background: "var(--gradient-hero)" }}>
      {/* Background photo */}
      <img
        src={bgImg}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay so text is always readable */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(4,24,48,0.88) 0%, rgba(4,24,48,0.60) 60%, rgba(4,24,48,0.40) 100%)" }} />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      {/* Teal glow top-right */}
      <div className="absolute -top-16 right-0 size-80 rounded-full bg-[var(--color-teal)]/10 blur-3xl pointer-events-none" />
      <div className="container-page relative py-20 md:py-28 w-full">
        {eyebrow && (
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight title-reveal title-shimmer">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed title-reveal [animation-delay:90ms]">{subtitle}</p>}
      </div>
    </section>
  );
}
