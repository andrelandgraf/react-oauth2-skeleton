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
    componentWillMount = async () => {
        const { user, setUser } = this.context;
        if ( !isAuthenticated() || user ) return;
        await getUser()
            .then( retrievedUser => setUser( retrievedUser ) )
            .catch( () => {
                console.log( ' err while getting user' );
                // clear storage, this will lead to relocate to /login
                window.localStorage.clear();
            } );
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

    renderAuthenticatedApp = user => (
        <div>
            <NavBar items={this.getNavBarViews()} current={window.location.pathname} />
            {
                user ? this.renderApp( user ) : this.renderAppLoading()
            }
        </div>
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
        const { scrollToTop } = this;
        const { user, setUser } = this.context;

        if ( !isAuthenticated() ) {
            let redirectUrl = window.location.pathname;
            if ( redirectUrl === '/login' || redirectUrl === '/register' ) redirectUrl = '/';
            window.localStorage.setItem( 'redirectUrl', redirectUrl );
        }
        return (
            <Router>
                <div>
                    <Route component={scrollToTop} />
                    { isAuthenticated()
                        ? this.renderAuthenticatedApp( user )
                        : this.renderNotAuthenticatedApp( setUser )
                    }
                </div>
            </Router>
        );
    }
}

App.contextType = UserStateContext;

export default App;
