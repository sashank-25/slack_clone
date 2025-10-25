import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world 1234");
});

// Connect to database first, then start server
connectDB().then(() => {
    app.listen(ENV.PORT, () => console.log("Server started on port:", ENV.PORT));
}).catch((err) => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
});