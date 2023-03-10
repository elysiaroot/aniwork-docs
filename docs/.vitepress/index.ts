// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

export default {
    ...DefaultTheme,
    setup() {
        const { lang } = useData()
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`
            }
        })
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
}