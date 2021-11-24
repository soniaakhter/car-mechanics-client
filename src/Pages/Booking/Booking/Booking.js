import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://intense-shore-92133.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            
            <h3>This is Booking:  {serviceId}</h3>
            <h2>Details of: {service.name} </h2>
            <img src={service.img} alt="" />
            <h5>Price: {service.price}</h5>
            <p className="px-3">{service.description}</p>
        </div>
    );
};

export default Booking;