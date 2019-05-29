import i18n from 'i18next';

import { languageStrings } from './languages/index';

export const ENGLISH_LOCALE = 'en';
export const GERMAN_LOCALE = 'de';
export const DEFAULT_LOCALE = ENGLISH_LOCALE;

export const getLocale = () => {
    const { locale } = window.localStorage;
    if ( !locale ) {
        this.setLocale( DEFAULT_LOCALE );
        return DEFAULT_LOCALE;
    }
    return locale;
};

// Gets the locale and initializes i18next.
const initLocalizationClient = async () => i18n.init( {
    lng: getLocale(),
    resources: languageStrings,
} );

export const localizationClient = initLocalizationClient();

export const setLocale = async ( locale ) => {
    window.localStorage.locale = locale;
    await localizationClient.changeLanguage( locale );
};
