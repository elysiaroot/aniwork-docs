import { defineConfig } from 'vitepress'

export default defineConfig({
    // shared properties and other top-level stuff...

    locales: {
        root: {
            label: '한국어',
            lang: 'en'
        },
        ja: {
            label: '日本語',
            lang: 'ja', // optional, will be added  as `lang` attribute on `html` tag
            link: '/ja/'
        },
        en: {
            label: 'English',
            lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
            link: '/en/'
        }
    },
    themeConfig: {
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' }
                ]
            }
        ]
    }
})