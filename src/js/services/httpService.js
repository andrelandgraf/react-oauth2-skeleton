import axios from 'axios';

import { refreshAuthToken } from './oAuthService';
import { getStoredAuthToken } from './userService';

export const API = 'http://foodoo-backend-api/v1/';

function getHeader() {
    return {
        accept: 'application/json',
        authorization: `Bearer ${ getStoredAuthToken() }`,
    };
}

function postHeader() {
    return {
        'content-type': 'application/json',
        authorization: `Bearer ${ getStoredAuthToken() }`,
    };
}

export const postRequest = ( endpoint, data ) => {
    axios
        .post( API + endpoint, data, { headers: postHeader( getStoredAuthToken() ) } )
        .then( ( res ) => {
            if ( res === 401 ) {
                return refreshAuthToken(
                    () => postRequest( endpoint, data, getStoredAuthToken() ),
                );
            }
            return res.data;
        } )
        .catch( ( err ) => {
            // eslint-disable-next-line no-console
            console.log( err.data );
            return err.response.data.code;
        } );
};

export const getRequest = ( endpoint, authToken ) => axios
    .get( API + endpoint, { headers: getHeader( authToken ) } )
    .then( res => res.data ).catch( ( err ) => {
    // eslint-disable-next-line no-console
        console.log( err.response.data );
        return err.response.data.code;
    } );
