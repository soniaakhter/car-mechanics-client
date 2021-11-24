import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://intense-shore-92133.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDelete = (id) => {
        const url = `https://intense-shore-92133.herokuapp.com/services/${id}`;
        fetch(url, {
            method:"DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully!!')
                    const remainingUsers = services.filter(service => service._id !== id);
                    setServices(remainingUsers);
                }
        })
    }

    return (
        <div>
            <h2>Manage Services</h2>
            {
                services.map(service => <div
                    key={service._id}>
                    <h4>{service.name}</h4>
                     <button onClick={()=>handleDelete(service._id)}>Delete</button>
               </div>)
            }
        </div>
    );
};

export default ManageServices;





