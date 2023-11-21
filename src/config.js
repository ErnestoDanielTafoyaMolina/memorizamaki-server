import { config } from "dotenv";
config();

export const port = process.env.PORT || 5001;
export const mongo_uri = process.env.MONGO_URI || "mongodb://127.0.0.1:2701/memorizamaki";
export const secret = process.env.SECRET || "";
export const front = process.env.FRONT || "";

