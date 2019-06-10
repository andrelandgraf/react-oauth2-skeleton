import axios from 'axios';

import { API, isNetworkError } from './httpService';
import { getStoredRefreshToken, getStoredAuthToken } from './userService';
import { throwServerNotReachableError } from '../utilities/errorHandler/errorHandler';

const AUTHENTICATE_ENDPOINT = 'auth/token';
const AUTHORIZE_ENDPOINT = 'auth/authorize';

export const GRANT_TYPES = {
    AUTH_CODE: 'authorization_code',
    REFRESH_TOKEN: 'refresh_token',
    PASSWORD: 'password',
};

// construct the oAuth header
export const getOAuthHeader = ( clientID, clientSecret ) => {
    if ( !clientID || !clientSecret ) {
        throw Error( 'oauth credientiels undefined' );
    }
    const credentials = Buffer.from( `${ clientID }:${ clientSecret }` ).toString( 'base64' );
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${ credentials }`,
    };
};

export const getAuthenticatedHeader = () => ( {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${ getStoredAuthToken() }`,
} );

// the actual post request to the oauth url
export const postAuthRequest = ( data, headers ) => axios
    .post( API + AUTHENTICATE_ENDPOINT, data, { headers } )
    .catch( err => isNetworkError( err ) && throwServerNotReachableError() );

export const getAuthorizeCode = ( clientId, state ) => {
    const params = `?client_id=${ clientId }&response_type=code&state=${ state }`;
    return fetch( `${ API }${ AUTHORIZE_ENDPOINT }${ params }`, { headers: getAuthenticatedHeader() } );
};

// refresh authToken
export const refreshAuthToken = ( resolve ) => {
    const headers = getOAuthHeader();
    const refreshToken = getStoredRefreshToken();
    const params = `?grant_type=${ GRANT_TYPES.REFRESH_TOKEN }&refresh_token=${ refreshToken }`;
    const data = {
        grant_type: GRANT_TYPES.REFRESH_TOKEN,
        refresh_token: refreshToken,
    };
    postAuthRequest( params, data, headers )
        .then( () => resolve() )
        .catch( err => isNetworkError( err ) && throwServerNotReachableError() );
};
