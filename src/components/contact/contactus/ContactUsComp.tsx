import { ContactUsData } from "./ContactUsData";
import  location  from "../../../assets/svg/location.svg";
import  callb from "../../../assets/svg/callb.svg";
import  emailb from "../../../assets/svg/emailb.svg";
import  share from "../../../assets/svg/share.svg";
import fb from "../../../assets/svg/fb.svg";
import twi from "../../../assets/svg/twi.svg";
import li from "../../../assets/svg/li.svg";
import insta from "../../../assets/svg/insta.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
    Name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(10),
    url: z.string().url(),
  });

  type FormFields = z.infer<typeof schema>

function ContactUSComp() {



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
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-8 md:p-12 lg:p-24 bg-[#101720] text-white">

<div className="md:w-3/6 flex flex-col justify-center items-start lg:px-16  gap-8">

<div className="flex flex-col gap-6">
  <p className="font-medium text-3xl">
     <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 via-blue-400 to-cyan-400">Work Enquiry</span>
 </p>

 <p className="text-white text-xl lg:text-3xl font-bold">
     {ContactUsData[0].title}
 </p>
 <p className="md:text-sm lg:text-md">
     {ContactUsData[0].content}
 </p>
</div>

<div className="flex flex-col gap-2  lg:gap-4">

 <div className="flex ">

    <div className="flex gap-2 lg:gap-4 w-3/6 lg:w-full" >

        <div className="flex gap-4 items-start ">
            <img src={location} alt="location" className="" /> 
        </div>
        
        <div className="flex flex-col gap-2 ">
        <p className="text-xl font-semibold">Location</p>
        <p className="w-4/6 text-xs">1555 W Main Street,
        Jeffersonville, PA - 19403</p>
        </div>

    </div>

    <div className="flex gap-4">

        <div className="flex gap-4 items-start">
            <img src={callb} alt="call" className="" />
            
        </div>

        
        <div className="flex flex-col gap-1 ">
        <p className="text-xl font-semibold">Phone</p>
        <p className="text-xs">+1 (123) 4567890</p>
        <p className=" text-xs">+1 (610) 4628161</p>
        </div>

    </div>

 </div>

 <div className="flex gap-4">

 <div className="flex gap-4">

<div className="flex gap-4 items-start">
    <img src={emailb} alt="emailb" className="" />
    
</div>


<div className="flex flex-col gap-2">
<p className="text-xl font-semibold">Email</p>
<p className="w-4/6 text-md">Info@presentsoftwareinc.com</p>
</div>

</div>

<div className="flex gap-4">

<div className="flex gap-4 items-start">
    <img src={share} alt="call" className="" />
    
</div>


<div className="flex flex-col gap-3">
<p className="text-xl font-semibold">Social</p>

<div className="flex gap-2">
    <button>
    <img src={fb} alt="fb" className="w-8 lg:w-4" />
    </button>
    <button>
    <img src={twi} alt="twi" className="w-8 lg:w-4" />
    </button>
    <button>
    <img src={li} alt="li" className="w-8 lg:w-4" />
    </button>
    <button>
    <img src={insta} alt="insta" className="w-8 lg:w-4" />
    </button>
</div>
</div>

</div>

 </div>
 
</div>

</div>

<div className="w-full md:w-3/6 flex justify-center items-center ">

                <div className="bg-[#F6F3EE] w-5/6   md:w-full lg:w-4/6 p-6 lg:p-8 flex flex-col gap-4 ">

                    <p className="text-2xl text-black font-semibold">
                    Send Us Message  
                    </p>

                    
                    <form className="flex flex-col gap-6 text-black" onSubmit={handleSubmit(onSubmit)}>

                        
                            <div className=" relative">
                                <p className="text-xl">
                                    Full Name
                                </p>
                                <input {...register("Name")} type="text"
                                placeholder="Name"
                                className="rounded-ld p-2 w-full outline-none " />
                                {errors.Name && (<p className="text-red-500 absolute text-xs">{errors.Name?.message}</p>)}
                            </div>

                            <div className=" relative">
                            <p className="text-xl">
                                    Email Address
                                </p>
                                <input {...register("email")} type="text"
                                placeholder="Email"
                                className="rounded-ld p-2 w-full outline-none " />
                                {errors.email && (<p className="text-red-500 absolute text-xs">{errors.email?.message}</p>)}
                            </div>

                        

                            <div className="relative">
                            <p className="text-xl">
                                    Website
                                </p>
                                <input {...register("url")} type="text"
                                placeholder="Enter Your Website"
                                className="rounded-ld p-2 outline-none w-full " />
                                {errors.url && (<p className="text-red-500 absolute text-xs">{errors.url?.message}</p>)}
                            </div>

                        <div className="w-full relative">
                        <p className="text-xl">
                                    Message
                                </p>
                            <input {...register("message")} type="text"
                            placeholder="Your Message" 
                            className="h-2/6 w-full p-4 outline-none"/>
                            {errors.message && (<p className="text-red-500 absolute text-xs">{errors.message?.message}</p>)}

                        </div>

                        <div>
                            <button type="submit" className="bg-[#1273EB] rounded-xl p-2 px-4"
                            onClick={handleSubmit(onSubmit)}
                            >
                                Send Message &gt;
                            </button>
                        </div>



                    </form>
                </div>

            </div>
            

        </div>
    )
}

export default ContactUSComp;