import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactApp from "./components/ContactApp";
import FormComp from "./components/FormComp";
import UseMemoComp from "./components/UseMemoComp";
import "./App.css";
import Navbar from "./components/Navbar";
import ApiComp from "./components/ApiComp";
import FirstRoute from "./components/FirstRoute";
import SecondRoute from "./components/SecondRoute";
import CounterRedux from "./components/CounterRedux";
import Signup from "./BookApp/User/Signup";
import { ToastContainer, toast } from "react-toastify";
import Signin from "./BookApp/User/Signin";
import BooksList from "./BookApp/Book/BooksList";

const Routes = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <ToastContainer/>
        <Switch>
          {/* <Route path="/form" exact component={FormComp} />
          <Route path="/use-memo" exact component={UseMemoComp} />
          <Route path="/contact-app" exact component={ContactApp} />
          <Route path="/api" exact component={ApiComp} />
          <Route path="/second/:id" exact component={SecondRoute} /> */}
          <Route path="/" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/books" exact component={BooksList} />

        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
