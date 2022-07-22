import React from "react";
import HeaderServiceItem from "./Header-Service-Item";
export default function HeaderServices() {
  return (
    <div className=" flex max-w-fit absolute top-[500px] space-between   m-auto left-0 right-0 ">
      <HeaderServiceItem
        title="Development"
        desc="An agile software development company providng both front-end and back-end services"
      />
       <HeaderServiceItem
        title="UI UX Design"
        desc="Research user experience design, analysis and support"
      />
       <HeaderServiceItem
        title="Long-Term Support"
        desc="Constantly monitor the quality of our work, we provide post-launch support and maintenance"
      />
    </div>
  );
}
