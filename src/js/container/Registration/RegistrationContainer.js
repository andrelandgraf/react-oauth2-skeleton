import React from 'react';
import PropTypes from 'prop-types';

import { registerUser } from '../../services/userService';

import LoginContainer from '../Login/LoginContainer';

class RegistrationContainer extends React.Component {
    // decorates LoginContainer.handleSubmit function
    handleSubmit = async ( username, password ) => {
        const { setUser } = this.props;
        await registerUser( username, password )
            .then( ( user ) => {
                setUser( user );
            } )
            .catch( () => {
                // eslint-disable-next-line no-alert
                alert( 'err while trying to register, pls try again' );
                return false;
            } );
        return true;
    }

    render() {
        return (
            <LoginContainer
                pageName="Registration"
                actionName="register"
                onSubmit={this.handleSubmit}
            />
        );
    }
}

RegistrationContainer.propTypes = {
    setUser: PropTypes.func.isRequired,
};

export default RegistrationContainer;
