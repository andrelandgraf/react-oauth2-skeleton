import React from 'react';

import { oAuthUser } from '../../services/userService';

import LoginContainer from '../Login/LoginContainer';

class OAuthContainer extends React.Component {
  handleSubmit = async ( username, password ) => oAuthUser( username, password );

  render() {
      return (
          <LoginContainer
              onSubmit={this.handleSubmit}
          />
      );
  }
}

export default OAuthContainer;
