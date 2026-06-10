import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Phone, ChevronDown, ChevronRight,
  ShieldCheck, Award, Package, GraduationCap,
  ClipboardList, FileText, Container, ScanSearch,
} from "lucide-react";
import qualifyLogo from "@/assets/qualify-logo-header.png";

// ── Types ──────────────────────────────────────────────────────────────────────

type ServiceItem = {
  label: string;
  url: string;
  subtitle: string;
  Icon: React.ElementType;
  subItems?: [string, string][];
};

type ServicePillar = {
  label: string;
  link: string;
  subtitle: string;
  items: ServiceItem[];
};

// ── Nav data ──────────────────────────────────────────────────────────────────

const aboutMenu = [
  ["Who We Are",              "/about"],
  ["Our History",             "/history"],
  ["Quality Policy",          "/quality-policy"],
  ["Partners",                "/partners"],
  ["Standards We Align With", "/standards"],
  ["Complaints and Appeals",  "/complaints-appeals"],
] as const;

const servicePillars: ServicePillar[] = [
  {
    label: "Quality Assurance & Compliance",
    link: "/services/quality-assurance",
    subtitle: "Quality systems, compliance readiness, audits and training.",
    items: [
      {
        label: "Accreditation Support",
        url: "/services/accreditation-support",
        subtitle: "Accreditation readiness for inspection bodies and laboratories.",
        Icon: ShieldCheck,
        subItems: [
          ["ISO/IEC 17020", "/certifications/iso-17020"],
          ["ISO/IEC 17025", "/certifications/iso-17025"],
          ["ISO 15189", "/certifications/iso-15189"],
        ],
      },
      {
        label: "Certification Support",
        url: "/services/certification-support",
        subtitle: "Management-system, scheme and product-compliance readiness.",
        Icon: Award,
        subItems: [
          ["ISO 9001", "/certifications/iso-9001"],
          ["ISO 14001", "/certifications/iso-14001"],
          ["ISO 14001 Transition", "/certifications/iso-14001-transition"],
          ["ISO 45001", "/certifications/iso-45001"],
          ["ISO 22000", "/certifications/iso-22000"],
          ["FSSC 22000", "/certifications/fssc-22000"],
          ["ISO/IEC 27001", "/certifications/iso-27001"],
          ["ISO/IEC 27000 Family", "/certifications/iso-27000"],
          ["ISO/IEC 20000-1", "/certifications/iso-20000-1"],
          ["ISO 50001", "/certifications/iso-50001"],
          ["GDP", "/certifications/gdp"],
          ["HACCP", "/certifications/haccp"],
          ["GMP", "/certifications/gmp"],
          ["RoHS", "/certifications/rohs"],
          ["CE Marking", "/certifications/ce-marking"],
        ],
      },
      {
        label: "Auditing & Assurance",
        url: "/services/auditing",
        subtitle: "Independent audits, assurance and digital QMS support.",
        Icon: ClipboardList,
        subItems: [
          ["Internal Audits", "/services/auditing"],
          ["Supplier Audits", "/services/auditing"],
          ["Quality Management Portal", "/services/quality-system-implementation"],
        ],
      },
      {
        label: "Training & Capacity Building",
        url: "/services/training-consultancy",
        subtitle: "Professional training and competence development.",
        Icon: GraduationCap,
        subItems: [
          ["Professional Training Services", "/services/training-consultancy"],
          ["Competence Development Programs", "https://training.qualify.co.ke"],
        ],
      },
    ],
  },
  {
    label: "Inspection & Surveying",
    link: "/services/marine-inspection",
    subtitle: "Marine, cargo, sample logistics and technical reporting services.",
    items: [
      {
        label: "Marine Inspection & Surveying",
        url: "/services/condition-surveys",
        subtitle: "Condition, damage and bunker surveys.",
        Icon: ScanSearch,
        subItems: [
          ["Condition Surveys", "/services/condition-surveys"],
          ["Damage Surveys",    "/services/condition-surveys"],
          ["Bunker Surveys",    "/services/condition-surveys"],
          ["Vessel Condition Surveys", "/services/vessel-surveys"],
          ["Damage & Loss Assessment", "/services/damage-loss"],
        ],
      },
      {
        label: "Cargo Inspection & Surveying",
        url: "/services/cargo-inspection",
        subtitle: "Quantity, condition, damage and draught surveys.",
        Icon: Container,
        subItems: [
          ["Condition Surveys",               "/services/cargo-inspection"],
          ["Loading & Discharge Supervision", "/services/cargo-inspection"],
          ["Quantity Surveys",                "/services/cargo-inspection"],
          ["Damage Surveys",                  "/services/cargo-inspection"],
          ["Sampling",                        "/services/cargo-inspection"],
          ["Testing",                         "/services/cargo-inspection"],
        ],
      },
      {
        label: "Sample Logistics",
        url: "/services/sample-logistics",
        subtitle: "Controlled storage and secure sample transport.",
        Icon: Package,
        subItems: [
          ["Storage", "/services/sample-logistics"],
          ["Transport", "/services/sample-logistics"],
        ],
      },
      {
        label: "Technical Reporting & Documentation",
        url: "/services/technical-reporting",
        subtitle: "Survey reports, claims evidence and inspection records.",
        Icon: FileText,
      },
    ],
  },
];

