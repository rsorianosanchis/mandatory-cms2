import React, { Fragment,useState,useEffect } from "react";
//import Header from "./header.js";

const Korg = () => {
  const localKorg = localStorage.getItem('korg');
  const korg = JSON.parse(localKorg)
  const [totalKopt,setTotalKopt] = useState(0);
  

  return (
    <Fragment>
      <h1 className="text-center">Korg</h1>
      <table>
        <thead>
          <tr>
            <th>Namn</th>
            <th>Antal</th>
            <th>Item Pris</th>
            <th>Total Pris</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td>ss</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
            <td>ss</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <th>TOTAL KÖPT</th>
            <td>KR</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Korg;
