import { config } from "dotenv";
config();
import env from "./utils/validateEnv";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./db/db";
import apiRoutes from "./routes/reportRouter";
import userRoutes from "./routes/userRouter";
import createHttpError from "http-errors";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();
const PORT = env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    rolling: true,
    store: MongoStore.create({
      mongoUrl: env.MONGO_CONNECTION_STRING,
    }),
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/reports", apiRoutes);
app.use("/users", userRoutes);

//Handling error status
app.use((req, res, next) => {
  // // res.status(404).json({ message: "Endpoint not found" });
  // next(createHttpError("Endpoint not found"));
  res.send({ message: "Endpoint not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
