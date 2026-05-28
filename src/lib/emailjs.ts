import emailjs from "@emailjs/browser";

const PUBLIC_KEY   = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const SERVICE_ID   = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TPL_CONTACT  = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT as string;
const TPL_COMPLAINTS = import.meta.env.VITE_EMAILJS_TEMPLATE_COMPLAINTS as string;

emailjs.init({ publicKey: PUBLIC_KEY });

export interface ContactParams {
  from_name: string;
  company: string;
  phone: string;
  from_email: string;
  service: string;
  location: string;
  urgency: string;
  details: string;
  message: string;
}

export interface ComplaintParams {
  from_name: string;
  organization: string;
  from_email: string;
  phone: string;
  type: string;
  service_area: string;
  reference: string;
  description: string;
  contact_method: string;
}

export function sendContactForm(params: ContactParams) {
  return emailjs.send(SERVICE_ID, TPL_CONTACT, params as Record<string, unknown>);
}

export function sendComplaintForm(params: ComplaintParams) {
  return emailjs.send(SERVICE_ID, TPL_COMPLAINTS, params as Record<string, unknown>);
}
