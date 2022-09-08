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
import BookDetail from "./BookApp/Book/BookDetail";
import BookCreate from "./BookApp/Book/BookCreate";
import AuthorCreate from "./BookApp/Author/AuthorCreate";
import Cart from "./BookApp/Book/Cart";
import CustomRoute from "./utils/CustomRoute";

const Routes = () => {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Switch>
          {/* <Route path="/form" exact component={FormComp} />
          <Route path="/use-memo" exact component={UseMemoComp} />
          <Route path="/contact-app" exact component={ContactApp} />
          <Route path="/api" exact component={ApiComp} />
          <Route path="/second/:id" exact component={SecondRoute} /> */}
          <Route path="/" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <CustomRoute path="/books" exact component={BooksList} />
          <CustomRoute path="/book-detail" exact component={BookDetail} />
          <CustomRoute path="/book-create" exact component={BookCreate} />
          <CustomRoute path="/author-create" exact component={AuthorCreate} />
          <CustomRoute path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
