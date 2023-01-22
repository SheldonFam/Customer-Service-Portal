import { config } from "dotenv";
config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./db/db";
import apiRoutes from "./routes/reportRouter";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/reports", apiRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
