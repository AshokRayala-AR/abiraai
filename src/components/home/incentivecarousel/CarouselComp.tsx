import { useState } from "react";
import { CarouselData } from "./CarouselData";
import aiimg from "../../../assets/aiimg.jpg";
import { motion } from 'framer-motion';

function CarouselComp() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index:number) => {
        setActiveIndex(index);
    };
    return (
        <div className="relative bg-[#101720] lg:h-screen p-8 lg:p-12  flex flex-col md:flex-row justify-center items-center ">
            <div className="h-5/6 w-full md:relative flex flex-col justify-center items-center gap-8 md:gap-0">
                <div className=" pic md:absolute md:-left-12 md:bottom-10  md:h-full w-3/5 z-10 flex flex-col justify-center items-center">
                    <img src={aiimg} alt="aimimg" className="w-full h-full object-cover" />

                    <div className={`flex space-x-2 mt-8 justify-center p-2 rounded-lg w-3/6 md:w-1/6  ${activeIndex !== -1 ? 'border-2 border-dotted border-[#2159E7]' : ''}`}>
                    {[0, 1, 2, 3].map((index) => (
                        <motion.div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            initial={{ scale: 1 }}
                            animate={{ scale: activeIndex === index ? 1.2 : 1 }}
                            transition={{ type: 'spring', stiffness: 500 }}
                            className={`w-8 h-4 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full cursor-pointer ${activeIndex === index ? 'bg-[#2159E7]' : 'bg-transparent border'}`}
                        />
                    ))}
                </div>

                </div>

                <div className="md:w-1/2 md:h-full bg-[rgb(112,171,209)] flex flex-col justify-center items-center lg:items-end ml-auto">
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-12 w-5/6"> 
                        <p className="text-2xl font-semibold">{CarouselData[0].title}</p>
                        <p>{CarouselData[0].content}</p>
                        <button className="rounded-lg p-1 px-4 bg-[#2159E7] w-3/6 lg:w-2/6 font-medium">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselComp;

