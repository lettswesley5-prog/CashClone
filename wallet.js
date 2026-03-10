
const router=require("express").Router()
const User=require("../models/User")
const Transaction=require("../models/Transaction")

router.post("/send",async(req,res)=>{
 const {from,to,amount}=req.body

 const sender=await User.findById(from)
 const receiver=await User.findOne({username:to})

 if(!receiver) return res.send("User not found")
 if(sender.balance < amount) return res.send("Insufficient balance")

 sender.balance -= amount
 receiver.balance += Number(amount)

 await sender.save()
 await receiver.save()

 const tx=await Transaction.create({
  from:sender.username,
  to:receiver.username,
  amount
 })

 res.json(tx)
})

module.exports=router
