import {
    GRANT_TYPES, getOAuthHeader, postAuthRequest, getAuthToken,
} from './oAuthService';

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

export const oAuthUser = ( username, password ) => {
    const data = {
        grant_type: GRANT_TYPES.PASSWORD,
        username,
        password,
    };
    const header = getOAuthHeader();
    return postAuthRequest( '', data, header )
        .then( ( res ) => {
            getAuthToken( res.data.code );
        } )
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
