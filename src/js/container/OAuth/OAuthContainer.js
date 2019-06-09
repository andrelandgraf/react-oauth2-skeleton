import React from 'react';

import { oAuthUser } from '../../services/userService';

import LoginContainer from '../Login/LoginContainer';

class OAuthContainer extends React.Component {
    // decorates LoginContainer.handleSubmit function
    handleSubmit = async ( username, password ) => {
        // see: https://developer.amazon.com/de/docs/account-linking/configure-authorization-code-grant.html
        // client_id, response_type, scope, redirect_uri
        const { search } = window.location;
        const urlParams = new URLSearchParams( search );
        const clientId = urlParams.get( 'client_id' );
        const state = urlParams.get( 'state' );
        const redirectUri = urlParams.get( 'redirect_uri' );
        if ( !clientId ) {
            // eslint-disable-next-line no-alert
            alert( 'bad query string, check query params' );
            return false;
        }
        console.log( 'state', state );
        console.log( 'redirect url', redirectUri );
        oAuthUser( username, password, clientId )
            .then( ( user ) => {
                window.location = `${ redirectUri }?code=${ user.username }`;
            } );
        return true;
    }

    render() {
        return (
            <LoginContainer
                pageName="Third party service authorization"
                actionName="authorize"
                onSubmit={this.handleSubmit}
            />
        );
    }
}

export default OAuthContainer;
