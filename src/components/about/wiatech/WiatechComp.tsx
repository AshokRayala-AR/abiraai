import { WiatechData } from "./WiatechData";
import star from "../../../assets/svg/star.svg";
import wiatech from "../../../assets/wiatech.jpeg";
import persons from "../../../assets/svg/persons.svg";
import complete from "../../../assets/svg/complete.png";

function WiatechComp() {
  return (
    <div className="bg-[#101720] p-20 px-16 flex flex-col lg:flex-row gap-12 lg:gap-6">
      <div className="w-full lg:w-4/6 flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="w-full md:w-3/6 lg:w-4/6 lg:p-12 flex flex-col gap-8">
          <div>
            <p className="font-semibold text-3xl ">
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">
                About Company
              </span>
            </p>
          </div>

          <div>
            <p className="font-semibold text-4xl text-white">
              {" "}
              Make your life easier with help from
              <span className="text-transparent font-bold bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">
                {" "}
                Wiatech
              </span>
            </p>
          </div>

          <div>
            <ul>
              {WiatechData[1].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <img src={item.svg} alt="tick icon" className="w-4 h-4" />
                  <p className="text-white">{item.decp}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button className="bg-[#FB5457] rounded-lg p-2 px-4">
              Read More
            </button>
          </div>
        </div>

        <div className="w-full md:w-3/6 lg:w-2/6 h-full flex justify-center items-center py-8">
          <img src={wiatech} className=" h-full object-cover rounded-xl" />
        </div>
      </div>

      <div className="flex flex-col text-white w-full lg:w-2/6 gap-12 lg:p-8">
        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">{WiatechData[0][0].label}</p>

          <p className="text-md font-normal">{WiatechData[0][0].content}</p>
        </div>

        <div className="flex justify-between md:justify-around lg:justify-between ">
          <div className=" text-left p-4 md:p-0">
            <div className="flex">
              <img src={star} alt="stars" />
              <img src={star} alt="stars" className="mt-4" />
              <img src={star} alt="stars" />
            </div>

            <img src={persons} alt="persons" className="w-8 md:w-14" />
            <p className="text-xl md:text-4xl font-bold ">10K+</p>
            <p className="md:text-md font-normal">Satisfied Customers</p>
          </div>

          <div className="text-left flex flex-col gap-1 p-4 md:p-0">
            <img src={complete} alt="complete" className="w-12 md:w-20" />
            <p className="text-xl md:text-4xl font-bold ">2K+</p>
            <p className="md:text-md font-normal">Project Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WiatechComp;
