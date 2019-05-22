import React from 'react';

import LoaderSvg from '../../../img/loader.svg';

const Loader = () => (
    <div className="container">
        <div className="center">
            <img src={LoaderSvg} alt="Loading..." />
        </div>
    </div>

);

export default Loader;
