import { Router } from "express";
import { auth } from "../middlewares/auth";
import { handleLogin, handleRegister } from "../controllers/auth.controllers";

const router = Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);

export default router;

