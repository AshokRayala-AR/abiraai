import PricingCards from "./PricingCards";

function PricingComp() {
    return(
        <div className="flex flex-col justify-center items-center bg-[#101720] p-12">

            <div className="flex w-5/6 gap-8">

                <div className="w-3/6 flex flex-col gap-4">
                    <p className="font-semibold text-3xl ">
                        <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Pricing Package</span>
                    </p>

                    <p className="text-white text-3xl font-semibold">Choose Latest <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Pricing</span> </p>

                </div>

                <div className="flex flex-col w-3/6 gap-6 justify-between">

                    <p className="text-lg text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="underline text-white"> Monthly Plan &gt;</a>
                        <a href="#" className="underline text-white"> Yearly Plan &gt;</a>

                    </div>


                </div>
                
            </div>

            <div>
                <PricingCards />
            </div>

        </div>
    )
}

export default PricingComp;