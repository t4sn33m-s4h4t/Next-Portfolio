import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    const uri = process.env.MONGODB_URI; 
    if (!uri) {
      throw new Error("MongoDB URI is not defined in the environment variables");
    }

    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Error connecting to database:", e);
  }
}
