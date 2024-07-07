import quotationimg from "../../../assets/quotations.jpg";

export default function TestimonialItem({ item}: any) {
  return (
    <div className="w-[270px] bg-white p-4 lg:p-8 m-2  rounded shadow-lg">
      <div className="flex items-center mb-4 ">
        <div className="w-1/4">
          <img src={quotationimg} alt="quotation" className="w-full" />
        </div>
        <div className="w-3/4 pl-4 flex items-start justify-center gap-1">
          <img src={item.imagepath} alt="logo" className="w-2 h-2 mb-2" />
          <p style={{ color: item.color }} className="font-bold text-xl">{item.title}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{item.content}</p>
      </div>
      <div className="text-center bg-[#F6F3EE] w-full p-2 lg:w-5/6">
        <p className="text-gray-500 font-medium">{item.user}</p>
      </div>
    </div>
  );
}