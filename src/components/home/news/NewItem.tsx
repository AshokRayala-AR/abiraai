export default function NewsItem({ item }:any) {
    return (
      <div className="flex items-center">
        <div className="text-white md:w-3/4 flex flex-col gap-2 justify-center">
          <p className="text-white font-inter text-16px font-bold leading-[144%] tracking-[0.8px] opacity-50">{item.date}</p>
          <p className="text-white font-inter text-[16px] font-bold leading-[164%] tracking-[0.8px]">{item.text}</p>
          <p className="text-white font-inter text-16px font-bold leading-[164%] tracking-[0.8px] opacity-50">ReadMore &#8594;</p>
        </div>
        <div>
          <img src={item.imagepath} alt="work" className="w-[150px] h-[100px] object-cover" />
        </div>
      </div>
    );
  }