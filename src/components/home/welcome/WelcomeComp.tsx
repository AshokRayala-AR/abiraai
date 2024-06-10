// import welcome from "../../../assets/welcome.png";

// function WelcomePage() {
//     return (
//         <div
//             style={{ backgroundImage: url(${welcome}) }}
//             className="flex w-screen h-[85vh] items-center p-20"
//         >
//             <div className="flex flex-col justify-center w-2/5 gap-6 p-2 ">
//                 <p className="font-bold text-5xl">
//                     <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">AI FOR TEACHERS</span>
//                 </p>
//                 <p className="text-xl text-white">
//                     Our AI powered platform transforming the way schools teach English - reducing marking workload, delivering quantitative insights, and engaging and inspiring children with The Imaginator.
//                 </p>
//                 <button className="border border-zinc-100 p-2 rounded-lg w-2/6 text-white text-md">Let's Get Started</button>
//             </div>
//         </div>
//     );
// }

// export default WelcomePage;

import welcome from "../../../assets/welcome.png";

function WelcomePage() {
    return (
        <div
            style={{ backgroundImage: `url(${welcome})` }}
            className="flex w-screen h-[85vh] items-center p-20"
        >
            <div className="flex flex-col justify-center w-2/5 gap-6 p-2 ">
                <p className="font-bold text-5xl">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">AI FOR TEACHERS</span>
                </p>
                <p className="text-xl text-white">
                    Our AI powered platform transforming the way schools teach English - reducing marking workload, delivering quantitative insights, and engaging and inspiring children with The Imaginator.
                </p>
                <button className="border border-zinc-100 p-2 rounded-lg w-2/6 text-white text-md">Let's Get Started</button>
            </div>
        </div>
    );
}

export default WelcomePage;
