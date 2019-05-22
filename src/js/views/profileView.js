import React from 'react';
import PropTypes from 'prop-types';

const ProfileView = ( { user } ) => (
    <div className="container">
        <div className="center">
            <h1>{`Welcome on your My Profile Page, ${ user.username }!`}</h1>
        </div>
    </div>
);

ProfileView.propTypes = {
    user: PropTypes.shape( {
        username: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    } ).isRequired,
};

export default ProfileView;
