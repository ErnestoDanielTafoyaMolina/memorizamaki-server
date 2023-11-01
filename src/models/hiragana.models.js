import mongoose, { Collection } from "mongoose";

const hiraganaSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
  },
  romaji: {
    type: String,
    required: true,
  },
  },{
    collection:'hiragana',
  }
);

const Hiragana = mongoose.model("Hiragana", hiraganaSchema);

export default Hiragana;