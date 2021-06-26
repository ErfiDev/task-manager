import React, { useState } from "react";
import { TextField, Button, Input } from "@material-ui/core";

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
  const [data, setData] = useState({
    picture: "",
  });
  function previewFile() {
    const input = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      if (input.size > 1000000) {
        const inputS = document.querySelector("input[type=file]");
        inputS.value = "";
        return alert("image size is higher than 1 mb");
      } else {
        await setData({ ...data, picture: reader.result });
      }
    });
    if (input) {
      reader.readAsDataURL(input);
    }
  }

  console.log(data);
  return (
    <div className="change-profile">
      <h1 className="change-profile-h1">Change Profile</h1>
      <form className="change-profile-form">
        <Input
          style={{ marginBottom: "25px" }}
          placeholder="Select your profile photo"
          type="file"
          onChange={previewFile}
          className="type-file"
        />
        <Button
          className="change-profile-submit"
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
