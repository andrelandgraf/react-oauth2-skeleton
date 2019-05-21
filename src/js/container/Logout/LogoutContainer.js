import React from 'react';

import { UserStateContext } from '../../provider/UserStateProvider';
import LogoutButton from '../../components/logout/logoutButton';

const LogoutContainer = () => (
    <UserStateContext.Consumer>
        { ( { setUser } ) => <LogoutButton setUser={setUser} /> }
    </UserStateContext.Consumer>
);

export default LogoutContainer;
