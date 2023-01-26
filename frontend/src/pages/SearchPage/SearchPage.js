import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';


//Page to display search results

const SearchPage = (search, setSearch, image, setImage) => {



    return(
        <div>
            <div>
                <h3>Results for {search} Images!</h3>
            </div>
            <div>
                {image.map(image => (
                   <img  key={image.data[0].nasa_id} src={image.links[0].href} alt={image.data[0].title} info={image.data[0].description} /> 
                ))}
            </div>
        </div>
    )


}

export default SearchPage;