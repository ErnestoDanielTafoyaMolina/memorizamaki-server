import User from "../models/users.models";
import jwt from "jsonwebtoken";

import { secret } from "../config";

export const handleProfile = async ( req, res ) => {
    try {
      const { authorization } = req.headers;

      if(!authorization){
        return res.status(401).json({
          ok: false,
          msg:"Unauthorized Request"
        });
      }
    
      const  token  = authorization.split(' ')[1]
    
      jwt.verify(token, secret, async (error, user) => {
        if (error) return res.sendStatus(401);
    
        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);
    
        return res.json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
          img:userFound.img,
          phone:userFound.phoneNumber,
          region:userFound.region 
        });
      });
    } catch (error) {
        console.error(error.message);
        return res.status(200).json(error);
    }
};

