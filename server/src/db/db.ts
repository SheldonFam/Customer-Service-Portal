import mongoose from "mongoose";
import env from "../utils/validateEnv";

mongoose.set("strictQuery", true);

export const connectDB = async () => {
  try {
    const connectMongoDb = await mongoose.connect(env.MONGO_CONNECTION_STRING);
    console.log(`MongoDB Connected:${connectMongoDb.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
