import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { MapPin, Phone, Mail, Clock, MessageCircle, ChevronDown, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { sendContactForm } from "@/lib/emailjs";

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
  ["Can I share supporting documents?", "Yes — mention the documents in your message and our team will request the files by email or WhatsApp."],
  ["Do you provide technical reports?", "All assignments include structured technical reports with evidence and recommendations."],
  ["Which sectors do you serve?", "Maritime, cargo, logistics, port operations, insurance, importers/exporters and compliance teams."],
  ["Can I request a QMS Platform demo?", "Yes — choose 'QMS Platform Demo' as the service and we'll schedule a walkthrough."],
  ["Do you support clients outside Mombasa?", "Yes — we serve clients across Kenya and the wider region."],
];

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      await sendContactForm({
        from_name:  fd.get("from_name")  as string,
        company:    fd.get("company")    as string,
        phone:      fd.get("phone")      as string,
        from_email: fd.get("from_email") as string,
        service:    fd.get("service")    as string,
        location:   fd.get("location")   as string,
        urgency:    fd.get("urgency")    as string,
        details:    fd.get("details")    as string,
        message:    fd.get("message")    as string,
      });
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again or call us directly.");
      setStatus("error");
    }
  };

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

          {status === "success" ? (
            <div className="rounded-xl bg-green-500/10 border border-green-500/30 p-6 text-center">
              <div className="font-display text-xl font-bold text-navy">Thank you — message sent!</div>
              <p className="text-sm text-muted-foreground mt-2">Our team will review your request and contact you shortly.</p>
              <button onClick={() => setStatus("idle")} className="mt-4 text-sm text-[var(--color-teal)] underline">Send another request</button>
            </div>
          ) : (
            <form ref={formRef} className="grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <Field label="Full Name" name="from_name" required><input name="from_name" required className={inp} /></Field>
              <Field label="Company Name" name="company"><input name="company" className={inp} /></Field>
              <Field label="Phone Number" name="phone" required><input name="phone" required type="tel" className={inp} /></Field>
              <Field label="Email Address" name="from_email" required><input name="from_email" required type="email" className={inp} /></Field>
              <Field label="Service Required" name="service">
                <select name="service" className={inp} defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  {["Marine Inspection", "Cargo Surveying", "Vessel Condition Survey", "Damage Assessment", "Quality Assurance", "Training", "QMS Platform Demo", "Other"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Location" name="location"><input name="location" className={inp} placeholder="Port / city" /></Field>
              <Field label="Urgency" name="urgency">
                <select name="urgency" className={inp} defaultValue="Normal">
                  {["Normal", "Urgent", "Same Day", "Scheduled Assignment"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Vessel / Cargo / Project Details" name="details" full><textarea name="details" rows={3} className={inp} /></Field>
              <Field label="Message" name="message" full><textarea name="message" rows={3} className={inp} /></Field>

              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg p-3">{errorMsg}</p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md bg-[var(--color-orange)] text-orange-foreground px-6 py-3 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? <><Loader2 className="size-4 animate-spin" /> Sending…</> : "Send Request"}
                </button>
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
