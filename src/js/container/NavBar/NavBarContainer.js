import React from 'react';
import PropTypes from 'prop-types';

import NavBar from '../../components/navbar/navbar';
import NavBarItem from '../../components/navbar/elements/navbarItem';
import PreferenceItem from '../../components/navbar/elements/preferenceItem';
import PreferencesMenu from '../../components/preferencesMenu/preferencesMenu';

class NavBarContainer extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            prefMenuOpen: false,
        };

        window.addEventListener( 'click', this.onClickCloseMenu, false );
    }

    componentWillUnmount() {
        window.removeEventListener( this.onClickCloseMenu );
    }

    onClickPreferenceItem = () => {
        this.setState( ( { prefMenuOpen } ) => ( { prefMenuOpen: !prefMenuOpen } ) );
    }

    closePreferenceMenu = () => {
        this.setState( { prefMenuOpen: false } );
    }

    onClickCloseMenu = ( event ) => {
        const menu = document.getElementsByClassName( 'preferences-menu' );
        const button = document.getElementById( 'preferences-navbar-button' );
        if ( !menu || !menu.length ) return;
        const targetIsPrefButton = event.target.id === 'preferences-navbar-button';
        const targetInPrefButton = button && button.contains( event.target );

        if ( targetIsPrefButton || targetInPrefButton ) return;

        const targetInMenu = menu[ 0 ].contains( event.target );
        const targetIsMenu = event.target === menu[ 0 ];
        const { prefMenuOpen } = this.state;
        if ( prefMenuOpen && ( !targetInMenu && !targetIsMenu ) ) {
            this.setState( { prefMenuOpen: false } );
        }
    }

    renderAuthenticatedNavBarItems = () => [
        <NavBarItem
            key="home"
            label="Home"
            link="/"
            float="left"
        />,
        <NavBarItem
            key="profile"
            label="My Profile"
            link="/profile"
            float="left"
        />,
        <PreferenceItem
            key="preferences"
            label="Preferences"
            float="right"
            onClick={this.onClickPreferenceItem}
        />,
    ];

    renderNotAuthenticatedNavBarItems = () => [
        <NavBarItem
            key="register"
            label="Register"
            link="/register"
            float="right"
        />,
        <NavBarItem
            key="login"
            label="Log-in"
            link="/login"
            float="right"
        />,
    ];

    render() {
        const { loggedIn } = this.props;
        const { prefMenuOpen } = this.state;
        return (
            <React.Fragment>
                <NavBar>
                    { loggedIn
                        ? this.renderAuthenticatedNavBarItems()
                        : this.renderNotAuthenticatedNavBarItems()
                    }
                </NavBar>
                { prefMenuOpen
                    ? <PreferencesMenu closeMenu={this.closePreferenceMenu} />
                    : undefined
                }
            </React.Fragment>
        );
    }
}

NavBarContainer.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
};

export default NavBarContainer;
