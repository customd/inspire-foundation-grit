import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/Scroll";
import Home from "./Home/index";
import Article from "./Insights/Article";

import "./styles/App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/insights" component={Article} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
