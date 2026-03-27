import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimisation des assets
    assetsInlineLimit: 4096,
    // Chunk splitting pour un chargement optimal
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          animations: ["framer-motion"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-accordion", "@radix-ui/react-tooltip"],
        },
        assetFileNames: (assetInfo) => {
          const extType = (assetInfo.name ?? "").split(".").at(1);
          if (/png|jpe?g|gif|svg|webp|ico/i.test(extType || "")) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|ttf|otf|eot/i.test(extType || "")) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
    // Rapport de taille des bundles
    reportCompressedSize: true,
    // Seuil d'avertissement pour les chunks
    chunkSizeWarningLimit: 500,
  },
}));
