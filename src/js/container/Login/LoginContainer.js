import React from 'react';
import PropTypes from 'prop-types';

import LoginView from '../../views/loginView';

import { logUserIn } from '../../services/userService';

class LoginContainer extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            username: '',
            password: '',
            isLoading: false,
        };
    }

    handleUsernameChange = ( event ) => {
        this.setState( { username: event.target.value } );
    }

    handlePasswordChange = ( event ) => {
        this.setState( { password: event.target.value } );
    }

    handleSubmit = async ( event ) => {
        event.preventDefault();
        const { username, password } = this.state;
        const { onSubmit, setUser } = this.props;
        if ( username.length < 2 || password === '' ) {
            return false;
        }

        // default behavior (normal login page)
        if ( !onSubmit ) {
            this.setState( { isLoading: true } );
            await logUserIn( username, password )
                .then( ( user ) => {
                    setUser( user );
                } )
                .catch( () => {
                    this.setState( { isLoading: false } );
                    // eslint-disable-next-line no-alert
                    alert( 'err while trying to login, pls try again' );
                    return false;
                } );
        } else {
            // oAuth or other extensive behavior
            return onSubmit( username, password );
        }
        return true;
    }

    renderLoader = () => (
        <div>Loading...</div>
    );

    renderLoginForm = ( username, password, pageName, actionName ) => (
        <LoginView
            pageName={pageName}
            actionName={actionName}
            username={username}
            password={password}
            onUsernameChange={this.handleUsernameChange}
            onPasswordChange={this.handlePasswordChange}
            onSubmit={this.handleSubmit}
        />
    );

    render() {
        const { username, password, isLoading } = this.state;
        const { pageName, actionName } = this.props;
        if ( isLoading ) return this.renderLoader();
        return this.renderLoginForm( username, password, pageName, actionName );
    }
}

LoginContainer.propTypes = {
    pageName: PropTypes.string,
    actionName: PropTypes.string,
    onSubmit: PropTypes.func,
    setUser: PropTypes.func,
};

LoginContainer.defaultProps = {
    pageName: 'Login',
    actionName: 'login',
    onSubmit: undefined,
    setUser: undefined,
};

export default LoginContainer;
