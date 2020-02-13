import React from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Contact from "./Contact";
import Works from "./Works";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/works" component={Works} />
  </Switch>
);

export default Main;
