import React from "react";

const CompletedTasks = () => {
  return (
    <div className="completed-tasks">
      <h1>Completed tasks</h1>
    </div>
  );
};

const UnCompletedTasks = () => {
  return (
    <div className="uncompleted-tasks">
      <h1>UnCompleted tasks</h1>
    </div>
  );
};

const ChangePassword = () => {
  return (
    <div className="change-password">
      <h1>change-password</h1>
    </div>
  );
};

const ChangeProfile = () => {
  return (
    <div className="ChangeProfile">
      <h1>ChangeProfile</h1>
    </div>
  );
};

const ChangeUsername = () => {
  return (
    <div className="ChangeUsername">
      <h1>ChangeUsername</h1>
    </div>
  );
};

export {
  ChangePassword,
  ChangeProfile,
  ChangeUsername,
  UnCompletedTasks,
  CompletedTasks,
};
