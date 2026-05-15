import type { ReactNode } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title={title} />
      <article className="container-page py-16 max-w-3xl prose prose-slate prose-headings:font-display prose-headings:text-navy prose-h2:text-2xl prose-h2:mt-8 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
        {children}
      </article>
    </SiteLayout>
  );
}
