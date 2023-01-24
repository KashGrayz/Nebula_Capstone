import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const LandingPage = () => {

    const [featuredimages, setFeaturedImages] = useState();

    async function getPhotos(){
        
            let response = await axios.get('https://images-api.nasa.gov/search?q=nebula&media_type=image')
            setFeaturedImages(response.data)
            console.log('Featured Images:', response.data)
        }
        useEffect(()=>{
            getPhotos()
        },[])
    

    return(
        <div>

        </div>


    );
};

export default LandingPage;