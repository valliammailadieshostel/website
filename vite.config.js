import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The site is served from https://valliammailadieshostel.github.io/website/
  base: "/website/",
});
