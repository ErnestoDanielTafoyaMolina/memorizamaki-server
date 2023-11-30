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
    img: {
      type: String,
      trim: true,
      default:'https://picsum.photos/200/300'
    },
    progress: {
      hiragana: {
        type: Number,
        default: 0,
      },
      katakana: {
        type: Number,
        default: 0,
      },
      kanji: {
        type: Number,
        default: 0,
      },
      totalProgress: {
        type: Number,
        default: 0,
      },
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    region: {
      type: String,
      required: true,
    },
  }
);

export default mongoose.model("User", userSchema);