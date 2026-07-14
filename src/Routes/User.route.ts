import { Router } from "express";
import { handleUserSignup } from "../Controllers/Signup.js";

const router = Router();

router.post("/" , handleUserSignup )

export default router;