import galactiks, { integrationsPreset } from "@galactiks/astro-integration";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ {
  integrations: [integrationsPreset(), galactiks(), tailwind()],
};
