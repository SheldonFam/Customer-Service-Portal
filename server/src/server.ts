import { config } from "dotenv";
config();

import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { connectDB } from "./db/db";

const app = express();
const PORT = process.env.PORT || 8000;
const apiRoutes = require("./routes/reportRouter");

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/reports", apiRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
