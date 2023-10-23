import { Schema, model } from "mongoose";

const kanjiSchema = new Schema({
    id:{
        type:Number,
        trim:true
    },
    symbol: {
        type: String,
        required: true,
    },
    kunyomi:{
        type: String,
        required: true,
    },
    onyomi:{
        type: String,
        required: true,
    },
    img:{
        type: String,
    },
    meaning:{
        type:String,
        required: true
    }
});

export default model("Kanji", kanjiSchema)