import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Linkedin, Facebook, Twitter, ArrowUpRight, MessageCircle } from "lucide-react";
import qualifyLogo from "@/assets/qualify-logo.png";

const TRAINING_URL = "https://training.qualify.co.ke";
const CERT_URL     = "https://quality.qualify.co.ke";
const WA_URL       = "https://api.whatsapp.com/send?phone=254723237939";

const company = [
  { label: "About Us",              to: "/about" },
  { label: "Our History",           to: "/history" },
  { label: "Quality Policy",        to: "/quality-policy" },
  { label: "Partners",              to: "/partners" },
  { label: "Standards We Align With", to: "/standards" },
  { label: "Complaints & Appeals",  to: "/complaints-appeals" },
  { label: "Contact",               to: "/contact" },
];

const services = [
  { label: "Marine Inspection & Surveying",       to: "/services/marine-inspection" },
  { label: "Cargo Inspection & Surveying",        to: "/services/cargo-inspection" },
  { label: "Vessel Condition Surveys",            to: "/services/vessel-surveys" },
  { label: "Damage & Loss Assessment",            to: "/services/damage-loss" },
  { label: "Quality Assurance & Compliance",      to: "/services/quality-assurance" },
  { label: "Technical Reporting & Documentation", to: "/services/technical-reporting" },
  { label: "QMS Solutions",                       to: "/qms-plug" },
];

const platforms = [
  { label: "QMS Solutions",          to: "/qms-plug" },
  { label: "Training Portal",        href: TRAINING_URL },
  { label: "Certification Portal",   href: CERT_URL },
  { label: "Resources",              to: "/resources" },
  { label: "Downloads",              to: "/resources" },
  { label: "FAQs",                   to: "/contact" },
];

type NavItem = { label: string; to?: string; href?: string };

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white mt-20"
      style={{ background: "linear-gradient(180deg, #062B4F 0%, #041830 100%)" }}
    >
      {/* Maritime wave */}
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
      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      {/* Glow orbs */}
      <div className="absolute -top-20 left-1/4 size-80 rounded-full bg-[var(--color-teal)]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 size-60 rounded-full bg-[var(--color-ocean)]/10 blur-3xl pointer-events-none" />

      {/* Main grid — 5 columns on large screens */}
      <div className="relative container-page pt-24 pb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.4fr]">

        {/* Col 1: Brand */}
        <div className="space-y-5 md:col-span-2 lg:col-span-1">
          <img src={qualifyLogo} alt="Qualify Group Africa Ltd" className="h-28 w-auto object-contain block" />
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
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

        {/* Col 3: Services */}
        <FooterCol title="Services" items={services} />

        {/* Col 4: Platforms & Resources */}
        <FooterCol title="Platforms & Resources" items={platforms} />

        {/* Col 5: Contact */}
        <div>
          <h4 className="font-display font-semibold mb-5 text-[var(--color-teal)] uppercase text-xs tracking-[0.2em]">Contact</h4>
          <div className="space-y-4">
            <ContactRow icon={MapPin} label="Office">Mombasa, Kenya</ContactRow>
            <ContactRow icon={Phone}  label="Phone" href="tel:+254723237939">+254 723 237 939</ContactRow>
            <ContactRow icon={Mail}   label="Email" href="mailto:info@qualifygroup.africa">info@qualifygroup.africa</ContactRow>
            <ContactRow icon={Clock}  label="Hours">Mon–Fri · 8:00 AM – 5:00 PM EAT</ContactRow>
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
              <Link to={it.to!} className="text-white/65 hover:text-[var(--color-orange)] transition-colors">
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({
  icon: Icon, label, children, href,
}: {
  icon: typeof MapPin; label: string; children: React.ReactNode; href?: string;
}) {
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
  return href
    ? <a href={href} className="hover:text-[var(--color-orange)] transition-colors block">{inner}</a>
    : <div>{inner}</div>;
}
