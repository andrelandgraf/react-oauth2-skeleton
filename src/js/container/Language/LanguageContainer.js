import React from 'react';
import PropTypes from 'prop-types';

class LanguageContainer extends React.Component {
    construct( props ) {
        super( props );

        this.state = {
            locale: undefined,
        };
    }

    render() {
        return (
            null
        );
    }
}

LanguageContainer.propTypes = {
    onWillLogout: PropTypes.func,
};

LanguageContainer.defaultProps = {
    onWillLogout: undefined,
};

export default LanguageContainer;
