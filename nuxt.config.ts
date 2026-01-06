// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

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

  routeRules: {
    '/': {
      prerender: true
    }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
})
