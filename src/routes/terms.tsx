import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms of Use | Qualify Group Africa" }, { name: "description", content: "Terms governing the use of the Qualify Group Africa Ltd website." }] }),
  component: () => (
    <LegalPage title="Terms of Use">
      <p>By using this website, you agree to the following terms.</p>
      <h2>Use of content</h2>
      <p>Content is provided for general information. It does not constitute professional advice for specific assignments.</p>
      <h2>Intellectual property</h2>
      <p>All content, branding and the QMS Platform product are the property of QUALIFY Group Africa Ltd.</p>
      <h2>Liability</h2>
      <p>We make no warranties regarding completeness or accuracy of website content.</p>
    </LegalPage>
  ),
});
