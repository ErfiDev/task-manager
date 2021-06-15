import React from "react";
import propTypes from "prop-types";

const Account = ({ username, joinedDate, allTask }) => {
  return (
    <div className="account">
      <div className="user-picture"></div>
      <ul className="user-info">
        <li>{username}</li>
        <li>{joinedDate}</li>
        <li>{allTask}</li>
      </ul>
    </div>
  );
};

Account.propTypes = {
  username: propTypes.string,
  joinedDate: propTypes.string,
  allTask: propTypes.number,
};

export default Account;
