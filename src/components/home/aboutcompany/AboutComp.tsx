import { AboutData } from "./AboutData";
import Person from "../../../assets/person.jpeg"
import star from "../../../assets/svg/star.svg";
import persons from "../../../assets/svg/persons.svg"
import complete from "../../../assets/svg/complete.png"

function AboutComp() {
    return(
        <div className="bg-[#101720] md:p-20 p-8 flex flex-col max-w-screen gap-8 md:gap-0 md:flex-row">

            <div className="w-full md:w-4/6 flex flex-col md:flex-row justify-center items-center gap-4">

                <div className=" md:w-2/6 h-full flex justify-center items-center py-8">
                    <img src={Person} className="rounded-t-[200px] rounded-b-[200px] h-full"/>
                </div>

                <div className="md:w-4/6 md:p-12 flex flex-col gap-8">

                    <div>
                    <p className="font-semibold text-3xl ">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">About Company</span>
                    </p>
                    </div>

                    <div>
                    <p className="font-semibold text-4xl text-white"> Make your life easier with help from   
                    <span className="text-transparent font-bold bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">  Present Software</span>
                    </p>                        
                    </div>

                    <div>
                    <ul>
                    {AboutData[1].map((item, index) => (
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

            </div>

            <div className="flex flex-col text-white md:w-2/6 gap-12 md:p-8">

                <div className="flex flex-col gap-4">
                    <p className="text-xl font-semibold">{AboutData[0][0].label}</p>

                    <p className="text-md font-normal">{AboutData[0][0].content}</p>
                </div>

                <div className="flex justify-between gap-4">

                    <div className=" text-left">
                        <div className="flex">
                            <img src={star} alt="stars"/>
                            <img src={star} alt="stars" className="mt-4"/>
                            <img src={star} alt="stars"/>
                        </div>

                        <img src={persons} alt="persons" className="w-14"/>
                        <p className="text-4xl font-bold ">10K+</p>
                        <p className="text-md font-normal">Satisfied Customers</p>
                    </div>

                    <div className="text-left flex flex-col gap-1">
                        <img src={complete} alt="complete" className="w-20"/>
                        <p className="text-4xl font-bold ">2K+</p>
                        <p className="text-md font-normal">Project Complete</p>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutComp;