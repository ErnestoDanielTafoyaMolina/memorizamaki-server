import { Router } from "express";
import { getAllHiragana, handleGetAllKatakana, handleGetHiragana, handleGetKatakana } from "../controllers/kanas.controllers";
import { auth } from "../middlewares/auth";

const router = Router();

//gets all
router.get("/hiragana",auth, getAllHiragana);
router.get("/katakana",auth,  handleGetAllKatakana)

//gets level
router.get("/hiragana/:level",auth, handleGetHiragana)
router.get("/katakana/:level",auth, handleGetKatakana)

export default router;