import React from "react";
import { Waypoint } from "react-waypoint";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home/index";
import Article from "./Insights/Article";

import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/insights" component={Article} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
