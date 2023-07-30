// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/style.css'
    ],
    modules: [
        '@nuxt/image',
        'nuxt-simple-sitemap',
        'nuxt-simple-robots',
        'nuxt-gtag'
    ],
    site: {
        url: 'https://illigirl.net/',
    },
    sitemap: {
        strictNuxtContentPaths: true,
        sitemaps: true,
    },
    gtag: {
        id: 'G-RC57C3F0DS'
    }
})
