import { ServicesLinks, SocialLinksData } from "./FooterData";
import { IoIosArrowForward } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";

function FooterComp() {
  return (
    <footer className="bg-[#030627] px-6 sm:px-12 md:px-16 flex flex-col py-8 items-center">
      <div className="mx-auto max-w-5xl w-full space-y-4 md:space-y-12">
        <div className="flex">
          <h3 className="w-full font-arima text-white sm:text-2xl md:text-xl lg:text-2xl">
            Present software
          </h3>
          <div className="flex w-full items-center space-x-2 text-white sm:space-x-4">
            {SocialLinksData.map((value) => {
              return (
                <span key={value.id} className="flex items-center space-x-1">
                  {value.icon}
                  <p className="hidden sm:block sm:text-xs md:text-sm tracking-wide">
                    {value.title}
                  </p>
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row text-white space-y-4 md:space-y-0 gap-10">
          <div className="w-full md:pr-8 space-y-3">
            <h6 className="space-x-2">
              <span className="text-xl font-bold">Subscribe</span>
              <span className="font-serif text-xl font-bold">Newsletter</span>
            </h6>
            <p className="text-base text-gray-400">
              We work very closely with leading providers of IT infrastructure
              and application software to provide our clients with optimal
              emerging technology solutions for their environment
            </p>
            <form className="py-2 flex space-x-2 md:flex-col md:space-y-2 md:space-x-0 lg:flex-row lg:space-x-2 lg:space-y-0">
              <div
                
                className=" flex items-center gap-2 w-full rounded-md outline-none text-black text-sm tracking-wide p-2 max-w-xs bg-[#0A0D2C]">
                  <CiMail className="text-white"/>
                <input type="text" className="bg-transparent" placeholder="Email Address"/>
                </div>
              <button className="bg-[#086AD9] text-xs font-medium tracking-wide px-4 rounded py-1 flex items-center justify-center hover:bg-blue-900 duration-200 hover:scale-105">
                <p className="text-sm">Signup</p>
                <span className="">
                  <IoIosArrowForward className="text-sm"/>
                </span>
              </button>
            </form>
            <p className="space-x-2 text-xs font-medium tracking-wide flex items-center">
              <input type="checkbox" />
              <span className="text-gray-600">By subscribing, you’re accept</span>
              <span className="text-white">Privacy Policy</span>
            </p>
          </div>
          <div className="w-full space-y-1">
            <h6 className="font-medium tracking-wide text-lg">Services</h6>
            <ul className="flex flex-col">
              {ServicesLinks.map((link, index) => {
                return (
                  <span key={index} className="text-sm w-full text-gray-400">
                    {link}
                  </span>
                );
              })}
            </ul>
          </div>
          <div className="w-full space-y-1">
            <div>
              <h6 className="font-medium tracking-wide text-lg">Locations</h6>
              <p className="text-xs tracking-wide text-gray-400">
                1555 W Main Street, Jeffersonville, PA-19403
              </p>
            </div>
            <div>
              <h6 className="font-medium tracking-wide text-sm mt-2">Contact</h6>
              <p className="text-xs tracking-wide text-gray-400">
                info@presentsoftwareinc.com
              </p>
              <p className="text-xs tracking-wide font-medium text-gray-400">
                +1 (610)-462-8161
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center text-white text-xs space-x-2 justify-center py-6">
          <div className="relative block">
            <span>
              <FaRegCircle className="text-base" />
            </span>
            <p className="absolute left-1 top-[-0.1rem]">c</p>
          </div>
          <p className="font-inter text-center">
            2022 Present Software - All Rights Reserved. By Webcon Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComp;