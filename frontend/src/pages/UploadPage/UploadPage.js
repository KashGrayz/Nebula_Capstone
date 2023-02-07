import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import "./UploadPage.css"


const UploadPage = () => {
    const [user, token] = useAuth();
    // const [setUploadedImg] = useState(false)
    const [imageName, setImageName] = useState("");
    const [imageDesc, setImageDesc] = useState("");
    const [upDate, setUpDate] = useState("");
    const [iFile, setIFile] = useState("");
  
    const handleChange = (event) => {
      let selectedFile = event.target.files[0];
      setIFile(selectedFile);
    };
  
    async function postUploaded() {
      let image = new FormData();
      image.append("image", iFile);
      image.append("user_id", user.id);
      image.append("img_name", imageName);
      image.append("img_description", imageDesc);
      image.append("upload_date", upDate);
      debugger;
      try {
        await axios.post("http://127.0.0.1:8000/api/uploaded/", image, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: " Bearer " + token,
          },
        });
      } catch (error) {
        console.log("Error in uploading image: ", error.response.data);
      }
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      // alert('Image Uploaded!')
      await postUploaded();
    }
  
    return (
      <div className="container">
        <form className="uform" onSubmit={handleSubmit}>
          <label>
            Image Name:{" "}
            <input
              type="text"
              name="image_name"
              value={imageName}
              onChange={(event) => setImageName(event.target.value)}
            />
          </label>
          <label>
            Image Description:{" "}
            <textarea
              type="text"
              name="image_description"
              value={imageDesc}
              rows="3"
              cols="30"
              onChange={(event) => setImageDesc(event.target.value)}
            />
          </label>
          <label>
            Date:{" "}
            <input
              type="date"
              name="upload_date"
              value={upDate}
              onChange={(event) => setUpDate(event.target.value)}
            />
          </label>
          <label>
            Image:{" "}
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={handleChange}
            />
          </label>
          <div>
            <button type="submit" className="juno1">
            Upload
          </button>
          <button type="reset" className="juno1">
            Reset
          </button>
          </div>
        </form>
      </div>
    );
};

export default UploadPage;