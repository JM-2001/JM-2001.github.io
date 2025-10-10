import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  //site: "https://JM-2001.github.io",
  //base: "main",
  site: "https://www.JM2001.tech",

  integrations: [svelte()],
});