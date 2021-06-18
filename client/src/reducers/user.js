function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "CLEAR_USER":
      return (state = {});

    default:
      return state;
  }
}

export default userReducer;
