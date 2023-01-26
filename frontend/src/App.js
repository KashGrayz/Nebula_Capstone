// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
import SearchPage from "./pages/SearchPage/SearchPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {

  const [search, setSearch] = useState();
  const [user, token] = useAuth();
  const [image, setImage]= useState();
  
  async function getImages(searchTerm) {
    try{
      let response = await axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`)
      if (response.status === 400){
        alert('The Image you are looking for is not available')
      }
      else{
        setImage(response.data);
        console.log('Images info:', response.data.collection.items)
      }
    }
    catch (error) {
      alert('Houston we have a problem')
    }
  }
//     async function getPhotos(){
//     let response = await axios.get('https://images-api.nasa.gov/search?q=nebula&media_type=image')
//     setFeaturedImages(response.data)
//     console.log('Featured Images:', response.data.collection.items[0].href)
// }
//   useEffect(()=>{
//       getPhotos()
//   },[])

  useEffect(()=>{
    getImages()
  },[]);

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} getImages={getImages} image={image}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/search" element={<SearchPage search={search} setSearch={setSearch}  getImages={getImages} image={image} setImage={setImage}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
