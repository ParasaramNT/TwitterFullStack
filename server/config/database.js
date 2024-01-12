const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = (req, res) => {
  try {
    mongoose.connect(process.env.DB_URL);
    console.log("DB Connected Successfully");
  } catch (err) {}
};

module.exports = { connectDB };
