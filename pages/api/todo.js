import { getSession } from "next-auth/react";
import connectDB from "../../utils/connectDB";
import User from "../../components/models/User";
import { sortTodos } from "../../utils/sortTodos";

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

}else if (req.method==="GET"){
const sortedData=sortTodos(user.todos);
res.status(200).json({status:"success", data:sortedData}); 
}
else if(req.method==="PATCH"){
  const {id,status}=req.body;
  if (!id || !status) {
    return res.status(402).json({status:"filed",message:"Invalid Data"})
   }
   const result=await User.updateOne({"todos._id":id},{$set:{"todos.$.status":status}});
   console.log(result);
   res.status(200).json({status:"success",massage:"update todo success"})
  }



}

export default handler
