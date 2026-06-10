import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE ?? "/",
    plugins: [
      TanStackRouterVite({ target: "react", autoCodeSplitting: false }),
      react(),
      tailwindcss(),
      tsconfigPaths(),
    ],
    server: { port: 8080 },
  };
});
