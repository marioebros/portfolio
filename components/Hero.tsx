import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

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
    <div>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
        </h1>
    </div>
    );
}