
const isDev = process.env.NODE_ENV !== 'production'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
 // generate: {
  //  dir: '../skyalp-fe',
   // fallback: 'error.html'

  //},
  server: {
    host: "0.0.0.0"
  },
  head: {
    title: "skyalp-storefront",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "https://cdn.napolyon.com/skyalp/images/favicon.png" }, // Update favicon.ico path
      {
        rel: "stylesheet",
        href: "https://fonts.cdnfonts.com/css/circular-std",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/main.scss"],
  styleResources: {
    scss: ["~assets/scss/_color.scss"],
  },

  // bootstrapVue:{
  //   bootstrapCSS:false,
  //   bootstrapVueCSS:false,
  //   componentPlugins:['CarouselPlugin']
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vue-lazyload.js",
      ssr: false,
    },
    {
      src: "~/plugins/resize.js",
    },
    {
      src: "~/plugins/vue-ssr-carousel.js",
    },
    {
      src: "~/plugins/vueper-slider.js",
    },
    {
      src: "~/plugins/vue-awesome-swiper.js",
      ssr: false,
    },
    {
      src: "~/plugins/vue-future-slider.js"

    },
    {
      src: "~/plugins/vue-slick-carousel.js"

    },
    {
     src: "~/plugins/apex-chart.js",
     mode:'client'

    },
    "~/plugins/bus.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["vue-ssr-carousel/nuxt", '@nuxtjs/device','@nuxtjs/google-analytics'],
  device: {
    refreshOnResize: true
  },
  googleAnalytics: {
    id: 'G-TFVKHG2XMX', // Google Analytics izleme kimliğinizi buraya ekleyin
  },
  router: {
    linkActiveClass: "active-link",
    linkExactActiveClass: "exact-active-link",
  },
  env: {
    baseImgUrl: 'https://cdn.napolyon.com/skyalp/images/'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-i18n", "bootstrap-vue/nuxt",'@nuxtjs/axios'],
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "content-en.js",
      },
      {
        code: "tr",
        iso: "tr-TR",
        file: "content-tr.js",
      },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    encodePaths: false,
    parsePages: false,
    detectBrowserLanguage: false,

    pages: {
      "career/index": {
        en: "/career",
        tr: "/kariyer",
      },
      "investments/index": {
        en: "/investments",
        tr: "/yatirimlar",
      },
      "our-companies/index": {
        en:"/our-companies",
        tr: "/sirketlerimiz",
      },
      "investor-relations/index": {
        en: "/investor-relations",
        tr: "/yatirimci-iliskileri",
      },
      "investor-relations-content/_index": {
        en: "/investor-relations-content/:name",
        tr: "/yatirimci-iliskileri-detay/:name",
      },
      "announcement/index": {
        en: "/announcements",
        tr: "/duyurular",
      },
      "kvkkPolicy/index": {
        en: "/iletisim-ve-bilgi-talep-formlarinda-islenen-kisisel-verilere-yonelik-aydinlatma-metni",
        tr: "/iletisim-ve-bilgi-talep-formlarinda-islenen-kisisel-verilere-yonelik-aydinlatma-metni",
      },
      "cookieSettings/index": {
        en: "/cookie-settings",
        tr: "/cerez-ayarlari",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', {
          loose: true
        }]
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        // minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 20,
        maxInitialRequests: 20,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      }
    },
  },
};

