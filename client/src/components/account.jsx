import React from "react";
import { useSelector } from "react-redux";

const Account = ({ match }) => {
  const {
    joinedDate: join,
    username,
    tasks,
    picture,
  } = useSelector((state) => state.user);
  let date = new Date(join);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let joinedDate = [year, month, day].join("-");

  return (
    <div className="account">
      <div className="user-picture">
        <div className="picture-container">
          <img
            src={
              picture
                ? picture
                : "https://images.unsplash.com/photo-1583946099390-4ed248a602c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
            alt="test"
            className="profile-picture"
            title={username + " picture"}
          />
        </div>
      </div>
      <ul className="user-info">
        <li className="user-info-option info-1">{username}</li>
        <li className="user-info-option info-2">{joinedDate}</li>
        <li className="user-info-option info-3">{tasks.length}</li>
      </ul>
    </div>
  );
};

export default Account;
