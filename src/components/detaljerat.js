import React, { useState, useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { log } from "util";
const ReactMarkdown = require("react-markdown");

const Detaljerat = ({ produktObj }) => {
  const btn =
    "btn waves-effect waves-light light-green lighten-2 left ";
  const btnDis =
    "btn waves-effect waves-light light-green lighten-2 left disabled ";
  const [gallery, setGallery] = useState([]);
  const [produktLager, updateProduktLager] = useState(produktObj.lagersaldo);
  const [antal,setAntal] = useState(0);
  const [btnStatus, setBtnStatus] = useState(btn);

  useEffect(() => {
    setGallery([]);
    setGallery(produktObj.bilder);
   
  }, []);

  const handleClick = (e)=>{
    e.preventDefault();
    updateProduktLager(produktLager-1);
    setAntal(antal+1);
    console.log(e);
     if (produktLager === 1) {
       console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

       setBtnStatus(btnDis);
     }
    e.stopPropagation();
    
  }
  
  return (
    <div className="card mb-3">
      <div>
        <h3 className="card-header">{produktObj.namn}</h3>
      </div>
      <div className="card-body">
        <h5 className="card-title">Pris: {produktObj.pris} SEK</h5>
        <h6 className="card-subtitle text-muted">I lager: {produktLager}</h6>
      </div>
      <div className="row">
        {gallery.map((item, index) => (
          <img
            className="col"
            key={index}
            style={{ height: "200px", width: "30%", display: "block" }}
            src={`http://localhost:8080/${item.path}`}
            alt={produktObj.namn}
          />
        ))}
      </div>
      <div className="card-body">
        <ReactMarkdown className="card-text">
          {produktObj.beskrivning}
        </ReactMarkdown>
      </div>
      <div className="card-footer text-muted">
        {
          <a
            href="!#"
            className={btnStatus}
            onClick={handleClick}
          >
            Lägga till
          </a>
        }

        <a
          href="#"
          className=" btn waves-effect waves-light light-green lighten-2 right "
          
        >
          Confirm {antal}
        </a>
      </div>
    </div>
  );
};

export default Detaljerat;
