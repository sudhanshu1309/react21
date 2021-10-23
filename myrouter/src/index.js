import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./User";
import Visit from "./Visit";
import notfound from "./notfound";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/visit">Visit</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/visit" component={Visit}></Route>
      <Route component={notfound}></Route>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
