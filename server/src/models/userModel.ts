import mongoose from "mongoose";
import { Schema, model } from "mongoose";

interface User {
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
});

export const User = model<User>("User", userSchema);
