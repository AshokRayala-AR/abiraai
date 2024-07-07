import { WiatechCardData } from "./WiaTechCardData";

function WiatechCardsComp() {
    return(
        <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 ">

                {WiatechCardData.map((item, index) => {
                    return(
                        <div key={index} className="p-2 px-2 md:px-6 md:p-6 flex flex-col gap-2 border border-slate-800">
                            <img src={item.svg} alt="svg" className="w-14"/>
                            <div className="w-4/6 flex flex-col gap-2">
                            <p className="text-lg font-semibold">{item.title}</p>
                            <p className="text-sm font-normal">{item.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default WiatechCardsComp;