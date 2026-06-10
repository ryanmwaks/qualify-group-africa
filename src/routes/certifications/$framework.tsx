import { createFileRoute, notFound } from "@tanstack/react-router";
import { CertificationFrameworkPage } from "@/components/site/CertificationFrameworkPage";
import { certificationFrameworkBySlug } from "@/data/certification-frameworks";

export const Route = createFileRoute("/certifications/$framework")({
  loader: ({ params }) => certificationFrameworkBySlug[params.framework] ?? notFound(),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.code} Readiness | QUALIFY Group Africa` },
      { name: "description", content: loaderData.summary },
    ],
  }),
  component: FrameworkRoute,
});

function FrameworkRoute() {
  const framework = Route.useLoaderData();
  return <CertificationFrameworkPage framework={framework} />;
}
