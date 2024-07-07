import { BlogData } from "./BlockData"
import search from "../../../assets/Blog/search.png"
import image1 from "../../../assets/Blog/blogpost/photo1 (1).jpeg"
import image2 from "../../../assets/Blog/blogpost/photo2 (1).jpeg"
import image3 from "../../../assets/Blog/blogpost/photo3 (1).jpeg"
import file from "../../../assets/Blog/blogpost/file (1).png"

const BlockComp = () => {
  return (
    <div className="bg-black py-16 ">
      <div className="lg:flex lg:flex-row flex flex-col gap-5 md:justify-center mx-4 ">
        <div className="xl:w-3/6 lg:w-2/4 w-full ">
          <div>
            {
              BlogData.map((item, index) => (
                <div className="mb-16 lg:h-1/3 w-full relative   " key={index}>
                  <div className="image lg:h-1/2 h-2/2 relative z-10">
                    <img src={item.image} className="w-full h-full z-0" />
                  </div>
                  <div className="bg-white lg:w-5/6 w-full rounded-md py-4 px-8 -mt-24 relative z-20">
                    <h2 className="font-bold text-xl py-2">{item.header}</h2>
                    <p className="py-2">{item.content}</p>
                    <button className="bg-blue-500 text-white px-6 py-2 my-2 rounded-lg">Read More</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* search bar */}
        <div className="xl:w-2/6 lg:w-2/4 w-full   ">
          <div className="p-8 bg-[#89C8F5] xl:mx-[100px] w-full">
            <h2 className="font-bold text-2xl pb-4">Search</h2>
            <div className="relative">
              <input type="text" placeholder="Typer here..." className="bg-white px-10 py-4 rounded-2xl w-full" />
              <span className="bg-[#2159E7] p-4 flex justify-center w-10 absolute right-0 top-0 h-full rounded-r-2xl">
                <img src={search} className="text-2xl font-bold w-30 rounded-r-2xl" />
              </span>
            </div>
          </div>
          <div className="bg-[#89C8F5] mt-8 xl:mx-[100px] w-full p-8">
            <h2 className="font-bold text-2xl pb-4">Catagory</h2>
            <p className="p-4 bg-white w-full mb-6 rounded-2xl flex justify-between font-semibold text-xl">
              <div>
                <span className="text-indigo-700 text-2xl font-bold"></span> Prime Investments
              </div>
              <span>(1)</span>
            </p>
            <p className="p-4 bg-white w-full mb-6 rounded-2xl flex justify-between font-semibold text-xl">
              <div>
                <span className="text-indigo-700 text-2xl font-bold"></span> ProHome Finders
              </div>
              <span>(1)</span>
            </p>
            <p className="p-4 bg-white w-full mb-6 rounded-2xl flex justify-between font-semibold text-xl">
              <div>
                <span className="text-indigo-700 text-2xl font-bold"></span> SmartHouse Agency
              </div>
              <span>(1)</span>
            </p>
            <p className="p-4 bg-white w-full mb-6 rounded-2xl flex justify-between font-semibold text-xl">
              <div>
                <span className="text-indigo-700 text-2xl font-bold"></span> Secure Property Partners
              </div>
              <span>(1)</span>
            </p>
          </div>
          <div className="bg-[#89C8F5] mt-8 xl:mx-[100px] w-full p-8">
            <h2 className="font-bold text-2xl pb-4">Recent Post</h2>
            <div className="w-full bg-white rounded-l-2xl flex mb-6">
              <img src={image1} className="w-40 rounded-l-2xl pr-4" />
              <div className="flex flex-col">
                <div className="flex">
                  <p><img src={file} className="w-5 pt-2 pr-2" /></p>
                  <h2 className="text-lg">Category</h2>
                </div>
                <div className="text-xl font-semibold">A Picture is an stand and stand us return</div>
              </div>
            </div>
            <div className="w-full bg-white rounded-l-2xl flex mb-4">
              <img src={image2} className="w-40 rounded-l-2xl pr-4" />
              <div className="flex flex-col">
                <div className="flex">
                  <p><img src={file} className="w-5 pt-2 pr-2" /></p>
                  <h2 className="text-lg">Category</h2>
                </div>
                <div className="text-xl font-semibold">A Picture is an stand and stand us return</div>
              </div>
            </div>
            <div className="w-full bg-white rounded-l-2xl flex mb-4">
              <img src={image3} className="w-40 rounded-l-2xl pr-4" />
              <div className="flex flex-col">
                <div className="flex">
                  <p><img src={file} className="w-5 pt-2 pr-2" /></p>
                  <h2 className="text-lg">Category</h2>
                </div>
                <div className="text-xl font-semibold">A Picture is an stand and stand us return</div>
              </div>
            </div>
          </div>
          <div className="bg-[#89C8F5] mt-8 xl:mx-[100px] w-full p-8">
            <h2 className="font-bold text-2xl pb-4">Tags</h2>
            <div className="flex flex-wrap mx-10">
              <h2 className="bg-white p-2 rounded-md my-2">IT Consulting</h2>
              <h2 className="bg-white p-2 rounded-md ml-5 my-2">Support Pro</h2>
              <h2 className="bg-white p-2 rounded-md ml-5 my-2">Solutions</h2>
              <h2 className="bg-white p-2 rounded-md mx-10 my-2">WebTech</h2>
              <h2 className="bg-white p-2 rounded-md my-2">WebTech</h2>
              <h2 className="bg-white p-2 rounded-md ml-5 my-2">Data</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockComp