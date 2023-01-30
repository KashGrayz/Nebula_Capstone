import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";


const Navbar = ({search, setSearch, getImages, image}) => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/landing" style={{ textDecoration: "none", color:"black"}}>
            <b>NEBULA</b>
          </Link>
        </li>
        <li>
          <Link to="/profilepage" >
              <img src="./planets-1515751-1286060.webp" alt="" style={{ width: "30px", height:"30px"}}></img>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
