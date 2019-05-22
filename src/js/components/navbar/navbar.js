import React from 'react';
import PropTypes from 'prop-types';

import LogoutContainer from '../../container/Logout/LogoutContainer';
import NavBarItem from './navbarItem';

const NavBar = ( { items, currentPathName } ) => (
    <ul className="navarbar">
        {
            items.map( ( { key, viewName, link } ) => (
                <NavBarItem
                    key={key}
                    viewName={viewName}
                    link={link}
                    isCurrentView={currentPathName === link}
                />
            ) )
        }
        <li className="logout-item">
            <LogoutContainer />
        </li>
    </ul>
);

NavBar.propTypes = {
    currentPathName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape( {
            key: PropTypes.string.isRequired,
            viewName: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        } ),
    ).isRequired,
};

export default NavBar;
