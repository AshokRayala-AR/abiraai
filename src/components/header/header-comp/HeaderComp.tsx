import logo from "../../../assets/abiralogo.png";

import { useNavigate } from "react-router-dom";

import { Example } from "./Example";

export default function HeaderComp() {
  const navigate = useNavigate();

  return (
    <div className="relative ">
      <div className="flex  py-2 px-4 shadow-md bg-slate-50 justify-between items-center md:hidden">
        <div>
          <Example />
        </div>
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex cursor-pointer"
        >
          <div>
            <img src={logo} alt="logo" className="w-20  " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-semibold text-[#54f4fc] font-arima ">
              Abira AI
            </p>
            <p className="text-black">Journey Towards Future</p>
          </div>
        </div>
      </div>
      <div className=" hidden bg-slate-50 md:flex md:justify-around md:items-center px-5 ">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex cursor-pointer"
        >
          <div className=" max-h-[120px]  ">
            <img src={logo} alt="" className="max-h-[120px] " />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-semibold text-[#54f4fc] font-arima ">
              Abira AI
            </p>
            <p className="text-black">Journey Towards Future</p>
          </div>
        </div>
        <div className="flex md:gap-12 lg:gap-32 text-black">
          <ul className="flex justify-end gap-6 text-xl font-normal">
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>

            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("aboutcompany");
              }}
            >
              About Us
            </li>

            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("services");
              }}
            >
              Services
            </li>
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("contactus");
              }}
            >
              Contact Us
            </li>
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("blog");
              }}
            >
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
