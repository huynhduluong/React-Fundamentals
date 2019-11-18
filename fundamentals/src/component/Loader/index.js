import React from 'react';
import loaderSrc from '../../asset/loading.gif';

const Loader = props => (
    <div>
        <img 
            alt="Loader icon"
            src={loaderSrc} />
    </div>
);

export default Loader;