import { useState } from "react";
import { CarouselData } from "./CarouselData";
import aiimg from "../../../assets/aiimg.jpg";
import { motion } from 'framer-motion';

function CarouselComp() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <div className="relative bg-[#101720] h-screen p-12 flex justify-center items-center ">
            <div className="h-5/6 w-full relative ">
                <div className=" pic absolute -left-12 bottom-10 h-full w-3/5 z-10 flex flex-col justify-center items-center">
                    <img src={aiimg} alt="aimimg" className="w-full h-full object-cover" />

                    <div className={`flex space-x-2 mt-8 justify-center p-2 rounded-lg w-1/6  ${activeIndex !== -1 ? 'border-2 border-dotted border-[#2159E7]' : ''}`}>
                    {[0, 1, 2, 3].map((index) => (
                        <motion.div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            initial={{ scale: 1 }}
                            animate={{ scale: activeIndex === index ? 1.2 : 1 }}
                            transition={{ type: 'spring', stiffness: 500 }}
                            className={`w-3 h-3 rounded-full cursor-pointer ${activeIndex === index ? 'bg-[#2159E7]' : 'bg-transparent border'}`}
                        />
                    ))}
                </div>

                </div>

                <div className="w-1/2 h-full bg-[rgb(112,171,209)] flex flex-col justify-center items-end ml-auto">
                    <div className="flex flex-col gap-4 p-12 w-5/6"> 
                        <p className="text-2xl font-semibold">{CarouselData[0].title}</p>
                        <p>{CarouselData[0].content}</p>
                        <button className="rounded-lg p-1 px-4 bg-[#2159E7] w-2/6 font-medium">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselComp;

