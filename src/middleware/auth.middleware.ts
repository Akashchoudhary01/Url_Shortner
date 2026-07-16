import { Request , Response , NextFunction } from "express";
import { getUser } from "../service/auth.js";

async function isLoggedIn(req:Request, res:Response , next:NextFunction) {
    const usertoken = req.cookies?.token;

    if(!usertoken) return res.redirect("/login");

    const  user = getUser(usertoken);
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}
async function checkAuth(req:Request, res:Response , next:NextFunction ){
    const token = req.cookies?.token;

    if(token){
        req.user = getUser(token);
    }
next();
    

}
export {
    isLoggedIn,
    checkAuth
}