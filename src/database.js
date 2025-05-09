import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

mongoose.set("strictQuery", true);

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to", db.connection.name);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
})();

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err.message);
});
