import React from "react";

export default function Contact() {
  return (
    <div className=" max-h-fit bg-gray-900  ">
      <div className=" w-9/12   flex m-auto pt-14 rounded-md">
        <form action="" className=" p-6  w-3/5 bg-white">
          <h1 className="text-xl text-green-500 font-bold">Get in touch </h1>
          <h1 className="py-3 text-xl font-bold">Lets discuss</h1>
          <div className="flex justify-between pb-5">
            <input
              type="text"
              placeholder="Name*"
              className="block mr-2 w-2/4 border-collapse bg-transparent py-5 border-b-2 "
            />
            <input
              type="text"
              placeholder="Email*"
              className="block w-2/4 border-collapse bg-transparent py-5 border-b-2 "
            />
          </div>

          <textarea
            name=""
            className="bg-transparent border-b-2 "
            placeholder="Project Description"
            id=""
            cols="70"
            rows="5"
          ></textarea>

          <button className="bg-green-500 m-auto p-2 mt-6 px-8 rounded-sm text-sm text-white font-[roboto]">Send</button>
        </form>
        <div className="p-8 bg-slate-400  w-2/5 flex flex-col"></div>
      </div>

      <div className="py-8 pb-20 w-9/12 flex justify-between   m-auto">
        <div>
          <h1 className="pb-4 text-white">Technophiles</h1>
          <p className="max-w-[400px] text-white text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam illo
            ipsa exercitationem. Voluptatem,
          </p>
        </div>

        <div className="flex flex-col">
          <ul className="flex text-white">
            <li className="text-sm">Company</li>
            <li className="mx-3 text-sm">Services</li>
            <li className="mx-3 text-sm">Portfolio</li>
            <li className="text-sm">Careers</li>
          </ul>
        </div>
      </div>
      <hr className="w-9/12 m-auto pt-10" />
      <div className="w-9/12 flex m-auto pb-5 justify-between">
        <p className="text-sm text-white"> Copyright Technophiles</p>
        <ul className="flex justify-between">
          <li className="mx-4 text-sm text-white">Privacy Policy</li>
          <li className="text-sm text-white">Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
}
