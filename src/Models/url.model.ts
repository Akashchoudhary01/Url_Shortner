import mongoose, {Schema} from 'mongoose';
import { ref } from 'process';

interface IUrl{
    shortID : string,
    redirectUrl : string,
    createdBy : any,
     visitHistory: {
    timestamps: Date;
  }[];
}


const URLSCHEMA = new mongoose.Schema<IUrl>({
    shortID:{
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    redirectUrl : {
          type : String,
        required : true,

    },
    createdBy:{
      type : mongoose.Schema.Types.ObjectId,
      ref : "users",
    },
    visitHistory:[
        {
            timestamps :{
                type : Date,
                default : Date.now,
            } }]

} 
, {
    timestamps : true
})
const URL = mongoose.model("URL" , URLSCHEMA);

export default URL;