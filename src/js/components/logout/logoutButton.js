import React from 'react';
import PropTypes from 'prop-types';

import { logUserOut } from '../../services/userService';

const LogoutButton = ( { setUser } ) => (
    <button
        className="clickable button-center"
        type="button"
        onClick={() => {
            // delete tokens in local storage
            logUserOut();
            // ovveride user object and trigger rerender of App
            setUser( undefined );
        }}
    >
        Log out
    </button>
);

LogoutButton.propTypes = {
    setUser: PropTypes.func.isRequired,
};

export default LogoutButton;
