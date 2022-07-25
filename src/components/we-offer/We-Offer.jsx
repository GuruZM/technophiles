import React from "react";
import OfferItem from "./Offer-Item";
import { VscSettingsGear } from "@react-icons/all-files/vsc/VscSettingsGear";
import {GrGroup} from '@react-icons/all-files/gr/GrGroup';
import {RiFocus3Fill} from  '@react-icons/all-files/ri/RiFocus3Fill';
import {MdPieChartOutlined} from '@react-icons/all-files/md/MdPieChartOutlined';
import {GiAlarmClock} from '@react-icons/all-files/gi/GiAlarmClock';
import {MdSpeakerGroup} from '@react-icons/all-files/md/MdSpeakerGroup';



export default function WeOffer() {
  return (
    <div className="h-screen ">
      <h1 className="text-center font-bold pt-16 pb-8 text-2xl">We-Offer</h1>
      <div className="grid grid-cols-3 gap-3 w-3/5 m-auto ">
        <OfferItem
          icon={<VscSettingsGear />}
          title="Development"
          desc="expertise in reliable architecture. efficient development practices."
        />
        <OfferItem
          icon={<GrGroup/>}
          title="Dedicated Teams "
          desc="Focused on your projects solely and completely"
        />
        <OfferItem
          icon={<RiFocus3Fill/>}
          title="UI & UX Design"
          desc="We create products with the best interaction and visual awareness"
        />
        <OfferItem
          icon={<MdPieChartOutlined/>}
          title="Managed Projects"
          desc="Our Project management team has great expertise"
        />
        <OfferItem
          icon={<GiAlarmClock/>}
          title="Software Testing"
          desc=" Our Q&A engineers make sure your code is bug free"
        />
        <OfferItem
          icon={<MdSpeakerGroup />}
          title="IT Consulting "
          desc="Performance Boost development optmization cost and risk reduction "
        />
      </div>
    </div>
  );
}
