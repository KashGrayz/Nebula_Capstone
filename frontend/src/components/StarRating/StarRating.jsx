import React, { useState } from 'react';
import './StarRating.css'
import {Rocket} from 'react-bootstrap-icons'



const StarRating = () =>{
    const [rating, setRating] = useState(0)
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
    </div>
    )
}   

export default StarRating;