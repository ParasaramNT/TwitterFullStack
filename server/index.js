const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/database");

dotenv.config();

const app = express();

app.listen(
  process.env.PORT,
  console.log(`App listening on PORT ${process.env.PORT}`)
);

connectDB();
