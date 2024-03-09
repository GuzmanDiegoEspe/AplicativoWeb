const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("../router/student.router.js")
const router2 = require("../router/teacher.router.js")

const app = express();  
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
    res.send("This is my App");
});

app.use(express.json())
app.use("/api/students", router)
app.use("/api/teachers", router2)


module.exports = app;
