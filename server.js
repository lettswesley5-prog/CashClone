
require("dotenv").config()
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const auth=require("./routes/auth")
const wallet=require("./routes/wallet")
const tx=require("./routes/transactions")

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo connected"))

app.use("/api/auth",auth)
app.use("/api/wallet",wallet)
app.use("/api/transactions",tx)

app.get("/",(req,res)=>res.send("CashClone API running"))

const PORT=process.env.PORT||5000
app.listen(PORT,()=>console.log("Server started"))
