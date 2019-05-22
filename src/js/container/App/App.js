import React from 'react';
import {
    BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import { UserStateContext } from '../../provider/UserStateProvider';

import NavBar from '../../components/navbar/navbar';
import HomeView from '../../views/homeView';
import LoginContainer from '../Login/LoginContainer';
import RegistrationContainer from '../Registration/RegistrationContainer';
import OAuthContainer from '../OAuth/OAuthContainer';
import Loader from '../../components/loading/loader';

import { isAuthenticated, getUser } from '../../services/userService';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentPathName: window.location.pathname,
        };
    }

    componentWillMount = async () => {
        const { user, setUser } = this.context;
        const { pathname } = window.location;
        this.updatePathName( pathname );
        // in case of page reload, we still hold token but need to get user again
        if ( isAuthenticated() && !user ) this.getUser( setUser );
    }

    getNavBarViews = () => [
        {
            key: 'home',
            viewName: 'Home',
            link: '/',
        },
        {
            key: 'profile',
            viewName: 'My Profile',
            link: '/profile',
        },
    ];

    scrollToTop = () => {
        window.scrollTo( 0, 0 );
        return null;
    };

    updatePathName = ( pathName ) => {
        const { currentPathName } = this.state;
        if ( pathName === currentPathName ) return;
        this.setState( { currentPathName: pathName } );
    }

    getUser = async ( setUser ) => {
        await getUser()
            .then( retrievedUser => setUser( retrievedUser ) )
            .catch( () => {
                // in case of error, relocate to login and retrieve new token
                window.localStorage.clear();
            } );
    }

    renderAppLoading = () => (
        <Loader />
    );

    renderApp = user => (
        <Switch>
            <Route
                exact
                path="/"
                render={props => (
                    <HomeView {...props} user={user} />
                )}
            />
            <Route from="/oauth/v2/login" component={OAuthContainer} />
            <Redirect from="/login" to={window.localStorage.getItem( 'redirectUrl' )} />
            <Redirect from="/register" to={window.localStorage.getItem( 'redirectUrl' )} />
        </Switch>
    );

    renderAuthenticatedApp = ( user, currentPathName ) => (
        <React.Fragment>
            <NavBar items={this.getNavBarViews()} currentPathName={currentPathName} />
            {
                user ? this.renderApp( user ) : this.renderAppLoading()
            }
        </React.Fragment>
    );

    renderNotAuthenticatedApp = setUser => (
        <Switch>
            <Route
                from="/login"
                render={props => (
                    <LoginContainer {...props} setUser={setUser} />
                )}
            />
            <Route
                from="/register"
                render={props => (
                    <RegistrationContainer {...props} setUser={setUser} />
                )}
            />
            <Route from="/oauth/v2/login" component={OAuthContainer} />
            <Redirect path="*" to="/login" />
        </Switch>
    )

    render() {
        const { currentPathName } = this.state;
        const { user, setUser } = this.context;

        if ( !isAuthenticated() ) {
            let redirectUrl = window.location.pathname;
            if ( redirectUrl === '/login' || redirectUrl === '/register' ) redirectUrl = '/';
            window.localStorage.setItem( 'redirectUrl', redirectUrl );
        }
        return (
            <Router>
                <div>
                    <Route component={this.scrollToTop} />
                    { isAuthenticated()
                        ? this.renderAuthenticatedApp( user, currentPathName )
                        : this.renderNotAuthenticatedApp( setUser )
                    }
                </div>
            </Router>
        );
    }
}

App.contextType = UserStateContext;

export default App;
