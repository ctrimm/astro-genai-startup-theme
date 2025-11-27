import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/astro-genai-startup-theme',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    react(),
    sitemap(),
    mdx()
  ]
});
