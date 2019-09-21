import React, { useState, useEffect, Fragment } from "react";
import {NavLink } from "react-router-dom";

const Header = () => {
  

  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo left">
          Geeks Butiken 
        </NavLink>
        <ul id="nav-mobile" className="right">
          <li>
            <NavLink to="/korg">
              <i className="material-icons">local_grocery_store</i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
