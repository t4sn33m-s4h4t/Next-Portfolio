import mongoose from "mongoose";

export default async function connectToDB() {
  console.log(process.env.MONGODB_URI);
  try {
    const uri = process.env.MONGODB_URI; // Accessing the MongoDB URI from the environment variable

    if (!uri) {
      throw new Error("MongoDB URI is not defined in the environment variables");
    }

    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Error connecting to database:", e);
  }
}
