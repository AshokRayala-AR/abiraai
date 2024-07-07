import { BusinessData } from "./BusinessData";
import arrow from "../../../assets/svg/arrow.svg";

function BusinessCards() {
    return (
        <div className="flex justify-center items-center  p-4 md:p-12">
            <div className="flex flex-col gap-4 justify-center items-center w-full">
                {BusinessData.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col md:flex-row gap-4 lg:w-5/6 bg-[#D9D9D9] border border-slate-900 p-4 rounded-lg">
                            <div className="md:w-1/2 flex flex-col md:flex-row items-center justify-center">
                                <div className="md:w-1/2 flex justify-center items-center">
                                    <img src={item.img} alt="img" className="h-16 md:h-auto max-h-24 rounded-full" />
                                </div>
                                <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start pl-4">
                                    <p className="text-sm  md:text-md text-blue-600">{item.label}</p>
                                    <p className="text-sm lg:text-2xl font-semibold text-center md:text-left">{item.title}</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex">
                                <div className="w-5/6 md:w-2/3 flex flex-col justify-center ">
                                    <p className="text-xs lg:text-base">{item.content}</p>
                                </div>
                                <div className="w-1/6 md:w-1/3 flex justify-end items-center">
                                    <button className="flex justify-center items-center md:h-12 md:w-12 p-2 bg-white rounded-full">
                                        <img src={arrow} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BusinessCards;

