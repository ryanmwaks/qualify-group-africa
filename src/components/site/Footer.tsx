import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, ArrowUpRight, MessageCircle } from "lucide-react";
import qualifyLogo from "@/assets/qualify-logo.png";

const TRAINING_URL = "https://training.qualify.co.ke";
const CERT_URL = "https://quality.qualify.co.ke";
const WA_URL = "https://api.whatsapp.com/send?phone=254723237939";

const company = [
  { label: "About Us",            to: "/about" },
  { label: "Our History",         to: "/history" },
  { label: "Quality Policy",      to: "/quality-policy" },
  { label: "Partners",            to: "/partners" },
  { label: "Standards",           to: "/standards" },
  { label: "Complaints & Appeals",to: "/complaints-appeals" },
  { label: "Contact",             to: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-white mt-20" style={{ background: "linear-gradient(180deg, #062B4F 0%, #041830 100%)" }}>
      {/* Maritime wave SVG */}
      <svg aria-hidden className="absolute inset-x-0 top-0 w-full h-40 opacity-15" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <path d="M0,80 C180,20 360,140 540,80 C720,20 900,140 1080,80 C1260,20 1380,100 1440,80 L1440,0 L0,0 Z" fill="#007A8A" opacity="0.4" />
        <path d="M0,100 C200,40 400,160 600,100 C800,40 1000,160 1200,100 C1320,60 1400,120 1440,100 L1440,0 L0,0 Z" fill="#0A6FAE" opacity="0.3" />
      </svg>
      {/* Crane silhouette */}
      <svg aria-hidden className="absolute right-8 bottom-16 h-72 w-auto opacity-[0.04]" viewBox="0 0 300 400" fill="none" stroke="white" strokeWidth="1.5">
        <line x1="40" y1="380" x2="40" y2="60" /><line x1="40" y1="60" x2="260" y2="60" />
        <line x1="260" y1="60" x2="260" y2="200" /><line x1="40" y1="60" x2="260" y2="160" />
        <line x1="100" y1="380" x2="100" y2="120" /><line x1="160" y1="380" x2="160" y2="120" />
        <line x1="220" y1="380" x2="220" y2="120" /><circle cx="260" cy="60" r="5" fill="white" />
      </svg>
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* Glow orbs */}
      <div className="absolute -top-20 left-1/4 size-80 rounded-full bg-[var(--color-teal)]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-60 rounded-full bg-[var(--color-ocean)]/10 blur-3xl pointer-events-none" />

      {/* ── Main grid: 5 columns on desktop ── */}
      <div className="relative container-page pt-24 pb-12 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

        {/* Col 1: Brand */}
        <div className="space-y-5 sm:col-span-2 lg:col-span-1">
          <img src={qualifyLogo} alt="Qualify Group Africa Ltd" className="h-28 w-auto object-contain block" />
          <p className="text-sm text-white/70 leading-relaxed">
            Independent marine and cargo inspection, quality assurance, certification readiness, training and digital QMS — based in Mombasa, Kenya.
          </p>
          <div className="flex gap-2.5 pt-1">
            {[
              { href: "https://linkedin.com/company/qualify-group-africa", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://facebook.com/qualifygroupafrica",           Icon: Facebook, label: "Facebook" },
              { href: "https://twitter.com/qualifyafrica",                 Icon: Twitter,  label: "Twitter"  },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="grid place-items-center size-9 rounded-full border border-white/15 bg-white/5 hover:bg-[var(--color-orange)] hover:border-transparent hover:shadow-[0_0_20px_rgba(228,87,46,0.5)] transition-all">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Company */}
        <FooterCol title="Company" items={company} />

        {/* Col 3: Services — grouped by category */}
        <FooterServicesCol />

        {/* Col 4: Industries + Resources */}
        <FooterExploreCol />

        {/* Col 5: Contact */}
        <div>
          <h4 className="font-display font-semibold mb-5 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">Contact</h4>
          <div className="space-y-4">
            <ContactRow icon={MapPin} label="Office">Mombasa, Kenya</ContactRow>
            <ContactRow icon={Phone} label="Phone" href="tel:+254723237939">+254 723 237 939</ContactRow>
            <ContactRow icon={Mail}  label="Email"  href="mailto:info@qualify.co.ke">info@qualify.co.ke</ContactRow>
            <ContactRow icon={Clock} label="Hours">Mon–Fri · 8:00 AM – 5:00 PM EAT</ContactRow>
          </div>
          <div className="mt-5">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366]/20 border border-[#25D366]/30 hover:bg-[#25D366]/30 px-3 py-2.5 text-sm font-semibold text-white transition-colors w-full justify-center">
              <MessageCircle className="size-4 text-[#25D366]" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8">
        <div className="container-page py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/45">
          <div>© 2026 QUALIFY Group Africa Ltd. All Rights Reserved.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {([["Privacy Policy", "/privacy"], ["Terms", "/terms"], ["Cookies", "/cookies"], ["Accessibility", "/accessibility"]] as [string, string][]).map(([l, t]) => (
              <Link key={l} to={t} className="hover:text-[var(--color-orange)] transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Services column — two sub-groups ── */
function FooterServicesCol() {
  return (
    <div>
      <h4 className="font-display font-semibold mb-5 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">Services</h4>

      {/* Quality Assurance & Compliance */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="h-3 w-0.5 rounded-full bg-[var(--color-teal)]" />
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-bold">Quality Assurance</span>
        </div>
        <ul className="space-y-2 pl-2 text-sm">
          {[
            ["Certification Support",    "/services/certification-support"],
            ["Training & Consultancy",   "/services/training-consultancy"],
            ["Technical Reporting",      "/services/technical-reporting-documentation"],
          ].map(([label, to]) => (
            <li key={label}>
              <Link to={to} className="text-white/65 hover:text-[var(--color-orange)] transition-colors">{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Marine Inspection & Surveying */}
      <div className="mb-5">
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="h-3 w-0.5 rounded-full bg-[var(--color-ocean)]" />
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-bold">Marine Inspection</span>
        </div>
        <ul className="space-y-2 pl-2 text-sm">
          {[
            ["Cargo Inspection",         "/services/cargo-inspection-surveying"],
            ["Vessel Condition Surveys", "/services/vessel-condition-surveys"],
            ["Damage & Loss Assessment", "/services/damage-loss-assessment"],
          ].map(([label, to]) => (
            <li key={label}>
              <Link to={to} className="text-white/65 hover:text-[var(--color-orange)] transition-colors">{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* QMS Platform */}
      <div className="pt-3 border-t border-white/8">
        <Link to="/qms-plug"
          className="text-sm text-white/65 hover:text-[var(--color-orange)] transition-colors inline-flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[var(--color-orange)] shrink-0" />
          QUALIFY QMS Platform
        </Link>
      </div>

      {/* View all services */}
      <div className="mt-3">
        <Link to="/services/"
          className="text-xs text-[var(--color-teal)] hover:text-[var(--color-orange)] transition-colors inline-flex items-center gap-1 font-semibold">
          View all services <ArrowUpRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}

/* ── Industries + Resources column ── */
function FooterExploreCol() {
  return (
    <div>
      <h4 className="font-display font-semibold mb-5 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">Industries</h4>
      <ul className="space-y-2 text-sm mb-5">
        <li>
          <Link to="/industries" className="text-white/80 hover:text-[var(--color-orange)] transition-colors font-semibold inline-flex items-center gap-1">
            View All Industries <ArrowUpRight className="size-3" />
          </Link>
        </li>
        {[
          ["Maritime & Shipping",     "/industry/maritime"],
          ["Cargo & Logistics",       "/industry/logistics"],
          ["Healthcare",              "/industry/healthcare"],
          ["Laboratories",            "/industry/laboratories"],
          ["Manufacturing",           "/industry/manufacturing"],
          ["Oil & Gas",               "/industry/oil-gas"],
        ].map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-white/55 hover:text-[var(--color-orange)] transition-colors">{label}</Link>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/8 pt-4">
        <h4 className="font-display font-semibold mb-3 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">Resources</h4>
        <ul className="space-y-2 text-sm">
          {[
            ["Knowledge Hub",          "/resources",     false],
            ["QMS Solutions",          "/qms-solutions", false],
            ["Standards We Align With","/standards",     false],
          ].map(([label, to, ext]) => (
            <li key={label}>
              <Link to={to as string} className="text-white/65 hover:text-[var(--color-orange)] transition-colors">{label}</Link>
            </li>
          ))}
          <li>
            <a href={TRAINING_URL} target="_blank" rel="noopener noreferrer"
              className="text-white/65 hover:text-[var(--color-orange)] transition-colors inline-flex items-center gap-1">
              Training Portal <ArrowUpRight className="size-3" />
            </a>
          </li>
          <li>
            <a href={CERT_URL} target="_blank" rel="noopener noreferrer"
              className="text-white/65 hover:text-[var(--color-orange)] transition-colors inline-flex items-center gap-1">
              Certification Portal <ArrowUpRight className="size-3" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ── Generic link column ── */
type NavItem = { label: string; to?: string; href?: string };

function FooterCol({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div>
      <h4 className="font-display font-semibold mb-5 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            {it.href ? (
              <a href={it.href} target="_blank" rel="noopener noreferrer"
                className="text-white/65 hover:text-[var(--color-orange)] transition-colors inline-flex items-center gap-1">
                {it.label} <ArrowUpRight className="size-3" />
              </a>
            ) : (
              <Link to={it.to!} className="text-white/65 hover:text-[var(--color-orange)] transition-colors">{it.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Contact row helper ── */
function ContactRow({ icon: Icon, label, children, href }: { icon: typeof MapPin; label: string; children: React.ReactNode; href?: string }) {
  const inner = (
    <div className="flex gap-3 items-start">
      <div className="grid place-items-center size-8 rounded-lg bg-white/8 border border-white/10 text-[var(--color-teal)] shrink-0 mt-0.5">
        <Icon className="size-3.5" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">{label}</div>
        <div className="text-sm text-white/80 mt-0.5 leading-snug">{children}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="hover:text-[var(--color-orange)] transition-colors block">{inner}</a> : <div>{inner}</div>;
}
