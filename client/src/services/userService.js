import Api from "./api.json";
import httpService from "./httpService";

function loginUser(data) {
  return httpService.post(Api.loginApi, JSON.stringify(data));
}

function registerUser(data) {
  return httpService.post(Api.registerApi, JSON.stringify(data));
}

function logoutUser(uuid) {
  return httpService.post(`${Api.deleteAccApi}/${uuid}`);
}

export { loginUser, registerUser, logoutUser };
