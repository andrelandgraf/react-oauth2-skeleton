import React from 'react';
import ReactDOM from 'react-dom';

import './scss/styles.scss';
import App from './js/container/App/App';
import { UserStateContext, UserStateProvider } from './js/provider/UserStateProvider';
import * as serviceWorker from './js/serviceWorker';

const application = (
    <UserStateProvider>
        <UserStateContext.Consumer>
            { ( { user, setUser } ) => <App user={user} setUser={setUser} /> }
        </UserStateContext.Consumer>
    </UserStateProvider>
);

ReactDOM.render( application, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
