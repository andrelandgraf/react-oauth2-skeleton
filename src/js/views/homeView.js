import React from 'react';
import PropTypes from 'prop-types';

const HomeView = ( { user } ) => (
    <div className="container">
        <div className="center">
            {`Hello World!${ user.username } Welcome on our Home Pages`}
        </div>
    </div>
);

HomeView.propTypes = {
    user: PropTypes.shape( {
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    } ).isRequired,
};

export default HomeView;
