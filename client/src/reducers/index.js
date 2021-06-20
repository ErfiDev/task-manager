import { combineReducers } from "redux";
import userReducer from "./user";

const Reducers = combineReducers({
  user: userReducer,
});

export default Reducers;
