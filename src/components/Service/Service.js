import React from 'react';
import './Service.css'

const Services = ({service}) => {
    //const {img , descripton} = props.service;
    const {img, description, name, price} = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>SERVICE NAME: {name}</h3>
            <h4>Price: ${price}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Services;