import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  site: "https://tagihan.digital",
  adapter: node({
    mode: "standalone",
  }),
});
