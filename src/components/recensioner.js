
import React, { useState, useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
const ReactMarkdown = require("react-markdown");

const Recensioner = ({produktId,recensioner}) => {
   // const [gallery, setGallery] = useState([]);

    useEffect(() => {
        console.log(produktId);
        console.log(recensioner);
        
        

      
    }, []);

    return (
      <div>
        <div className="card border-dark mb-3" style={{maxwidth: '20rem'}}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Dark card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Recensioner;