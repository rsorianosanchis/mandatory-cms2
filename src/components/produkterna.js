import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
//import Header from "./header.js";
import Enkelt from "./enkelt.js";
import Spinner from "./spinner.js";
import Pagination from "./pagination.js";

const Produkterna = () => {
  //
  const [produkterna, setProdukterna] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dolja,setDolja] = useState(false);
  //const [iLager,setILager] = useState({produktId:'',minus:''})
  //
  const [currentPage, setCurrentPage] = useState(1);
  const [produkterPerSidan, setProdukterSidan] = useState(5);
  //


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
  }, [dolja]);

  const doljaProdukt = e =>{
    console.log(e.target.checked);
    setDolja(e.target.checked);
  };
  //
  const indexOfLastProdukt = currentPage * produkterPerSidan;
  const indexOfFirstProdukt = indexOfLastProdukt - produkterPerSidan;
  const currentProdukterna = produkterna.slice(indexOfFirstProdukt, indexOfLastProdukt);
  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const setAntal = antal => setProdukterSidan(antal);
  //
  //lagersaldo kontroll (_id /och/ antal av köpte)
  //const kontrolLager = dataLager => setILager (dataLager);
  

  return (
    <Fragment>
      <h3 className="text-center">List av produkterna</h3>
      <form action="#">
        <p>
          <label>
            <input
              type="checkbox"
              className="filled-in"
              onChange={doljaProdukt}
            />
            <span style={{ fontSize: "16px" }}>Visa inte utan lager</span>
          </label>
        </p>
      </form>
      <ul className="row">
        {loading ? (
          <Spinner />
        ) : (
          currentProdukterna.map(produkt =>
            dolja === true && parseInt(produkt.lagersaldo) === 0 ? (
              console.log(produkt.lagersaldo)
            ) : (
              <Enkelt
                key={produkt._id}
                namn={produkt.namn}
                pris={produkt.pris}
                bild={produkt.bilder[0].path}
                id={produkt._id}
              />
            )
          )
        )}
      </ul>
      <div className="col">
        <Pagination
          produkterPerSidan={produkterPerSidan}
          totalProdukter={produkterna.length}
          paginate={paginate}
          setAntal={setAntal}
        />
      </div>
    </Fragment>
  );
};

export default Produkterna;
