import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1
        }}
        transition={{
            duration: 1.5,
        }}
        className='flex flex-row items-center'>
            
            {/* Social Icons */}
            <SocialIcon 
                url="https://github.com/marioebros" 
                fgColor='silver'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/mariomeliz/" 
                fgColor='silver'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://twitter.com/MmeDollarize" 
                fgColor='silver'
                bgColor='transparent'
                
            />
            <SocialIcon 
                url="https://www.instagram.com/issa_mmeh/" 
                fgColor='silver'
                bgColor='transparent'
            />
        </motion.div>

        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-row items-center text-silver-300 cursor-pointer"
            >
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='silver'
                bgColor='transparent' 
            />
            <p className='uppercase hidden md:inline-flex text-sm text-silver-400'>
                Get In Touch!
            </p>
        </motion.div>
    </header>
  );
}