import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Services = ({service}) => {
    //const {img , descripton} = props.service;
    const {img, description, name, price, _id} = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-danger">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Services;