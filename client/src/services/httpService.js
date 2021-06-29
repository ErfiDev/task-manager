import axios from "axios";
import Toast from "../utils/toast";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    Toast("There is a problem with the server");
  }

  return Promise.reject(error);
});

const service = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
};

export default service;
