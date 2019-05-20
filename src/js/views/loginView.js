import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../components/login/loginForm';

const LoginView = ( {
    username, password, onUsernameChange, onPasswordChange, onSubmit,
} ) => (
    <div className="login-container">
        <h1>Hello World! Welcome on our Login/Register Page</h1>
        <LoginForm
            username={username}
            password={password}
            onUsernameChange={onUsernameChange}
            onPasswordChange={onPasswordChange}
            onSubmit={onSubmit}
        />
    </div>
);

LoginView.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default LoginView;
