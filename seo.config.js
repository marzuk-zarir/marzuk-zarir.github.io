const seo = {
    defaultSeo: {
        title: 'Marzuk Zarir - Fullstack Developer',
        description:
            'Hey, I am a professional fullstack developer who loves to build things for the web with 100% client satisfaction.',
        canonical: 'https://marzuk-zarir.github.io',
        themeColor: '#3b82f6',
        openGraph: {
            title: 'Marzuk Zarir - Fullstack Developer',
            description:
                'Hey, I am a professional fullstack developer who loves to build things for the web with 100% client satisfaction.',
            url: 'https://marzuk-zarir.github.io',
            type: 'profile',
            profile: {
                firstName: 'Marzuk',
                lastName: 'Zarir',
                username: 'marzuk-zarir',
                gender: 'male'
            },
            images: [
                {
                    url: 'https://marzuk-zarir.github.io/assets/marzuk-zarir.jpg',
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
            url: 'https://marzuk-zarir.github.io',
            sameAs: [
                'https://facebook.com/marzukzarir',
                'https://instagram.com/marzuk._.zarir',
                'https://twitter.com/marzukzarir',
                'https://linkedin.com/in/marzuk-zarir'
            ]
        },
        webpageJsonLd: {
            description: 'What does the fox say?',
            id: 'https://marzuk-zarir.github.io/#home',
            lastReviewed: new Date().toISOString(),
            reviewedBy: {
                type: 'Person',
                name: 'Marzuk Zarir'
            }
        }
    }
}

export default seo
