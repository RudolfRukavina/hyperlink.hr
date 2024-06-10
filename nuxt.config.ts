// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 app: {
    head: {
      charset: 'utf-8',
     viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-con', href: './public/favicon.ico'}],
    },
  },
    robots: {
    mergeWithRobotsTxtPath: './public/_robots.txt'
  },
    ssr: false,
    modules: [
    '@nuxtjs/tailwindcss',
      'nuxt-swiper',
      '@nuxtjs/sitemap',
      '@nuxtjs/seo',
      'nuxt-simple-robots',
      'nuxt-og-image',
  ],
      sitemap: {
    path: '/sitemap.xml', // The path where the sitemap will be generated
    hostname: 'https://poduke.vercel.app/', // Your website's URL
    cacheTime: 1000 * 60 * 15, // How long to cache the sitemap in milliseconds (optional)
    gzip: true, // Enable gzip compression for the generated sitemap (optional)
    exclude: [], // Array of URLs to exclude from the sitemap (optional)
  },
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    }
})
