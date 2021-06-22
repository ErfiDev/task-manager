import React from "react";
import { Done, Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import Task from "../services/taskService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const SingleTask = ({ title, time, uuidTask, uuid }) => {
  const tasks = useSelector((state) => state.tasks);
  const dis = useDispatch();

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

  return (
    <div className="single-task">
      <h1 className="single-task-title">{title}</h1>
      <h5 style={{ marginTop: "10px" }} className="single-task-time">
        {!time ? "Timer doesn't set" : time + " - 12:00"}
      </h5>
      <div className="single-task-status-container">
        <Button variant="contained" color="primary">
          <Done color="inherit" />
        </Button>
        <Button
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
