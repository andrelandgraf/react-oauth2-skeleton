import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ( {
    username, password, onUsernameChange, onPasswordChange, onSubmit, actionName,
} ) => (
    <form className="login-form" onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="your username"
            value={username}
            onChange={onUsernameChange}
            pattern=".{3,}"
            title="Username must be longer than 2 characters!"
            required
        />
        <input
            type="password"
            placeholder="your password"
            value={password}
            onChange={onPasswordChange}
            pattern=".{1,}"
            title="Password must be set!"
            required
        />
        <input type="submit" value={actionName} className="clickable" />
    </form>
);

LoginForm.propTypes = {
    actionName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onUsernameChange: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
