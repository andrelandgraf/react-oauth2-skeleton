import React from 'react';
import PropTypes from 'prop-types';

import LogoutContainer from '../../container/Logout/LogoutContainer';
import NavBarItem from './navbarItem';

const NavBar = ( { items } ) => (
    <ul className="navarbar">
        { items.map( item => (
            <NavBarItem
                key={item.key}
                item={item}
            />
        ) )
        }
        <li className="logout-item">
            <LogoutContainer />
        </li>
    </ul>
);

NavBar.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape( {
            key: PropTypes.string.isRequired,
            viewName: PropTypes.string.isRequired,
            link: PropTypes.string,
            dropdown: PropTypes.bool,
            menu: PropTypes.node,
            pictureSrc: PropTypes.string,
            float: PropTypes.string.isRequired,
        } ),
    ).isRequired,
};

export default NavBar;
