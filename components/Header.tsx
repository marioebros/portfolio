import React from 'react'
import { SocialIcon } from "react-social-icons";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div className='flex flex-row items-center'>
            
            
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

        <div>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='silver'
                bgColor='transparent' 
            />
            <p className='uppercase hidden md:inline-flex text-sm text-silver-400'>Get In Touch!</p>
        </div>
    </header>
  );
}