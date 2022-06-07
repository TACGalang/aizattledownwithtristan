import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
