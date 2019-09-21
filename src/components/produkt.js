import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "./spinner.js";
import Detaljerat from "./detaljerat.js";
import Recension from "./recension.js";

const Produkt = props => {
  const [produkt, setProdukt] = useState([]);
  const [recensioner, setRecensioner] = useState([]);
  const [loading, setLoading] = useState(false);
  

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
        //console.log(produkt);
      setLoading(false);
    };
    //
    const getProduktRecensioner = async () => {
      setRecensioner([]);
      const getRecensioner = await axios.get(
        `http://localhost:8080/api/collections/get/recensioner`
      );
      console.log(getRecensioner.data.entries);
      /*const result = getRecensioner.data.entries.map(item =>console.log(item.produkt_ref._id)
      )*/
      const x = [];
      getRecensioner.data.entries.map(item => {
        
        if (item.produkt_ref._id === id) {
          console.log("yes inne");
          console.log(item);
    
          x.push(item)
          
          console.log(recensioner);
        }
      });

      setRecensioner(x);
    };
    getProduktData();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <Detaljerat produktObj={produkt} />
      <Recension recensioner={recensioner} />
    </Fragment>
  );
};

export default Produkt;
