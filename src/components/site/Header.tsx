import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Phone, ChevronDown, ArrowRight,
  Award, Ship, Package, ClipboardCheck, ShieldAlert,
  BadgeCheck, GraduationCap, FileText,
} from "lucide-react";
import qualifyLogo from "@/assets/qualify-logo.png";

const aboutMenu = [
  ["Who We Are", "/about"],
  ["Our History", "/history"],
  ["Quality Policy", "/quality-policy"],
  ["Partners", "/partners"],
  ["Standards We Align With", "/standards"],
  ["Complaints and Appeals", "/complaints-appeals"],
] as const;

const qmsSolutionsMenu = [
  ["Platform Overview", "/qms-solutions"],
  ["SaaS Platform", "/qms-solutions"],
  ["Enterprise Solutions", "/qms-solutions"],
  ["Modules", "/qms-solutions"],
  ["Book a Demo", "/qms-solutions"],
] as const;

// Services mega-menu structure
const serviceCategories = [
  {
    label: "Quality Assurance & Compliance",
    icon: Award,
    href: "/services/",
    accent: "var(--color-teal)",
    items: [
      { label: "Certification Support",              icon: BadgeCheck,    href: "/services/certification-support" },
      { label: "Training & Consultancy",             icon: GraduationCap, href: "/services/training-consultancy" },
      { label: "Technical Reporting & Documentation",icon: FileText,      href: "/services/technical-reporting-documentation" },
    ],
  },
  {
    label: "Marine Inspection & Surveying",
    icon: Ship,
    href: "/services/",
    accent: "var(--color-ocean)",
    items: [
      { label: "Cargo Inspection & Surveying", icon: Package,       href: "/services/cargo-inspection-surveying" },
      { label: "Vessel Condition Surveys",     icon: ClipboardCheck,href: "/services/vessel-condition-surveys" },
      { label: "Damage & Loss Assessment",     icon: ShieldAlert,   href: "/services/damage-loss-assessment" },
    ],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "about" | "services" | "qmsSolutions">(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enter = (m: "about" | "services" | "qmsSolutions") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(m);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const navText = scrolled ? "text-white/80" : "text-gray-400";

  return (
    <>
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "backdrop-blur-md border-white/10 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.6)]"
          : "border-transparent"
      }`}
      style={{ background: scrolled ? "rgba(8, 8, 14, 0.88)" : "transparent" }}
    >
      <div className="container-page flex h-16 overflow-visible items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src={qualifyLogo}
            alt="Qualify Group Africa Ltd"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          <NavLink to="/" exact scrolled={scrolled}>Home</NavLink>
          <Dropdown label="About" open={openMenu === "about"} onEnter={() => enter("about")} onLeave={leave} items={aboutMenu} scrolled={scrolled} />
          <ServicesMegaMenu open={openMenu === "services"} onEnter={() => enter("services")} onLeave={leave} scrolled={scrolled} />
          <NavLink to="/industries" scrolled={scrolled}>Industries</NavLink>
          <Dropdown label="QMS Solutions" open={openMenu === "qmsSolutions"} onEnter={() => enter("qmsSolutions")} onLeave={leave} items={qmsSolutionsMenu} scrolled={scrolled} />
          <NavLink to="/resources" scrolled={scrolled}>Resources</NavLink>
          <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a href="tel:+254723237939"
            className={`hidden md:grid place-items-center size-10 rounded-full border border-white/20 ${navText} hover:bg-white/10 transition-colors`}
            aria-label="Call us">
            <Phone className="size-4" />
          </a>
          <Link to="/contact" className="hidden sm:inline-flex items-center justify-center rounded-md bg-[var(--color-orange)] text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 shadow-md hover:shadow-lg transition-all">
            Request a Service
          </Link>
          <button
            className={`lg:hidden grid place-items-center size-10 rounded-md border border-white/20 ${scrolled ? "text-white" : "text-gray-400"}`}
            onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/10 max-h-[85vh] overflow-y-auto"
          style={{ background: "rgba(8,8,20,0.30)", backdropFilter: "blur(28px) saturate(1.4)" }}>
          <div className="container-page py-4 pb-8 flex flex-col gap-1">
            <MobileLink to="/" onClose={() => setOpen(false)}>Home</MobileLink>
            <MobileGroup label="About" items={aboutMenu} onClose={() => setOpen(false)} />

            {/* Mobile Services — two category groups */}
            <details className="rounded-md">
              <summary className="px-3 py-3 text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md text-white/85 hover:text-white">Services</summary>
              <div className="pl-3 flex flex-col gap-1 mt-1">
                {serviceCategories.map((cat) => (
                  <div key={cat.label}>
                    <Link to="/services" onClick={() => setOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-teal)] rounded-md hover:bg-white/10">
                      <cat.icon className="size-3.5" />
                      {cat.label}
                    </Link>
                    {cat.items.map((item) => (
                      <Link key={item.label} to="/services" onClick={() => setOpen(false)}
                        className="flex items-center gap-2 pl-6 pr-3 py-2 text-sm rounded-md hover:bg-white/10 text-white/70 hover:text-white">
                        <item.icon className="size-3.5 shrink-0" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </details>

            <MobileLink to="/industries" onClose={() => setOpen(false)}>Industries</MobileLink>
            <MobileGroup label="QMS Solutions" items={qmsSolutionsMenu} onClose={() => setOpen(false)} />
            <MobileLink to="/resources" onClose={() => setOpen(false)}>Resources</MobileLink>
            <MobileLink to="/contact" onClose={() => setOpen(false)}>Contact</MobileLink>
            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-[var(--color-orange)] text-white px-4 py-3.5 text-sm font-semibold">
              Request a Service
            </Link>
          </div>
        </div>
      )}
    </header>

    {/* Floating mobile CTAs */}
    {!open && (
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        <a
          href="tel:+254723237939"
          className="whitespace-nowrap rounded-full bg-[rgba(8,8,20,0.92)] border border-white/20 backdrop-blur-md text-white px-5 py-2.5 text-xs font-semibold tracking-wide shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:bg-white/15 transition-all active:scale-95"
        >
          +254 723 237 939
        </a>
        <Link
          to="/contact"
          className="whitespace-nowrap rounded-full bg-[var(--color-orange)] text-white px-5 py-2.5 text-xs font-semibold shadow-[0_4px_24px_rgba(228,87,46,0.5)] hover:opacity-90 transition-all active:scale-95"
        >
          Request Service
        </Link>
      </div>
    )}
    </>
  );
}

function NavLink({ to, exact, scrolled, children }: { to: string; exact?: boolean; scrolled: boolean; children: React.ReactNode }) {
  const base = `px-3 py-2 text-sm font-medium rounded-md hover:text-[var(--color-ocean)] hover:[text-shadow:0_0_10px_rgba(0,95,135,0.9),0_0_20px_rgba(0,95,135,0.5)] transition-all`;
  const color = scrolled ? "text-white/80" : "text-gray-400";
  return (
    <Link
      to={to}
      activeOptions={{ exact: !!exact }}
      className={`${base} ${color}`}
      activeProps={{ className: `${base} text-[var(--color-ocean)] font-semibold [text-shadow:0_0_10px_rgba(0,95,135,0.9),0_0_20px_rgba(0,95,135,0.5)]` }}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, open, onEnter, onLeave, items, scrolled }: {
  label: string; open: boolean; onEnter: () => void; onLeave: () => void;
  items: readonly (readonly [string, string])[]; scrolled: boolean;
}) {
  const color = scrolled ? "text-white/80" : "text-gray-400";
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className={`px-3 py-2 text-sm font-medium rounded-md hover:text-[var(--color-ocean)] hover:[text-shadow:0_0_10px_rgba(0,95,135,0.9),0_0_20px_rgba(0,95,135,0.5)] inline-flex items-center gap-1 transition-all ${color}`}>
        {label} <ChevronDown className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2 min-w-[220px]">
          <div className="rounded-xl border border-white/15 shadow-2xl p-2"
            style={{ background: "rgba(8,8,20,0.85)", backdropFilter: "blur(24px) saturate(1.4)" }}>
            {items.map(([l, t]) => (
              <Link key={l + t} to={t}
                className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors group">
                <span className="size-1.5 rounded-full bg-[var(--color-teal)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                {l}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesMegaMenu({ open, onEnter, onLeave, scrolled }: {
  open: boolean; onEnter: () => void; onLeave: () => void; scrolled: boolean;
}) {
  const color = scrolled ? "text-white/80" : "text-gray-400";
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button className={`px-3 py-2 text-sm font-medium rounded-md hover:text-[var(--color-ocean)] hover:[text-shadow:0_0_10px_rgba(0,95,135,0.9),0_0_20px_rgba(0,95,135,0.5)] inline-flex items-center gap-1 transition-all ${color}`}>
        Services <ChevronDown className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full pt-2 w-[580px]">
          <div className="rounded-2xl border border-white/15 shadow-[0_24px_64px_rgba(0,0,0,0.7)] overflow-hidden"
            style={{ background: "rgba(8,8,20,0.90)", backdropFilter: "blur(28px) saturate(1.5)" }}>

            {/* Header bar */}
            <div className="px-5 py-3 border-b border-white/8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Our Services</span>
              <Link to="/services"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-teal)] hover:text-white transition-colors">
                View all <ArrowRight className="size-3" />
              </Link>
            </div>

            {/* Two-column mega grid */}
            <div className="grid grid-cols-2 gap-0 divide-x divide-white/8">
              {serviceCategories.map((cat) => (
                <div key={cat.label} className="p-4">
                  {/* Parent category */}
                  <Link to="/services"
                    className="group flex items-center gap-2.5 mb-3 rounded-lg p-2.5 hover:bg-white/8 transition-colors">
                    <div className="size-8 rounded-lg grid place-items-center shrink-0"
                      style={{ background: `${cat.accent}22`, border: `1px solid ${cat.accent}44` }}>
                      <cat.icon className="size-4" style={{ color: cat.accent }} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-[var(--color-teal)] transition-colors leading-tight">{cat.label}</div>
                      <div className="text-[10px] text-white/35 mt-0.5">View all →</div>
                    </div>
                  </Link>

                  {/* Sub-services */}
                  <div className="space-y-0.5">
                    {cat.items.map((item) => (
                      <Link key={item.label} to="/services"
                        className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-white/8 transition-colors group/item">
                        <div className="size-6 rounded-md bg-white/5 grid place-items-center shrink-0 group-hover/item:bg-[var(--color-teal)]/15 transition-colors">
                          <item.icon className="size-3.5 text-white/40 group-hover/item:text-[var(--color-teal)] transition-colors" />
                        </div>
                        <span className="text-sm text-white/65 group-hover/item:text-white transition-colors">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="px-5 py-3 border-t border-white/8 flex items-center justify-between bg-white/3">
              <span className="text-xs text-white/35">Not sure which service? We'll advise.</span>
              <Link to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[var(--color-orange)] px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
                Talk to us <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ to, onClose, children }: { to: string; onClose: () => void; children: React.ReactNode }) {
  return <Link to={to} onClick={onClose} className="px-3 py-3 text-sm font-medium rounded-md hover:bg-white/10 text-white/85 hover:text-white">{children}</Link>;
}

function MobileGroup({ label, items, onClose }: { label: string; items: readonly (readonly [string, string])[]; onClose: () => void }) {
  return (
    <details className="rounded-md">
      <summary className="px-3 py-3 text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md text-white/85 hover:text-white">{label}</summary>
      <div className="pl-3 flex flex-col">
        {items.map(([l, t]) => (
          <Link key={l + t} to={t} onClick={onClose} className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-white/10 text-white/70 hover:text-white">
            <span className="size-1.5 rounded-full bg-[var(--color-teal)] shrink-0" />
            {l}
          </Link>
        ))}
      </div>
    </details>
  );
}
