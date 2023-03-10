import React from "react";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import useAuth from "../../hooks/useAuth";
import "./ProfilePage.css"
import axios from "axios";

const ProfilePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

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

  function handleClick() {
    navigate('/upload')
  };

  return (
    <div>
      <h3 className="welcome">Welcome {user.username}!</h3>
      <div>
        <h3 className="welcome2">Uploaded Images </h3><button className="juno3" type="submit" onClick={handleClick}>Upload Image &#9974;</button>
        <div className="profile">
          { isLoaded ? data.uploaded_imgs.map((el) => (
            <><img
            src={`http://127.0.0.1:8000${el.image}`}
            alt={`http://127.0.0.1:8000${el.image_name}`}
            />
            </>
            
          )):null}
        </div>
      </div>
      <div className="container-data">
        <div className="InfoTable">
          <table>
            <caption className="welcome2">Saved User Image Data</caption>
            <thead>
              <tr className="InfoHeaders">
              <td>Name</td>
              <td>Description</td>
              <td>Upload Date</td>
            </tr>
            </thead>
            <tbody>
              {isLoaded ? data.saved_imgs.map((el) => { 
                return (
                  <tr>
                    <td>{el.img_name}</td>
                    <td>{el.img_description}</td>
                    <td>{el.upload_date}</td>
                  </tr>
                );
              }):null}
            </tbody>
          </table>
        </div>
        <div className="InfoTable">
          <table>
            <caption className="welcome2">Saved Nasa Image Data</caption>
            <thead>
              <tr className="InfoHeaders">
                <td>Nasa ID</td>
                <td>Image URL</td>
              </tr>
            </thead>
            <tbody>
              {isLoaded ? data.external_imgs.map((el) => {
                return(
                <tr>
                  <td>{el.nasa_id}</td>
                  <td>{el.href}</td>
                </tr>
                )
              }):null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
};

export default ProfilePage;
