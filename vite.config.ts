import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/qualify-group-africa/",
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: false }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: { port: 8080 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["@tanstack/react-router", "@tanstack/react-query"],
          ui: ["lucide-react", "clsx", "tailwind-merge"],
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
