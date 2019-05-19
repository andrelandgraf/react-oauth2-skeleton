import React from 'react';

import LoginForm from '../../components/login/loginForm';

import { logUserIn } from '../../services/authService';

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLoading: false,
    };
  }

  handleUsernameChange = ( event ) => {
    this.setState( { username: event.target.value } );
  }

  handlePasswordChange = ( event ) => {
    this.setState( { password: event.target.value } );
  }

  handleSubmit = ( event ) => {
    event.preventDefault();
    const { username, password } = this.state;
    if ( username.length > 2 && password !== '' ) {
      logUserIn( username, password );
      this.setState( { isLoading: true } );
    }
  }

  renderLoader = () => (
    <div>Loading...</div>
  );

  renderLoginForm = ( username, password ) => (
    <LoginForm
      username={username}
      password={password}
      onUsernameChange={this.handleUsernameChange}
      onPasswordChange={this.handlePasswordChange}
      onSubmit={this.handleSubmit}
    />
  );

  render() {
    const { username, password, isLoading } = this.state;
    if ( isLoading ) return this.renderLoader();
    return this.renderLoginForm( username, password );
  }
}


export default LoginContainer;
