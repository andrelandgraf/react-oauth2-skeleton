import React from 'react';
import i18n from 'i18next';

import { KEYS } from '../utilities/internationalization/internationalization';

const NotFoundView = () => (
    <div className="container">
        <div className="center">
            <h1>{ i18n.t( KEYS.PAGE_NOT_FOUND ) }</h1>
            { i18n.t( KEYS.PAGE_NOT_FOUND_MESSAGE ) }
        </div>
    </div>
);

export default NotFoundView;
