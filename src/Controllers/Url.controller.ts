import { Request , Response } from "express";
import { nanoid } from "nanoid";
import URL from "../Models/Url.models.js";
const handleUrlGeneration = async(req:Request , res:Response)=>{

    const shortId = nanoid(8);
    const {url} = req.body;
    if(!url){
        return res.status(400).json({error : "URL is Required"})
    }
    URL.create({
        shortID : shortId,
        redirectUrl : url,
        visitHistory : []

    })
    return res.json({id : shortId});



}
export {handleUrlGeneration};