export interface LocalizedStrings {
    header: {
        signUp: string;
        menu: {
            about: string;
            skills: string;
            pricing: string;
            articles: string;
        };
    };
    footer: {
        contact: {
            label: string;
            name: string;
        };
        channel: {
            label: string;
            name: string;
        };
    };
    aboutPage: {
        name: string;
        job: string;
        aboutTitle: string;
        aboutDescription: string;
        facts: [{
            title: string,
            description: string
        }];
        requestsTitle: string;
        problem: string;
        resolution: string;
        requests: [{
            problem: string,
            resolution: string
        }];
    }
}