import React, { useState } from "react";
import { TextField, Button, Input } from "@material-ui/core";
import { ChevronRight } from "@material-ui/icons";
import Task from "../services/taskService";
import { Link } from "react-router-dom";
import Toast from "../utils/toast";

const ChangePassword = ({ match }) => {
  const [data, setData] = useState({
    currentPass: "",
    newPass: "",
    newPassAgain: "",
  });
  function changeValues(props) {
    return (e) => {
      setData({ ...data, [props]: e.target.value });
    };
  }
  async function submit(e) {
    e.preventDefault();
    try {
      if (data.newPass !== data.newPassAgain) {
        return Toast("passwords do't match", "error");
      } else {
        let { currentPass, newPass } = data;
        let { data: res } = await Task.PassChange(match.params.uuid, {
          currentPass,
          newPass,
        });
        if (res.status === 200) {
          setData({
            currentPass: "",
            newPass: "",
            newPassAgain: "",
          });
          return Toast("password changed success", "success");
        } else {
          Toast(res.msg, "error");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="change-password">
      <h1 className="change-password-h1">Change Password</h1>
      <form onSubmit={(e) => submit(e)} className="change-password-form">
        <TextField
          required
          label="Current Password"
          variant="filled"
          autoFocus={true}
          value={data.currentPass}
          onChange={changeValues("currentPass")}
        />
        <TextField
          required
          label="New Password"
          variant="filled"
          autoFocus={false}
          value={data.newPass}
          onChange={changeValues("newPass")}
        />
        <TextField
          required
          label="New Password Again"
          variant="filled"
          autoFocus={false}
          value={data.newPassAgain}
          onChange={changeValues("newPassAgain")}
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
      <Link className="back-link" to={`/user/${match.params.uuid}/setting`}>
        Back
        <ChevronRight />
      </Link>
    </div>
  );
};

const ChangeProfile = ({ match }) => {
  const [data, setData] = useState({
    picture: "",
    password: "",
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

  async function submit(e) {
    e.preventDefault();
    try {
      let thisData = {
        password: data.password,
        newPic: data.picture,
      };
      let { data: res } = await Task.ProfileChange(match.params.uuid, thisData);
      if (res.status === 200) {
        setData({ picture: "", password: "" });
        document.querySelector("input[type=file]").value = "";
        return Toast("change picture success!", "success");
      } else {
        Toast(res.msg, "error");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="change-profile">
      <h1 className="change-profile-h1">Change Profile</h1>
      <form onSubmit={(e) => submit(e)} className="change-profile-form">
        <TextField
          required
          label="Your Password"
          variant="filled"
          autoFocus={true}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
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
      <Link className="back-link" to={`/user/${match.params.uuid}/setting`}>
        Back
        <ChevronRight />
      </Link>
    </div>
  );
};

const ChangeUsername = ({ match }) => {
  const [username, setUsername] = useState("");
  async function submit(e) {
    e.preventDefault();
    try {
      let { data } = await Task.UsernameChange(match.params.uuid, {
        newUsername: username,
      });
      if (data.status === 200) {
        setUsername("");
        return Toast("change username success!", "success");
      } else {
        Toast(data.msg, "error");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="change-username">
      <h1 className="change-username-h1">Change Username</h1>
      <form onSubmit={(e) => submit(e)} className="change-username-form">
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          label="New Username"
          variant="filled"
        />
        <Button
          className="change-username-submit"
          variant="contained"
          color="primary"
          type="submit"
        >
          Change
        </Button>
      </form>
      <Link className="back-link" to={`/user/${match.params.uuid}/setting`}>
        Back
        <ChevronRight />
      </Link>
    </div>
  );
};

export { ChangePassword, ChangeProfile, ChangeUsername };
