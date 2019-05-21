import React from 'react';
import PropTypes from 'prop-types';

// import logo from '../../img/logo.svg';

const HomeView = ( { user } ) => (
    <div>
      Hello World!
        {' '}
        { user.email }
        {' '}
      Welcome on our Home Pages
    </div>
);

HomeView.propTypes = {
    user: PropTypes.shape( {
        email: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    } ).isRequired,
};

export default HomeView;
