import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import { KEYS } from '../../utilities/internationalization/internationalization';

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
                pageName={i18n.t( KEYS.REGISTRATION )}
                actionName={i18n.t( KEYS.REGISTER )}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

RegistrationContainer.propTypes = {
    setUser: PropTypes.func.isRequired,
};

export default RegistrationContainer;
