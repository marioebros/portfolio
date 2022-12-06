/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import { DevicePhoneMobileIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function ContactMe({}: Props): JSX.Element {
    const { 
        register, 
        handleSubmit, 
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:mariomelizalde@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
            Contact 
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                {" "}
                <span className="decoration-[#FFCC00]/50 underline">Talk Soon.</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <DevicePhoneMobileIcon className="text-[#FFCC00] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">+1(805)791-5089</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#FFCC00] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">mariomelizalde@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#FFCC00] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">Los Angeles, CA</p>
                </div>
            </div>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-2 w-fit mx-auto"
            >
                <div className="flex space-x-2">
                    <input 
                        {...register("name")} 
                        placeholder="Name" 
                        className="contactInput" 
                        type="text" 
                    />
                    <input 
                        {...register("email")} 
                        placeholder="Email" 
                        className="contactInput" 
                        type="email" />
                </div>

                <input 
                    {...register("subject")} 
                    placeholder="Subject" 
                    className="contactInput" 
                    type="text" />

                <textarea 
                    {...register("message")}
                    placeholder="Message" 
                    className="contactInput" />
                <button 
                    type="submit"
                    className="bg-[#FFCC00] py-5 px-10 rounded-md text-black font-bold text-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
  );
}

export default ContactMe;