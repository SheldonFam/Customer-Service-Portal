const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT | 8000;
const bodyParser = require("body-parser");
const path = require("path");
const staticPath = path.join(__dirname, "./public");
const cors = require("cors");

var corsOptions = { origin: "http://localhost:8000" };
const connectDB = require("./db/db");
connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/reports", require("./routes/reportRouter"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
