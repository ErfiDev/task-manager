import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FullLayout from "./components/fullLayout";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/404";

const AppLayout = ({ userStatus, userData }) => {
  return (
    <Fragment>
      <Switch>
        <Route path="/user/:uuid" component={FullLayout} />
        <Route path="/register" component={Register} />
        <Route path="/" exact>
          {!userStatus ? <Login /> : <Redirect to={`/user/${userData.uuid}`} />}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default AppLayout;
