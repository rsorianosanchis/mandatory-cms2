import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "./spinner.js";
import Detaljerat from "./detaljerat.js";
import Recensioner from './recensioner.js';


const Produkt = props => {
  const [produkt, setProdukt] = useState([]);
  const [recensioner, setRecensioner] = useState([]);
  const [loading, setLoading] = useState(false);
  const [produktLager, updateProduktLager] = useState(0);

  // falta poner en array  de ue efect si hay camnios en id o no
  // falta condicional en render de , si loading es true mostrar cargando
  useEffect(() => {
    //
    const id = props.match.params.id;
    //
    const getProduktData = async () => {
      setLoading(true);
      const getProdukt = await axios.get(
        `http://localhost:8080/api/collections/get/produkterna?filter[_id]=${id}`
      );
      console.log(getProdukt.data.entries[0]);
      setProdukt(getProdukt.data.entries[0]);
      getProduktRecensioner();
      setLoading(false);
    };
    //
    const getProduktRecensioner = async () => {
      const getRecensioner = await axios.get(
        `http://localhost:8080/api/collections/get/recensioner`
      );
      console.log(getRecensioner.data.entries);
      const result = getRecensioner.data.entries.map(item => item.produkt_ref._id === produkt._id)
      setRecensioner(result);
      
      
    };
    getProduktData();
    
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="text-center">Produktens detalj</h1>
      <Detaljerat produktObj={produkt} />
      <Recensioner produktId={produkt._id} recensioner={recensioner} />
    </Fragment>
  );
};

export default Produkt;

