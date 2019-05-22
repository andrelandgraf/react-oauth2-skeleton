import React from 'react';
import PropTypes from 'prop-types';

const BUTTON_STYLES = 'clickable button-center';

const Button = ( { classes, text, onClick } ) => (
    <button
        className={`${ BUTTON_STYLES } ${ classes }`}
        type="button"
        onClick={onClick}
    >
        {text}
    </button>
);

Button.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    classes: BUTTON_STYLES,
    text: 'click',
    onClick: undefined,
};

export default Button;
