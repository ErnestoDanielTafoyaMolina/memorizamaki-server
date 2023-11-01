import Hiragana from "../models/hiragana.models";
import Katakana from "../models/katakana.models";

export const handleGetHiragana = async ( req, res ) => {

    const { level } =req.params;
    if(!level){
        return res.status(400).json({
            ok:false,
            msg:"Por favor ingresa un nivel"
        });
    }
    try {
    const hiraganaInfo = await Hiragana.find({level})
    
    if(!hiraganaInfo[0]){
        return res.status(400).json({
            ok:false,
            msg:"no es un nivel valido"
        });
    }
    return res.status(200).json({
        ok:true,
        hiraganaInfo
    })

    } catch (error) {
        console.error(error.message);
        return res.status(200).json(error);
    }
};

export const handleGetKatakana = async ( req, res ) => {
    const { level } =req.params;
    if(!level){
        return res.status(400).json({
            ok:false,
            msg:"Por favor ingresa un nivel"
        });
    }
    try {
    const katakanaInfo = await Katakana.find({level})
    
    if(!katakanaInfo[0]){
        return res.status(400).json({
            ok:false,
            msg:"no es un nivel valido"
        });
    }
    return res.status(200).json({
        ok:true,
        katakanaInfo
    })

    } catch (error) {
        console.error(error.message);
        return res.status(200).json(error);
    }
}

