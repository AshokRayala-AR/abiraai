import consultations from "../../../assets/consultations.jpeg"
import whitestar from "../../../assets/svg/whitestar.svg"

function ConsultationsComp() {
    return(
        <div className="bg-[#101720] flex flex-col md:flex-row justify-center items-center p-16 lg:p-24 gap-12"> 

            <div className="md:w-3/6 flex flex-col gap-8 lg:gap-12 lg:px-14">

            <p className="font-semibold text-3xl ">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Get Consultations</span>
                    </p>

                    <p className="text-2xl lg:text-4xl font-semibold text-white">We Believe in smart design,
                    turst & collaboration</p>

                    <button className="bg-[#968B78] w-3/6 lg:w-2/6 p-3 rounded-xl ">
                        Get a Quote &gt;
                    </button>

            </div>

            <div className="md:w-3/6 lg:p-28 ">
                 <div className="relative">
                <img src={consultations} alt="consultations" />

                <div className="absolute -left-8 md:-left-12 lg:-left-1/4 -bottom-6 lg:-bottom-12 bg-[#1273EB] p-2 lg:p-4 z-20 lg:w-3/6 flex flex-col justify-center items-start text-center gap-2">
                        <p className="text-white md:text-3xl font-bold">10k+</p>
                        <p className="text-white text-xs md:text-sm">Years Of Experience</p>
                        <hr className="w-5/6"></hr>
                        <div className="flex justify-center gap-1 md:gap-2 items-center">
                    <img src={whitestar} alt="p1" className="w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p2" className="w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p3" className="w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p3" className="w-3 h-3 rounded-full object-cover"/>
                    <img src={whitestar} alt="p3" className="w-3 h-3 rounded-full object-cover"/>

                    <p className="text-xs md:text-md text-white">TrustPoint</p>
                </div>

                    </div>
                 </div>

            </div>

        </div>
    )
}

export default ConsultationsComp;