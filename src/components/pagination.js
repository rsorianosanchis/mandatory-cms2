import React,{Fragment} from 'react';

function Pagination({ produkterPerSidan, totalProdukter, paginate,setAntal}) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProdukter/produkterPerSidan); i++) {
        pageNumbers.push(i);     
    }
    return (
      <Fragment>
        <div className="form-group">
          <label htmlFor="exampleSelect2">
            <p>Välja antal per sidan</p>
          </label>
          <select
            onChange={e => {
              e.preventDefault();
              let antal = parseInt(e.target.value);
              console.log(typeof antal);
              setAntal(antal);
            }}
            multiple=""
            className="form-control"
            id="exampleSelect2"
          >
            <option>Antal av produkter per sidan</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>10</option>
            <option>100</option>
          </select>
        </div>
        <div>
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number} className="page-item">
                <a
                  onClick={e => {
                    e.preventDefault();
                    paginate(number);
                  }}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
}
export default Pagination;