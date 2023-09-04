import moons, { integrationsPreset } from "@withmoons/astro-integration";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ {
  integrations: [integrationsPreset(), moons(), tailwind()],
};
