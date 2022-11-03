const seo = {
    defaultSeo: {
        title: 'Marzuk Zarir - Fullstack Developer',
        description:
            'Hey, I am a self taught fullstack developer who loves to build things for the web with 100% client satisfaction.',
        themeColor: '#3b82f6',
        openGraph: {
            title: 'Marzuk Zarir - Fullstack Developer',
            description:
                'Hey, I am a self taught fullstack developer who loves to build things for the web with 100% client satisfaction.',
            url: 'https://www.marzuk-zarir.github.io',
            type: 'profile',
            profile: {
                firstName: 'Marzuk',
                lastName: 'Zarir',
                username: 'marzuk-zarir',
                gender: 'male'
            },
            images: [
                {
                    url: 'https://www.marzuk-zarir.github.io/marzuk-zarir.png',
                    width: 360,
                    height: 360,
                    alt: 'Marzuk Zarir'
                }
            ]
        }
    },
    jsonLd: {
        socialProfileJsonLd: {
            type: 'Person',
            name: 'Marzuk Zarir',
            url: 'https://www.marzuk-zarir.github.io',
            sameAs: [
                'https://www.facebook.com/marzukzarir',
                'https://www.instagram.com/marzuk._.zarir',
                'https://www.twitter.com/marzukzarir',
                'https://www.linkedin.com/in/marzuk-zarir'
            ]
        },
        webpageJsonLd: {
            description: 'What does the fox say?',
            id: 'https://www.marzuk-zarir.github.io/#home',
            lastReviewed: new Date().toISOString(),
            reviewedBy: {
                type: 'Person',
                name: 'Marzuk Zarir'
            }
        }
    }
}

export default seo
