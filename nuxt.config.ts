// https://nuxt.com/docs/api/configuration/nuxt-config
import skins from './app/data/skins.json'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    'nuxt-og-image',
    '@nuxtjs/sitemap'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://monoskins.toppi.me',
    name: 'monoskins'
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      routes: ['/', ...Object.keys(skins).map(id => `/skin/${id}`)]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  fonts: {
    families: [
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 500, 600, 700, 800],
        subsets: ['latin', 'cyrillic'],
        global: true
      }
    ]
  },

  icon: {
    clientBundle: {
      scan: {
        globInclude: ['app/components/**/*.vue', 'app/pages/**/*.vue'],
        globExclude: ['node_modules', 'dist']
      }
    },
    customCollections: [
      {
        prefix: 'icn',
        dir: 'app/assets/icons'
      }
    ]
  },

  ogImage: {
    zeroRuntime: true,
    fontSubsets: ['latin', 'cyrillic'],
    defaults: {
      width: 1200,
      height: 630,
      extension: 'png'
    }
  },

  sitemap: {
    zeroRuntime: true,
    urls: Object.keys(skins).map(id => `/skin/${id}`)
  }
})
