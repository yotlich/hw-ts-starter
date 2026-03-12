import react from "@vitejs/plugin-react";
import os from "node:os";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: os.tmpdir(),
});
