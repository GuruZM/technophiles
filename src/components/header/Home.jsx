import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderSection from "./Header-Section";
 

export default function Home() {
  return (
    <div className="h-screen bg-slate-400">
      <Navbar />
      <h1 className="text-center font-bold text-4xl text-gray-900">Best Technology Solution <br/>That make your business more efficient</h1>
      <p className="text-center text-xs my-10">Development Services and skills for your needs. Partnering for a long time </p>
      <HeaderSection/>
       
    </div>
  );
}
