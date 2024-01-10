import { Schema , model , models } from "mongoose";

const userSchema ={
    name:String ,
    lastName:String ,
    email:{
        type:String,
        required : true ,
    },
    password:{
       type : String,
       required : true ,
    },
    todos:[{title:String , status:String}],
    createdAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    }

}

const User =models.User || model("User",userSchema);

export default User ;