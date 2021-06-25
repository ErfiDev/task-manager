import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./sideBar";
import Main from "./main";
import Admin from "./admin";
import Setting from "./setting";
import Task from "./task";
import Tasks from "./tasks";
import AddTask from "./addTask";
import Account from "./account";
import { ChangePassword, ChangeProfile, ChangeUsername } from "./common";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

const Layout = () => {
  const user = useSelector((state) => state.user);
  const dis = useDispatch();

  useEffect(() => {
    async function fixUserReducer() {
      if (Object.keys(user).length === 0) {
        let readToken = localStorage.getItem("token");
        let { payload } = await jwt.decode(readToken, { complete: true });
        return dis({ type: "SET_USER", payload: payload.token });
      } else {
        return null;
      }
    }

    fixUserReducer();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="layout">
      <SideBar />
      <Switch>
        <Route path="/user/:uuid/addTask" component={AddTask} />
        <Route path="/user/:uuid/allTasks" component={Tasks} />
        <Route path="/user/:uuid/task/:uuid" component={Task} />
        <Route path="/user/:uuid/setting" component={Setting} />
        <Route path="/user/:uuid/admin" component={Admin} />
        <Route path="/user/:uuid/account" component={Account} />
        <Route path="/user/:uuid/ChangePassword" component={ChangePassword} />
        <Route path="/user/:uuid/ChangeProfile" component={ChangeProfile} />
        <Route path="/user/:uuid/ChangeUsername" component={ChangeUsername} />
        <Route path="/user/:uuid/" exact component={Main} />
      </Switch>
    </div>
  );
};

export default Layout;
