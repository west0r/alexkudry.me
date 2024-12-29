import { AboutPage } from "../pages/about";
import { LibraryPage } from "../pages/library";
import { SkillsPage } from "../pages/skills";
import { PricingPage } from "../pages/pricing";
import { strings } from "../i18n/i18n";

export const ROUTES = {
    ABOUT: {
        path: '/',
        title: strings.header.menu.about,
        component: AboutPage
    },
    SKILLS: {
        path: '/skills',
        title: strings.header.menu.skills,
        component: SkillsPage
    },
    PRICING: {
        path: '/pricing',
        title: strings.header.menu.pricing,
        component: PricingPage
    },
    LIBRARY: {
        path: '/library',
        title: strings.header.menu.articles,
        component: LibraryPage
    }
} as const;