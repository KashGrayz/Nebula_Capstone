// import React, { useState, useEffect } from 'react';
// import useAuth from '../../hooks/useAuth';
// import axios from 'axios';

// const LandingPage = (featuredimages, setFeaturedImages) => {


//     useEffect(() => {
//       let response = axios.get("'https://images-api.nasa.gov/search?q=nebula&media_type=image'")
//       setFeaturedImages(response.data);
//     }, []);
  
//     return (
//       <div>
//         {featuredimages.map(featuredimages => (
//           <img src={featuredimages.links[0].href} />
//         ))}
//       </div>
//     );
// }

// export default LandingPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import './LandingPage.css'

function LandingPage() {
  const [images, setImages] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);


  useEffect(() => {
    axios.get("https://images-api.nasa.gov/search", {
      params: {
        q: "nebula",
        media_type: "image"
      }
    })
      .then(response => {
        setImages(response.data.collection.items);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <h3>Find all your NASA images here on NEBULA. Search for images or create a profile to upload or save your favorites. Enjoy exploring!</h3>
          <div>
              {images.map(image => (
                <div key={image.data[0].nasa_id}
                onMouseEnter={() => setHoveredImage(image)}
                onMouseLeave={() => setHoveredImage(null)}
                >
              <img   src={image.links[0].href} alt={image.data[0].title} info={image.data[0].description}
              />
              {hoveredImage === image && (
                <div>
                  <p>Title: {image.data[0].title}</p>
                  <p>Description: {image.data[0].description}</p>
                </div>
              )}
              </div>
                ))}
        </div>
    </div>
  );
}

export default LandingPage;
