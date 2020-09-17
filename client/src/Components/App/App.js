import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// COMPONENTS
import Header from "../Header";
import Entrees from "../Recipes/Entrees";
import Plats from "../Recipes/Plats";
import Desserts from "../Recipes/Desserts";
import Boissons from "../Recipes/Boissons";
import Background from "../Background";
import VosRecettes from "../Recipes/VosRecettes";
import Suggest from "../Suggest";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Background} />
      <Route exact path="/" component={Header} />
      <Route path="/entrees" component={Entrees} />
      <Route path="/plats" component={Plats} />
      <Route path="/desserts" component={Desserts} />
      <Route path="/boissons" component={Boissons} />
      <Route path="/vos-recettes" component={VosRecettes} />
      <Route path="/suggest-recipe" component={Suggest} />
    </Router>
  );
}

export default App;
