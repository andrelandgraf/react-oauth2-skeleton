import React from 'react';
import PropTypes from 'prop-types';

import LogoutContainer from '../../container/Logout/LogoutContainer';
import Logout from './elements/logout';

const PreferencesMenu = ( { closeMenu } ) => (
    <ul className="preferences-menu">
        <li className="title">
            Preferences
        </li>
        <li className="logout-item">
            <LogoutContainer onWillLogout={closeMenu} LogoutComponent={Logout} />
        </li>
    </ul>
);

PreferencesMenu.propTypes = {
    closeMenu: PropTypes.func.isRequired,
};

export default PreferencesMenu;
