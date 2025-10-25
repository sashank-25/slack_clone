import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch(error) {
        console.log("MongoDB connection failed");
        console.log(error);
        process.exit(1);
    }
}
  