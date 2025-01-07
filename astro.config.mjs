// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: 'https://d3d5s1c01c46w3.cloudfront.net/', // TODO : To Replace
    integrations: [icon(), sitemap()]
});