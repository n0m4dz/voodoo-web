// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    },
    modules: ['@pinia/nuxt', '@formkit/auto-animate'],
    css: [
        '~/assets/vendor/css/bootstrap.min.css',
        '~/assets/vendor/css/splide.min.css',
        '~/assets/vendor/css/slimselect.css',
        '~/assets/vendor/css/plyr.css',
        '~/assets/vendor/css/photoswipe.css',
        '~/assets/vendor/webfont/tabler-icons.min.css',
        '~/assets/vendor/css/main.css',
        '~/assets/scss/style.scss'
    ],
    app: {
        head: {
            title: "Voodoo TV",
            meta: [],
            script: [
                {
                    src: '/js/bootstrap.bundle.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/js/splide.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/js/slimselect.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/js/smooth-scrollbar.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/js/plyr.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/js/photoswipe.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/js/photoswipe-ui-default.min.js',
                    type: 'text/javascript',
                    body: true
                },
                {
                    src: '/js/main.js',
                    type: 'text/javascript',
                    body: true
                },
            ],
        },
    },
})