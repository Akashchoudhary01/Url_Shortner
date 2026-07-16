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
const handleUserLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "All fields are mandatory",
        });
    }

    const user = await User.findOne({ email, password });

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password",
        });
    }

    const token = setUser(user);

    res.cookie("token", token);

    return res.redirect("/");
};
const handleUserLogout= (req:Request , res:Response)=>{
    // const token = setUser(user);
    res.clearCookie("token");
    return res.redirect("/")

}

export { 
    handleUserSignup,
    handleUserLogin,
    handleUserLogout
}