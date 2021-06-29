import React from "react";
import { Done, Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Task from "../services/taskService";
import { useDispatch, useSelector } from "react-redux";
import DateUtil from "../utils/date";
import Toast from "../utils/toast";

const SingleTask = ({ title, time, uuidTask, uuid, status }) => {
  const tasks = useSelector((state) => state.tasks);
  const dis = useDispatch();

  let newD = new DateUtil(time, " - - ");
  let refactorDate = newD.getDate();

  async function deleteTask(uuidT) {
    try {
      const { data } = await Task.deleteTask(uuid, uuidTask);
      if (data.status === 200) {
        let filter = await tasks.filter((item) => item.uuid !== uuidT);
        dis({ type: "SET_TASKS", payload: filter });
        return Toast(data.msg);
      } else {
        Toast(data.msg, "error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function completeTask(uuUser, uuTask) {
    try {
      let { data } = await Task.editTask(uuUser, uuTask, { status: true });
      if (data.status === 200) {
        updateTask(uuUser, uuTask);
        return Toast("Task Completed");
      } else {
        Toast(data.msg, "error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTask(user, task) {
    let { data } = await Task.getSpecificTask(user, task);
    let filter = await tasks.filter((item) => item.uuid !== task);
    await filter.push(data);
    dis({ type: "SET_TASKS", payload: filter });
  }

  return (
    <div
      id={uuidTask}
      className={status ? "completed-task single-task" : "single-task"}
    >
      <h1 className="single-task-title">{title}</h1>
      <h5 style={{ marginTop: "10px" }} className="single-task-time">
        {refactorDate}
      </h5>
      <div className="single-task-status-container">
        <Button
          className={status ? "off-btn-task" : ""}
          onClick={() => completeTask(uuid, uuidTask)}
          variant="contained"
          color="primary"
        >
          <Done color="inherit" />
        </Button>
        <Button
          className="single-task-btn-close"
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="secondary"
          onClick={() => deleteTask(uuidTask)}
        >
          <Close color="inherit" />
        </Button>
      </div>
    </div>
  );
};

export default SingleTask;
