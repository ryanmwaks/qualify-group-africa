import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, ArrowUpRight } from "lucide-react";
import qualifyLogo from "@/assets/qualify-logo.png";

const TRAINING_URL = "https://training.qualify.co.ke";
const CERT_URL = "https://quality.qualify.co.ke";

const servicesMenu = [
  ["Our Services", "/services"],
  ["Quality Assurance & Compliance", "/services/quality-assurance"],
  ["Training & Consultancy", "/services/training-consultancy"],
  ["Technical Reporting & Documentation", "/services/technical-reporting"],
  ["Marine Inspection & Surveying", "/services/marine-inspection"],
  ["Cargo Inspection & Surveying", "/services/cargo-inspection"],
  ["Vessel Condition Surveys", "/services/vessel-surveys"],
  ["Damage & Loss Assessment", "/services/damage-loss"],
  ["QMS Platform", "/qms-plug"],
] as const;

const aboutMenu = [
  ["Who We Are", "/about"],
  ["Our History", "/history"],
  ["Quality Policy", "/quality-policy"],
  ["Partners", "/partners"],
  ["Standards We Align With", "/standards"],
  ["Complaints and Appeals", "/complaints-appeals"],
] as const;

const certificationsMenu = [
  ["ISO/IEC 17020 — Inspection Bodies", "/certifications/iso-17020"],
  ["ISO 15189 — Medical Laboratories", "/certifications/iso-15189"],
  ["ISO/IEC 17025 — Testing & Calibration Labs", "/certifications/iso-17025"],
  ["All Certification Support", "/certification-portal"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "about" | "services" | "certifications">(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enter = (m: "about" | "services" | "certifications") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(m);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  // text colour: grey on transparent header (visible on white pages), white once scrolled
  const navText = scrolled ? "text-white/80" : "text-gray-400";
  const navHover = "hover:text-white hover:bg-white/10";

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
      <div className="container-page flex h-28 md:h-40 items-center justify-between gap-4">
        <Link to="/" className="flex items-center group shrink-0">
          <img
            src={qualifyLogo}
            alt="Qualify Group Africa Ltd"
            className="h-24 md:h-36 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" exact scrolled={scrolled}>Home</NavLink>
          <Dropdown label="About" open={openMenu === "about"} onEnter={() => enter("about")} onLeave={leave} items={aboutMenu} scrolled={scrolled} />
          <Dropdown label="Services" open={openMenu === "services"} onEnter={() => enter("services")} onLeave={leave} items={servicesMenu} scrolled={scrolled} />
          <Dropdown label="Certifications" open={openMenu === "certifications"} onEnter={() => enter("certifications")} onLeave={leave} items={certificationsMenu} scrolled={scrolled} />
          <NavLink to="/industries" scrolled={scrolled}>Industries</NavLink>
          <NavLink to="/qms-plug" scrolled={scrolled}>QMS Platform</NavLink>
          <a href={TRAINING_URL} target="_blank" rel="noopener noreferrer"
            className={`px-3 py-2 text-sm font-medium rounded-md ${navHover} inline-flex items-center gap-1 transition-colors ${navText}`}>
            Training <ArrowUpRight className="size-3.5" />
          </a>
          <a href={CERT_URL} target="_blank" rel="noopener noreferrer"
            className={`px-3 py-2 text-sm font-medium rounded-md ${navHover} inline-flex items-center gap-1 transition-colors ${navText}`}>
            Certification Portal <ArrowUpRight className="size-3.5" />
          </a>
          <NavLink to="/resources" scrolled={scrolled}>Resources</NavLink>
          <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a href="tel:+254723237939"
            className={`hidden md:grid place-items-center size-10 rounded-full border border-white/20 ${navText} hover:bg-white/10 transition-colors`}
            aria-label="Call us">
            <Phone className="size-4" />
          </a>
          <Link to="/contact" className="hidden sm:inline-flex items-center justify-center rounded-md bg-[var(--color-orange)] text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 shadow-md hover:shadow-lg transition-all">
            Request a Survey
          </Link>
          <button
            className={`lg:hidden grid place-items-center size-10 rounded-md border border-white/20 ${scrolled ? "text-white" : "text-gray-400"}`}
            onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 max-h-[85vh] overflow-y-auto"
          style={{ background: "rgba(8,8,20,0.30)", backdropFilter: "blur(28px) saturate(1.4)" }}>
          <div className="container-page py-4 pb-8 flex flex-col gap-1">
            <MobileLink to="/" onClose={() => setOpen(false)}>Home</MobileLink>
            <MobileGroup label="About" items={aboutMenu} onClose={() => setOpen(false)} />
            <MobileGroup label="Services" items={servicesMenu} onClose={() => setOpen(false)} />
            <MobileGroup label="Certifications" items={certificationsMenu} onClose={() => setOpen(false)} />
            <MobileLink to="/industries" onClose={() => setOpen(false)}>Industries</MobileLink>
            <MobileLink to="/qms-plug" onClose={() => setOpen(false)}>QMS Platform</MobileLink>
            <a href={TRAINING_URL} target="_blank" rel="noopener noreferrer"
              className="px-3 py-3 text-sm font-medium rounded-md hover:bg-white/10 text-white/85 hover:text-white inline-flex items-center gap-1">
              Training <ArrowUpRight className="size-3.5" />
            </a>
            <a href={CERT_URL} target="_blank" rel="noopener noreferrer"
              className="px-3 py-3 text-sm font-medium rounded-md hover:bg-white/10 text-white/85 hover:text-white inline-flex items-center gap-1">
              Certification Portal <ArrowUpRight className="size-3.5" />
            </a>
            <MobileLink to="/resources" onClose={() => setOpen(false)}>Resources</MobileLink>
            <MobileLink to="/contact" onClose={() => setOpen(false)}>Contact</MobileLink>
            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-md bg-[var(--color-orange)] text-white px-4 py-3.5 text-sm font-semibold">
              Request a Survey
            </Link>
          </div>
        </div>
      )}

    </header>

    {/* Floating mobile CTAs — outside <header> so backdrop-filter doesn't break fixed positioning */}
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
          Request Survey
        </Link>
      </div>
    )}
    </>
  );
}

