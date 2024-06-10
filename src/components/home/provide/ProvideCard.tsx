import { ProvideData } from "./ProvideData";
import arrow from "../../../assets/svg/arrow.svg"

function ProvideCard() {
    return(
        <div className="flex justify-center items-center">

            <div className="grid grid-cols-3">

            {ProvideData.map((item, index) => {
                return(
                    <div key={index} className="flex border border-slate-600 bg-white text-black p-6 px-12">

                        <div className="flex flex-col justify-around gap-4 w-4/6">
                            <p className="text-3xl font-bold" >{item.num}</p>
                            <p className="text-sm font-bold">{item.title}</p>
                            <img src={item.svg} alt="svg" className="w-12" />
                        </div>

                        <div className="flex justify-center items-center w-2/6">
                            <button className="p-2 bg-[#F6F3EE] rounded-full ">
                                <img src={arrow} alt="arrow" className="w-4" />
                            </button>
                        </div>

                    </div>
                )
            })}
                

            </div>

        </div>
    )
}

export default ProvideCard;