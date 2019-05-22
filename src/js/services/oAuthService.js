import axios from 'axios';

import { API } from './httpService';
import { getStoredRefreshToken } from './userService';

const AUTH_ENDPOINT = 'auth/token';

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

// the actual post request to the oauth url
export const postAuthRequest = ( params, data, headers ) => axios
    .post( API + AUTH_ENDPOINT + params, data, { headers } );

// refresh authToken
export const refreshAuthToken = ( resolve ) => {
    const headers = getOAuthHeader();
    const refreshToken = getStoredRefreshToken();
    const params = `?grant_type=${ GRANT_TYPES.REFRESH_TOKEN }&refresh_token=${ refreshToken }`;
    const data = {
        grant_type: GRANT_TYPES.REFRESH_TOKEN,
        refresh_token: refreshToken,
    };
    postAuthRequest( params, data, headers ).then( () => resolve() );
};
