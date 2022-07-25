import React from "react";

export default function Page1() {
  return (
    <div className="h-screen bg-blue-400">    
     <h1 className="text-center font-bold pt-[280px] pb-8 text-2xl">
        Approach
      </h1>
      <div className="grid grid-cols-2 max-w-3 justify-center max-h-fit py-2 text-center">
        <div>image</div>
        <div className="p-8 max-w-fit">
          <h1 className="text-left py-4 font-[roboto] font-bold ">
            Agile Management
          </h1>
          <p className="text-left max-w-[400px] text-sm font-[roboto]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            officia corrupti sint odit dicta iste dolorum, reprehenderit,
            exercitationem error esse labore culpa quaerat facere pariatur
            incidunt cupiditate in suscipit. Quos?
          </p>
        </div>
      </div>
    </div>
  );
}
