import React from 'react';

import { oAuthUser } from '../../services/userService';

import LoginContainer from '../Login/LoginContainer';

class OAuthContainer extends React.Component {
  handleSubmit = async ( username, password ) => oAuthUser( username, password )
      .catch( () => {
          // eslint-disable-next-line no-alert
          alert( 'err while trying to login, pls try again' );
          return false;
      } )

  render() {
      return (
          <LoginContainer
              onSubmit={this.handleSubmit}
          />
      );
  }
}

export default OAuthContainer;
