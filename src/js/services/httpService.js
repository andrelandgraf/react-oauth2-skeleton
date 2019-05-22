import axios from 'axios';

import Logger from '../utilities/Logger';
import { isDevelopment } from '../utilities/env';
import { refreshAuthToken } from './oAuthService';
import { getStoredAuthToken } from './userService';

const LoggingUtility = new Logger( 'userService.js' );

export const API = isDevelopment ? 'http://localhost:3333/' : 'http://foodoo-backend-api/v1/';

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

export const postRequest = ( endpoint, data ) => axios
    .post( API + endpoint, data, { headers: postHeader() } )
    .then( ( res ) => {
        if ( res === 401 ) {
            return refreshAuthToken(
                () => postRequest( endpoint, data, getStoredAuthToken() ),
            );
        }
        return res.data;
    } )
    .catch( ( err ) => {
        LoggingUtility.error( `Error in post request to entpoint ${ endpoint }`, err );
        throw Error( `${ err.response.data.code }:${ err.response.message }` );
    } );

export const getRequest = endpoint => axios
    .get( API + endpoint, { headers: getHeader( getStoredAuthToken() ) } )
    .then( res => res.data )
    .catch( ( err ) => {
        console.log( err );
        LoggingUtility.error( `Error in get request to entpoint ${ endpoint }`, err );
        throw Error( `${ err.response.data.code }:${ err.response.message }` );
    } );
