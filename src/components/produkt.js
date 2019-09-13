import React, { Fragment,useEffect,useState } from "react";
import axios from "axios";
//import Header from "./header.js";

const Produkt = () => {
     const [loading, setLoading] = useState(false);
     

     useEffect(() => {
        
       const getCockpitProdukterna = async () => {
        
         setLoading(true);
         const result = await axios.get(
           `http://localhost:8080/api/collections/get/produkterna?filter[_id]=5d774d7c666138002d000133`
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