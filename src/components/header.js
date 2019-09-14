import React from "react";
import {NavLink } from "react-router-dom";

const Header = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Geeks Butiken
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/korg" className="nav-link">Korg</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
