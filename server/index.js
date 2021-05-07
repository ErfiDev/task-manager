require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const App = express();
const PORT = process.env.PORT || 5000;

App.use(express.json());
App.use(cors());


App.listen(PORT , ()=> console.log(`server started on port: ${PORT}`));