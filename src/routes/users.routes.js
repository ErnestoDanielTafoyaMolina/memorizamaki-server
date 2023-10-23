import { Router } from "express";
import { auth } from "../middlewares/auth";
import { handleProfile } from "../controllers/users.controllers";

const router = Router();


router.get("/profile",auth, handleProfile)

export default router;