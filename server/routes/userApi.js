const express = require("express");
const route = express.Router();
const {
  register,
  login,
  addTask,
  editTask,
  deleteTask,
  logout,
  getTasks,
  getUserPicture,
  getSpecificTask,
  changePass,
  changeProfile,
  changeUsername,
} = require("../controllers/userController");

route.post("/register", register);
route.post("/login", login);
route.post("/logout/:uuid?", logout);
route.post("/addTask/:uuid?", addTask);
route.post("/editTask/:uuid?/:uuidTask?", editTask);
route.post("/deleteTask/:uuid?/:uuidTask?", deleteTask);
route.get("/getTasks/:uuid?", getTasks);
route.get("/getUserPicture/:uuid?", getUserPicture);
route.get("/getSpecificTask/:uuid?/:uuidTask?", getSpecificTask);
route.put("/changePass/:uuid?", changePass);
route.put("/changeProfile/:uuid?", changeProfile);
route.put("/changeUsername/:uuid?", changeUsername);

module.exports = route;
