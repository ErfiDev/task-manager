const express = require("express");
const route = express.Router();
const {
  register,
  login,
  addTask,
  editTask,
  deleteTask,
  logout
} = require("../controllers/userController");

route.post("/register", register);
route.post("/login", login);
route.post("/logout" , logout);
route.post("/addTask/:uuid?", addTask);
route.post("/editTask/:uuid?/:uuidTask?", editTask);
route.post("/deleteTask/:uuid?/:uuidTask?", deleteTask);

module.exports = route;
