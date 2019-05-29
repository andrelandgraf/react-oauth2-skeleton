import React from 'react';
import PropTypes from 'prop-types';

const NavBarItem = ( { label, link, float } ) => (
    <li className={float === 'right' ? 'item-right' : undefined}>
        <a
            className={window.location.pathname === link ? 'current-page' : undefined}
            href={link}
        >
            <p className="text-item">
                { label }
            </p>
        </a>
    </li>
);

NavBarItem.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    float: PropTypes.string.isRequired,
};

export default NavBarItem;
