const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors")

const errorMiddleware = require("./middleware/error");

app.use(express.json())
app.use(cors());

const users = require("./Routes/userRoutes.js"); 
const worker = require("./Routes/workerRoutes.js")

app.use(cookieParser());
app.use("/api/v1/",users);
app.use("/api/v1/",worker);

app.use(errorMiddleware);


module.exports= app;

