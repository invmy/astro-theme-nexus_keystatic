// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { passthroughImageService } from 'astro/config';

import markdoc from '@astrojs/markdoc';
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import react from "@astrojs/react";
import keystatic from '@keystatic/astro'

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
    optimizeDeps: {
      include: ["lodash-es", "lodash"],
    },
    ssr: {
      noExternal: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  integrations: [
    markdoc({ allowHTML: true, ignoreIndentation: true }),
    react(),
    icon(),
    sitemap(),
    partytown(),
    pagefind(),
    keystatic(),
  ],
  image: {
    service: passthroughImageService(), // if you want to use your own image service
  },
  prefetch: true,
});