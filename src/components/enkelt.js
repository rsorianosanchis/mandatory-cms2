import React from "react";
import { Link } from "react-router-dom";

const Enkelt = ({ namn, pris, bild, id }) => {
  return (
    <li className="col s12 m7" refsearch={namn}>
      <div className="card medium">
        <span className="card-title ">{namn}</span>
        <div className="card-image">
          <img src={`http://localhost:8080/${bild}`} alt={namn} />
        </div>
        <div className="card-content">
          <p>{pris} kr</p>
        </div>
        <div className="card-action">
          <Link
            className=" waves-effect waves-light btn-small"
            to={`/produkt/${id}`}
          >
            Mer
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Enkelt;
