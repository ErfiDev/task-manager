import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./sideBar";
import Main from "./main";
import Admin from "./admin";
import Setting from "./setting";
import Task from "./task";
import Tasks from "./tasks";
import AddTask from "./addTask";
import Account from "./account";

const Layout = () => {
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
        <Route path="/user/:uuid/" exact component={Main} />
      </Switch>
    </div>
  );
};

export default Layout;
