
// import { BusinessData } from "./BusinessData";
// import arrow from "../../../assets/svg/arrow.svg";

// function BusinessCards() {
//     return (
//         <div className="flex justify-center items-center p-12">
//             <div className="flex flex-col gap-4 justify-center items-center">
//                 {BusinessData.map((item, index) => {
//                     return (
//                         <div key={index} className="flex gap-4 w-5/6 bg-[#D9D9D9] border border-slate-900 p-2 rounded-lg">
//                             <div className="w-1/2 flex">
//                                 <div className="w-3/6 flex justify-center items-center">
//                                     <img src={item.img} alt="img" className="h-auto max-h-24 rounded-full" />
//                                 </div>
//                                 <div className="w-3/6 flex flex-col justify-center items-start pl-4">
//                                     <p className="text-md text-blue-600">{item.label}</p>
//                                     <p className="text-2xl font-semibold">{item.title}</p>
//                                 </div>
//                             </div>
//                             <div className="w-1/2 flex">
//                                 <div className="w-2/3">
//                                     <p>{item.content}</p>
//                                 </div>
//                                 <div className="flex justify-normal rounded-full h-2/6 p-2 bg-white">
//                                     <button>
//                                         <img src={arrow} alt="arrow" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default BusinessCards;

import { BusinessData } from "./BusinessData";
import arrow from "../../../assets/svg/arrow.svg";

function BusinessCards() {
    return (
        <div className="flex justify-center items-center p-12">
            <div className="flex flex-col gap-4 justify-center items-center w-full">
                {BusinessData.map((item, index) => {
                    return (
                        <div key={index} className="flex gap-4 w-5/6 bg-[#D9D9D9] border border-slate-900 p-4 rounded-lg">
                            <div className="w-1/2 flex">
                                <div className="w-1/2 flex justify-center items-center">
                                    <img src={item.img} alt="img" className="h-auto max-h-24 rounded-full" />
                                </div>
                                <div className="w-1/2 flex flex-col justify-center items-start pl-4">
                                    <p className="text-md text-blue-600">{item.label}</p>
                                    <p className="text-2xl font-semibold">{item.title}</p>
                                </div>
                            </div>
                            <div className="w-1/2 flex">
                                <div className="w-2/3 flex flex-col justify-center">
                                    <p>{item.content}</p>
                                </div>
                                <div className="w-1/3 flex justify-end items-center">
                                    <button className="flex justify-center items-center h-12 w-12 p-2 bg-white rounded-full">
                                        <img src={arrow} alt="arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BusinessCards;

