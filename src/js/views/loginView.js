import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../components/login/loginForm';

const LoginView = ( {
    username, password, pageName, actionName, Message,
    onUsernameChange, onPasswordChange, onSubmit,
} ) => (
    <div className="container login-container">
        <h1>{`Hello World! Welcome to our ${ pageName } Page`}</h1>
        { Message }
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
    Message: PropTypes.node,
    onUsernameChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

LoginView.defaultProps = {
    Message: undefined,
};

export default LoginView;
