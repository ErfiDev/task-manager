import React from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./sideBar";
import Main from "./main";
import Login from "./login";
import Register from "./register";
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
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/addTask" exact component={AddTask} />
        <Route path="/allTasks" exact component={Tasks} />
        <Route path="/task/:uuid" exact component={Task} />
        <Route path="/setting" exact component={Setting} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/account" exact component={Account} />
        <Route path="/" exact component={Main} />
      </Switch>
    </div>
  );
};

export default Layout;
