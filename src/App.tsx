import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Data from "./components/data.js";
import Home from "./components/home.js";
import Users from "./components/users.js";

const App = () => {
  return (
    <Router>
      <div>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/data" component={Data} />
              <Route path="/users" component={Users} />
              <Route path="/users/:userI" component={Users} />
            </Switch>
          </div>
        </Router>
      </div>
    </Router>
  );
};

export default App;
