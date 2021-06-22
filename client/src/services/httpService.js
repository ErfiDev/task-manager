import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast("There is a problem with the server", {
      position: "bottom-right",
      closeOnClick: true,
    });
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
