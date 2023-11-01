import { Router } from "express";
import { handleGetHiragana, handleGetKatakana } from "../controllers/kanas.controllers";
import { auth } from "../middlewares/auth";

const router = Router();


//gets level
router.get("/hiragana/:level",auth, handleGetHiragana)
router.get("/katakana/:level",auth, handleGetKatakana)

export default router;