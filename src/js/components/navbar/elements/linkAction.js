import React from 'react';
import PropTypes from 'prop-types';

const LinkAction = ( { link, children } ) => (
    <a
        className={window.location.pathname === link ? 'current-page' : undefined}
        href={link}
    >
        {children}
    </a>
);

LinkAction.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default LinkAction;
