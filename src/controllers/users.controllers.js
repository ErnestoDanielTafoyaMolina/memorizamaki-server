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

