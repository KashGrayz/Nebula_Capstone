import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const ProfilePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/uploaded/get_data/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
        setData(response.data);
        setIsLoaded(true)
  
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Welcome {user.username}!</h1>
      <div>
        { isLoaded ? data.uploaded_imgs.map((el) => (
          <><img
          src={`http://127.0.0.1:8000${el.image}`}
          alt={`http://127.0.0.1:8000${el.image_name}`}
          />
          hello
          </>
          
        )):null}
      </div>
    </div>
    
  );
};

export default ProfilePage;
