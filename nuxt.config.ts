// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true }
// })
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    'nuxt-anchorscroll',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      'page:transition:finish',
    ],
  },
  css: [
    './assets/main.css',      
  ]

  //  mdc: {
  //   highlight: {
  //     theme: 'github-dark',
  //     langs: ['ts', 'vue'],
  //     wrapperStyle: true
  //   }
  // }
})
