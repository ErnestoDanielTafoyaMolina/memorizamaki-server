import Hiragana from "../models/hiragana.models";
import Katakana from "../models/katakana.models";


export const getAllHiragana = async ( req, res ) => {
    try {
        // Obtén todos los hiragana ordenados por nivel
        const allHiragana = await Hiragana.find().sort({ level: 1 });
    
        // Crea un objeto para almacenar los hiragana agrupados por nivel
        const hiraganaByLevel = {};
    
        // Itera sobre los hiragana y agrúpalos por nivel
        allHiragana.forEach(hiragana => {
          const level = hiragana.level;
    
          if (!hiraganaByLevel[level]) {
            hiraganaByLevel[level] = [];
          }
    
          hiraganaByLevel[level].push(hiragana);
        });
    
        // Devuelve un array con los hiragana agrupados por nivel
        const result = Object.keys(hiraganaByLevel).map(level => ({
          level: parseInt(level, 10),
          hiragana: hiraganaByLevel[level],
        }));
    
        // Devuelve el array con los hiragana agrupados por nivel
        res.status(200).json({
            ok:true,
            data:result,
        });
      } catch (error) {
        console.error('Error al obtener los hiragana:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    
}

export const handleGetAllKatakana = async (req, res) => {
    try {
      // Obtén todos los katakana ordenados por nivel
      const allKatakana = await Katakana.find().sort({ level: 1 });
  
      // Crea un objeto para almacenar los katakana agrupados por nivel
      const katakanaByLevel = {};
  
      // Itera sobre los katakana y agrúpalos por nivel
      allKatakana.forEach(katakana => {
        const level = katakana.level;
  
        if (!katakanaByLevel[level]) {
          katakanaByLevel[level] = [];
        }
  
        katakanaByLevel[level].push(katakana);
      });
  
      // Devuelve un array con los katakana agrupados por nivel
      const result = Object.keys(katakanaByLevel).map(level => ({
        level: parseInt(level, 10),
        katakana: katakanaByLevel[level],
      }));
  
      // Devuelve el array con los katakana agrupados por nivel
      res.status(200).json(result);
    } catch (error) {
      console.error('Error al obtener los katakana:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
};
  
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

