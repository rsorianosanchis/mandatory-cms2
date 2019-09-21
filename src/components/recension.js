import React, { useEffect } from "react";
//import { Link, Redirect } from "react-router-dom";
const ReactMarkdown = require("react-markdown");

const Recension = ({ recensioner }) => {
  //const [produktRecesioner, setProduktRecesioner] = useState([]);

  useEffect(() => {}, []);

  console.log(recensioner[0]);
  const r = recensioner.map((recension, index) => {
    return (
      <div key={index}>
        <div className="card border-dark mb-3" style={{ maxwidth: "20rem" }}>
          <div className="card-header">betyg:{recension.betyg}</div>
          <div className="card-body">
            <h4 className="card-title">{recension.titel}</h4>
            <ReactMarkdown className="card-text">
              {recension.innehall}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  });

  return <>{r}</>;
};

export default Recension;
