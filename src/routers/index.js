import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, About } from "../pages";

export default function index() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
}
