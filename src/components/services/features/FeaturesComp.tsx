import { FeaturesData } from "./FeaturesData";
import featuresimg from "../../../assets/featuresimg.jpeg";
import circle from "../../../assets/svg/circle.svg";
import p1 from "../../../assets/p1.jpeg";
import p2 from "../../../assets/p2.jpeg";
import p3 from "../../../assets/p3.jpeg";
import plus from "../../../assets/svg/plus.svg"


function FeaturesComp() {
    return (
            <div className=" total flex justify-center items-center gap-2 w-full p-20 px-16 bg-[#101720] h-screen">
                <div className="a w-1/2 p-12 flex flex-col justify-center gap-8 h-full">
                    <div>
                        <p className="font-semibold text-3xl">
                            <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">
                                Best Features Development
                            </span>
                        </p>
                    </div>

                    <div className="">
                        <p className="font-semibold text-4xl text-white">
                            Best Features We Provide For Our <span className="text-transparent font-bold bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">  IT Solutions
                            </span>
                        </p>
                    </div>

                    <div>
                        <ul>
                            {FeaturesData[1].map((item, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <img src={item.svg} alt="tick icon" className="w-4 h-4" />
                                    <p className="text-white">{item.decp}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <button className="bg-[#FB5457] rounded-lg p-2 px-4">Read More</button>
                    </div>
                </div>

                <div className="b w-1/2  flex justify-start items-center h-full p-12">
                <div className="h-full relative flex items-center ">
                    <img src={featuresimg} className=" h-full z-10" />
                    <img src={circle} alt="circle" className="absolute -bottom-14 left-2/3"/>

                    <div className="absolute -right-1/4 bottom-1/3 bg-[#1273EB] p-4 z-20 w-3/6 flex flex-col justify-center items-center text-center gap-2">
                        <p className="text-white text-sm">5m+ Trusted
                        Global Clients</p>
                        <hr className="w-5/6"></hr>
                        <div className="flex justify-center">
                    <img src={p1} alt="p1" className=" w-4 h-4 rounded-full object-cover"/>
                    <img src={p2} alt="p2" className=" w-4 h-4 rounded-full object-cover"/>
                    <img src={p3} alt="p3" className=" w-4 h-4 rounded-full object-cover"/>

                    <button className="p-1 bg-[#D9D9D9] rounded-full ">
                        <img src={plus} alt="" />
                    </button>
                </div>

                    </div>
                </div>
            </div>
            </div>
    );
}

export default FeaturesComp;

    