import { Request , Response , NextFunction } from "express";
import { getUser } from "../service/auth.js";

async function isLoggedIn(req:Request, res:Response , next:NextFunction) {
    const userUid = res.cookie.uid;

    if(!userUid) return res.redirect("/login");

    const  user = getUser(userUid);
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}
export {
    isLoggedIn
}