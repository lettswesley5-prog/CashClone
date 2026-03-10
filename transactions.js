
const router=require("express").Router()
const Transaction=require("../models/Transaction")

router.get("/",async(req,res)=>{
 const tx=await Transaction.find().sort({date:-1})
 res.json(tx)
})

module.exports=router
