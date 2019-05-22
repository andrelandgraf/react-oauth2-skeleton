import React from 'react';
import PropTypes from 'prop-types';

import { oAuthUser } from '../../services/userService';

import LoginContainer from '../Login/LoginContainer';

class OAuthContainer extends React.Component {
    // decorates LoginContainer.handleSubmit function
    handleSubmit = async ( username, password ) => {
        const { location } = this.props;
        // see: https://developer.amazon.com/de/docs/account-linking/configure-authorization-code-grant.html
        // client_id, response_type, scope, redirect_uri
        if ( !location.query ) {
            // eslint-disable-next-line no-alert
            alert( 'bad query string, check query params' );
            return false;
        }
        const { state, client_id: clientId, redirect_uri: redirectUri } = location.query;
        oAuthUser( username, password, state, clientId, redirectUri );
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

OAuthContainer.propTypes = {
    location: PropTypes.shape( {
        query: PropTypes.object,
    } ).isRequired,
};

export default OAuthContainer;
