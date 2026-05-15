import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy | Qualify Group Africa" }, { name: "description", content: "How this website uses cookies." }] }),
  component: () => (
    <LegalPage title="Cookie Policy">
      <p>This website uses cookies to improve your experience and analyze traffic.</p>
      <h2>Types of cookies</h2>
      <ul>
        <li>Essential cookies — required for the website to function.</li>
        <li>Analytics cookies — help us understand how visitors use the site.</li>
        <li>Preference cookies — remember settings you choose.</li>
      </ul>
      <h2>Managing cookies</h2>
      <p>You can control cookies through your browser settings.</p>
    </LegalPage>
  ),
});
