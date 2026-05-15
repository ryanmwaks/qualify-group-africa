import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy | Qualify Group Africa" }, { name: "description", content: "How Qualify Group Africa Ltd collects, uses and protects personal data." }] }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>QUALIFY Group Africa Ltd respects your privacy and is committed to protecting personal data shared with us.</p>
      <h2>Information we collect</h2>
      <p>Contact details, company information and assignment details you submit through our forms or by email.</p>
      <h2>How we use information</h2>
      <p>To respond to inquiries, deliver services, send relevant updates and meet legal obligations.</p>
      <h2>Confidentiality</h2>
      <p>Client assignment details are handled confidentially and shared only with personnel involved in service delivery.</p>
      <h2>Your rights</h2>
      <p>You may request access, correction or deletion of your personal data by contacting info@qualifygroup.africa.</p>
    </LegalPage>
  ),
});
