import React from 'react';
import PropTypes from 'prop-types';

const NavBarItem = ( {
    isCurrentView, viewName, link, float,
} ) => (
    <li className={float === 'right' ? 'item-right' : undefined}>
        <a className={isCurrentView ? 'current-page' : undefined} href={link}>{viewName}</a>
    </li>
);

NavBarItem.propTypes = {
    isCurrentView: PropTypes.bool,
    viewName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    float: PropTypes.string.isRequired,
};

NavBarItem.defaultProps = {
    isCurrentView: false,
};

export default NavBarItem;
