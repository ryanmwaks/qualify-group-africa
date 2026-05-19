import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

/** Inject a <link rel="preload"> for the hashed logo asset into the built HTML. */
function preloadLogoPlugin(): Plugin {
  let logoHref = "";
  return {
    name: "preload-qualify-logo",
    generateBundle(_, bundle) {
      for (const [, chunk] of Object.entries(bundle)) {
        if (chunk.type === "asset" && typeof chunk.name === "string" && chunk.name.includes("qualify-logo")) {
          logoHref = "/" + chunk.fileName;
        }
      }
    },
    transformIndexHtml(html) {
      if (!logoHref) return html;
      return html.replace(
        "</head>",
        `  <link rel="preload" as="image" href="${logoHref}" fetchpriority="high">\n  </head>`
      );
    },
  };
}

export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: false }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    preloadLogoPlugin(),
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
