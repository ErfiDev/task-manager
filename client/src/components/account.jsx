import React from "react";

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

export default Account;
