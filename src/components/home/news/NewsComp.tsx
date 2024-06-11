import { NewsData } from "./NewsData";
import NewsItem  from "./NewItem";
import image1 from "../../../assets/news-1.jpg";
export default function NewsComp() {
  return (
    <div className="bg-[#101720] flex flex-col p-12 h-screen">
      <div className="text-center flex flex-col gap-4">
        <p className="font-bold ">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400 font-inter text-[24px]  font-bold leading-[164%] tracking-[1px]">
            Latest News & Blog
          </span>
        </p>
        <h3 className="text-4xl font-bold mt-2 text-white">
          Read Our Latest News & Blog
        </h3>
      </div>
      <div className=" w-[90%]  flex  gap-10 p-14 items-center justify-center mx-auto ">
        <div className=" w-1/2">
          <img src={image1} alt="" className=" " />
        </div>
        <div className="h-full flex flex-col gap-5 justify-center">
          {NewsData.map((item, index) => {
            return <NewsItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}