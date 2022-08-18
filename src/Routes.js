import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactApp from "./components/ContactApp";
import FormComp from "./components/FormComp";
import UseMemoComp from "./components/UseMemoComp";
import "./App.css";
import Navbar from "./components/Navbar";
import ApiComp from './components/ApiComp';
import FirstRoute from "./components/FirstRoute";
import SecondRoute from "./components/SecondRoute";

const Routes = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/form" exact component={FormComp} />
          <Route path="/use-memo" exact component={UseMemoComp} />
          <Route path="/contact-app" exact component={ContactApp} />
          <Route path="/api" exact component={ApiComp} />
          <Route path="/" exact component={FirstRoute} />
          <Route path="/second/:id" exact component={SecondRoute} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
