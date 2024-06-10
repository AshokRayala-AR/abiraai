import BusinessCards from "./BusinessCards";

function BusinessComp() {
    return(
        <div className="flex flex-col justify-center items-center bg-[#101720] p-12">

            <div className="flex flex-col gap-6 justify-center items-center w-3/6 text-center px-12">
                    <p className="font-semibold text-3xl ">
                        <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">What we Provide</span>
                    </p>


                    <p className="font-bold text-4xl text-white"> We Are Specialist We Offer for
                    Grow Your 
                        <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400"> Business</span>
                    </p>

            </div>

            <div className="flex flex-col gap-8 justify-center items-center">
                <div>
                    <BusinessCards />
                </div>


                <button className="bg-[#1273EB] p-3 px-6 rounded-xl">View All Services &gt;</button>
            </div>

        </div>
    )

}

export default BusinessComp;