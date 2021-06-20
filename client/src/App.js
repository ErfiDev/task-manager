import React, { Fragment, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import FullLayout from "./components/fullLayout";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import { ToastContainer } from "react-toastify";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "./components/404";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App = () => {
  const [userStatus, setUserStatus] = useState();
  const dis = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    status();
  }, []);

  async function status() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn || loggedIn == 0) {
      localStorage.setItem("token", "");
      localStorage.setItem("loggedIn", 0);
      return setUserStatus(false);
    }
    if (loggedIn == 1) {
      let now = Date.now();
      let exp = localStorage.getItem("exp");
      if (now > exp) {
        return setUserStatus(false);
      } else {
        const token = await localStorage.getItem("token");
        if (!token) {
          return setUserStatus(false);
        } else {
          let { payload } = await jwt.decode(token, { complete: true });
          await dis({ type: "SET_USER", payload: payload.token });
          return setUserStatus(true);
        }
      }
    }
  }

  return (
    <Fragment>
      <Switch>
        <Route path="/user/:uuid" component={FullLayout} />
        <Route path="/register" component={Register} />
        <Route path="/" exact>
          {!userStatus ? <Login /> : <Redirect to={`/user/${user.uuid}`} />}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
