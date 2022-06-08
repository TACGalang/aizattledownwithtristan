import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ComingSoon from "./Components/ComingSoon";
import React from "react";

const App: React.FC = () => {
  const isComingSoon = false;

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={isComingSoon ? ComingSoon : Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
