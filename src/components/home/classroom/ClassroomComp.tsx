import ClassroomCard from "./ClassroomCard";

function ClassroomComp() {
    return(
        <div className=" bg-[#101720] p-12 flex flex-col gap-16 w-full items-center">

            <div className="flex flex-col gap-8 text-white text-center items-center w-4/6 ">
                <p className="font-medium text-2xl">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Using AI in your Classroom</span>
                </p>
                <p className="text-5xl font-bold">Know what students need, when
                they need it, and deliver it with AI support</p>
            </div>
            
            <div className=" ">
                <div className=" flex justify-center items-center">
                <ClassroomCard />
                </div>
            </div>

        </div>
    )
}

export default ClassroomComp;

