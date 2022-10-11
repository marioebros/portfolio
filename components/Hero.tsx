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
        <img src="./components/assets/slack-profile.png" alt='' />
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
        </div>
    </div>
    );
}