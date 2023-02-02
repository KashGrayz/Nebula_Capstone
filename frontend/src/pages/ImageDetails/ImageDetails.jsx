import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import './ImageDetails.css'
import StarRating from '../../components/StarRating/StarRating';
import SaveImage from "../../components/SaveImage/SaveImage";
import axios from 'axios';
 
function ImageDetails(){

    const {state} = useLocation();
    const [image,setImage] = useState([])
    const [keyword] = useState(state.image?.data[0].keywords[0])
    console.log('State Image:',state.image)
    console.log('State Keyword:', state.image?.data[0].keywords[0])

    

    function getRelated(){
        axios
            .get("https://images-api.nasa.gov/search",{
                params :{
                    q: keyword,
                    media_type: "image",
                },
            })
            .then((response) => {
                setImage(response.data.collection.items);
                console.log('Related Images:', response.data.collection.items)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {getRelated()}, []);

    return(
        <div>
            <div className='details'>
                <img className='image' src={state.image?.links[0].href} alt={state.image.data[0].title}/>
                <div className='info'>
                    <h1 className='text'>{state.image.data[0].title}</h1>
                    <p><i className='description'>NASA ID:</i> {state.image.data[0].nasa_id}</p>
                    <p className='description'>{state.image.data[0].description.split("Read more:")[0]}</p> 
                    <p dangerouslySetInnerHTML={{ __html: state.image.data[0].description.split("Read more:")[1]}}></p>
                    <p><i className='description'>Date Created:</i> {state.image.data[0].date_created}</p>
                    
                </div>
                <div className='extras'>
                    <StarRating/>
                    <SaveImage state={state}/> 
                </div>
            </div>
            <h1 className="welcome1">Related Images</h1>
            <div className="related">
                {image.map((el)=>(
                    <img
                    key={el.data[0].nasa_id}
                    src={el.links[0].href}
                    alt={el.data[0].title}
                    info={el.data[0].description}
                    />
                ))}

            </div>
        </div>
    )
}

export default ImageDetails;
