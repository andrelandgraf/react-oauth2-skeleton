import React from 'react';
import PropTypes from 'prop-types';

import TextItem from './elements/textItem';
import IconItem from './elements/iconItem';
import LinkAction from './elements/linkAction';
import DropDownAction from './elements/dropdownAction';

const NavBarItem = ( { item } ) => {
    if ( item.custom ) {
        const { CustomComponent } = item.custom;
        return ( <CustomComponent {...item} /> );
    }

    const ItemComponent = item.pictureSrc ? IconItem : TextItem;
    const Action = item.dropdown ? DropDownAction : LinkAction;

    return (
        <li className={item.float === 'right' ? 'item-right' : undefined}>
            <Action {...item}>
                <ItemComponent {...item} />
            </Action>
        </li>
    );
};

NavBarItem.propTypes = {
    item: PropTypes.shape( {
        key: PropTypes.string.isRequired,
        viewName: PropTypes.string.isRequired,
        link: PropTypes.string,
        dropdown: PropTypes.bool,
        Menu: PropTypes.node,
        pictureSrc: PropTypes.string,
        float: PropTypes.string.isRequired,
        Custom: PropTypes.node,
    } ).isRequired,
};

export default NavBarItem;
