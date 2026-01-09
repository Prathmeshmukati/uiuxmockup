
import { UserButton } from "@clerk/nextjs";
import Header from "./-shared/Header";
import Hero from "./-shared/Hero";


export default function Home() {
  return (
    <div>
         <Header/>
         <Hero />

           <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-purple-400/20 blur-2xl"></div>
   

     <div className="absolute top-0  right-10 h-[500px] w-[500px] bg-pink-400/20 blur-2xl"></div>
   

     <div className="absolute -bottom-[200px] -right-20  h-[500px] w-[500px] bg-red-400/20 blur-2xl"></div>
    

     <div className="absolute top-[200px] -left-30 h-[500px] w-[500px] bg-sky-400/20 blur-2xl"></div>
  

   </div>
  );
}
