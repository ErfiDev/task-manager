const mongoose = require('mongoose');
const schema = mongoose.Schema;
const {v4: uuidv4} = require('uuid');
const taskModel = require('./taskModel');

const userModel = new schema({
    username: {type: String , required: true},
    password: {type: String , required: true},
    joinedDate: 
    {
        type: Date , 
        default: Date.now()
    },
    tasks: [taskModel],
    uuid: {type: String , default: ()=> uuidv4()},
    isAdmin: {type: Boolean , required: true}
});

module.exports = mongoose.model('user' , userModel);