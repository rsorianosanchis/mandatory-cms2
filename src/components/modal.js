import React from "react";
import { Link } from "react-router-dom";

const Bekraft = ({ namn, adress }) => {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Tack för ditt köp!</span>
            <p>Ditt köp är på väg till {namn}s namn på följande adress: </p>
            <br />
            <p>{adress}</p>
          </div>
          <div class="card-action">
            <Link
              to="/"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Stäng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bekraft;
