import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import FullLayout from "./components/fullLayout";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import "./styles/index.scss";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/user/:uuid" component={FullLayout} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Login} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
