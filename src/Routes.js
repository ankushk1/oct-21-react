import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactApp from "./components/ContactApp";
import FormComp from "./components/FormComp";
import UseMemoComp from "./components/UseMemoComp";
const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={FormComp} />
          <Route path="/use-memo" exact component={UseMemoComp} />
          <Route path="/contact-app" exact component={ContactApp} />
          <Route path="/contact-app-list-item" exact component={ContactApp} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
