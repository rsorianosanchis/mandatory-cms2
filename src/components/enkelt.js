import React from "react";
import { Link } from "react-router-dom";

const Enkelt = ({ namn, pris, bild, id }) => {
  return (
    <div className="col s3 m7">
      <div className="card">
        <span className="card-title">{namn}</span>
        <div className="card-image">
          <img src={`http://localhost:8080/${bild}`} alt={namn} />
        </div>
        <div className="card-content">
          <p>{pris} kr</p>
        </div>
        <div className="card-action">
          <Link to={`/produkt/${id}`}>Se Detaljer</Link>
        </div>
      </div>
    </div>
  );
};

export default Enkelt;
