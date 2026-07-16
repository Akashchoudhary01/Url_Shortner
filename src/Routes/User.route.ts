import { Router } from "express";
import { handleUserLogin, handleUserSignup , handleUserLogout} from "../Controllers/Signup.js";

const router = Router();

router.post("/" , handleUserSignup );
router.post("/login" , handleUserLogin );
router.post("/login" , handleUserLogin );
router.get("/logout" , handleUserLogout);

export default router;