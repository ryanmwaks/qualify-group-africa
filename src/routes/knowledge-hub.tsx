import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/knowledge-hub")({
  component: () => <Outlet />,
});
