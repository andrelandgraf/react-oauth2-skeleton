import React from 'react';
import PropTypes from 'prop-types';

import GlobeIcon from '../../../img/globe.svg';

import CustomButton from '../button/customButton';

const Language = ( { onClick } ) => (
    <CustomButton
        id="select-language-button"
        role="button"
        onClick={onClick}
    >
        Language
        <img
            src={GlobeIcon}
            alt="Language Icon"
        />
    </CustomButton>
);

Language.propTypes = {
    onClick: PropTypes.func,
};

Language.defaultProps = {
    onClick: undefined,
};

export default Language;
