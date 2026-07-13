import { Router } from "express";
import URL from "../Models/url.model.js";
const route = Router();

route.get("/" , async(req , res)=>{
    const allUrl =await URL.find({});
    res.render("home" , {
        allUrl
    });
});

export default route;