import mongoose from "mongoose";
const URL:string = "";
export const dbConnection = async(URL:string)=>{
    await mongoose.connect(URL!)
    .then(()=> console.log(`mongo Db connected`))
    .catch(()=> console.log("Something went wrong in DB Connection"))

}
