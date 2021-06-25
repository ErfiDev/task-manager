import React from "react";
import { ChevronRight } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Dashboard = ({ match }) => {
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
      <Button variant="contained" color="secondary">
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