// ── Header ────────────────────────────────────────────────────────────────────

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "about" | "services">(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const enter = (m: "about" | "services") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(m);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const navText = scrolled ? "text-white/85" : "text-white/78";

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          scrolled
            ? "backdrop-blur-xl border-white/12 shadow-[0_16px_50px_-24px_rgba(0,0,0,0.85)]"
            : "backdrop-blur-lg border-white/10 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.7)]"
        }`}
        style={{ background: scrolled ? "var(--gradient-header-scrolled)" : "var(--gradient-header)" }}
      >
        <div className="h-1 w-full bg-[linear-gradient(90deg,var(--color-orange)_0%,var(--color-teal)_42%,var(--color-ocean)_100%)]" />
        <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0 overflow-visible rounded-none bg-transparent p-0 transition-all">
            <img
              src={qualifyLogo}
              alt="Qualify Group Africa Ltd"
              className="h-11 md:h-14 w-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)] transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" exact scrolled={scrolled}>Home</NavLink>
            <Dropdown
              label="About"
              open={openMenu === "about"}
              onEnter={() => enter("about")}
              onLeave={leave}
              items={aboutMenu}
              scrolled={scrolled}
            />
            <MegaMenuTrigger
              open={openMenu === "services"}
              onEnter={() => enter("services")}
              onLeave={leave}
              scrolled={scrolled}
            />
            <NavLink to="/industries" scrolled={scrolled}>Industries</NavLink>
            <NavLink to="/knowledge-hub" scrolled={scrolled}>Knowledge Hub</NavLink>
            <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+254723237939"
              className={`hidden md:grid place-items-center size-10 rounded-full border border-white/20 bg-white/6 ${navText} hover:bg-white/14 hover:border-[var(--color-teal)]/60 transition-all`}
              aria-label="Call us"
            >
              <Phone className="size-4" />
            </a>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--color-orange)] text-white px-4 py-2.5 text-sm font-semibold hover:opacity-95 shadow-[0_12px_30px_-16px_rgba(228,87,46,0.9)] hover:shadow-[0_16px_34px_-14px_rgba(228,87,46,0.95)] transition-all"
            >
              Request Service
            </Link>
            <button
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden grid place-items-center size-10 rounded-full border border-white/20 bg-white/8 text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            id="mobile-nav"
            className="lg:hidden mobile-menu-enter border-t border-white/10 max-h-[85vh] overflow-y-auto"
            style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.98) 0%, rgba(4,24,48,0.96) 100%)", backdropFilter: "blur(28px) saturate(1.4)" }}
          >
            <div className="container-page py-4 pb-8 flex flex-col gap-1">
              <MobileLink to="/" onClose={() => setOpen(false)}>Home</MobileLink>
              <MobileGroup label="About" items={aboutMenu} onClose={() => setOpen(false)} />
              <MobileServicesGroup onClose={() => setOpen(false)} />
              <MobileLink to="/industries" onClose={() => setOpen(false)}>Industries</MobileLink>
              <MobileLink to="/knowledge-hub" onClose={() => setOpen(false)}>Knowledge Hub</MobileLink>
              <MobileLink to="/contact" onClose={() => setOpen(false)}>Contact</MobileLink>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-[var(--color-orange)] text-white px-4 py-3.5 text-sm font-semibold"
              >
                Request Service
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

// ── NavLink ───────────────────────────────────────────────────────────────────

function NavLink({
  to, exact, scrolled, children,
}: {
  to: string; exact?: boolean; scrolled: boolean; children: React.ReactNode;
}) {
  const base = `px-3.5 py-2 text-sm font-medium rounded-full hover:bg-white/12 hover:text-white transition-all duration-200 hover:[text-shadow:0_0_14px_rgba(0,122,138,0.55)]`;
  const color = scrolled ? "text-white/85" : "text-white/78";
  return (
    <Link
      to={to}
      activeOptions={{ exact: !!exact }}
      className={`${base} ${color}`}
      activeProps={{ className: `${base} text-white font-semibold bg-white/14 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]` }}
    >
      {children}
    </Link>
  );
}

// ── About Dropdown ────────────────────────────────────────────────────────────

function Dropdown({
  label, open, onEnter, onLeave, items, scrolled,
}: {
  label: string; open: boolean; onEnter: () => void; onLeave: () => void;
  items: readonly (readonly [string, string])[]; scrolled: boolean;
}) {
  const color = scrolled ? "text-white/85" : "text-white/78";
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        className={`px-3.5 py-2 text-sm font-medium rounded-full hover:bg-white/12 hover:text-white inline-flex items-center gap-1 transition-all duration-200 hover:[text-shadow:0_0_14px_rgba(0,122,138,0.55)] ${color}`}
      >
        {label} <ChevronDown className="size-3.5" />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-3 min-w-[260px]">
          <div
            className="menu-panel-enter rounded-2xl border border-white/15 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)] p-2"
            style={{ background: "linear-gradient(180deg, rgba(6,43,79,0.98) 0%, rgba(4,24,48,0.96) 100%)", backdropFilter: "blur(24px) saturate(1.4)" }}
          >
            {items.map(([l, t]) => (
              <Link key={l + t} to={t} className="block px-3 py-2.5 text-sm rounded-xl hover:bg-white/10 text-white/85 hover:text-white transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Premium Mega Menu ─────────────────────────────────────────────────────────

function MegaMenuTrigger({
  open, onEnter, onLeave, scrolled,
}: {
  open: boolean; onEnter: () => void; onLeave: () => void; scrolled: boolean;
}) {
  const color = scrolled ? "text-white/85" : "text-white/78";
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => open ? onLeave() : onEnter()}
        onKeyDown={(e) => { if (e.key === "Escape") onLeave(); }}
        className={`px-3.5 py-2 text-sm font-medium rounded-full hover:bg-white/12 hover:text-white inline-flex items-center gap-1 transition-all duration-200 hover:[text-shadow:0_0_14px_rgba(0,122,138,0.55)] ${color}`}
      >
        Services <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        /* Fixed panel — always centred on the viewport, never clips left/right */
        <div
          className="fixed inset-x-0 top-[68px] md:top-[84px] z-[200] flex justify-center px-4 pt-3"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
        <div className="w-full max-w-[1000px] menu-panel-enter">
          <div
            className="rounded-2xl overflow-hidden border border-white/14 shadow-[0_30px_90px_-28px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] backdrop-blur-2xl"
            style={{ background: "linear-gradient(135deg, rgba(6,43,79,0.94) 0%, rgba(9,58,91,0.91) 48%, rgba(0,122,138,0.84) 100%)" }}
          >
            {/* Navy top accent bar */}
            <div className="h-1" style={{ background: "linear-gradient(90deg, #062B4F 0%, #007A8A 50%, #0A6FAE 100%)" }} />

            {/* Header row */}
            <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/55">Our Services</span>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-xs font-semibold text-white/78 hover:text-white transition-colors"
              >
                View All Services <ChevronRight className="size-3" />
              </Link>
            </div>

            {/* Two-column pillars */}
            <div className="grid grid-cols-2 divide-x divide-white/10">
              {servicePillars.map((pillar) => (
                <div key={pillar.label} className="p-5">
                  <Link to={pillar.link as any} className="group/pillar block mb-1">
                    <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.18em] text-white group-hover/pillar:text-[var(--color-teal)] transition-colors">
                      {pillar.label} <ChevronRight className="size-3 opacity-50 group-hover/pillar:opacity-100 shrink-0" />
                    </div>
                  </Link>
                  <p className="text-[11px] text-white/58 leading-relaxed mb-4 max-w-xs">{pillar.subtitle}</p>

                  <div className="space-y-0.5">
                    {pillar.items.map((item) => (
                      <div key={item.label}>
                        <Link
                          to={item.url as any}
                          className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-white/10 border border-transparent hover:border-white/16 transition-all relative"
                        >
                          <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-[var(--color-teal)] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          <div className="size-8 rounded-lg bg-white/8 group-hover/item:bg-[var(--color-teal)]/18 border border-white/8 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                            <item.Icon className="size-4 text-white/56 group-hover/item:text-[var(--color-teal)] transition-colors" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-white group-hover/item:text-[var(--color-teal)] transition-colors leading-snug">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-white/56 leading-relaxed mt-0.5 line-clamp-2">
                              {item.subtitle}
                            </div>
                            {item.subItems && (
                              <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                                {item.subItems.map(([subLabel, subUrl]) =>
                                  subUrl.startsWith("http") ? (
                                    <a
                                      key={subLabel}
                                      href={subUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="text-[10px] text-teal-200 hover:text-white font-medium transition-colors"
                                    >
                                      {subLabel.split(" — ")[0]}
                                    </a>
                                  ) : (
                                    <Link
                                      key={subLabel}
                                      to={subUrl as any}
                                      onClick={(e) => e.stopPropagation()}
                                      className="text-[10px] text-teal-200 hover:text-white font-medium transition-colors"
                                    >
                                      {subLabel.split(" — ")[0]}
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div
              className="flex items-center justify-between gap-4 px-6 py-4 border-t border-white/10"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(0,122,138,0.12) 100%)" }}
            >
              <p className="text-xs text-white/62 font-medium">
                Need help choosing the right service?
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white text-[#062B4F] px-4 py-2 text-xs font-semibold hover:bg-white/90 transition-colors"
                >
                  Speak to an Expert
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/24 text-white px-4 py-2 text-xs font-semibold hover:bg-white/12 transition-colors"
                >
                  Request Service Support
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

// ── Mobile components ─────────────────────────────────────────────────────────

function MobileLink({
  to, onClose, children,
}: {
  to: string; onClose: () => void; children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClose}
      className="px-3 py-3 text-sm font-medium rounded-md hover:bg-white/10 text-white/85 hover:text-white"
    >
      {children}
    </Link>
  );
}

function MobileGroup({
  label, items, onClose,
}: {
  label: string; items: readonly (readonly [string, string])[]; onClose: () => void;
}) {
  return (
    <details className="rounded-md">
      <summary className="px-3 py-3 text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md text-white/85 hover:text-white">
        {label}
      </summary>
      <div className="pl-3 flex flex-col">
        {items.map(([l, t]) => (
          <Link key={l + t} to={t} onClick={onClose} className="px-3 py-2 text-sm rounded-md hover:bg-white/10 text-white/70 hover:text-white">
            {l}
          </Link>
        ))}
      </div>
    </details>
  );
}

function MobileServicesGroup({ onClose }: { onClose: () => void }) {
  return (
    <details className="rounded-md">
      <summary className="px-3 py-3 text-sm font-medium cursor-pointer hover:bg-white/10 rounded-md text-white/85 hover:text-white">
        Services
      </summary>
      <div className="pl-3 flex flex-col gap-0.5">
        <Link
          to="/services"
          onClick={onClose}
          className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-teal)] rounded-md hover:bg-white/10"
        >
          All Services →
        </Link>

        {servicePillars.map((pillar) => (
          <details key={pillar.label} className="rounded-md">
            <summary className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-white/55 hover:text-white cursor-pointer hover:bg-white/10 rounded-md list-none flex items-center justify-between">
              {pillar.label}
              <ChevronRight className="size-3.5 shrink-0 opacity-50" />
            </summary>
            <div className="pl-4 flex flex-col border-l border-white/10 ml-3 mt-0.5 mb-1">
              <Link
                to={pillar.link as any}
                onClick={onClose}
                className="px-2 py-1.5 text-xs font-semibold text-[var(--color-teal)] hover:bg-white/10 rounded-md"
              >
                Overview — {pillar.label}
              </Link>
              {pillar.items.map((item) => (
                <div key={item.label}>
                  {item.subItems ? (
                    <details className="rounded-md">
                      <summary className="pl-2 pr-2 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md cursor-pointer list-none flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <item.Icon className="size-3.5 text-white/40 shrink-0" />
                          {item.label}
                        </span>
                        <ChevronRight className="size-3 shrink-0 opacity-40" />
                      </summary>
                      <div className="pl-7 flex flex-col border-l border-[var(--color-teal)]/20 ml-4 mt-0.5 mb-1">
                        {item.subItems.map(([subLabel, subUrl]) =>
                          subUrl.startsWith("http") ? (
                            <a
                              key={subLabel}
                              href={subUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={onClose}
                              className="px-2 py-1.5 text-xs text-white/60 hover:text-white hover:bg-white/10 rounded-md"
                            >
                              {subLabel}
                            </a>
                          ) : (
                            <Link
                              key={subLabel}
                              to={subUrl as any}
                              onClick={onClose}
                              className="px-2 py-1.5 text-xs text-white/60 hover:text-white hover:bg-white/10 rounded-md"
                            >
                              {subLabel}
                            </Link>
                          )
                        )}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={item.url as any}
                      onClick={onClose}
                      className="pl-2 pr-2 py-1.5 text-sm rounded-md hover:bg-white/10 text-white/70 hover:text-white flex items-center gap-2"
                    >
                      <item.Icon className="size-3.5 text-white/40 shrink-0" />
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </details>
        ))}

        <div className="mt-2 mx-1 rounded-xl border border-[var(--color-teal)]/25 p-3 bg-white/5">
          <p className="text-xs text-white/50 mb-2">Need help choosing the right service?</p>
          <Link
            to="/contact"
            onClick={onClose}
            className="block text-center rounded-lg bg-[var(--color-teal)] text-white px-3 py-2 text-xs font-semibold"
          >
            Speak to an Expert
          </Link>
        </div>
      </div>
    </details>
  );
}
