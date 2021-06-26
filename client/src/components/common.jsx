import React from "react";
import { TextField, Button } from "@material-ui/core";

const ChangePassword = () => {
  return (
    <div className="change-password">
      <h1 className="change-password-h1">Change Password</h1>
      <form className="change-password-form">
        <TextField
          required
          label="Current Password"
          variant="filled"
          autoFocus={true}
        />
        <TextField
          required
          label="New Password"
          variant="filled"
          autoFocus={true}
        />
        <TextField
          required
          label="New Password Again"
          variant="filled"
          autoFocus={true}
        />
        <Button
          className="change-password-submit"
          variant="contained"
          color="primary"
          type="submit"
        >
          Change
        </Button>
      </form>
    </div>
  );
};

const ChangeProfile = () => {
  return (
    <div className="change-profile">
      <h1>ChangeProfile</h1>
    </div>
  );
};

const ChangeUsername = () => {
  return (
    <div className="change-username">
      <h1 className="change-username-h1">Change Username</h1>
      <form className="change-username-form">
        <TextField required label="New Username" variant="filled" />
        <Button
          className="change-username-submit"
          variant="contained"
          color="primary"
          type="submit"
        >
          Change
        </Button>
      </form>
    </div>
  );
};

export { ChangePassword, ChangeProfile, ChangeUsername };
