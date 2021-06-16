import React from "react";
import { TextField, Button } from "@material-ui/core";

const AddTask = () => {
  return (
    <div className="addTask">
      <form className="addTask-form">
        <TextField required label="Task Title" variant="filled" />
        <TextField
          label="Set Time"
          variant="filled"
          type="date"
          defaultValue="2020-05-24"
        />
        <Button
          className="addTask-form-submit"
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
