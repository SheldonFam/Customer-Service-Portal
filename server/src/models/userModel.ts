import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, select: false },
  password: { type: String, required: true, select: false },
});

export const userModel = mongoose.model("User", userSchema);
