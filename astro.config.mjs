// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { config } from "selo-components/config";

const deploy = import.meta.env.PROD
  ? { site: `https://${config.hostname}/` }
  : { site: "http://localhost/" };

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en", "gl", ],
    defaultLocale: "es",
    routing: {
        prefixDefaultLocale: true
    }
  },
  ...deploy,
  integrations: [mdx(), sitemap()],
});
