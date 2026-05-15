import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { useState } from "react";
import { z } from "zod";
import { Send, Lock, Clock, RefreshCw, ArrowUpCircle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/complaints-appeals")({
  head: () => ({
    meta: [
      { title: "Complaints and Appeals | Qualify Group Africa" },
      { name: "description", content: "Submit a complaint or appeal to QUALIFY Group Africa. Confidential, structured handling with clear timelines and escalation." },
    ],
  }),
  component: ComplaintsAppeals,
});

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  type: z.string().min(1),
  serviceArea: z.string().trim().max(120).optional().or(z.literal("")),
  reference: z.string().trim().max(80).optional().or(z.literal("")),
  description: z.string().trim().min(10).max(2000),
  contactMethod: z.string().min(1),
});

const handling = [
  { icon: Lock, title: "Confidentiality Commitment", text: "All submissions are treated with strict confidentiality and only shared with authorized personnel." },
  { icon: Clock, title: "Response Timelines", text: "Acknowledgement within 3 working days; resolution timelines communicated based on case complexity." },
  { icon: RefreshCw, title: "How Complaints Are Handled", text: "Recorded, reviewed by an independent reviewer, investigated, and resolved with documented outcomes." },
  { icon: CheckCircle2, title: "How Appeals Are Reviewed", text: "Independently reviewed by personnel not involved in the original decision, with traceable records." },
  { icon: ArrowUpCircle, title: "Escalation Process", text: "Unresolved matters can be escalated to senior management and, where applicable, to relevant external bodies." },
  { icon: CheckCircle2, title: "Corrective Action and Follow-Up", text: "Validated outcomes drive corrective and preventive actions and continual improvement." },
];

function ComplaintsAppeals() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path.join(".")] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Complaints & Appeals"
        title="Complaints and Appeals"
        subtitle="A structured and confidential process for clients, learners, partners and stakeholders to submit complaints, appeals, feedback or concerns."
        variant="tanga"
      />

      {/* Process timeline */}
      <section className="container-page pt-12">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-teal)] font-semibold mb-3">Our Process</div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-8">How we handle your submission</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {["Submission", "Review", "Investigation", "Resolution", "Feedback", "Close-Out"].map((step, i) => (
            <li key={step} className="relative rounded-xl bg-card border border-border p-5 hover:border-[var(--color-teal)] transition-colors">
              <div className="size-9 rounded-full bg-[var(--gradient-accent)] grid place-items-center text-white font-bold text-sm">{i + 1}</div>
              <div className="mt-3 font-display font-semibold text-navy">{step}</div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1 space-y-4">
          {handling.map((h) => (
            <div key={h.title} className="rounded-xl bg-card border border-border p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <h.icon className="size-5 text-[var(--color-teal)]" />
                <h3 className="font-display font-semibold text-navy text-sm">{h.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2">
          {submitted ? (
            <div className="rounded-2xl bg-card border border-border p-10 text-center">
              <CheckCircle2 className="size-12 mx-auto text-[var(--color-teal)]" />
              <h2 className="mt-4 font-display text-2xl font-bold text-navy">Submission received</h2>
              <p className="mt-2 text-muted-foreground">Thank you. Our quality team will acknowledge your submission within 3 working days.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-6 md:p-8 grid gap-4">
              <h2 className="font-display text-2xl font-bold text-navy">Submit a Complaint or Appeal</h2>
              <Field label="Full Name" name="fullName" error={errors.fullName} required />
              <Field label="Organization" name="organization" error={errors.organization} />
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Email Address" name="email" type="email" error={errors.email} required />
                <Field label="Phone Number" name="phone" error={errors.phone} />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <SelectField label="Complaint or Appeal Type" name="type" error={errors.type} options={["Complaint", "Appeal", "Feedback", "Concern"]} required />
                <Field label="Service Area" name="serviceArea" error={errors.serviceArea} />
              </div>
              <Field label="Reference Number (if available)" name="reference" error={errors.reference} />
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">Description of Concern <span className="text-[var(--color-orange)]">*</span></label>
                <textarea name="description" rows={5} maxLength={2000} className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]" />
                {errors.description && <p className="mt-1 text-xs text-[var(--color-orange)]">{errors.description}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-1.5">Supporting Document (optional)</label>
                <input type="file" name="document" className="w-full text-sm" />
              </div>
              <SelectField label="Preferred Contact Method" name="contactMethod" error={errors.contactMethod} options={["Email", "Phone", "WhatsApp"]} required />
              <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-orange)] text-orange-foreground px-6 py-3 font-semibold">
                <Send className="size-4" /> Submit Complaint / Appeal
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", error, required }: { label: string; name: string; type?: string; error?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label} {required && <span className="text-[var(--color-orange)]">*</span>}</label>
      <input type={type} name={name} maxLength={255} className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]" />
      {error && <p className="mt-1 text-xs text-[var(--color-orange)]">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options, error, required }: { label: string; name: string; options: string[]; error?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label} {required && <span className="text-[var(--color-orange)]">*</span>}</label>
      <select name={name} className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="mt-1 text-xs text-[var(--color-orange)]">{error}</p>}
    </div>
  );
}
