import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../loading/loader';

const SubmitButton = ( { label, isLoading, disabled } ) => (
    <React.Fragment>
        {
            isLoading
                ? <Loader />
                : (
                    <input
                        type="submit"
                        value={label}
                        className="clickable"
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
