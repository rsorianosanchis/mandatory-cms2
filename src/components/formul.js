import React, { Fragment,useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Bekraft from "./modal.js";

//import Header from "./header.js";

const Formul = () => {
  const [namn,setNamn] = useState('');
  const [adress, setAdress] = useState("");

  const [slut,setSlut] = useState(false)
  const handleSubmit = e=>{
    e.preventDefault();
    // aqui lanzaremos el modal de confirmacion de pedido con los datos
    // aqui borraremos la cesta de la compra, quizas pasando una funcion desde cesta
    console.log(namn);
    console.log(adress);
    setSlut(true);

    
    
    }
    
  

  return (
    !slut?
    <Fragment>
      <h3 className="text-center">Bästelnings Formulär</h3>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                className="validate"
                onChange={e => setNamn(e.target.value)}
              />
              <label htmlFor="email">Namn och Efternamn</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              ></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="text"
                className="validate"
                onChange={e => setAdress(e.target.value)}
              />
              <label htmlFor="email">Adress</label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              ></span>
            </div>
          </div>
          <button
            className="btn-small waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </Fragment>
    :<Bekraft 
    namn = {namn}
    adress = {adress}/>
  );
};

export default Formul;
