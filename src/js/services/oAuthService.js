import axios from 'axios';

import { API } from './httpService';
import { getStoredRefreshToken } from './userService';

const AUTH_ENDPOINT = 'oauth/v2';
export const GRANT_TYPES = {
    AUTH_CODE: 'authorization_code',
    REFRESH_TOKEN: 'refresh_token',
    PASSWORD: 'password',
};

// construct the oAuth header
export const getOAuthHeader = () => {
    const clientID = process.env.OAUTH_CLIENT_KEY_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET_KEY;
    if ( !clientID || !clientSecret ) {
        throw Error( 'oauth credientiels undefined' );
    }
    const credentials = Buffer.from( `${ clientID }:${ clientSecret }` ).toString( 'base64' );
    return {
        'content-type': 'application/x-www-form-urlencoded',
        authorization: `Basic ${ credentials }`,
    };
};

// the actual post request to the oauth url
export const postAuthRequest = ( params, data, headers ) => axios
    .post( API + AUTH_ENDPOINT + params, data, { headers } );

// first type retrieval of auth token
export const getAuthToken = ( authCode ) => {
    // afer getting redirected back to our page,
    // we can access the authCode get-parameter and call the authentification
    // const authCode = req.query.code;
    // getAuthToken(authCode);
    const headers = getOAuthHeader();
    const params = `?grant_type=${ GRANT_TYPES.AUTH_CODE }&code=${ authCode }&redirect_uri=http://localhost:3000/`;
    const data = {
        grant_type: GRANT_TYPES.AUTH_CODE,
        code: authCode,
        redirect_uri: 'http://localhost:3000/',
    };
    postAuthRequest( params, data, headers );
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
    postAuthRequest( params, data, headers ).then( () => resolve() );
};
