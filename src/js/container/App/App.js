import React from 'react';
import {
    BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import HomeView from '../../views/homeView';
import LoginView from '../../views/loginView';

import { isAuthenticated } from '../../services/userService';

class App extends React.Component {
  scrollToTop = () => {
      window.scrollTo( 0, 0 );
      return null;
  };

  render() {
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
                              <Route from="/login" component={LoginView} />
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
