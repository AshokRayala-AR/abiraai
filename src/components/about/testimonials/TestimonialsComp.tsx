import TestImage from "../../../assets/testimonial.jpeg";
import Star from "../../../assets/svg/yellowstar.svg";
import Quote from "../../../assets/svg/quote2.svg";


function TestimonialsComp() {

  return (
    <>
      <section className="bg-[#101720] flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center mb-12">
          <p className="font-bold text-5xl">
            <span className="text-[20px] text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">
              Our Testimonials
            </span>
          </p>
          <h1 className="text-[30px] font-inter text-white font-[700]">
            1250+ Clients Say About Us
          </h1>
        </div>
        <div className=" flex flex-row items-center  justify-center  space-y-10 md:flex-row md:space-y-0 md:space-x-4 max-w-5xl mx-auto ">
          <div className=" flex row relative w-full rounded-full">
            <div className="bg-slate-500 relative w-[250px] h-[250px] rounded-full translate-x-14"></div>
            <div>
              <img
                src={TestImage}
                className="w-[250px] h-[250px] top-0 absolute rounded-full border-r-0 -translate-x-40 object-"
                alt="Testimonial"
              />
            </div>
          </div>
          <div>
            <h2 className="text-white text-[20px] ">
              Climb the mountain not to plant your flag but to embrace the
              challenge, enjoy the air, and behold the view. Climb it to see the
              world, not so the world can see you.
            </h2>
            <div className="flex justify-between  p-4 rounded-lg mt-4 items-center ">
              <div className="flex gap-2 items-center">
                <img src={Quote} alt="Quote" />
                <h2 className="text-[20px] text-white">
                  Robert J. Hare /
                  <span className="text-[15px]">Graphics Designer</span>
                </h2>
              </div>
              <div className="flex w-1/3">
                <img src={Star} alt="Star" className="h-[20px]" />
                <img src={Star} alt="Star" className="h-[20px]" />
                <img src={Star} alt="Star" className="h-[20px]" />
                <img src={Star} alt="Star" className="h-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default TestimonialsComp;