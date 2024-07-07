import ProvideCard from "./ProvideCard";

function ProvideComp() {
    return(
        <div className="flex flex-col justify-center items-center max-w-screen bg-[#101720]  text-white gap-12 p-12">

            <div className="flex flex-col justify-center items-center text-center gap-8">
                <p className="font-medium text-2xl">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Popular Services</span>
                </p>
                
                <p className="text-4xl font-semibold">Services We Provide</p>
            </div>

            <div className=" p-8">
            <div className="">
                <ProvideCard />
            </div>
            </div>

        </div>
    )
}

export default ProvideComp;