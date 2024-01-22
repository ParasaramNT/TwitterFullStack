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
https://twitter-backend-gbfe.onrender.com/api/posttweet
https://twitter-backend-gbfe.onrender.com/api/deletetweet:tweetid
https://twitter-backend-gbfe.onrender.com/api/getalltweets
https://twitter-backend-gbfe.onrender.com/api/postreply
https://twitter-backend-gbfe.onrender.com/api/deletereply:replyid
https://twitter-backend-gbfe.onrender.com/api/getReplys:tweetId
https://twitter-backend-gbfe.onrender.com/signup
https://twitter-backend-gbfe.onrender.com/login
https://twitter-backend-gbfe.onrender.com/logoff
*/
