import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import { KEYS } from '../../utilities/internationalization/internationalization';

const LoginForm = ( {
    username, password, onUsernameChange, onPasswordChange, onSubmit, actionName,
} ) => (
    <form className="login-form" onSubmit={onSubmit}>
        <input
            type="text"
            placeholder={i18n.t( KEYS.USERNAME )}
            value={username}
            onChange={onUsernameChange}
            pattern=".{3,}"
            title={i18n.t( KEYS.USERNAME_WARNING )}
            required
        />
        <input
            type="password"
            placeholder={i18n.t( KEYS.PASSWORD )}
            value={password}
            onChange={onPasswordChange}
            pattern=".{1,}"
            title={i18n.t( KEYS.PASSWORD_WARNING )}
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
