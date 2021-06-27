import Api from "./api.json";
import httpService from "./httpService";

class User {
  loginUser(data) {
    return httpService.post(Api.loginApi, JSON.stringify(data));
  }

  registerUser(data) {
    return httpService.post(Api.registerApi, JSON.stringify(data));
  }

  logoutUser(uuid) {
    return httpService.post(`${Api.deleteAccApi}/${uuid}`);
  }

  getPicture(uuid) {
    return httpService.get(`${Api.findPicture}/${uuid}`);
  }

  userInfo(uuid) {
    return httpService.get(`${Api.getUserInfo}/${uuid}`);
  }
}

export default new User();
