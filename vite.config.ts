import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default {
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants/index"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
    port: 3000,
    host: "0.0.0.0",
  },
  preview: {
    open: true,
    port: 3000,
    host: "0.0.0.0",
  },
};
