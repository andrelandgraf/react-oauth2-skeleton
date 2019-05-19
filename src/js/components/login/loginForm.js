import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ( {
  username, password, onUsernameChange, onPasswordChange, onSubmit,
} ) => (
  <form className="login-form" onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="your username"
      value={username}
      onChange={onUsernameChange}
      required
    />
    <input
      type="password"
      value={password}
      onChange={onPasswordChange}
      required
    />
    <input type="submit" value="LogIn" className="clickable" />
  </form>
);

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
