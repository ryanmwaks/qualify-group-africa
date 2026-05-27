import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * Compress all image assets in the bundle using sharp.
 * - JPEG / JPG  → re-encoded at quality 80 (typically 30-40 % smaller)
 * - PNG logo    → converted to WebP at quality 82 (~96 % smaller)
 * - Other PNGs  → palette-mode PNG at quality 85
 *
 * Also injects a <link rel="preload"> for the logo into the built HTML.
 */
function imageOptimizePlugin(): Plugin {
  let base = "/";

  return {
    name: "sharp-image-optimize",
    enforce: "post",

    configResolved(config) {
      base = config.base;
    },

    async generateBundle(_, bundle) {
      const sharp = (await import("sharp")).default;

      // ── Step 1: optimise / convert images ──────────────────────────────
      let logoWebpFileName = "";

      for (const [key, chunk] of Object.entries(bundle)) {
        if (chunk.type !== "asset") continue;
        const name = chunk.name ?? chunk.fileName;
        const ext = name.split(".").pop()?.toLowerCase();

        if (!["jpg", "jpeg", "png"].includes(ext ?? "")) continue;

        const src = Buffer.from(chunk.source as Buffer | Uint8Array);

        if (ext === "jpg" || ext === "jpeg") {
          chunk.source = await sharp(src)
            .jpeg({ quality: 80, mozjpeg: true })
            .toBuffer();
        } else if (ext === "png" && name.includes("qualify-logo")) {
          const webpBuf = await sharp(src)
            .webp({ quality: 82, effort: 6 })
            .toBuffer();
          const newFileName = chunk.fileName.replace(/\.png$/, ".webp");

          // Rename in bundle
          chunk.fileName = newFileName;
          chunk.source = webpBuf;
          delete bundle[key];
          (bundle as Record<string, typeof chunk>)[newFileName] = chunk;

          logoWebpFileName = newFileName; // e.g. "assets/qualify-logo-abc123.webp"
        } else if (ext === "png") {
          chunk.source = await sharp(src)
            .png({ quality: 85, compressionLevel: 9, palette: true })
            .toBuffer();
        }
      }

      // ── Step 2: rewrite JS chunks that referenced the old PNG ──────────
      if (logoWebpFileName) {
        const oldBasename = logoWebpFileName
          .replace(/\.webp$/, ".png")
          .split("/")
          .pop()!;
        const newBasename = logoWebpFileName.split("/").pop()!;

        for (const chunk of Object.values(bundle)) {
          if (chunk.type !== "chunk") continue;
          chunk.code = chunk.code.replaceAll(oldBasename, newBasename);
        }
      }

      // ── Step 3: patch index.html inside the bundle ─────────────────────
      if (logoWebpFileName) {
        const href = (base + logoWebpFileName).replace(/\/+/g, "/");
        const preloadTag = `  <link rel="preload" as="image" type="image/webp" href="${href}" fetchpriority="high">`;

        for (const chunk of Object.values(bundle)) {
          if (
            chunk.type === "asset" &&
            (chunk.name === "index.html" || chunk.fileName === "index.html")
          ) {
            const html = chunk.source as string;
            if (!html.includes('rel="preload" as="image"')) {
              chunk.source = html.replace("</head>", `${preloadTag}\n  </head>`);
            }
          }
        }
      }
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
    imageOptimizePlugin(),
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
