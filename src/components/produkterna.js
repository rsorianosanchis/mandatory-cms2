import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
//import Header from "./header.js";
import Enkelt from "./enkelt.js";
import Spinner from "./spinner.js";

const Produkterna = () => {
  const [produkterna, setProdukterna] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <div className="row">
        {loading ? (
          <Spinner />
        ) : (
          produkterna.map(produkt => (
            <Enkelt
              key={produkt._id}
              namn={produkt.namn}
              pris={produkt.pris}
              bild={produkt.bilder[0].path}
              id={produkt._id}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Produkterna;
