import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../../styles/Layout.css";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {/* Conditional rendering based on user role */}
          {user?.role === "organisation" && (
            <>
              {/* Sidebar menu items for organisation role */}
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Admin</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/admin" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/admin">admin</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/supportteam" && "active"
                }`}
              >
                <i className="fa-solid fa-supportteam"></i>
                <Link to="/supportteam">supportteam</Link>
              </div>
            </>
          )}
          {user?.role === "admin" && (
            <>
              {/* Sidebar menu items for admin role */}
              <div
                className={`menu-item ${
                  location.pathname === "/admin-list" && "active"
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/admin-list">admin List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/supportteam-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/supportteam-list">supportteam List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-solid fa-supportteam"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}
          {(user?.role === "admin" || user?.role === "supportteam") && (
            // Common sidebar menu item for both admin and support team roles
            <div
              className={`menu-item ${
                location.pathname === "/orgnaisation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/orgnaisation">Staff</Link>
            </div>
          )}
          {user?.role === "supportteam" && (
            // Sidebar menu item for support team role
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          )}
          {/* Additional sidebar menu items labeled as field1, field2, and so on */}
          {[1, 2, 3, 4, 5, 6].map((field, index) => (
            <div
              key={index}
              className={`menu-item ${location.pathname === `/field${field}` && "active"}`}
            >
              <i className="fa-solid fa-circle"></i>
              <Link to={`/field${field}`}>Field {field}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
