import React, { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Main = ({ match }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [UncompletedTasks, setUnCompletedTasks] = useState([]);
  const { username } = useSelector((state) => state.user);

  useEffect(() => {
    async function get() {
      const res = await getTasks(match.params.uuid);
      return setTasks(res.data.tasks);
    }
    get();
    let filterCompleted = tasks.filter((item) => item.status === true);
    let filterUnCompleted = tasks.filter((item) => item.status === false);
    setCompletedTasks(filterCompleted);
    setUnCompletedTasks(filterUnCompleted);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main">
      <h1 className="main-h1">Welcome {username}!</h1>
      <ul className="main-list">
        <li>Your All Tasks {tasks.length}</li>
        <li>Your Completed Tasks {completedTasks.length}</li>
        <li>Your UnCompleted Tasks {UncompletedTasks.length}</li>
      </ul>
      <Link className="main-link" to={`/user/${match.params.uuid}/addTask`}>
        Add Task
      </Link>
    </div>
  );
};

export default Main;
