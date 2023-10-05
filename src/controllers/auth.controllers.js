import bcrypt from "bcryptjs";
import User from "../models/users.models";
import jwt from "jsonwebtoken";

import { secret } from "../config";
import { createAccessToken } from "../libs/jwt";

export const handleRegister = async ( req, res ) => {

    const { username, email, password, phoneNumber, region } = req.body;
    if( !username || !email || !password || !phoneNumber || !region ){
        return res.status(400).json({
            msg:["Se necesitan todos los campos"]
        });
    }
    try {
        
        const userFound = await User.find({ email });
        console.log(userFound)
        if(userFound.length > 0){
            return res.status(400).json({
                msg:["el email ya se ha usado"]
            });
        }

        //encriptar contraseña
        const passwordHased = await bcrypt.hash( password, 10 );

        //modelo de usuario con contraseña encriptada
        const newUser = new User({
            username,
            email,
            password:passwordHased,
            phoneNumber,
            region
        });

        //servicio para almacener al usuario en la bd
        const userSaved = await newUser.save();

        //crear token para sesion
        const token = await createAccessToken({
            id: userSaved._id,
        });

        //cookies para sesion
        res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
          });

          res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            password:userSaved.password
          });
     } catch (error) {
        console.error(error.message);
        return res.status(200).json(error);
    }
}
export const handleLogin = async ( req, res ) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });
    
        if (!userFound)
          return res.status(400).json({
            message: ["The email does not exist"],
          });
          
          const isMatch = await bcrypt.compare(password, userFound.password);

          if (!isMatch) {
            return res.status(400).json({
              message: ["Correo o contraseña incorrectos"],
            });
          };

          const token = await createAccessToken({
            id:userFound._id,
            username:userFound.username
          });

          res.cookie("token", token, {
            httpOnly: process.env.NODE_ENV !== "development",
            secure: true,
            sameSite: "none",
          });
      
          res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
          });
    } catch (error) {
        console.error(error.message);
        return res.status(200).json(error);
    }

}
