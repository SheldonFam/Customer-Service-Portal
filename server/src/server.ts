import { config } from "dotenv";
config();
import env from "./utils/validateEnv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./db/db";
import reportRoutes from "./routes/reportRouter";
import userRoutes from "./routes/userRouter";
import { authorize } from "./middleware/auth";

const app = express();
const PORT = env.PORT || 8000;
connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/reports", authorize, reportRoutes);
app.use("/users", userRoutes);

app.get("/", function (req, res, next) {
  res.json({ message: "Server is connect sucessfully!" });
});

//Handling error status
app.use((req, res, next) => {
  res.json({ message: "Endpoint not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
