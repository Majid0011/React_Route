import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Login from "./Login";
const routing = (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
