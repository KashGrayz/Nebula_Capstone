import React, { useState } from 'react';
import './StarRating.css'
import { Rocket } from 'react-bootstrap-icons'
import { ChevronDoubleDown } from 'react-bootstrap-icons'
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';


const StarRating = () =>{
    const {state}= useLocation();
    const [rating, setRating] = useState(0);
    const [user, token] = useAuth()

    const starRating = {
        nasa_id: state.image.data[0].nasa_id,
        user: user.id,
        rating: rating,
    }

    function handleSubmit(event){
        event.preventDefault();
        alert('Rating Saved')
        postRating(starRating)
    }

    function postRating(){
        axios
          .post("http://127.0.0.1:8000/api/rating/", starRating, {
            headers: {
                Authorization: "Bearer " + token,
            }
          })
          .then((response) => {
            console.log(response.data)
          })
          .catch((error) => console.log(error))
    }

    console.log('Rating:', rating)

    return (
    <div className='star-rating'>
        {[...Array(5)].map((star,index) => {
            index += 1;
            return(
                <button
                    type='button'
                    key={index}
                    className={index <= rating ? 'on' : 'off'}
                    onClick={() => setRating(index)}
                >
                    <span className='star'><Rocket/></span>
                </button>
            );
        })}
        <div>
            <button className='chevron' type='submit' onClick={handleSubmit}><ChevronDoubleDown/></button>
        </div>
    </div>
    )
}   

export default StarRating;