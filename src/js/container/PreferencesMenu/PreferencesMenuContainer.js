import React from 'react';
// import PropTypes from 'prop-types';

import Preferences from '../../components/preferences/preferences';

class PreferencesMenuContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const { isOpen } = this.state;
        if ( !isOpen ) return null;
        return (
            <div className="preferences-menu">
                <Preferences />
            </div>
        );
    }
}

export default PreferencesMenuContainer;
