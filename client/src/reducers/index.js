import { combineReducers } from "redux";
import userReducer from "./user";
import TasksReducer from "./tasks";
import FilterTasks from "./filterTasks";

const Reducers = combineReducers({
  user: userReducer,
  tasks: TasksReducer,
  FilterTasks,
});

export default Reducers;
