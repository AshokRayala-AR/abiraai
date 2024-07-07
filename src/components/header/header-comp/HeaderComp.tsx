import logo from '../../../assets/abiralogo.png'
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Example } from "./Example";
import { motion } from "framer-motion";


export default function HeaderComp() {
  const navigate = useNavigate();
//   const orderItems = useSelector((store:any) => {
//     return store.cart.items;
//   });
  return (
    <div className="relative">
      <div className="flex  shadow-md bg-[rgb(0,0,0)] text-white p-2 py-4 justify-between items-center md:hidden">
        <div>
          <Example />
        </div>
        
        
        
      </div>
      <div className=" hidden bg-[rgb(0,0,0)] md:flex md:justify-around md:items-center p-2 py-4 ">
      <div className='flex'>
          <img src={logo} alt="logo" className="w-20" />
          <div className="flex flex-col items-center justify-center">
                <p className="text-4xl font-semibold text-[#54f4fc] font-arima ">Abira AI</p>
                <p className="text-white">Journey Towards Future</p>
            </div>
        </div>
        <div className="flex md:gap-12 lg:gap-32 text-white">
          <ul className="flex justify-end gap-6">
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
                navigate("Services");
              }}
            >
              Services
            </li>
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("ContactUs");
              }}
            >
              Contact Us
            </li>
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("Blog");
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