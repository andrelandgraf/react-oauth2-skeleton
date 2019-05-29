import React from 'react';
import PropTypes from 'prop-types';

const IconItem = ( { viewName, pictureSrc } ) => (
    <img
        className="icon-item"
        src={pictureSrc}
        alt={viewName}
    />
);

IconItem.propTypes = {
    pictureSrc: PropTypes.string.isRequired,
    viewName: PropTypes.string.isRequired,
};

export default IconItem;
