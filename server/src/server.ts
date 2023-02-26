import { config } from "dotenv";
config();
import env from "./utils/validateEnv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./db/db";
import reportRoutes from "./routes/reportRouter";
import userRoutes from "./routes/userRouter";
import session from "express-session";
import MongoStore from "connect-mongo";
import { requiresAuth } from "./middleware/auth";

const app = express();
const PORT = env.PORT || 8000;

connectDB();
// app.use(
//   cors({
//     origin: "http://127.0.0.1:5173",
//     credentials: true,
//   })
// );
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
app.use("/reports", requiresAuth, reportRoutes);
app.use("/users", userRoutes);

app.get("/", function (req, res, next) {
  console.log(req.session);
  res.json({ message: "Server is connect sucessfully!" });
});

//Handling error status
app.use((req, res, next) => {
  res.json({ message: "Endpoint not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
