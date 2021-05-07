const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

const taskModel = new mongoose.Schema({
    title: {type: String , required: true},
    status: {type: Boolean , required: true},
    endTime: {type: Date , required: false},
    uuid: {type: String , default: ()=> uuidv4()}
});

module.exports = mongoose.model('task' , taskModel);