import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header.js";
import Produkterna from "./components/produkterna.js";
import Produkt from "./components/produkt.js";
import Korg from "./components/korg.js";
import Formul from "./components/formul.js";
import Bekraft from "./components/modal.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <Router>
      <Header />
      <main className="">
        <Switch>
          <Route exact path="/" component={Produkterna} />
          <Route path="/produkt/:id" component={Produkt} />
          <Route path="/korg" component={Korg} />
          <Route path="/formul" component={Formul} />
          <Route path="/modal" component={Bekraft} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
