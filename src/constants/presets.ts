import {strings} from "../i18n/i18n.ts";
import {LINKS} from "./strings.ts";

export const presets = {
    calendlySignUp: {
        text: strings.header.signUp,
        onClick: () => window.open(LINKS.CALENDLY)
    }
} as const;