import React from 'react';

import { UserStateContext } from '../../provider/UserStateProvider';
import LogoutButton from '../../components/logout/logoutButton';
import { isAuthenticated } from '../../services/userService';

const LogoutContainer = () => (
    <UserStateContext.Consumer>
        { ( { setUser } ) => <LogoutButton setUser={setUser} loggedIn={isAuthenticated()} /> }
    </UserStateContext.Consumer>
);

export default LogoutContainer;
