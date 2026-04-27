// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.hallsroofingexeter.co.uk',
  trailingSlash: 'never',
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        lucide: [
          'phone', 'map-pin', 'chevron-right', 'star', 'shield-check',
          'check-circle', 'clock', 'menu', 'x', 'alert-triangle',
          'wrench', 'home', 'layers', 'flame', 'droplets', 'mail',
          'arrow-left', 'arrow-right', 'chevron-down', 'award',
        ],
      },
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
      serialize(item) {
        // Set higher priorities for important pages
        if (item.url === 'https://www.hallsroofingexeter.co.uk/') {
          item.priority = 1.0
          item.changefreq = 'weekly'
        } else if (
          item.url.includes('/services') && !item.url.endsWith('/services')
        ) {
          item.priority = 0.8
        } else if (item.url === 'https://www.hallsroofingexeter.co.uk/services') {
          item.priority = 0.9
        } else if (item.url === 'https://www.hallsroofingexeter.co.uk/areas') {
          item.priority = 0.9
        } else if (item.url === 'https://www.hallsroofingexeter.co.uk/emergency') {
          item.priority = 0.9
        } else if (item.url.includes('/areas/')) {
          item.priority = 0.7
        } else if (
          item.url.includes('/privacy') ||
          item.url.includes('/terms')
        ) {
          item.priority = 0.3
        }
        return item
      },
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
})
