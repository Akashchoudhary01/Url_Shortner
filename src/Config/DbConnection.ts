import mongoose from "mongoose";
const URL:string = 'mongodb://127.0.0.1:27017/URL_SHORTNER'
export const dbConnection = async()=>{
    await mongoose.connect(URL!)
    .then(()=> console.log(`mongo Db connected`))
    .catch(()=> console.log("Something went wrong in DB Connection"))

}
