// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project sites are served from /<repo-name>/, so the base path
// is only applied during the CI deploy build (see .github/workflows/deploy.yml).
// Locally (npm run dev / npm run build) it stays "/" so links work without ceremony.
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipiadenildo.github.io',
  base,
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
