import ServicesCards from "./ServicesCard";
import discuss from "../../../assets/svg/discuss.svg"
import p1 from "../../../assets/p1.jpeg";
import p2 from "../../../assets/p2.jpeg";
import p3 from "../../../assets/p3.jpeg";
import plus from "../../../assets/svg/plus.svg"

function ServicesComp() {
    return(
        <div className="bg-[#101720] flex flex-col justify-center items-center text-center gap-10">
            <div className="flex flex-col justify-center items-center gap-12 p-16">
            <div className="w-3/6 flex flex-col gap-6">

                <p className="font-medium text-2xl">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">What we Provide</span>
                </p>

                <p className="text-3xl font-bold text-white">We Run all kinds of IT services 
                that vow your Success</p>

            </div>

            <div className=" ">
                <div className=" ">
                <ServicesCards />
                </div>
            </div>
            </div>

            <div className="w-full flex">
                <div className="w-3/6 bg-[#C5AC8C] flex justify-around p-4 items-center">
                <div className="text-white flex">
                    <img src={discuss} alt="discuss" className="w-8"/>
                    <p className="text-lg">
    Let’s <span className="font-bold">Discuss & Start</span> IT Consultations
</p>
                </div>
                 <div>
                    <a href="#" className="underline text-white">Lets's Talk &gt; </a>
                 </div>

                </div>

                <div className="w-3/6 bg-[#2159E7] flex justify-center items-center gap-12">
                <div className="flex ">
                    <img src={p1} alt="p1" className=" w-8 h-8 rounded-full object-cover"/>
                    <img src={p2} alt="p2" className=" w-8 h-8 rounded-full object-cover"/>
                    <img src={p3} alt="p3" className=" w-8 h-8 rounded-full object-cover"/>

                    <button className="p-3 bg-[#D9D9D9] rounded-full ">
                        <img src={plus} alt="" />
                    </button>
                </div>
                <p className="text-xl font-medium">
                1.8 million+ Trusted Clients
                </p>

                </div>

            </div>


        </div>
    )
}

export default ServicesComp;