
import WalletCard from "../components/WalletCard"
import SendMoney from "../components/SendMoney"
import Activity from "../components/Activity"

export default function Home(){
 return(
  <div style={{background:"#000",color:"#fff",minHeight:"100vh",padding:40}}>
   <h1>CashClone Pro</h1>
   <WalletCard/>
   <div style={{display:"flex",gap:20,marginTop:30}}>
    <SendMoney/>
    <Activity/>
   </div>
  </div>
 )
}
