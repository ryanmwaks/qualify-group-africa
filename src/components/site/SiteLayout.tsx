import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import heroPortImg from "@/assets/hero-port.jpg";
import inspectorImg from "@/assets/inspector.jpg";
import portLamuImg from "@/assets/port-lamu.jpg";
import portDjiboutiImg from "@/assets/port-djibouti.jpg";
import portTangaImg from "@/assets/port-tanga.jpg";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

type PageHeroVariant = "port" | "inspector" | "lamu" | "djibouti" | "tanga";

const variantImages: Record<PageHeroVariant, string> = {
  port:      heroPortImg,
  inspector: inspectorImg,
  lamu:      portLamuImg,
  djibouti:  portDjiboutiImg,
  tanga:     portTangaImg,
};

export function PageHero({
  eyebrow, title, subtitle, variant = "port", icon,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: PageHeroVariant;
  icon?: ReactNode;
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
        {icon && (
          <div className="size-14 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 backdrop-blur-sm">
            {icon}
          </div>
        )}
        {eyebrow && (
          <div className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-4 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 backdrop-blur-sm">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
}
