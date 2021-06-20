import { combineReducers } from "redux";
import userReducer from "./user";
import UserPicture from "./userPicture";

const Reducers = combineReducers({
  user: userReducer,
  picture: UserPicture,
});

export default Reducers;
