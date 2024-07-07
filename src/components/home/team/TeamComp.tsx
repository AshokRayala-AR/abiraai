import { useState } from "react";
import { TeamData } from "./TeamData";
import teamlarge from "../../../assets/teamlarge.jpeg";
import teamone from "../../../assets/teamone.png";
import teamtwo from "../../../assets/teamtwo.png";
import teamthree from "../../../assets/teamthree.png";
export default function TeamComp() {
    const [imageIndex,setImageIndex] = useState(0);
  return (
    <div className="bg-[#101720] flex flex-col p-8 md:p-12 md:h-screen ">
      <div className="text-center flex flex-col gap-4">
        <p className="font-bold ">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400 font-inter text-[24px]  font-bold leading-[164%] tracking-[1px]">
            Meet Our Team
          </span>
        </p>
        <h3 className="text-4xl font-bold mt-2 text-white">
          We’ve Exclusive Team member Meet our Professionals
        </h3>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center items-center pt-6">
        <div className="grid grid-cols-2 md:flex gap-4 md:flex-col md:w-1/3 justify-center p-4 ">
          {TeamData.map((item, index) => {
            return (
              <div className="flex text-white gap-5" key={index}>
                <div>
                  <p className="font-semibold">{item.id}</p>
                </div>
                <div className="flex justify-between w-4/6">
                  <div className="flex flex-col gap-1 ">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-white text-opacity-70 font-roboto text-base font-normal leading-[150%]">{item.role}</p>
                  </div>
                  <div className="p-1 rounded-full bg-white h-6 w-6 flex justify-center items-center">
                    <img src={item.imgpath} alt="imgpath" className="  " />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:w-1/2 p-8 flex items-center justify-center gap-4">
          <div>
            <img src={teamlarge} alt="teamlarge" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={teamone} alt="teamone" />
            <img src={teamtwo} alt="teamtwo" />
            <img src={teamthree} alt="teamthree" />
          </div>
        </div>
      </div>
    </div>
  );
}