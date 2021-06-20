import React, { useState } from "react";
import {
  TextField,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
  Input,
  InputLabel,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";
import { registerUser } from "../services/userService";
import { toast } from "react-toastify";

const Register = ({ history }) => {
  const [data, setData] = useState({
    password: "",
    username: "",
    toggle: false,
    fullname: "",
    picture: "",
  });

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };
  function handleClickShowPassword() {
    return setData({ ...data, toggle: !data.toggle });
  }
  function clearInputs() {
    return setData({
      ...data,
      username: "",
      password: "",
      fullname: "",
      picture: "",
    });
  }
  function previewFile() {
    const input = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      await setData({ ...data, picture: reader.result });
    });
    if (input) {
      reader.readAsDataURL(input);
    }
  }
  async function submit(e) {
    e.preventDefault();
    console.log(data);
    try {
      let picture = !data.picture ? "nothing" : data.picture;
      const info = {
        username: data.username,
        password: data.password,
        isAdmin: false,
        picture,
      };
      const { data: response } = await registerUser(info);
      if (response.status === 201) {
        setTimeout(() => {
          history.push("/");
          toast("please login", {
            position: "bottom-left",
            closeOnClick: true,
          });
        }, 3000);
        return toast.success("register successfull!", {
          position: "bottom-left",
          closeOnClick: true,
        });
      } else {
        toast.error(response.msg, {
          position: "bottom-left",
          closeOnClick: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="register">
      <h1 className="register-hi">Hi, please register</h1>
      <form onSubmit={(e) => submit(e)} className="register-form">
        <TextField
          variant="filled"
          label="Fullname"
          required
          className="login-fullname"
          style={{ marginBottom: "25px" }}
          value={data.fullname}
          onChange={handleChange("fullname")}
        />
        <TextField
          variant="filled"
          label="Username"
          required
          className="login-username"
          style={{ marginBottom: "25px" }}
          value={data.username}
          onChange={handleChange("username")}
        />
        <FilledInput
          id="filled-adornment-password"
          type={data.toggle ? "text" : "password"}
          value={data.password}
          onChange={handleChange("password")}
          placeholder="Password *"
          required
          style={{ marginBottom: "45px" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {data.toggle ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <InputLabel>Your Profile photo</InputLabel>
        <Input
          style={{ marginBottom: "25px" }}
          placeholder="Select your profile photo"
          type="file"
          onChange={previewFile}
        />
        <div style={{ marginBottom: "25px" }}>
          <Button
            style={{ marginRight: "15px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
          <Button onClick={clearInputs} variant="contained" color="secondary">
            Clear
          </Button>
        </div>
        <h5>
          Do have an account? &nbsp;
          <Link to="/">Login</Link>
        </h5>
      </form>
    </div>
  );
};

export default withRouter(Register);
