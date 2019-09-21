import React, { Fragment, useState, useEffect } from "react";
//import Header from "./header.js";

const Korg = () => {
  const localKorg = localStorage.getItem("korg");
  const korg = JSON.parse(localKorg);
  let total = 0;
  korg.map(item=>{
    total=total+item.prisTotal;
  })

  useEffect(()=>{

  })
  
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
          {korg.map((produkt,index )=>{
              
              return <tr key={index}>
                <td>{produkt.namn}</td>
                <td>{produkt.itemAntal}</td>
                <td>{produkt.pris}</td>
                <td>{produkt.prisTotal}</td>
              </tr>}
            )
          }
          <tr>
            <td></td>
            <td></td>
            <th>TOTAL KÖPT</th>
            <td>{total} KR</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Korg;
