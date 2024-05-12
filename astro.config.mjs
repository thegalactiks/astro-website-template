import galactiks, { integrationsPreset } from "@galactiks/astro-integration";
import tailwind from "@astrojs/tailwind";

import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig( /** @type {import('astro').AstroUserConfig} */{
  integrations: [integrationsPreset(), galactiks(), react(), tailwind({
    applyBaseStyles: false,
    configFile: "./tailwind.config.cjs"
  })]
});
