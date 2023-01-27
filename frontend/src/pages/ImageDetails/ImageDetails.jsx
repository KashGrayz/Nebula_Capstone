import React from 'react';
import ImageContext from '../LandingPage/LandingPage'
import { useContext} from 'react'

 
function ImageDetails(){

   let image = useContext(ImageContext);
   console.log(`Context:`, image)

    return(
        <div>
            <img src={image.links[0].href} alt={image.data[0].title}/>
            <div>
                <h1>{image.data[0].title}</h1>
                <p>{image.data[0].description}</p>
            </div>
        </div>
    )
}

export default ImageDetails;
