import React from "react";
import Navbar from "./Navbar/Navbar";
import HeaderSection from "./Header-Section";
 

export default function Home() {
  return (
    <div className="h-screen bg-slate-400">
      <Navbar />
      <h1>Best Technology Solution to make your business more efficient</h1>
      <p>Development Services and skills for your needs. Partnering for a long time </p>
      <HeaderSection/>
       
    </div>
  );
}
