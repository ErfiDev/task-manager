import { getPicture } from "../services/userService";

function getUserPicture(uuid) {
  return async (dispatch) => {
    try {
      const { data } = await getPicture(uuid);
      return dispatch({ type: "SET_PICTURE", payload: data.base64 });
    } catch (e) {
      console.log(e);
    }
  };
}

export default getUserPicture;
