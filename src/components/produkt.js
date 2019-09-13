import React, { Fragment,useEffect,useState } from "react";
import axios from "axios";
//import Header from "./header.js";

const Produkt = () => {
     const [loading, setLoading] = useState(false);

     useEffect(() => {
       const getCockpitProdukterna = async () => {
         setLoading(true);
         const result = await axios.get(
           "http://localhost:8080/api/collections/get/produkterna"
         );
         console.log(result);
         //storeArticles(result.data.entries);
         setLoading(false);
       };
       getCockpitProdukterna();
     }, []);

  return (
    <Fragment>
      
      <h1 className="text-center">Produktens detalj</h1>
    </Fragment>
  );
};

export default Produkt;
