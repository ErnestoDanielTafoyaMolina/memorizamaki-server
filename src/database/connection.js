import mongoose from "mongoose";
import { mongo_uri } from "../config";

(async ()=>{ try {
  const db = await mongoose.connect(mongo_uri);
  console.log("Database is connected to", db.connection.name);
} catch (error) {
  console.error(error.message);
}})();