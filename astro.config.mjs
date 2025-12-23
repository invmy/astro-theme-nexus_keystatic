// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { passthroughImageService } from 'astro/config';

import markdoc from '@astrojs/markdoc';
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-theme-nexus.pages.dev/',
  base: '/',
  i18n: {
    locales: ["es", "en", "pt-br", "zh-cn"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    markdoc({ allowHTML: true, ignoreIndentation: true }),
    icon(),
    sitemap(),
    partytown(),
    pagefind(),
  ],
  image: {
    service: passthroughImageService(), // if you want to use your own image service
  },
  prefetch: true,
});