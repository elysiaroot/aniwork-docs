export default {
    title: 'Aniwork Docs',
    description: 'Aniwork Network Documents',
    lastUpdated: true,
    locales: {
        root: {
            label: '한국어',
            lang: 'ko'
        },
        // ja: {
        //     label: '日本語',
        //     lang: 'ja', // optional, will be added  as `lang` attribute on `html` tag
        //     link: '/ja/'
        // },
        // en: {
        //     label: 'English',
        //     lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
        //     link: '/en/'
        // }
    },
    themeConfig: {
        sidebar: [
            {
                text: '애니워크 시작하기',
                items: [
                    { text: '계정생성', link: '/signup' },
                    { text: '프로필 변경', link: '/edit-profile' }
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/elysiaroot/aniwork-docs/edit/main/docs/:path',
            text: '깃허브에서 이 페이지를 수정할래요'
        },
        footer: {
            message: 'Mastodon is a trademark of Mastodon GmbH.',
            copyright: '© Elysia Root L.C.'
        }
    }
}