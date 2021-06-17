import React from "react";
import { Done, Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const singleTask = ({ title, time }) => {
  return (
    <div className="single-task">
      <h1 className="single-task-title">{title}</h1>
      <h5 style={{ marginTop: "10px" }} className="single-task-time">
        {!time ? "Date doesn't set" : time + " - 12:00"}
      </h5>
      <div className="single-task-status-container">
        <Button variant="contained" color="primary">
          <Done color="inherit" />
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="secondary"
        >
          <Close color="inherit" />
        </Button>
      </div>
    </div>
  );
};

export default singleTask;
