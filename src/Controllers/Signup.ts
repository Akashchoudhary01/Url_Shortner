import { v4 } from "uuid";
import User from "../Models/user.model.js";
import { Request , Response } from "express";
import { setUser } from "../service/auth.js";

const handleUserSignup = async(req:Request, res:Response)=>{
    const {fullName , email , password} = req.body;

    if(!fullName || !email || !password){
        return res.status(200).json("Every field is mendatory")
    }
        await User.create({
            fullName,
            email,
            password,
        })
        return res.render("home");
}
const handleUserLogin= async(req:Request, res:Response)=>{
    const { email , password} = req.body;

    if(!email || !password){
        return res.status(200).json("Every field is mendatory")
    }
      const user = await User.findOne({email});
      const sessionId = v4();
      setUser(sessionId , user);
      res.cookie("uid" , sessionId);
      if(!user){
        return res.json(404).json("user not found")
      }
      return res.redirect("/");
}

export { 
    handleUserSignup,
    handleUserLogin
}