
export default function Activity(){
 const tx=[
  {id:1,from:"Alex",to:"Mike",amount:50},
  {id:2,from:"John",to:"Alex",amount:20}
 ]

 return(
  <div style={{background:"#111",padding:20,borderRadius:10,width:300}}>
   <h3>Recent Activity</h3>
   {tx.map(t=>(
    <p key={t.id}>{t.from} → {t.to} : ${t.amount}</p>
   ))}
  </div>
 )
}
