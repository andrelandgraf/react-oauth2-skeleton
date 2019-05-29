import React from 'react';
import PropTypes from 'prop-types';

const TextItem = ( { viewName } ) => (
    <p className="text-item">
        { viewName }
    </p>
);

TextItem.propTypes = {
    viewName: PropTypes.string.isRequired,
};

export default TextItem;
