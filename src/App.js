import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header.js";
import Produkterna from "./components/produkterna.js";
import Produkt from "./components/produkt.js";
import Korg from "./components/korg.js";
import Formul from "./components/formul.js";

function App() {
  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exact path="/" component={Produkterna} />
          <Route path="/produkt/:id" component={Produkt} />
          <Route path="/korg" component={Korg} />
          <Route path="/formul" component={Formul} />
        </Switch>
      </main>
      <p className="mt-4 p2 text-center">rsorianosanchis@gmail.com</p>
    </Router>
  );
}

export default App;
