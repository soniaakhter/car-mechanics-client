import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        
        axios.post('https://intense-shore-92133.herokuapp.com/services', data)
            .then(res => {
            // console.log(res)
                if (res.data.insertedId) {
                    alert("Added Successfully!!")
                    reset();
                }
            })
        
        
    };
    return (
        <div className="add__service">
            <h2> Please Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;