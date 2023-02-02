import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import './SaveImage.css'

const SaveImage = () => {
    const {state} = useLocation();
    const [isSaved, setIsSaved] = useState(false);
    const [user, token] = useAuth()
    const [isDisabled, setIsDisabled] = useState(false);
    
    const savedImg = {
        nasa_id: state.image.data[0].nasa_id,
        user: user.id,
        href: state.image?.links[0].href,
    }

    function handleSubmit(event){
        event.preventDefault();
        setIsDisabled(true);
        alert('Image Saved!')
        postSaved(savedImg)
    }
        
    function postSaved() {
        axios
          .post("http://127.0.0.1:8000/api/external/", savedImg, {
            headers: {
                Authorization: " Bearer " + token,
            },
          })
        .then((response) => {
            setIsSaved(true);
            console.log(response.data)
        })
        .catch((error) => console.log(error));
        
    }

    return(
        <div style={{ display: "flex"}}>
            <button className='juno' type='submit' disabled={isDisabled} onClick={handleSubmit}>Save Photo</button>
        </div>
    )
}
export default SaveImage;