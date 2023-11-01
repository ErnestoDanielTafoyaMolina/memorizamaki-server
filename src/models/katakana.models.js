import mongoose from "mongoose";

const katakanaSchema = new mongoose.Schema({
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
  collection:'katakana'
});

const Katakana = mongoose.model("Katakana", katakanaSchema);

export default Katakana;