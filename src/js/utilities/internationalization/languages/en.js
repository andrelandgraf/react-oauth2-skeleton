// translations
const enData = {
    translation: {
        APP_NAME: 'React App',
        HOME: 'Home',
        MY_PROFILE: 'My Profile',
        HOME_WELCOME: 'Welcome at $t(APP_NAME), {{name}}!',
        PROFILE_TITLE: 'Your Personal Profile',
        USERNAME: 'Username',
        USERNAME_WARNING: '$t(USERNAME) must be longer than 2 characters!',
        PASSWORD: 'Password',
        PASSWORD_WARNING: '$t(PASSWORD) must be set!',
        PREFERENCES: 'Preferences',
        LANGUAGES: 'Languages',
        LANGUAGE: '$t(LANGUAGES)',
        REGISTRATION: 'Registration',
        REGISTER: 'Register',
        LOGIN: 'Login',
        LOGOUT: 'Logout',
        ERROR: 'Error',
        WARNING: 'Warning',
        SUCCESS: 'Success',
        INFO: 'Info',
        WRONG_CREDENTIALS_ERR: '$t(ERROR), wrong $t(USERNAME) or password, please try again.',
        NOT_AUTHORIZED_ERR: '$t(ERROR), you are not authorized to access this page.',
        SERVER_NOT_REACHABLE_ERR: '$t(ERROR), unable to connect to server, please check your internet connection.',
        USERNAME_ALREADY_TAKEN_ERR: '$t(ERROR), the username is already in use, please pick another one.',
    },
};

/** following translations overide enData and default back to enData if key is not found */
const enauData = {
    translation: {
        APP_NAME: 'React App',
    },
};

const encaData = {
    translation: {
        APP_NAME: 'React App',
    },
};

const engbData = {
    translation: {
        APP_NAME: 'React App',
    },
};

const eninData = {
    translation: {
        APP_NAME: 'React App',
    },
};

const enusData = {
    translation: {
        APP_NAME: 'React App',
    },
};

export {
    enData,
    enauData,
    encaData,
    engbData,
    eninData,
    enusData,
};
