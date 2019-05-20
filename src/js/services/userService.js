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
        grant_type: GRANT_TYPES.AUTH_CODE,
        username,
        password,
    };
    const header = getOAuthHeader();
    return postAuthRequest( '', data, header )
        .then( ( res ) => {
            setStoredAuthToken( res.data.access_token );
            setStoredRefreshToken( res.data.refresh_token );
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
    // TODO get / select / hardcode alexa client secrets here
    const header = getOAuthHeader( clientId );
    // after this backend call, the page will redirect automatically to aws/amazon
    return postAuthRequest( '', data, header )
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
