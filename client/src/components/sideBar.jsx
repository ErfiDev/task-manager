import React from "react";
import {
  Cancel,
  Settings,
  Person,
  Assignment,
  AddCircle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { sideBar } from "../utils/utils";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { token } = useSelector((state) => state.user);
  const { uuid } = token;

  return (
    <div className="side-bar">
      <button className="side-bar-close" onClick={() => sideBar(false)}>
        <Cancel fontSize="large" color="inherit" />
      </button>
      <ul className="side-bar-ul">
        <li className="side-bar-ul-li" onClick={() => sideBar(false)}>
          <Link to={`/user/${uuid}/addTask`}>
            <AddCircle fontSize="inherit" color="inherit" />
            &nbsp; Add Task
          </Link>
        </li>
        <li className="side-bar-ul-li" onClick={() => sideBar(false)}>
          <Link to={`/user/${uuid}/allTasks`}>
            <Assignment fontSize="inherit" color="inherit" />
            &nbsp; All Tasks
          </Link>
        </li>
        <li className="side-bar-ul-li" onClick={() => sideBar(false)}>
          <Link to={`/user/${uuid}/account`}>
            <Person fontSize="inherit" color="inherit" />
            &nbsp; Account
          </Link>
        </li>
        <li className="side-bar-ul-li" onClick={() => sideBar(false)}>
          <Link to={`/user/${uuid}/setting`}>
            <Settings fontSize="inherit" color="inherit" />
            &nbsp; Setting
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
