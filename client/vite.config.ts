import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // for dev
  server: {
    open: true,
    port: 4200,
  },
});
