
import {useState} from "react"
import axios from "axios"

export default function SendMoney(){

 const [to,setTo]=useState("")
 const [amount,setAmount]=useState("")

 const send=async()=>{
  await axios.post(process.env.NEXT_PUBLIC_API+"/wallet/send",{
   to,amount
  })
  alert("Payment Sent")
 }

 return(
  <div style={{background:"#111",padding:20,borderRadius:10,width:300}}>
   <h3>Send Money</h3>
   <input placeholder="username" onChange={e=>setTo(e.target.value)} />
   <input placeholder="amount" onChange={e=>setAmount(e.target.value)} />
   <button onClick={send}>Send</button>
  </div>
 )
}
