import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Qualify Group Africa | Marine Surveyors in Mombasa" },
      { name: "description", content: "Contact QUALIFY Group Africa Ltd for marine inspection, cargo surveying, quality assurance and technical reporting in Mombasa, Kenya." },
    ],
  }),
  component: Contact,
});

const faqs = [
  ["What information should I provide when requesting a survey?", "Service required, location, dates, vessel/cargo details and any supporting documents help us respond quickly."],
  ["Do you handle urgent inspection requests?", "Yes — select 'Urgent' or 'Same Day' in the form and our team will prioritize your request."],
  ["Can I upload supporting documents?", "Yes — the form supports file uploads for B/Ls, certificates, photos and other references."],
  ["Do you provide technical reports?", "All assignments include structured technical reports with evidence and recommendations."],
  ["Which sectors do you serve?", "Maritime, cargo, logistics, port operations, insurance, importers/exporters and compliance teams."],
  ["Can I request a QMS Platform demo?", "Yes — choose 'QMS Platform Demo' as the service and we'll schedule a walkthrough."],
  ["Do you support clients outside Mombasa?", "Yes — we serve clients across Kenya and the wider region."],
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Contact QUALIFY Group Africa Ltd" subtitle="Need marine inspection, cargo surveying, quality assurance or technical reporting? Reach out — we'll guide you to the right service." />
      <section className="container-page py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: MapPin, label: "Office", text: "Mombasa, Kenya" },
          { icon: Phone, label: "Phone", text: "+254 723 237 939" },
          { icon: Mail, label: "Email", text: "info@qualify.co.ke" },
          { icon: Clock, label: "Hours", text: "Mon–Fri, 8AM–5PM" },
        ].map((c) => (
          <div key={c.label} className="rounded-xl bg-card border border-border p-5 flex gap-3">
            <div className="size-10 rounded-lg bg-[var(--color-teal)]/10 grid place-items-center text-[var(--color-teal)]"><c.icon className="size-5" /></div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="font-semibold text-navy text-sm mt-0.5">{c.text}</div>
            </div>
          </div>
        ))}
      </section>

      <section className="container-page pb-16 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 rounded-2xl bg-card border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
          <h2 className="font-display text-2xl font-bold text-navy mb-1">Request a Survey</h2>
          <p className="text-sm text-muted-foreground mb-6">We typically respond within one business day.</p>
          {submitted ? (
            <div className="rounded-xl bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 p-6 text-center">
              <div className="font-display text-xl font-bold text-navy">Thank you</div>
              <p className="text-sm text-muted-foreground mt-2">Our team will review your request and contact you shortly.</p>
            </div>
          ) : (
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <Field label="Full Name" required><input required className={inp} /></Field>
              <Field label="Company Name"><input className={inp} /></Field>
              <Field label="Phone Number" required><input required type="tel" className={inp} /></Field>
              <Field label="Email Address" required><input required type="email" className={inp} /></Field>
              <Field label="Service Required">
                <select className={inp} defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  {["Marine Inspection", "Cargo Surveying", "Vessel Condition Survey", "Damage Assessment", "Quality Assurance", "Training", "QMS Platform Demo", "Other"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Location"><input className={inp} placeholder="Port / city" /></Field>
              <Field label="Urgency">
                <select className={inp} defaultValue="Normal">
                  {["Normal", "Urgent", "Same Day", "Scheduled Assignment"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="File Upload"><input type="file" className="text-sm" /></Field>
              <Field label="Vessel / Cargo / Project Details" full><textarea rows={3} className={inp} /></Field>
              <Field label="Message" full><textarea rows={3} className={inp} /></Field>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full sm:w-auto inline-flex justify-center items-center rounded-md bg-[var(--color-orange)] text-orange-foreground px-6 py-3 font-semibold">Send Request</button>
              </div>
            </form>
          )}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-border h-64">
            <iframe title="Map" className="w-full h-full" loading="lazy" sandbox="allow-scripts allow-same-origin" src="https://www.openstreetmap.org/export/embed.html?bbox=39.6%2C-4.1%2C39.75%2C-3.95&layer=mapnik" />
          </div>
          <a href="https://wa.me/254723237939" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-[#25D366] text-white p-4 font-semibold">
            <MessageCircle className="size-5" /> Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <section className="container-page pb-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3 max-w-3xl">
          {faqs.map(([q, a]) => <FAQ key={q} q={q} a={a} />)}
        </div>
      </section>
    </SiteLayout>
  );
}

const inp = "w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]";

function Field({ label, children, full, required }: { label: string; children: React.ReactNode; full?: boolean; required?: boolean }) {
  return (
    <label className={`text-sm ${full ? "sm:col-span-2" : ""}`}>
      <div className="font-medium text-navy mb-1.5">{label}{required && <span className="text-[var(--color-orange)]">*</span>}</div>
      {children}
    </label>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-navy">{q}</span>
        <ChevronDown className={`size-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
