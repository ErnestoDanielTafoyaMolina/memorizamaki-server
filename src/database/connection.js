import { connect } from "mongoose";
import { mongo_uri } from "../config";

export async function getConnection() {
    try {
        await connect(mongo_uri);
    } catch (error) {
        console.error(error.message);
    }
  }
export default getConnection;