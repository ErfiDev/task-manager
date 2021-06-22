import Api from "./api.json";
import httpService from "./httpService";

class Task {
  addTask(uuid, data) {
    return httpService.post(`${Api.addTaskApi}/${uuid}`, JSON.stringify(data));
  }

  editTask(uuid, uuidTask, data) {
    return httpService.post(
      `${Api.editTaskApi}/${uuid}/${uuidTask}`,
      JSON.stringify(data)
    );
  }

  deleteTask(uuid, uuidTask) {
    return httpService.post(`${Api.deleteTaskApi}/${uuid}/${uuidTask}`);
  }

  getTasks(uuid) {
    return httpService.get(`${Api.findTasks}/${uuid}`);
  }

  getSpecificTask(uuid, uuidTask) {
    return httpService.get(`${Api.specificTask}/${uuid}/${uuidTask}`);
  }
}

export default new Task();
