import { Request , Response } from "express";
import { nanoid } from "nanoid";
import URL from "../Models/url.model.ts";

const handleUrlGeneration = async(req:Request , res:Response)=>{

    const shortId = nanoid(8);
    const {url} = req.body;
    if(!url){
        return res.status(400).json({error : "URL is Required"})
    }
 await URL.create({
    shortID: shortId,
    redirectUrl: url,
    createdBy: req.user._id,
    visitHistory: [],
});
    return res.render("home" , {
        id : shortId
    })
    // return res.render("/" , {
    //     id:shortId
    // })
    // return res.json({id : shortId});



}
export {handleUrlGeneration};