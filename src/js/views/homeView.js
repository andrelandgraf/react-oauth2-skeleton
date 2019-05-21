import React from 'react';
import PropTypes from 'prop-types';

// import logo from '../../img/logo.svg';
import LogoutContainer from '../container/Logout/LogoutContainer';

const HomeView = ( { user } ) => (
    <div>
        <div>
      Hello World!
            {' '}
            { user.email }
            {' '}
      Welcome on our Home Pages
        </div>
        <LogoutContainer />
    </div>
);

HomeView.propTypes = {
    user: PropTypes.shape( {
        email: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    } ).isRequired,
};

export default HomeView;
