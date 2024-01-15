const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const tweetRoutes = require("./routes/tweetRoutes");
const replyRoutes = require("./routes/replyRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(cookieParser());

app.listen(PORT, console.log(`App listening on PORT ${process.env.PORT}`));

app.use("/api", userRoutes);
app.use("/api", tweetRoutes);
app.use("/api", replyRoutes);

connectDB();

/*
localhost:8000/api/posttweet
localhost:8000/api/deletetweet:tweetid
localhost:8000/api/getalltweets
localhost:8000/api/postreply
localhost:8000/api/deletereply:replyid
localhost:8000/api/getReplys:tweetId
localhost:8000/signup
localhost:8000/login
localhost:8000/logoff
*/
