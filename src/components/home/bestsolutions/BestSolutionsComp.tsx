// import bestsolutions from "../../../assets/bestsolutions.png";
// import follower1 from "../../../assets/solutionfollow-1.jpeg";
// import follower2 from "../../../assets/solutionfollow-2.jpeg";
// import follower3 from "../../../assets/solutionfollow-3.jpeg";
// import follower4 from "../../../assets/solutionfollow-4.jpeg";
// import solutionprogress1 from "../../../assets/solutionprogress-1.svg";
// import solutionprogress2 from "../../../assets/solutionprogress-2.svg";

// export default function BestSolutionsComp() {
//   return (
//     <div className="flex flex-col lg:flex-row bg-[#101720] pt-28 pb-28">
//       <div className="w-full lg:w-1/2 ">
//         <div className="pl-32 flex flex-col gap-14">
//           <div className="flex flex-col gap-3">
//             <p className="font-bold ">
//               <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400 font-inter text-[18px]  font-bold leading-[164%] tracking-[1px]">
//                 Best IT Solutions
//               </span>
//             </p>

//             <h4 className="text-white font-inter text-2xl font-medium leading-[164%] tracking-[1.6px] mt-2>We Prominent Truly IT Your Solutions">
//               We Prominent Truly IT Your Solutions
//             </h4>
//             <p className="text-white">
//               we denounce with righteous indignation and like men who are so
//               beguiled and demoralized by the charms of pleasure of the moment,
//               so blinded by desire foresee the pain
//             </p>
//           </div>
//           <div className="flex flex-col gap-6">
//             <div className="flex gap-4 text-white ">
//               <div className="flex gap-2 items-center">
//                 <div className="relative">
//                   <img src={solutionprogress1} alt="" className="w-16 h-16" />
//                   <p className="absolute inset-0 flex items-center justify-center text-white text-sm">
//                     68%
//                   </p>
//                 </div>
//                 <p className="text-white font-montserrat text-base font-bold leading-[26.24px] tracking-[0.8px]">
//                   Business Strategy
//                 </p>
//               </div>
//               <div className="flex gap-2 items-center">
//                 <div className="relative">
//                   <img src={solutionprogress2} alt="" className="w-16 h-16" />
//                   <p className="absolute inset-0 flex items-center justify-center text-white text-sm">
//                     93%
//                   </p>
//                 </div>
//                 <p className="text-white font-montserrat text-base font-bold leading-[26.24px] tracking-[0.8px]">
//                   Technology Solutions
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center gap-12">
//               <div className="text-white">
//                 <button className="px-6 py-1 bg-[#2159E7] rounded-md">
//                   Read more
//                 </button>
//               </div>
//               <div className="flex text-white gap-3">
//                 <div className="flex -space-x-3">
//                   <img
//                     src={follower1}
//                     alt="follower1"
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                   <img
//                     src={follower2}
//                     alt="follower2"
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                   <img
//                     src={follower3}
//                     alt="follower3"
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                   <img
//                     src={follower4}
//                     alt="follower4"
//                     className="w-8 h-8 rounded-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <p>2m+ customers</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="w-full lg:w-1/2 lg:max-h-[400px] ashok bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${bestsolutions})` }}
//       >
//         <div className="absolute bottom-4 left-4 w-64 h-[150px] bg-blue-500 text-white flex flex-col justify-center items-center">
//           <p className="text-white font-roboto text-2xl font-normal leading-[150%]">
//             10+
//           </p>
//           <p className="text-white font-roboto text-xs font-bold leading-[150%]">
//             Years Of Experience
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import bestsolutions from "../../../assets/bestsolutions.png";
import follower1 from "../../../assets/solutionfollow-1.jpeg";
import follower2 from "../../../assets/solutionfollow-2.jpeg";
import follower3 from "../../../assets/solutionfollow-3.jpeg";
import follower4 from "../../../assets/solutionfollow-4.jpeg";
import solutionprogress1 from "../../../assets/solutionprogress-1.svg";
import solutionprogress2 from "../../../assets/solutionprogress-2.svg";

export default function BestSolutionsComp() {
  return (
    <div className="flex flex-col lg:flex-row bg-[#101720] pt-28 pb-28">
      <div className="w-full lg:w-1/2 p-8 lg:pl-32 flex flex-col gap-14">
        <div className="flex flex-col gap-3">
          <p className="font-bold ">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400 font-inter text-[18px] font-bold leading-[164%] tracking-[1px]">
              Best IT Solutions
            </span>
          </p>
          <h4 className="text-white font-inter text-2xl font-medium leading-[164%] tracking-[1.6px] mt-2">
            We Prominent Truly IT Your Solutions
          </h4>
          <p className="text-white">
            We denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire foresee the pain
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 text-white ">
            <div className="flex gap-2 items-center">
              <div className="relative">
                <img src={solutionprogress1} alt="" className="w-16 h-16" />
                <p className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  68%
                </p>
              </div>
              <p className="text-white font-montserrat text-base font-bold leading-[26.24px] tracking-[0.8px]">
                Business Strategy
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="relative">
                <img src={solutionprogress2} alt="" className="w-16 h-16" />
                <p className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  93%
                </p>
              </div>
              <p className="text-white font-montserrat text-base font-bold leading-[26.24px] tracking-[0.8px]">
                Technology Solutions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="text-white">
              <button className="px-6 py-1 bg-[#2159E7] rounded-md">
                Read more
              </button>
            </div>
            <div className="flex text-white gap-3">
              <div className="flex -space-x-3">
                <img
                  src={follower1}
                  alt="follower1"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src={follower2}
                  alt="follower2"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src={follower3}
                  alt="follower3"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <img
                  src={follower4}
                  alt="follower4"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
              <div>
                <p>2m+ customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 h-80 lg:h-auto lg:max-h-[400px] ashok bg-cover bg-top  relative"
        style={{ backgroundImage: `url(${bestsolutions})` }}
      >
        <div className="absolute bottom-4 left-4 w-64 h-[150px] bg-blue-500 text-white flex flex-col justify-center items-center">
          <p className="text-white font-roboto text-2xl font-normal leading-[150%]">
            10+
          </p>
          <p className="text-white font-roboto text-xs font-bold leading-[150%]">
            Years Of Experience
          </p>
        </div>
      </div>
    </div>
  );
}
