export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
    componentIslands: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  extends: [
    'nuxt-seo-kit',
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://bytedream.top',
      siteName: 'JueJin | ByteDream',
      siteDescription: 'Yet Another Blog In JueJin Style By ByteDream',
      language: 'zh-CN',
      titleSeparator: '·',
      trailingSlash: true,
    },
    indexable: true,
    siteUrl: 'https://bytedream.top',
  },
  sitemap: {
    hostname: 'https://bytedream.top',
  },
  head: {
    ogTitleTemplate: '%s | ByteDream',
    link: [
      {
        rel: 'apple-touch-icon',
        type: 'img/x-icon',
        href: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
  ogImage: {
    colorScheme: 'dark',
    mask: '.screenshot-hidden',
    runtimeImages: true,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },
})
