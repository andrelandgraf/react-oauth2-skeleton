import React from 'react';
import PropTypes from 'prop-types';

import LogoutIcon from '../../../img/logout.svg';

import { logUserOut } from '../../services/userService';

import CustomButton from '../button/customButton';

const Logout = ( { setUser, loggedIn, onWillLogout } ) => (
    <CustomButton
        classes={loggedIn ? undefined : 'not-displayed'}
        id="logout-button"
        role="button"
        onClick={() => {
            if ( onWillLogout ) { onWillLogout(); }
            // delete tokens in local storage
            logUserOut();
            // ovveride user object and trigger rerender of App
            setUser( undefined );
        }}
    >
        Log out
        <img
            src={LogoutIcon}
            alt="Logout Icon"
        />
    </CustomButton>
);

Logout.propTypes = {
    setUser: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    onWillLogout: PropTypes.func,
};

Logout.defaultProps = {
    onWillLogout: undefined,
};

export default Logout;
