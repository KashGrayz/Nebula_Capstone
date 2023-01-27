import React from 'react';
import { useLocation } from 'react-router-dom'
import './ImageDetails.css'
 
function ImageDetails(){

    const {state} = useLocation();
    console.log('State Image:',state.image)

    return(
        <div className='details'>
            <img className='image' src={state.image?.links[0].href} alt={state.image.data[0].title}/>
            <div className='text'>
                <h1>{state.image.data[0].title}</h1>
                <br></br>
                <h3>{state.image.data[0].description}</h3> 
             </div>
        </div>
    )
}

export default ImageDetails;
