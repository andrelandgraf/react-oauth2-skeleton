import React from 'react';
import {
    BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import HomeView from '../../views/homeView';
import LoginContainer from '../Login/LoginContainer';
import OAuthContainer from '../OAuth/OAuthContainer';

import { isAuthenticated } from '../../services/userService';

class App extends React.Component {
  scrollToTop = () => {
      window.scrollTo( 0, 0 );
      return null;
  };

  render() {
      // To avoid getting max. depth exceeded exception in case of successful token generation:
      window.localStorage.clear();

      const { scrollToTop } = this;

      if ( !isAuthenticated ) {
          window.localStorage.setItem( 'redirectUrl', window.location.pathname );
      }

      return (
          <Router>
              <div>
                  <Route component={scrollToTop} />
                  { isAuthenticated
                      ? (
                          <Switch>
                              <Route exact path="/" component={HomeView} />
                              <Redirect from="/login" to={window.localStorage.getItem( 'redirectUrl' )} />
                          </Switch>
                      )
                      : (
                          <Switch>
                              <Route from="/login" component={LoginContainer} />
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

export default App;
