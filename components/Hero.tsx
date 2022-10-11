import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from "./BackgroundCircles";

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hey, The Name's Mario M. Elizalde",
            "Trombonist -> Developer Real Quick 💯", 
            "Plant-Papi-In-Training.tsx", 
            "Creador Haciendo Cosas Creativas",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src="../components/assets/slack-profile.png" 
            alt='' 
        />
        <div>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                Software Developer
            </h2>
            <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
        </div>
    </div>
    );
}