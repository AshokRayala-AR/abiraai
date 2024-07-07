import ClassroomCard from "./ClassroomCard";

function ClassroomComp() {
  return (
    <div className=" bg-[#101720] flex flex-col w-screen md:w-full items-center gap-16 md:p-20">
      <div className="flex flex-col gap-8 text-white text-center items-center md:w-5/6  p-4">
        <p className="font-bold md:text-5xl text-2xl">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">
            Using AI in your Classroom
          </span>
        </p>
        <p className="text-2xl md:text-5xl font-bold ">
          Know what students need, when they need it, and deliver it with AI
          support
        </p>
      </div>

      <div className=" ">
        <div className=" flex  justify-center items-center">
          <ClassroomCard />
        </div>
      </div>
    </div>
  );
}

export default ClassroomComp;
