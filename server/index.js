require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userApi");

const App = express();
const PORT = process.env.PORT || 5000;

App.use(express.json({ limit: "25mb" }));
App.use(express.urlencoded({ extended: true }));
App.use(cors());

mongoose.connect(
  process.env.DB,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("db connected")
);

App.use("/api/user", userRoutes);

App.listen(PORT, () => console.log(`server started on port: ${PORT}`));
