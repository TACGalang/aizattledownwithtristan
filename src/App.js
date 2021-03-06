import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home.js";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/rsvp"
            exact
            component={() => {
              let a = document.createElement("a");
              a.target = "_blank";
              a.href =
                "https://www.theknot.com/us/aiza-teodoro-and-tristan-galang-jan-2022-7c74913b-ec40-4889-8de0-ea1b353935b0/rsvp";
              a.click();
              return "/";
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
