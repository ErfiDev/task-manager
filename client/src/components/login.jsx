import React, { useState } from "react";
import {
  TextField,
  FilledInput,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";
import User from "../services/userService";
import jwt from "jsonwebtoken";
import Toast from "../utils/toast";

const Login = ({ history }) => {
  const [data, setData] = useState({
    password: "",
    username: "",
    toggle: false,
  });
  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };
  function handleClickShowPassword() {
    return setData({ ...data, toggle: !data.toggle });
  }
  function clearInputs() {
    return setData({ ...data, username: "", password: "" });
  }
  async function submit(e) {
    e.preventDefault();
    try {
      let info = {
        username: data.username,
        password: data.password,
      };
      const { data: response } = await User.loginUser(info);
      if (response.status === 200) {
        let { token } = response.data;
        const { payload } = await jwt.decode(token, { complete: true });
        localStorage.setItem("token", token);
        localStorage.setItem("exp", payload.exp);
        localStorage.setItem("loggedIn", 1);
        setTimeout(() => {
          history.push(`/user/${payload.token.uuid}`);
        }, 3000);
        return Toast("Login successfull!", "success");
      } else {
        Toast(response.msg, "error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="login">
      <h1 className="login-hi">Hi, please login</h1>
      <form onSubmit={(e) => submit(e)} className="login-form">
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
        <div style={{ marginBottom: "25px" }}>
          <Button
            style={{ marginRight: "15px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
          <Button onClick={clearInputs} variant="contained" color="secondary">
            Clear
          </Button>
        </div>
        <h5>
          Don't have an account? &nbsp;
          <Link to="/register">Sign Up</Link>
        </h5>
      </form>
    </div>
  );
};

export default withRouter(Login);
