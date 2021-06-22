import React, { Fragment, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "./App.layout";
import BackDrop from "./components/backdrop";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [timeToggle, setTimeToggle] = useState(true);
  const dis = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    async function status() {
      const loggedIn = localStorage.getItem("loggedIn");
      // eslint-disable-next-line
      if (!loggedIn || loggedIn == 0) {
        localStorage.setItem("token", "");
        localStorage.setItem("loggedIn", 0);
        setTimeout(() => {
          setTimeToggle(false);
        }, 2500);
        return setUserStatus(false);
      }
      // eslint-disable-next-line
      if (loggedIn == 1) {
        let now = Date.now();
        let exp = localStorage.getItem("exp");
        if (now > exp) {
          localStorage.removeItem("token");
          localStorage.removeItem("exp");
          localStorage.removeItem("loggedIn");
          setTimeout(() => {
            setTimeToggle(false);
          }, 2500);
          return setUserStatus(false);
        } else {
          const token = await localStorage.getItem("token");
          if (!token) {
            setTimeout(() => {
              setTimeToggle(false);
            }, 2500);
            return setUserStatus(false);
          } else {
            let decode = await jwt.decode(token, { complete: true });
            if (!decode) {
              setTimeout(() => {
                setTimeToggle(false);
              }, 2500);
              return userStatus(false);
            } else {
              await dis({ type: "SET_USER", payload: decode.payload.token });
              setTimeout(() => {
                setTimeToggle(false);
              }, 2500);
              return setUserStatus(true);
            }
          }
        }
      }
    }

    status();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {timeToggle ? (
        <BackDrop />
      ) : (
        <AppLayout userStatus={userStatus} userData={user} />
      )}
    </Fragment>
  );
};

export default App;
