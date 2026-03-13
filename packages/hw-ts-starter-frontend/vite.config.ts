import react from "@vitejs/plugin-react";
import os from "node:os";
import { defineConfig, loadEnv, type ServerOptions } from "vite";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const server: ServerOptions = {};
  if (command === "serve") {
    const env = loadEnv(mode, process.cwd());
    const host = env["API_HOST"] || "localhost";
    const port = env["API_PORT"] || 3000;
    server.proxy = {
      "/api": {
        target: `http://${host}:${port}`,
        secure: false,
        changeOrigin: true,
        ws: true,
      },
    };
  }
  return {
    plugins: [react()],
    cacheDir: os.tmpdir(),
    server,
  };
});
