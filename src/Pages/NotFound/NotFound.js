import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img style={{width:"70%"}} src={notfound} /> <br/> 
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;