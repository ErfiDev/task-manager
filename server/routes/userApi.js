const express = require("express");
const route = express.Router();
const {
  register,
  login,
  addTask,
  editTask,
  deleteTask,
} = require("../controllers/userController");

route.post("/register", register);
route.post("/login", login);
route.post("/addTask/:uuid?", addTask);
route.post("/editTask/:uuid?/:uuidTask?", editTask);
route.post("/deleteTask/:uuid?", deleteTask);

module.exports = route;
