import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import HomeView from '../../views/homeView';
import LoginContainer from '../Login/LoginContainer';
import RegistrationContainer from '../Registration/RegistrationContainer';
import OAuthContainer from '../OAuth/OAuthContainer';

import { isAuthenticated } from '../../services/userService';

class App extends React.Component {
    constructor( props ) {
        super( props );

        // on initial app startup
        // To avoid getting max. depth exceeded exception in case of successful token generation:
        window.localStorage.clear();
    }

  scrollToTop = () => {
      window.scrollTo( 0, 0 );
      return null;
  };

  render() {
      const { scrollToTop } = this;
      const { user, setUser } = this.props;

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
                      ? (
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
                      )
                      : (
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
                  }
              </div>
          </Router>
      );
  }
}

App.propTypes = {
    user: PropTypes.shape( {
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    } ),
    setUser: PropTypes.func.isRequired,
};

App.defaultProps = {
    user: undefined,
};

export default App;
