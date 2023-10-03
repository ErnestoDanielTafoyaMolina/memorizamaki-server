import { Schema, model } from "mongoose";

const kanjiSchema = new Schema({
    symbol: {
        type: String,
        required: true,
    },
    readings: {
        hiragana:{
            type: String,
            required: true,
        },
        katakana:{
            type: String,
            required: true,
        },
    },
    img:{
        type: String,
        required: true,
    }
});

export default model("Kanji", kanjiSchema)