
const mongoose=require("mongoose")

const schema=new mongoose.Schema({
 username:String,
 email:String,
 password:String,
 balance:{type:Number,default:1000}
})

module.exports=mongoose.model("User",schema)
