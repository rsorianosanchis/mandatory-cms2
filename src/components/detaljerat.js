import React, { useState, useEffect, Fragment } from "react";
//import { Link, Redirect } from "react-router-dom";
const ReactMarkdown = require("react-markdown");

const Detaljerat = ({ produktObj }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery([]);
    let urlImg = produktObj.bilder;
    //console.log(typeof urlImg);
    //console.log(urlImg);
    for (const key in urlImg) {
      if (urlImg.hasOwnProperty(key)) {
        const item = urlImg[key].path;
        console.log(item);
        gallery.push(item);
      }
    }
    console.log(gallery);
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

      {gallery.map(url => {
        return <img
          style={{ height: "200px", width: "30%", display: "block" }}
          src={`http://localhost:8080/${url}`}
          alt={produktObj.namn}
        />}
      )}

      {/* {produktObj.bilder.map(bild=>
          <img
            style={{ height: "200px", width: "30%", display: "block" }}
            src={`http://localhost:8080/${bild.path}`}
            alt={produktObj.namn}
          />

      )} */}
      {/* <img
        style={{ height: "200px", width: "30%", display: "block" }}
        src={`http://localhost:8080/${produktObj.bilder[1].path}`}
        alt={produktObj.namn}
      />
      <img
        style={{ height: "200px", width: "30%", display: "block" }}
        src={`http://localhost:8080/${produktObj.bilder[2].path}`}
        alt={produktObj.namn}
      /> */}
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
