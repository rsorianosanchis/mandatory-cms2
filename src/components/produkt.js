import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "./spinner.js";
import Detaljerat from "./detaljerat.js";


const Produkt = props => {
  const [produkt, setProdukt] = useState({});
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
      setRecensioner(getRecensioner.data.entries);
    };
    getProduktData();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="text-center">Produktens detalj</h1>
      <h2>{produkt.namn}</h2>
      <Detaljerat produktObj= {produkt}/>
    </Fragment>
  );
};

export default Produkt;

/*********************************/

// const Produkt = () => {
//      const [loading, setLoading] = useState(false);
//      const [produktId, setProduktId] = useState('');
//         setProduktId(()=>{
//             return window.location.pathname.split("/")[2];
//         });

//      useEffect(() => {

//        const getCockpitProdukterna = async () => {
//         if(window.location.pathname.split("/")[2])
//          setLoading(true);
//          const result = await axios.get(
//            `http://localhost:8080/api/collections/get/produkterna?filter[_id]=${produktId}`
//          );
//          console.log(result);
//          //storeArticles(result.data.entries);
//          setLoading(false);
//        };
//        getCockpitProdukterna();
//      }, [produktId]);

//   return (
//     <Fragment>

//       <h1 className="text-center">Produktens detalj</h1>
//     </Fragment>
//   );
// };

// export default Produkt;

// //  `http://localhost:8080/api/collections/get/produkterna?filter[_id]=${produktId}`
// window.location.pathname.split("/")[2];
