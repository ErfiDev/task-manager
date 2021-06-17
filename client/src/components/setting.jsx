import React from "react";
import { ChevronRight } from "@material-ui/icons";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ul className="dashboard-list">
        <li className="dashboard-list-option">
          Tasks <ChevronRight />
        </li>
        <li className="dashboard-list-option">
          Completed Tasks <ChevronRight />
        </li>
        <li className="dashboard-list-option">
          Uncompleted Tasks <ChevronRight />
        </li>
        <li className="dashboard-list-option">
          Change Password <ChevronRight />
        </li>
        <li className="dashboard-list-option">
          Change Profile <ChevronRight />
        </li>
        <li className="dashboard-list-option">
          Change Username <ChevronRight />
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
