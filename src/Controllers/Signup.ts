import User from "../Models/user.model.js";

const handleUserSignup = async(req , res)=>{
    const {fullName , email , password} = req.body;

    if(!fullName || !email || !password){
        await User.create({
            fullName,
            email,
            password,
        })
        return res.render("/");
    }

}

export { 
    handleUserSignup
}