import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/accessibility")({
  head: () => ({ meta: [{ title: "Accessibility Statement | Qualify Group Africa" }, { name: "description", content: "Our commitment to making this website accessible to all users." }] }),
  component: () => (
    <LegalPage title="Accessibility Statement">
      <p>QUALIFY Group Africa Ltd is committed to making our website accessible to as many people as possible.</p>
      <h2>Our approach</h2>
      <ul>
        <li>Readable typography and strong color contrast</li>
        <li>Keyboard-friendly navigation</li>
        <li>Alt text on meaningful images</li>
        <li>Mobile-friendly responsive layouts</li>
      </ul>
      <h2>Feedback</h2>
      <p>If you experience accessibility issues, contact info@qualify.co.ke and we will address them promptly.</p>
    </LegalPage>
  ),
});
