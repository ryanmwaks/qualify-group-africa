import { useState } from "react";
import { MessageCircle, X, ChevronRight, Ship, ClipboardCheck, GraduationCap, Cpu, FileText } from "lucide-react";

const BASE = "https://api.whatsapp.com/send?phone=254723237939&text=";

const topics = [
  { icon: Ship,           label: "Marine or Cargo Inspection",  msg: "Hello, I need support with a marine or cargo inspection assignment." },
  { icon: ClipboardCheck, label: "Certification Support",        msg: "Hello, I need help with ISO certification readiness and support." },
  { icon: GraduationCap,  label: "Training & Competence",        msg: "Hello, I am interested in your training programmes." },
  { icon: Cpu,            label: "QMS Platform",                 msg: "Hello, I would like to learn more about the QUALIFY QMS Platform." },
  { icon: FileText,       label: "Technical Reporting",          msg: "Hello, I need assistance with a technical report or documentation." },
];

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-72 rounded-2xl bg-white shadow-[0_20px_60px_-10px_rgba(6,43,79,0.35)] border border-border overflow-hidden animate-slide-up">
          <div className="px-4 py-3 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #062B4F, #007A8A)" }}>
            <div>
              <div className="text-white font-semibold text-sm">QUALIFY Support</div>
              <div className="text-white/70 text-xs">How can we help you?</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X className="size-4" />
            </button>
          </div>
          <div className="p-2">
            {topics.map((t) => (
              <a
                key={t.label}
                href={`${BASE}${encodeURIComponent(t.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className="size-8 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)] shrink-0 group-hover:bg-[var(--color-teal)]/20 transition-colors">
                  <t.icon className="size-4" />
                </div>
                <span className="text-sm text-foreground font-medium flex-1">{t.label}</span>
                <ChevronRight className="size-3.5 text-muted-foreground group-hover:text-[var(--color-teal)] transition-colors" />
              </a>
            ))}
          </div>
          <div className="px-4 pb-3 pt-1 border-t border-border">
            <a
              href={`${BASE}${encodeURIComponent("Hello, I have a general enquiry for QUALIFY Group Africa.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-muted-foreground hover:text-[var(--color-teal)] transition-colors py-1"
            >
              General enquiry →
            </a>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open support chat"
        className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-50 size-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all grid place-items-center"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-7" />}
      </button>
    </>
  );
}
