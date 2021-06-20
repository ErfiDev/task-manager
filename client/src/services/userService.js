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

function getPicture(uuid) {
  return httpService.get(`${Api.findPicture}/${uuid}`);
}

export { loginUser, registerUser, logoutUser, getPicture };
