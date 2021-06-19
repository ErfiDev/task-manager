import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FullLayout from "./components/fullLayout";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import { ToastContainer } from "react-toastify";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  const dis = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      sessionStorage.setItem("token", "");
      return setUserStatus(false);
    } else {
      let read = sessionStorage.getItem("token");
      let decode = jwt.decode(read, { complete: true });
      if (!decode) {
        return setUserStatus(false);
      } else {
        dis({ type: "SET_USER", payload: decode.payload });
        setTimeout(() => {
          setUserStatus(true);
        }, 1000);
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route path="/user/:uuid" component={FullLayout} />
        <Route path="/register" component={Register} />
        <Route path="/" exact>
          {!userStatus ? (
            <Login />
          ) : (
            <Redirect to={`/user/${user.token.uuid}`} />
          )}
        </Route>
      </Switch>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
