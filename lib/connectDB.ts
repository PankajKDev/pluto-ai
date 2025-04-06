import { MongooseConnectionCache } from "@/types/mongoose";
import mongoose from "mongoose";
const DATABASE_URL = process.env.DATABASE_URL as string;

if (!DATABASE_URL) {
  throw new Error("MONGODB URI is not defined properly");
}

let cachedInstance = global.mongooseCache as MongooseConnectionCache;

if (!cachedInstance) {
  cachedInstance = global.mongooseCache = { connectionDB: null, promise: null };
}

async function connectDB() {
  if (cachedInstance.connectionDB) return cachedInstance.connectionDB;

  if (!cachedInstance.promise) {
    cachedInstance.promise = mongoose
      .connect(DATABASE_URL, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      });
  }
  cachedInstance.connectionDB = await cachedInstance.promise;
  console.log("Connected Successfully");
  return cachedInstance.connectionDB;
}

export default connectDB;
