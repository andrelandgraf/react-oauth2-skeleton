import i18n from 'i18next';

import { languageStrings } from './languages/index';

export const LOCALES = {
    ENGLISH_LOCALE: 'en',
    GERMAN_LOCALE: 'de',
};

export const KEYS = {
    APP_NAME: 'APP_NAME',
    HOME_WELCOME: 'HOME_WELCOME',
    PROFILE_TITLE: 'PROFILE_TITLE',
};

export const DEFAULT_LOCALE = LOCALES.ENGLISH_LOCALE;

export const getLocale = () => {
    const { locale } = window.localStorage;
    if ( !locale ) {
        return DEFAULT_LOCALE;
    }
    return locale;
};

// Gets the locale and initializes i18next.
const initLocalizationClient = async () => i18n.init( {
    lng: getLocale(),
    resources: languageStrings,
} );

export const setLocale = async ( locale ) => {
    window.localStorage.locale = locale;
    await i18n.changeLanguage( locale );
};

export const localizationClientt = initLocalizationClient();
