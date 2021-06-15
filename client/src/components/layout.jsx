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
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/addTask" component={AddTask} />
        <Route path="/allTasks" component={Tasks} />
        <Route path="/task/:uuid" component={Task} />
        <Route path="/setting" component={Setting} />
        <Route path="/admin" component={Admin} />
        <Route
          path="/account"
          render={() => {
            <Account
              allTask={14}
              joinedDate="2021,4,10"
              username="erfanHanifezade"
            />;
          }}
        />
        <Route path="/" exact component={Main} />
      </Switch>
    </div>
  );
};

export default Layout;
