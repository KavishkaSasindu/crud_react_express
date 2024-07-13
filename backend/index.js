const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const UserRouter = require("./routes/Routes");

const app = express();

app.use(express.json());
app.use(cors());

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

mongoose
  .connect(
    `mongodb+srv://sasindu0215:IpCbIUwNjaHPwuUK@cluster0.sstwbdc.mongodb.net/crud_api`
  )
  .then(() => {
    console.log("db is connected");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use(UserRouter);
