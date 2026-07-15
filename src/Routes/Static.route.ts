import { Router } from "express";
import URL from "../Models/url.model.js";
const route = Router();

route.get("/" , async(req , res)=>{
    const allUrl =await URL.find({});
    res.render("home" , {
        allUrl
    });
});
route.get("/signup" , async(req , res)=>{
    return res.render("signup");
});
route.get("/login" , async(req , res)=>{
    return res.render("login");
});

export default route;