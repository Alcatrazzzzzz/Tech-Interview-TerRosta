import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AdressSearch } from "./components/AdressSearch";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { News } from "./components/News";

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route component={News} exact path="/"></Route>
          <Route component={AdressSearch} exact path="/address"></Route>
        </Switch>
      </Main>
    </Router>
  );
}

export default App;
