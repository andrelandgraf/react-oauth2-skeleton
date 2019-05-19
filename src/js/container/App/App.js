import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import HomeView from '../../views/homeView';
import LoginView from '../../views/loginView';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: false,
    };
  }

  scrollToTop = () => {
    window.scrollTo( 0, 0 );
    return null;
  };

  render() {
    const { scrollToTop } = this;
    const { isAuthenticated } = this.state;

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
