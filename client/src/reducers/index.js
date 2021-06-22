import { combineReducers } from "redux";
import userReducer from "./user";
import TasksReducer from "./tasks";

const Reducers = combineReducers({
  user: userReducer,
  tasks: TasksReducer,
});

export default Reducers;
