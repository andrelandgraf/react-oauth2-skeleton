import i18n from 'i18next';

import { KEYS } from './internationalization/internationalization';

/*
 * Error Messages should be consistently (re-)used accorss an application
 */
export class ServerNotReachableError extends Error {
    constructor( ...args ) {
        super( ...args );
        Error.captureStackTrace( this, ServerNotReachableError );
    }
}

export class NotAuthorizedError extends Error {
    constructor( ...args ) {
        super( ...args );
        Error.captureStackTrace( this, NotAuthorizedError );
    }
}

export class WrongCredentialsError extends Error {
    constructor( ...args ) {
        super( ...args );
        Error.captureStackTrace( this, WrongCredentialsError );
    }
}

export const throwServerNotReachableError = () => {
    const msg = i18n.t( KEYS.SERVER_NOT_REACHABLE_ERR );
    throw new ServerNotReachableError( msg );
};

export const throwNotAuthorizedError = () => {
    const msg = i18n.t( KEYS.NOT_AUTHORIZED_ERR );
    throw new ServerNotReachableError( msg );
};

export const throwWrongCredentialsError = () => {
    const msg = i18n.t( KEYS.WRONG_CREDENTIALS_ERR );
    throw new ServerNotReachableError( msg );
};

export const throwUsernameAlreadyTaken = () => {
    throw new Error( 'The username is already in use, please pick another username.' );
};
