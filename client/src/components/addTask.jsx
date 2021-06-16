import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log(title, time);
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
        <TextField
          label="Set Time"
          variant="filled"
          type="date"
          defaultValue="2021-05-24"
          onChange={(e) => setTime(e.target.value)}
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
