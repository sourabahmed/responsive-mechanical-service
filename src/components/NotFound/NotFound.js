import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/notfound/404.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={img} alt="" />
            <button><Link to="/home">Home</Link></button>
        </div>
    );
};

export default NotFound;