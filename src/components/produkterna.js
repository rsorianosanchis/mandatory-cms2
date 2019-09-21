import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Enkelt from "./enkelt.js";
import Spinner from "./spinner.js";
import Pagination from "./pagination.js";

const Produkterna = () => {
  //
  const [produkterna, setProdukterna] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dolja, setDolja] = useState(false);
  const [searchNamn, setSearchNamn] = useState("");
  const [antalInfo, setAntalInfo] = useState(0);
  //
  //
  const [currentPage, setCurrentPage] = useState(1);
  const [produkterPerSidan, setProdukterSidan] = useState(5);
  //
  useEffect(() => {
    const getCockpitProdukterna = async () => {
      setLoading(true);
      const result = await axios.get(
        `http://localhost:8080/api/collections/get/produkterna?filter[namn][$regex]=${searchNamn}`
      );
      console.log(result.data.entries);
      setProdukterna(result.data.entries);
      setLoading(false);
    };
    getCockpitProdukterna();
  }, [searchNamn]);
  //
  useEffect(() => {
    const temp = localStorage.getItem("korg");
    let x = [];
    let tempAntal = 0;
    if (temp) {
      x = JSON.parse(temp);
      x.map(item => {
        tempAntal = tempAntal + item.itemAntal;
      });
    }
    console.log(tempAntal);
    setAntalInfo(tempAntal);
    //setKorgAntalIcon(kor  gAntalIcon);
  }, []);
  //
  const doljaProdukt = e => {
    console.log(e.target.checked);
    setDolja(e.target.checked);
  };
  //
  const search = e => {
    console.log(e.target.value);
    const namn = e.target.value;
    setSearchNamn(namn);
    //http://localhost:8080/api/collections/get/produkterna?filter[namn][$regex]=npm
  };
  //
  const indexOfLastProdukt = currentPage * produkterPerSidan;
  const indexOfFirstProdukt = indexOfLastProdukt - produkterPerSidan;
  const currentProdukterna = produkterna.slice(
    indexOfFirstProdukt,
    indexOfLastProdukt
  );
  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const setAntal = antal => setProdukterSidan(antal);
  //
  return (
    <Fragment>
      <form action="#" className="row">
        <div className="input-field col s5">
          <i className="material-icons prefix">search</i>
          <input
            id="icon_prefix"
            type="text"
            className="validate2"
            onChange={search}
          />
          <label htmlFor="icon_prefix">Namns produkt</label>
        </div>
        <div className="input-field col s5">
          <label>
            <input
              type="checkbox"
              className="filled-in"
              onChange={doljaProdukt}
            />
            <span style={{ fontSize: "15px" }}>Visa inte utan lager</span>
          </label>
        </div>
        <div className="input-field col s2 right">
          <p
            style={{
              marginTop: "13px",
              fontSize: "15px",
              textAlign: "right",
              color: "#9E9EB7"
            }}
          >
            Du har {antalInfo} produkt i korg
          </p>
        </div>
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
