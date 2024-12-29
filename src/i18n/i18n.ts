import LocalizedStrings from 'react-localization';
import { en } from './translations/en';
import { ru } from './translations/ru';

export const strings = new LocalizedStrings({
    en,
    ru
});

// Set default language to English if browser language is not supported
const browserLang = navigator.language.split('-')[0];
strings.setLanguage(strings.getAvailableLanguages().includes(browserLang) ? browserLang : 'en');

export type { LocalizedStrings };
