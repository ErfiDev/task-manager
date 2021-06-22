import React from "react";
import { Done, Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Task from "../services/taskService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const SingleTask = ({ title, time, uuidTask, uuid, status }) => {
  const tasks = useSelector((state) => state.tasks);
  const dis = useDispatch();

  let date = new Date(time);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  let finalTime = [
    (hour < "9" ? "0" : "") + hour,
    (minute < "9" ? "0" : "") + minute,
  ].join(":");
  let finalDate = [
    year,
    (month < "9" ? "0" : "") + month,
    (day < "9" ? "0" : "") + day,
  ].join("-");
  let final = [finalDate, finalTime].join(" - - ");

  async function deleteTask(uuidT) {
    try {
      const { data } = await Task.deleteTask(uuid, uuidTask);
      if (data.status === 200) {
        let filter = await tasks.filter((item) => item.uuid !== uuidT);
        dis({ type: "SET_TASKS", payload: filter });
        return toast.info(data.msg, {
          position: "bottom-right",
          closeOnClick: true,
        });
      } else {
        return toast.error(data.msg, {
          position: "bottom-right",
          closeOnClick: true,
        });
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
        return toast.info("Task Completed", {
          position: "bottom-right",
          closeOnClick: true,
        });
      } else {
        return toast.error(data.msg, {
          position: "bottom-right",
          closeOnClick: true,
        });
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
        {final}
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
