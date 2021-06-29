import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterTasksAction from "../actions/filterTasksAction";
import User from "../services/userService";
import Toast from "../utils/toast";

const Account = ({ match }) => {
  const UserInfo = useSelector((state) => state.user);
  const tasks = useSelector((state) => state.FilterTasks);
  const dis = useDispatch();
  let date = new Date(UserInfo.joinedDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let joinedDate = [year, month, day].join("-");

  useEffect(() => {
    async function get() {
      dis(FilterTasksAction(match.params.uuid));
      try {
        let { data } = await User.userInfo(match.params.uuid);
        if (data.status === 200) {
          return dis({ type: "SET_USER", payload: data.payload });
        } else {
          Toast("server is down! please refresh page", "error");
        }
      } catch (err) {
        console.log(err);
      }
    }
    get();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="account">
      <div className="user-picture">
        <div className="picture-container">
          <img
            src={
              UserInfo.picture
                ? UserInfo.picture
                : "https://images.unsplash.com/photo-1583946099390-4ed248a602c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            }
            alt="test"
            className="profile-picture"
            title={UserInfo.username + " picture"}
          />
        </div>
      </div>
      <ul className="user-info">
        <li className="user-info-option info-1">{UserInfo.username}</li>
        <li className="user-info-option info-2">{joinedDate}</li>
        <li className="user-info-option info-3">{tasks.all}</li>
      </ul>
    </div>
  );
};

export default Account;
