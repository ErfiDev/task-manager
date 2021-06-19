const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const userModel = new schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  joinedDate: {
    type: Date,
    default: Date.now(),
  },
  tasks: [
    {
      title: { type: String, required: true },
      status: { type: Boolean, required: true },
      endTime: { type: Date, required: false },
      uuid: { type: String, default: () => uuidv4() },
    },
  ],
  uuid: { type: String, default: () => uuidv4() },
  isAdmin: { type: Boolean, required: true },
  picture: { type: String, required: true },
});

module.exports = mongoose.model("user", userModel);
