import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
//import Header from "./header.js";

const Produkterna = () => {

  const [loading, setLoading] = useState(false);
  const [produkterna,setProdukterna] = useState([]);
  
  useEffect(() => {
    const getCockpitProdukterna = async () => {
      setLoading(true);
      const result = await axios.get(
        "http://localhost:8080/api/collections/get/produkterna"
      );
      console.log(result.data.entries);
      setProdukterna(result.data.entries);
      setLoading(false);
    };
    getCockpitProdukterna();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center">List av produkterna</h1>
    </Fragment>
  );
};

export default Produkterna;
