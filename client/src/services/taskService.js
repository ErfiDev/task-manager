import Api from "./api.json";
import httpService from "./httpService";

class Task {
  addTask(uuid) {
    return httpService.post(`${Api.addTaskApi}/${uuid}`);
  }

  editTask(uuid, uuidTask) {
    return httpService.post(`${Api.editTaskApi}/${uuid}/${uuidTask}`);
  }

  deleteTask(uuid, uuidTask) {
    return httpService.post(`${Api.deleteTaskApi}/${uuid}/${uuidTask}`);
  }

  getTasks(uuid) {
    return httpService.get(`${Api.findTasks}/${uuid}`);
  }
}

export default new Task();
