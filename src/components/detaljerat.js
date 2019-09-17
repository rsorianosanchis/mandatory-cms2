import React, { useState, useEffect, Fragment } from "react";
//import { Link, Redirect } from "react-router-dom";
const ReactMarkdown = require("react-markdown");

const Detaljerat = ({ produktObj }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery([]);
    setGallery(produktObj.bilder)
    
   
  }, []);
  
  return (
    <div className="card mb-3">
      <h3 className="card-header">{produktObj.namn}</h3>
      <div className="card-body">
        <h5 className="card-title">Pris: {produktObj.pris} SEK</h5>
        <h6 className="card-subtitle text-muted">
          I lager: {produktObj.lagersaldo}
        </h6>
      </div>
      <div className='row'>
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
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
};

export default Detaljerat;
