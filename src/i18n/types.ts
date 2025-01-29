export interface LocalizedStrings {
    header: {
        signUp: string
        menu: {
            about: string
            skills: string
            pricing: string
            articles: string
        }
    }
    footer: {
        contact: {
            label: string
            name: string
        }
        channel: {
            label: string
            name: string
        }
    }
    aboutPage: {
        name: string
        job: string
        aboutTitle: string
        aboutDescription: string
        facts: [{
            title: string
            description: string
        }]
        requestsTitle: string
        problem: string
        resolution: string
        requests: [{
            problem: string
            resolution: string
        }]
    },
    libraryPage: {
        talksHeader: string
        articlesHeader: string
        talks: [{
            "title": string
            "source": string
            "url": string
        }]
        articles: [{
            "title": string
            "source": string
            "url": string
        }]
    },
    pricingPage: {
        title: string
        individualTitle: string
        companyTitle: string
        individualPrices: [{
            title: string
            price: string
            subtitle?: string
        }]
        companyPrices: [{
            title: string
            price: string
            subtitle?: string
        }]
    }
}