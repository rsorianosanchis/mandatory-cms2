import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./spinner.js";

//import Header from "./header.js";
//aqui obtenemos de nuevo el saldo del producto
//los params de la url

const Produkt = (props) => {
  const [produkt,setProdukt] = useState({})
  const [recensioner,setRecensioner] = useState([])

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
      
      setLoading(false);
    };

    const getProduktRecensioner = async ()=>{
      const getRecensioner = await axios.get(
        `http://localhost:8080/api/collections/get/recensioner`
      );
      const produktRecensioner = getRecensioner.map(recension => recension.namn === produkt.namn)
      console.log(produktRecensioner);
      
    }
    //
    getProduktData();
    getProduktRecensioner();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center">Produktens detalj</h1>
      <h2>{produkt.namn}</h2>
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
