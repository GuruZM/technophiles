import React from "react";
import { VscQuote } from "@react-icons/all-files/vsc/VscQuote";

export default function Message(props) {
  return (
    <div>
      <p className="flex items-start justify-start text-xl py-6">
        <VscQuote size={30} className='mx-1' />{props.text}
      </p>
      <div className="flex">
          <span className="rounded-full mx-3 bg-gray-500 w-30 h-30">image</span> 
        <div>

        <h1>
            {props.name}
        </h1>
        <p className="text-sm">
          {props.desc}
        </p>
        </div>
      </div>
    </div>
  );
}
