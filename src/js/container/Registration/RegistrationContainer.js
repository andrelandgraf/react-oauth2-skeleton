import React from 'react';

import { registerUser } from '../../services/userService';

import LoginContainer from '../Login/LoginContainer';

class RegistrationContainer extends React.Component {
  // eslint-disable-next-line no-unused-vars
  handleSubmit = async ( username, password ) => {
      registerUser( username, password );
  }

  render() {
      return (
          <LoginContainer
              pageName="Registration"
              actionName="register"
              onSubmit={this.handleSubmit}
          />
      );
  }
}

export default RegistrationContainer;
