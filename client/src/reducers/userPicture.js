function UserPicture(state = "", action) {
  switch (action.type) {
    case "SET_PICTURE":
      return action.payload;

    case "CLEAR_PICTURE":
      return (state = "");

    default:
      return state;
  }
}

export default UserPicture;
