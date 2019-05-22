import React from 'react';
import PropTypes from 'prop-types';

import { logUserOut } from '../../services/userService';

const LogoutButton = ( { setUser, loggedIn } ) => (
    <div
        className={loggedIn ? undefined : 'not-displayed'}
        id="logout-button"
        tabIndex={0}
        role="button"
        onClick={() => {
            // delete tokens in local storage
            logUserOut();
            // ovveride user object and trigger rerender of App
            setUser( undefined );
        }}
        onKeyUp={( event ) => {
            if ( event.keyCode === 13 ) {
                event.preventDefault();
                // Trigger the button element with a click
                document.getElementById( 'logout-button' ).click();
            }
        }}
    >
        Log out
    </div>
);

LogoutButton.propTypes = {
    setUser: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
};

export default LogoutButton;
