
import './App.css';
import Message from "./Message";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let pricedata=[
    {
      plan :"FREE",
      price : 0 ,
      year : "month",
      user : "Single User",
      isUser : true,
      storage:"5GB storage",
      isStorage:true,
      projects : "Unlimited public projects",
      isProjects:false,
      private : "Unlimited private projects",
      isPrivate:false,
      community : "community Access",
      isCommunity : false,
      free : "free Subdomain",
      isFree : false,
      status : "Monthly Status Reports",
      isStatus:false,
     },
    {
      plan :"PLUS",
      price : 90 ,
      year : "month",
      user : "5 User",
      isUser : true,
      storage:"50GB storage",
      isStorage:true,
      projects : "Unlimited public projects",
      isProjects:true,
      private : "Unlimited private projects",
      isPrivate:true,
      community : "community Access",
      isCommunity : true,
      free : "free Subdomain",
      isFree : false,
      status : "Monthly Status Reports",
      isStatus:false,
    },
    {
      plan :"PRO",
      price : 100 ,
      year : "YEAR",
      user : "mulit User",
      isUser : true,
      storage:"5GB storage",
      isStorage:true,
      projects : "Unlimited public projects",
      isProjects:true,
      private : "Unlimited private projects",
      isPrivate:true,
      community : "community Access",
      isCommunity : true,
      free : "free Subdomain",
      isFree : true,
      status : "Monthly Status Reports",
      isStatus:true,
    }
  ]
  return (
  <section class="pricing py-5">
   <div class="container">
    <div class="row">
      {
        pricedata.map((data)=>{
          return <Message pricecard={data}/>

        })
      }
    </div>
   </div>
  </section>
  );
}

export default App;
