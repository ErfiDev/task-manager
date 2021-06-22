function TasksReducer(state = [], action) {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;

    case "CLEAR_TASKS":
      return (state = []);

    default:
      return state;
  }
}

export default TasksReducer;
