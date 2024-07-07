import welcome from "../../../assets/welcome.png";

function WelcomePage() {
  return (
    <div
      style={{ backgroundImage: `url(${welcome})` }}
      className="p-10 flex max-w-screen h-[50vh] md:h-[85vh] items-center md:p-20"
    >
      <div className="flex flex-col justify-center w-full md:w-2/5 gap-6 p-4  ">
        <p className="font-bold md:text-5xl text-2xl">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">
            AI FOR TEACHERS

          </span>
        </p>
        <p className="md:text-xl text-white">
          Our AI powered platform transforming the way schools teach English -
          reducing marking workload, delivering quantitative insights, and
          engaging and inspiring children with The Imaginator.
        </p>
        <button className="border border-zinc-100 p-2 rounded-lg  text-white md:text-md max-w-[200px]">
          Let's Get Started
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
