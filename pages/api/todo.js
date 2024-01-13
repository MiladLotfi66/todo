import { getSession } from "next-auth/react";
import connectDB from "../../utils/connectDB";
import User from "../../components/models/User";

async function handler(req , res) {
    try {
        await connectDB();
      } catch (err) {
        console.log(err);
        return res
          .status(500)
          .json({ status: "failed", message: "Error in connecting to DB" });
      }
const session =await getSession({req});
if(!session){
return res.status(401).json({status:"failed", message:"user not login"})
}
const user=await User.findOne({email:session.user.email})
if (!user) {
    return res.status(401).json({status:"failed", message:"user not found"})

}

if(req.method==="POST"){
const {title ,status}=req.body;
console.log(title ,status);
if(!title || !status){
   return res.status(422).json({status:"failed", message:"invalid data"});
}
user.todos.push({title , status});
user.save();
res.status(201).json({status:"success", message:"todo saved in user todos"});

}

}

export default handler
