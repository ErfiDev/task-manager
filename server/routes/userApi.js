const express = require('express');
const route = express.Router();
const { register , login , addTask } = require('../controllers/userController');

route.post('/register' , register);
route.post('/login' , login);
route.post('/addTask/:uuid?' , addTask)

module.exports = route;