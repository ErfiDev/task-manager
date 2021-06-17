import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FullLayout from "./components/fullLayout";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("token", "");
      return setUserStatus(false);
    } else {
      return setUserStatus(true);
    }
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route path="/user/:uuid" component={FullLayout} />
        <Route path="/register" component={Register} />
        <Route path="/" exact>
          {!userStatus ? <Login /> : <Redirect to="/user/erfan" />}
        </Route>
      </Switch>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
