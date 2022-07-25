import React, { useState } from "react";
import { MdPlayArrow } from "@react-icons/all-files/md/MdPlayArrow";
import Message from "./Message";

export default function AboutCompany() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(false);

  const tabsData = [
    {
      label: "Services",
      content:
        "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
      active: false,
    },
    {
      label: "Industry",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
      active: false,
    },
    {
      label: "Technology",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
      active: false,
    },
    {
      label: "Advantages",
      content:
        " Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
      active: false,
    },
  ];
  return (
    <div className="h-screen bg-slate-600">
      <h1 className="text-center font-bold pt-16 pb-8 text-2xl">Approach</h1>
      <p className=" max-w-[800px] m-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
        molestiae repellendus id nostrum laboriosam optio iusto modi atque. Quam
        enim nulla accusamus quo dolore tempore, est at sit tenetur inventore.
        Voluptates
      </p>

      <div className="flex w-8/12 m-auto pt-8  break-normal break-word">
        <div className="flex flex-col text-left  border-r-2  pr-8  m-auto">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-1    flex items-center  transition-colors duration-300 ${
                  idx === activeTabIndex ? "text-blue-500" : "hover:shadow-lg"
                }`}
                // Change the active tab on click.
                onClick={() => {
                  setActiveTab(true);
                  tabsData[activeTabIndex].active = activeTab;
                  setActiveTabIndex(idx);
                }}
              >
                {tabsData[activeTabIndex].active && <MdPlayArrow />} {tab.label}
              </button>
            );
          })}
        </div>

        <div className="py-4 break-normal break-word   max-w-[600px]">
          <p>{tabsData[activeTabIndex].content}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 w-8/12 place-items-center m-auto pt-5">
        <Message
          text="This is some text you know how it is "
          name="Henry banda"
          desc="Some more words here"
        />
          <Message
          text="This is some text you know how it is "
          name="Henry banda"
          desc="Some more words here"
        />
      </div>
<div className="pt-12 m-auto  text-center">
      <button className="bg-green-500 p-2 px-8 rounded-sm text-sm text-white font-[roboto]">Learn More</button>
</div>
    </div>
  );
}
