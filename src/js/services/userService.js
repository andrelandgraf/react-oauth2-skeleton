import qs from 'qs';

import { GRANT_TYPES, getOAuthHeader, postAuthRequest } from './oAuthService';

const setStoredRefreshToken = ( refreshToken ) => {
    window.localStorage.refreshToken = refreshToken;
};

const setStoredAuthToken = ( authToken ) => {
    window.localStorage.authToken = authToken;
};

export const getStoredRefreshToken = () => window.localStorage.refreshToken;
export const getStoredAuthToken = () => window.localStorage.authToken;

export const logUserIn = ( username, password ) => {
    const data = {
        grant_type: GRANT_TYPES.PASSWORD,
        username,
        password,
    };
    const clientId = process.env.REACT_APP_OAUTH_CLIENT_KEY_ID;
    const clientSecret = process.env.REACT_APP_OAUTH_CLIENT_SECRET_KEY;
    const header = getOAuthHeader( clientId, clientSecret );
    return postAuthRequest( '', qs.stringify( data ), header )
        .then( ( res ) => {
            setStoredAuthToken( res.data.accessToken );
            setStoredRefreshToken( res.data.refreshToken );
            return res.data.user;
        } )
        .catch( ( err ) => {
            // eslint-disable-next-line no-console
            console.log( err );
        } );
};

export const oAuthUser = ( username, password, state, clientId, redirectUri ) => {
    const data = {
        grant_type: GRANT_TYPES.AUTH_CODE,
        username,
        password,
        state,
        // TODO where to add uri?
        redirect_uri: redirectUri,
    };
    if ( process.env.REACT_APP_OAUTH_ALEXA_CLIENT_KEY_ID !== clientId ) {
        throw Error( 'unsupported client id!' );
    }
    const clientSecret = process.env.REACT_APP_OAUTH_ALEXA_CLIENT_SECRET_KEY;
    const header = getOAuthHeader( clientId, clientSecret );
    // after this backend call, the page will redirect automatically to aws/amazon
    return postAuthRequest( '', qs.stringify( data ), header )
        .catch( ( err ) => {
            // eslint-disable-next-line no-console
            console.log( err );
        } );
};

export const logUserOut = () => {
    window.localStorage.removeItem( 'authToken' );
    window.localStorage.removeItem( 'refreshToken' );
};

export const isAuthenticated = () => !!getStoredAuthToken();
