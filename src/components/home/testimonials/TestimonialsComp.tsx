import backgroundImage from "../../../assets/business.jpeg";
import TestimonialItem from "./TestimonialItem";
import { TestimonialData } from "./TestimonialsData";
export default function TestimonialsComp() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center p-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col  text-white p-8 gap-16">
        <div className="w-[50%] pl-2">
          <p className="font-bold ">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400 font-inter text-[18px]  font-bold leading-[164%] tracking-[1px]">
            Clients Testimonials
            </span>
          </p>
          <h3 className="text-white font-inter text-2xl font-medium leading-[164%] tracking-[1.6px] mt-2">
          Why People Say About Our 
          Business services
          </h3>
        </div>
        <div className="w-full">
          <div className="w-full flex gap-8 justify-center">
            {TestimonialData.map((item) => {
              return <TestimonialItem item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}