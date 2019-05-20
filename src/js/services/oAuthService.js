import axios from 'axios';

import { API } from './httpService';
import { getStoredRefreshToken } from './userService';

const AUTH_ENDPOINT = 'oauth/token';
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

// probably not needed, as alexa will do this for herself and we use grant_type password for react
// first type retrieval of auth token
// const getAuthToken = ( authCode ) => {
//     // afer getting redirected back to our page,
//     // we can access the authCode get-parameter and call the authentification
//     // const authCode = req.query.code;
//     // getAuthToken(authCode);
//     const headers = getOAuthHeader();
//     const params = `?grant_type=${ GRANT_TYPES.AUTH_CODE }&code=${ authCode }&redirect_uri=http://localhost:3000/`;
//     const data = {
//         grant_type: GRANT_TYPES.AUTH_CODE,
//         code: authCode,
//         redirect_uri: 'http://localhost:3000/',
//     };
//     postAuthRequest( params, data, headers );
// };

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
