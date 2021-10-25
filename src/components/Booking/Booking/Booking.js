import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceid} = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceid}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="p-5 m-5">
            <h1>This is Booking {serviceid}</h1>
            <h2>Details of: {service.name}</h2>
        </div>
    );
};

export default Booking;