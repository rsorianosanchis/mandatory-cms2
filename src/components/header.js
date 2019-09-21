import React, { useState, useEffect, Fragment } from "react";
import {NavLink } from "react-router-dom";

const Header = (props) => {
  const [antalIcon,setAntalIcon] = useState(0);
  //
  useEffect(()=>{
    const temp = localStorage.getItem("korg");
    let x = [];
    let tempAntal = 0;
    if (temp) {
      x = JSON.parse(temp);
      x.map(item=>{
        tempAntal = tempAntal + item.itemAntal
      })
      
    }
    console.log(tempAntal);
    setAntalIcon(tempAntal);
    //setKorgAntalIcon(kor  gAntalIcon);

  },[]);

  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo left">
          Geeks Butiken {antalIcon}
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
