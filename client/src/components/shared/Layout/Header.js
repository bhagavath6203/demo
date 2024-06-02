import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid ">
          <div className="">
            <BiBook color="lightgreen" /> Pixeltext
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Welcome {user?.name}
                &nbsp;
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/Admin" ||
            location.pathname === "/Supportteam" ? (
              <li className="nav-item mx-3"></li>
            ) : (
              <li className="nav-item mx-3"></li>
            )}
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                <i className="fas fa-power-off"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
