import { EnquiryData } from "./EnquiryData";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
    Name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(10),
    category: z.enum(["Option1", "Option2", "Option3"]),
  });

  type FormFields = z.infer<typeof schema>

function EnquiryComp() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormFields>({ resolver: zodResolver(schema) });

      const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
          const response = await axios.post("https://jsonplaceholder.typicode.com/posts", data);
          console.log("Response:  ", response);
          
        }
        catch(error) {
          console.error("Error Submitting Form: ", error)
        }
      };

    return(
        <div className="flex flex-col md:flex-row p-8 md:p-12 lg:p-24 gap-8 bg-[#575e64]">

            <div className="md:w-3/6 sm:flex sm:flex-col justify-center items-start lg:px-16 gap-8">

               <div className="flex flex-col gap-6">
                 <p className="font-medium text-3xl">
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Work Enquiry</span>
                </p>

                <p className="text-black text-3xl font-bold">       
                    {EnquiryData[0].title}
                </p>
                <p className="text-white text-xl">
                    {EnquiryData[0].content}
                </p>
               </div>

               <div className="flex flex-col gap-4">

                <div className=" flex gap-4">
                    <div className="flex justify-center items-center"><img src={EnquiryData[0].svg1} alt="call" className="w-8"/></div>
                    <div className="text-black text-2xl ">
                        <p className="font-normal">Call For Inquiry</p>
                        <p className="font-semibold">+234 (123) 456 78</p>
                    </div>
                </div>

                <div className=" flex gap-4">
                    <div className="flex justify-center items-center"><img src={EnquiryData[0].svg2} alt="call" className="w-8"/></div>
                    <div className="text-black text-2xl font-semibold">
                        <p className="font-normal">Send Us Email</p>
                        <p className="font-semibold">Infotech@gmail.com</p>
                    </div>
                </div>
                
               </div>

            </div>

            <div className="md:w-3/6  flex justify-center md:items-center">

                <div className="bg-[#F6F3EE] w-full p-4 lg:p-8 flex flex-col gap-4 ">

                    <p className="text-2xl font-semibold">
                    Need Help For Project!  
                    </p>

                    <p className="text-md opacity-0.5">
                    we are ready to help your next projects, Let’s work together
                    </p>
                    <form className="flex flex-col gap-8 " onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col lg:flex-row gap-4 w-full">
                            <div className="w-full lg:w-3/6 relative">
                                <input {...register("Name")} type="text"
                                placeholder="Name"
                                className="rounded-ld p-2 outline-none w-full" />
                                {errors.Name && (<p className="text-red-500 absolute text-xs">{errors.Name?.message}</p>)}
                            </div>

                            <div className="w-full lg:w-3/6 relative">
                                <input {...register("email")} type="text"
                                placeholder="Email"
                                className="rounded-ld p-2 outline-none w-full" />
                                {errors.Name && (<p className="text-red-500 absolute text-xs">{errors.email?.message}</p>)}
                            </div>

                        </div>

                        <div className="w-full relative ">
                        <select 
                                    {...register("category")}
                                    className="rounded-lg p-2 outline-none w-full"
                                >
                                    <option value="Choose Services ">Select Category</option>
                                    <option value="Option1">Option1</option>
                                    <option value="Option2">Option2</option>
                                    <option value="Option3">Option3</option>
                                </select>
                                {errors.category && (<p className="text-red-500 absolute text-xs">{errors.category?.message}</p>)}

                        </div>

                        <div className="w-full relative">
                            <input {...register("message")} type="text"
                            placeholder="Your Message" 
                            className="h-2/6 w-full p-4 outline-none"/>
                            {errors.message && (<p className="text-red-500 absolute text-xs">{errors.message?.message}</p>)}

                        </div>

                        <div>
                            <button type="submit" className="bg-[#1273EB] rounded-xl p-2 px-4"
                            onClick={handleSubmit(onSubmit)}
                            >
                                Submit
                            </button>
                        </div>



                    </form>
                </div>

            </div>

        </div>
    )
}

export default EnquiryComp;