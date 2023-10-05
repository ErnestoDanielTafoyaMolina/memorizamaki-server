import { Schema, model } from "mongoose";

const kanaSchema = new Schema({
    symbol: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    romaji: {
        type: String,
        required: true,
        trim:true,
    },
    img: {
        type: String,
        required: true,
        unique: true,
    },
});

export default model("Kanas", kanaSchema)