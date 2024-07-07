import { PricingData } from "./PricingData";
import tick from "../../../assets/svg/tick.svg";

function PricingCards() {
    return (
        <div className="flex justify-center items-center md:p-12 w-full">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4  w-full">
                {PricingData.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-4  p-4 md:p-6 bg-[#f9f9f9] border border-slate-300 rounded-lg w-full lg:w-5/6">
                            <div className="flex flex-col gap-2">
                                <p className="text-lg text-blue-700">{item.plan}</p>
                                <p className="text-2xl font-bold">{item.agency}</p>
                                <p className="text-3xl font-bold text-blue-700">
                                    {item.price} <span className="text-lg font-medium text-black">/ One Month</span>
                                </p>
                            </div>

                            <hr className="border-slate-300" />

                            <ul className="flex flex-col gap-4">
                                {item.list.map((listItem, index) => (
                                    <li key={index} className="flex items-center text-sm">
                                        <img src={tick} alt="tick icon" className="w-4 h-4 mr-2" />
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#1273EB] rounded-xl p-2">Choose Package &gt;</button>
                        </div>

                    );
                })}
            </div>
        </div>
    );
}

export default PricingCards;
