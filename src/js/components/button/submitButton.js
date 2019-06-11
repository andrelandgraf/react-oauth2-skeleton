import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../loading/loader';

import { BUTTON_STYLES } from './button';

const SubmitButton = ( { label, isLoading, disabled } ) => (
    <React.Fragment>
        {
            isLoading
                ? <Loader />
                : (
                    <input
                        type="submit"
                        value={label}
                        className={`${ BUTTON_STYLES } btn btn-primary`}
                        disabled={disabled ? 'disabled' : undefined}
                    />
                )

        }
    </React.Fragment>
);

SubmitButton.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};

SubmitButton.defaultProps = {
    disabled: false,
    isLoading: false,
};

export default SubmitButton;
