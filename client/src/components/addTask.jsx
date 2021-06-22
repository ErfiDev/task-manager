import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import Task from "../services/taskService";
import { toast } from "react-toastify";

const AddTask = ({ match }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();

    let finalTime = [
      (hour < "9" ? "0" : "") + hour,
      (minute < "9" ? "0" : "") + minute,
    ].join(":");

    let finalDate = [
      year,
      (month < "9" ? "0" : "") + month,
      (day < "9" ? "0" : "") + day,
    ].join("-");

    let final = [finalDate, finalTime];

    setDate(final.join("T"));
  }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      const data = {
        title,
        endTime: time,
        status: false,
      };

      let { data: res } = await Task.addTask(match.params.uuid, data);
      if (res.status === 200) {
        setTitle("");
        setTime("");
        return toast.success(res.msg, {
          position: "bottom-right",
          closeOnClick: true,
        });
      } else {
        toast.error(res.msg, {
          position: "bottom-right",
          closeOnClick: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="addTask">
      <form onSubmit={(e) => submit(e)} className="addTask-form">
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          label="Task Title"
          variant="filled"
          autoFocus={true}
        />
        <label style={{ marginTop: "20px" }}>Set a Timer</label>
        <input
          type="datetime-local"
          onChange={(e) => setTime(e.target.value)}
          min={date}
          value={time}
        />
        <Button
          className="addTask-form-submit"
          variant="contained"
          color="primary"
          type="submit"
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
