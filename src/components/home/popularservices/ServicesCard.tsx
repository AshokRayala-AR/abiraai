import { ServicesData } from "./ServicesData";
import correct from "../../../assets/svg/correct.svg"

function ServicesCards() {
    return(
        <div >
             
             <div className="flex gap-6 justify-center items-stretch"> 
                
               {ServicesData.map((item, index) => {
                return(
                    <div key={index} className="bg-white w-1/6 p-4 rounded-t-[150px]  rounded-b-[150px]">

                        <div className=" flex flex-col justify-between items-center gap-8 p-2 h-full flex-grow border border-2 border-slate-950 border-dashed rounded-t-[150px] rounded-b-[150px]">
                            <img src={item.svg} alt="svg" className="w-14"/>
                            <p className="text-md font-semibold">{item.title}</p>
                            <button className="rounded-full bg-[#2159E7] p-2">
                                <img src={correct} alt="correct" />
                            </button>

                        </div>

                    </div>

                )
               })} 

             </div>

        </div>
    )
}

export default ServicesCards;