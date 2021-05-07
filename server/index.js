require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const App = express();
const PORT = process.env.PORT || 5000;

App.use(express.json());
App.use(cors());

mongoose.connect(
    process.env.DB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    ()=> console.log('db connected')
);


App.listen(PORT , ()=> console.log(`server started on port: ${PORT}`));