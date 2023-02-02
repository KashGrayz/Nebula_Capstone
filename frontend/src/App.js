// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import LandingPage from "./pages/LandingPage/LandingPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import useAuth from "./hooks/useAuth";
import ImageDetails from "./pages/ImageDetails/ImageDetails";


function App() {

  const [user, token] = useAuth();
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/details" element={<ImageDetails/>} />
        <Route path="/upload" element={<UploadPage/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
