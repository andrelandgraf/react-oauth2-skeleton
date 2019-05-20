import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';

import './scss/styles.scss';
import App from './js/container/App/App';
import * as serviceWorker from './js/serviceWorker';

// load .env file
dotenv.config();

ReactDOM.render( <App />, document.getElementById( 'root' ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
