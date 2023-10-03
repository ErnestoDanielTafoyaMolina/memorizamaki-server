import { Schema, model } from "mongoose";

const kanaSchema = new Schema({
    symbol: {
        type: String,
        required: true,
    },
    romaji: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});

export default model("Kanas", kanaSchema)