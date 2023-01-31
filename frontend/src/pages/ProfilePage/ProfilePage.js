import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const ProfilePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [stuff, setStuff] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchStuff = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/uploaded/get_stuff/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
        setStuff(response.data);
        setIsLoaded(true)
  
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchStuff();
  }, [token]);

  return (
    <div className="container">
      <h1>Welcome {user.username}!</h1>
      <div>
        { isLoaded ? stuff.uploaded_imgs.map((el) => (
          <><img
          src={`http://127.0.0.1:8000${el.image}`}
          />
          hello
          </>
          
        )):null}
      </div>
    </div>
    
  );
};

export default ProfilePage;
