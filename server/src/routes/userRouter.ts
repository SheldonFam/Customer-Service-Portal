import express from "express";
import { authorize } from "../middleware/auth";
import {
  signUp,
  login,
  authTest,
  //   logout,
} from "../controllers/userController";

const router = express.Router();
router.get("/", authorize, authTest);
router.post("/signup", signUp);
router.post("/login", login);
// router.post("/logout", logout);

export default router;
