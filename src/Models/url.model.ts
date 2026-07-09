import mongoose, {Schema} from 'mongoose';

interface IUrl{
    shortID : string,
    redirectUrl : string,
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
    visitHistory:[
        {
            timestamps :{
                type : Date,
                default : Date.now,
            } }]

} , {
    timestamps : true
})
const URL = mongoose.model("URL" , URLSCHEMA);

export default URL;