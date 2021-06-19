import Api from "./api.json";
import httpService from "./httpService";

function addTask(uuid) {
  return httpService.post(`${Api.addTaskApi}/${uuid}`);
}

function editTask(uuid, uuidTask) {
  return httpService.post(`${Api.editTaskApi}/${uuid}/${uuidTask}`);
}

function deleteTask(uuid, uuidTask) {
  return httpService.post(`${Api.deleteTaskApi}/${uuid}/${uuidTask}`);
}

export { addTask, editTask, deleteTask };