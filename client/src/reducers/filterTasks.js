function FilterTasks(state = {}, action) {
  switch (action.type) {
    case "SET_FILTER_TASKS":
      return action.payload;

    case "CLEAR_FILTER_TASKS":
      return (state = {});

    default:
      return state;
  }
}

export default FilterTasks;
