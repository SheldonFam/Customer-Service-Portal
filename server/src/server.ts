import express from "express";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const PORT = process.env.PORT ?? 8000;
const bodyParser = require("body-parser");
// const path = require("path");
// const staticPath = path.join(__dirname, "./public");

const connectDB = require("./db/db");
connectDB();

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/reports", require("./routes/reportRouter"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
