import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ReturnToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 480);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label="Return to top"
      title="Return to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-40 right-4 z-50 grid size-11 place-items-center rounded-full border border-white/25 bg-[var(--color-navy)] text-white shadow-[0_8px_24px_rgba(6,43,79,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 lg:bottom-24 lg:right-7 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
