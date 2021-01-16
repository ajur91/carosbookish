export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: `Caro's Bookish`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Abel&family=Cinzel+Decorative:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Raleway:wght@400;700&family=Redressed&display=swap'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: 'plugins/owl.js', ssr: false},
    '~/plugins/disqus',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/fontawesome', {
      component: 'fa', //customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faStar', 'faGlobe']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: ['faGoodreadsG', 'faTwitter', 'faInstagram', 'faPinterestP', 'faFacebookF', 'faApple', 'faAmazon']
          },
          {set: '@fortawesome/free-regular-svg-icons',
          icons: ['faLightbulb']
          },
      ]
   }]
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
