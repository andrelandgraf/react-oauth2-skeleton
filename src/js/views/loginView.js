import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../components/login/loginForm';

const LoginView = ( {
    username, password, onUsernameChange, onPasswordChange, onSubmit, pageName, actionName,
} ) => (
    <div className="login-container">
        <h1>{`Hello World! Welcome to our ${ pageName } Page`}</h1>
        <LoginForm
            actionName={actionName}
            username={username}
            password={password}
            onUsernameChange={onUsernameChange}
            onPasswordChange={onPasswordChange}
            onSubmit={onSubmit}
        />
    </div>
);

LoginView.propTypes = {
    pageName: PropTypes.string.isRequired,
    actionName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default LoginView;
