import { Router } from "express";
import { handleLogin, handleRegister, logout } from "../controllers/auth.controllers";

const router = Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.post("/logout", logout)

export default router;

