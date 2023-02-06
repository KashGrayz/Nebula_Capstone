import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import "./UploadPage.css"


const UploadPage = () => {

    const [user ,token] = useAuth();
    // const [setUploadedImg] = useState(false)
    const [imageName, setImageName] = useState("");
    const [imageDesc, setImageDesc] = useState("")
    const [upDate, setUpDate] = useState("");
    const [iFile, setIFile] = useState("");

    // image: `uploaded_imgs/${iFile}`,
    
    
    function postUploaded() {

        let uploadForm = {
        user_id:user.id,
        image_name: imageName,
        image_description: imageDesc,
        upload_date: upDate,
        image: iFile,
        }

        axios  
          .post("http://127.0.0.1:8000/api/uploaded/", uploadForm, {
            headers: {
                Authorization : " Bearer " + token,
            },
          })
          .then((response) => {
            console.log(response.data)
            // setUploadedImg(true)
          })
          .catch((error) => console.log(error.response.data , uploadForm));


    }

    function handleSubmit(event){
        event.preventDefault();
        alert('Image Uploaded!')
        postUploaded()
    }

    return(
        <div className='container'>
            <form className='uform' onSubmit={handleSubmit}>
                <lable>
                    Image Name: {" "}
                    <input
                    type="text"
                    name='image_name'
                    value={imageName}
                    onChange={(event) => setImageName(event.target.value)}
                    />
                </lable>
                <lable>
                    Image Description: {" "}
                    <textarea
                    type="text"
                    name='image_description'
                    value={imageDesc}
                    rows="4"
                    cols="30"
                    onChange={(event) => setImageDesc(event.target.value)}
                    />
                </lable>
                <lable>
                    Date: {" "}
                    <input
                    type="date"
                    name="upload_date"
                    value={upDate}
                    onChange={(event) => setUpDate(event.target.value)}
                    />
                </lable>
                <lable>
                    Image: {" "}
                    <input
                    type="file"
                    name="image"
                    value={iFile}
                    accept=".png, .jpg, .jpeg"
                    onChange={(event) => setIFile(event.target.value)} 
                    />
                </lable>
                <button type="submit" className="juno1">Upload</button>
                <button type="reset" className="juno1">Reset</button>
            </form>
        </div>

    );
}

export default UploadPage;