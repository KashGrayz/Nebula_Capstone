import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LandingPage.css";

function LandingPage() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("Nebula");

  function handleSubmit(event) {
    event.preventDefault();
   
    getImages()
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
        setImages(response.data.collection.items);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {getImages()}, []);

  return (
    <div>
      <div>
        <h3>
          Find all your NASA images here on NEBULA. Search for images or create
          a profile to upload or save your favorites. Enjoy exploring!
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <button type="submit">Launch</button>
      </form>
      <div>
        <div className="photo">
          {images.map((image) => (
            <img
              key={image.data[0].nasa_id}
              src={image.links[0].href}
              alt={image.data[0].title}
              info={image.data[0].description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
