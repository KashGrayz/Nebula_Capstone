import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "./LandingPage.css";


function LandingPage() {
  const [image, setImage] = useState([]);
  const [query, setQuery] = useState("Nebula");
  const navigate = useNavigate();
  

  function handleSubmit(event) {
    event.preventDefault();
    getImages()
  }

  function handleClick(image){
    setImage(image)
    navigate(`/details`, {state :{ image:image }}
    );
  }

  function getImages() {
    axios
      .get("https://images-api.nasa.gov/search", {
        params: {
          q: query,
          media_type: "image",
        },
      })
      .then((response) => {
        setImage(response.data.collection.items);
        console.log('Images info:', response.data.collection.items)
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {getImages()}, []);

  return (
    <div>
      <div>
        <h3>
          Find all your NASA images here on NEBULA. Search for images, create
          a profile to upload, and save your favorites. Enjoy exploring!
        </h3>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <input

          type="text"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <button type="submit">Launch</button>
      </form>
      </div>
      <div>
        <div className="photo">
          {image.map((image) => (
            <img
              key={image.data[0].nasa_id}
              src={image.links[0].href}
              alt={image.data[0].title}
              info={image.data[0].description}
              onClick={() => handleClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