function NavLink({ to, exact, scrolled, children }: { to: string; exact?: boolean; scrolled: boolean; children: React.ReactNode }) {
  const base = `px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 hover:text-white transition-colors`;
  const color = scrolled ? "text-white/80" : "text-gray-400";
  return (
    <Link
      to={to}
      activeOptions={{ exact: !!exact }}
      className={`${base} ${color}`}
      activeProps={{ className: `${base} text-white font-semibold bg-white/15` }}
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
      <button className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-white/10 hover:text-white inline-flex items-center gap-1 transition-colors ${color}`}>
        {label} <ChevronDown className="size-3.5" />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2 min-w-[260px]">
          <div className="rounded-xl border border-white/15 shadow-2xl p-2"
            style={{ background: "rgba(8,8,20,0.28)", backdropFilter: "blur(24px) saturate(1.4)" }}>
            {items.map(([l, t]) => (
              t.startsWith("http") ? (
                <a key={l + t} href={t} target="_blank" rel="noopener noreferrer"
                  className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-white/90 hover:text-white inline-flex items-center gap-1 w-full">
                  {l} <ArrowUpRight className="size-3 shrink-0" />
                </a>
              ) : (
                <Link key={l + t} to={t} className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-white/90 hover:text-white">{l}</Link>
              )
            ))}
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
          t.startsWith("http") ? (
            <a key={l + t} href={t} target="_blank" rel="noopener noreferrer" onClick={onClose}
              className="px-3 py-2 text-sm rounded-md hover:bg-white/10 text-white/70 hover:text-white inline-flex items-center gap-1">
              {l} <ArrowUpRight className="size-3 shrink-0" />
            </a>
          ) : (
            <Link key={l + t} to={t} onClick={onClose} className="px-3 py-2 text-sm rounded-md hover:bg-white/10 text-white/70 hover:text-white">{l}</Link>
          )
        ))}
      </div>
    </details>
  );
}
