import React from 'react';
import PropTypes from 'prop-types';

import { oAuthUser } from '../../services/userService';

import LoginContainer from '../Login/LoginContainer';

class OAuthContainer extends React.Component {
  handleSubmit = async ( username, password ) => {
      const { location } = this.props;
      // see: https://developer.amazon.com/de/docs/account-linking/configure-authorization-code-grant.html
      // client_id, response_type, scope, redirect_uri
      const { state, client_id: clientId, redirect_uri: redirectUri } = location.query;
      oAuthUser( username, password, state, clientId, redirectUri );
  }

  render() {
      return (
          <LoginContainer
              onSubmit={this.handleSubmit}
          />
      );
  }
}

OAuthContainer.propTypes = {
    location: PropTypes.objectOf( PropTypes.object ).isRequired,
};

export default OAuthContainer;
