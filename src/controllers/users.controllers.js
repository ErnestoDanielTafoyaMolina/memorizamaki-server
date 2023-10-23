import User from "../models/users.models";
import jwt from "jsonwebtoken";

import { secret } from "../config";

export const handleProfile = async ( req, res ) => {
    try {
      const { token } = req.cookies;
      if (!token) return res.send(false);
    
      jwt.verify(token, secret, async (error, user) => {
        if (error) return res.sendStatus(401);
    
        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);
    
        return res.json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
        });
      });
    } catch (error) {
        console.error(error.message);
        return res.status(200).json(error);
    }
};
// Controlador para desbloquear caracteres de 5 en 5 (o 6 al final)
export const handleUnlockCharacters = async (req, res) => {
    try {
      const userId = req.user._id; // Reemplaza esto con tu lógica de autenticación de usuario
  
      // Verifica cuántos caracteres desbloquearás (5 en este caso)
      const charactersToUnlock = 5; // Puedes ajustar esto según tus necesidades
  
      // Busca el usuario en la base de datos
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
  
      // Calcula el progreso requerido para desbloquear los caracteres
      const requiredProgress = charactersToUnlock * 5; // Aquí, 5 es el valor requerido para desbloquear 5 caracteres
  
      // Verifica si el usuario tiene suficiente progreso
      if (user.progress.totalProgress >= requiredProgress) {
        // Actualiza el progreso del usuario y desbloquea los caracteres
        user.progress.totalProgress -= requiredProgress;
        user.progress.hiragana += charactersToUnlock;
        user.progress.katakana += charactersToUnlock;
  
        // Puedes agregar un caso para el kanji si es necesario
  
        await user.save();
  
        return res.status(200).json({ message: `${charactersToUnlock} caracteres desbloqueados con éxito` });
      } else {
        return res.status(403).json({ error: "No tienes suficiente progreso para desbloquear estos caracteres" });
      }
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  
  // Controlador para desbloquear un kanji específico
  export const handleUnlockKanji = async (req, res) => {
    try {
      const userId = req.user._id; // Reemplaza esto con tu lógica de autenticación de usuario
      const kanjiId = req.body.kanjiId; // Identificador del kanji que se va a desbloquear
  
      // Busca el usuario y el kanji en la base de datos
      const user = await User.findById(userId);
      const kanji = await Kanji.findById(kanjiId);
  
      if (!user || !kanji) {
        return res.status(404).json({ error: "Usuario o kanji no encontrado" });
      }
  
      // Verifica si el usuario tiene suficiente progreso para desbloquear el kanji
      const requiredProgress = 100; // Reemplaza con el valor requerido para desbloquear un kanji
  
      if (user.progress.totalProgress >= requiredProgress) {
        // Actualiza el progreso del usuario y desbloquea el kanji
        user.progress.totalProgress -= requiredProgress;
        user.progress.kanji += 1; // Aumenta el progreso de kanji
  
        await user.save();
  
        return res.status(200).json({ message: `${kanji.symbol} desbloqueado con éxito` });
      } else {
        return res.status(403).json({ error: "No tienes suficiente progreso para desbloquear este kanji" });
      }
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };
  
