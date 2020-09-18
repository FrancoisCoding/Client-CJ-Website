import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import FAQS from "../FAQS/FAQS";
import Home from "../Home/Home";

const Routes = ({}) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faqs" component={FAQS} />
    </Switch>
  );
};

export default Routes;
