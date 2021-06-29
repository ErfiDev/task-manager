import React from "react";
import { ChevronRight } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import User from "../services/userService";
import { withRouter } from "react-router-dom";
import Toast from "../utils/toast";

const Dashboard = ({ match, history }) => {
  async function logout() {
    try {
      let { data } = await User.logoutUser(match.params.uuid);
      if (data.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("exp");
        localStorage.removeItem("loggedIn");
        Toast("By!", "error");
        return setTimeout(() => {
          history.push("/");
        }, 2500);
      } else {
        Toast(data.msg, "error");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="dashboard">
      <ul className="dashboard-list">
        <li className="dashboard-list-option">
          <Link to={`/user/${match.params.uuid}/ChangePassword`}>
            Change Password <ChevronRight />
          </Link>
        </li>
        <li className="dashboard-list-option">
          <Link to={`/user/${match.params.uuid}/ChangeProfile`}>
            Change Profile <ChevronRight />
          </Link>
        </li>
        <li className="dashboard-list-option">
          <Link to={`/user/${match.params.uuid}/ChangeUsername`}>
            Change Username <ChevronRight />
          </Link>
        </li>
      </ul>
      <Button onClick={logout} variant="contained" color="secondary">
        Logout
      </Button>
    </div>
  );
};

export default withRouter(Dashboard);
