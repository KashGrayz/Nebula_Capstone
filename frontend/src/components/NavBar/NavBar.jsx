import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import logo from './astronaut.png'


const Navbar = () => {
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
          <Link to="/">
              <img src={logo} alt="profile icon" className="logo"/>
          </Link>
        </li>
        <li>
          {user ? (
            <button className="juno1" onClick={logoutUser}>Logout <span>&#8618;</span></button>
          ) : (
            <button className="juno1" onClick={() => navigate("/login")}>Login <span>&#8617;</span></button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
