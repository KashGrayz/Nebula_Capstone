import React from 'react';
import { useLocation } from 'react-router-dom'
import './ImageDetails.css'
 
function ImageDetails(){

    const {state} = useLocation();
    console.log('State Image:',state.image)

    return(
        <div className='details'>
            <img className='image' src={state.image?.links[0].href} alt={state.image.data[0].title}/>
            <div>
                <h1 className='text'>{state.image.data[0].title}</h1>
                <br/>
                <p><i>NASA ID:</i> {state.image.data[0].nasa_id}</p>
                <p className='description'>{state.image.data[0].description}</p> 
                <p>Date Created: {state.image.data[0].date_created}</p>
             </div>
             <div>
                
             </div>
        </div>
    )
}

export default ImageDetails;
