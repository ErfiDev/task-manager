import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FilterTasksAction from "../actions/filterTasksAction";

const Main = ({ match }) => {
  const { username } = useSelector((state) => state.user);
  const { complete, unComplete, all } = useSelector(
    (state) => state.FilterTasks
  );
  const dis = useDispatch();

  useEffect(() => {
    function get() {
      dis(FilterTasksAction(match.params.uuid));
    }
    get();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <h1 className="main-h1">Hi {username}!</h1>
      <ul className="main-list">
        <li>Your All Tasks : {all}</li>
        <li>Your Completed Tasks : {complete}</li>
        <li>Your UnCompleted Tasks : {unComplete}</li>
      </ul>
      <Link className="back-link" to={`/user/${match.params.uuid}/addTask`}>
        Add Task
      </Link>
    </div>
  );
};

export default Main;
