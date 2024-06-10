import consultations from "../../../assets/consultations.jpeg"
import whitestar from "../../../assets/svg/whitestar.svg"

function ConsultationsComp() {
    return(
        <div className="bg-[#101720] flex justify-center items-center p-24 "> 

            <div className="w-3/6 flex flex-col gap-12  px-14">

            <p className="font-semibold text-3xl ">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Get Consultations</span>
                    </p>

                    <p className="text-4xl font-semibold text-white">We Believe in smart design,
                    turst & collaboration</p>

                    <button className="bg-[#968B78] w-2/6 p-3 rounded-xl ">
                        Get a Quote &gt;
                    </button>

            </div>

            <div className="w-3/6 p-28">
                 <div className="relative">
                <img src={consultations} alt="consultations" />

                <div className="absolute -left-1/4 -bottom-12 bg-[#1273EB] p-4 z-20 w-3/6 flex flex-col justify-center items-start text-center gap-2">
                        <p className="text-white text-3xl font-bold">10k+</p>
                        <p className="text-white text-sm">Years Of Experience</p>
                        <hr className="w-5/6"></hr>
                        <div className="flex justify-center gap-2 items-center">
                    <img src={whitestar} alt="p1" className=" w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p2" className=" w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p3" className=" w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p3" className=" w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p3" className=" w-3 h-3 rounded-full object-cover"/>

                    <p className="text-md text-white">TrustPoint</p>
                </div>

                    </div>
                 </div>

            </div>

        </div>
    )
}

export default ConsultationsComp;