import React from "react";
import { DevicePhoneMobileIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
            Contact 
        </h3>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                I've got just what you need.{" "}
                <span className="decoration-[#FFCC00]/50 underline">Let's Talk.</span>
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


        </div>
    </div>
  );
}

export default ContactMe;