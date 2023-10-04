import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img:{
      type:String,
      required: true,
    },
    progess:{
      type: Number,
      required:true,
    },
    phoneNumber:{
      type:Number,
      required:true,
      unique:true,
    },
    Region:{
      type: String,
      required:true,
    }
  }
);

export default mongoose.model("User", userSchema);