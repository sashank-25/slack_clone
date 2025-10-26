import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        if (!ENV.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        
        console.log("Attempting MongoDB connection...");
        await mongoose.connect(ENV.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch(error) {
        console.error("MongoDB connection failed:");
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        if (error.code) console.error("Error code:", error.code);
        throw error; // Let the server handle the error
    }
}