import jwt from "jsonwebtoken";
import { secret } from "../config.js";

export const auth = (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (!token)
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });

    jwt.verify(token, secret, (error, user) => {
      if (error) {
        return res.status(401).json({ message: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};