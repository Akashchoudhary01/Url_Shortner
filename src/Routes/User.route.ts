import { Router } from "express";
import { handleUserLogin, handleUserSignup } from "../Controllers/Signup.js";

const router = Router();

router.post("/" , handleUserSignup );
router.post("/login" , handleUserLogin );

export default router;