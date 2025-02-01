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
        requestsTitle: string
        problem: string
        resolution: string
    },
    libraryPage: {
        talksHeader: string
        articlesHeader: string
        artifactsHeader: string
    },
    pricingPage: {
        title: string
        individualTitle: string
        companyTitle: string
    },
    skillsPage: {
        skillsHeader: string
        educationHeader: string
        coursesHeader: string
    }
    content: {
        facts: [{
            title: string
            description: string
        }]
        requests: [{
            problem: string
            resolution: string
        }]
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
        artifacts: [{
            "title": string
            "source": string
            "url": string
        }]
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
        skills: [{
            title: string
            description: string
        }]
        educations: [{
            school: string
            name: string
            date: string
            url?: string
        }]
        courses: [{
            school: string
            name: string
            date: string
            url?: string
        }]
    }
}