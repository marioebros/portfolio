import React from 'react'
import { SocialIcon } from "react-social-icons";

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div className='flex flex-row items-center'>
            {/* Social Icons */}
            <SocialIcon 
                url="https://github.com/marioebros" 
                fgColor='silver'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://twitter.com/MmeDollarize" 
                fgColor='silver'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/mariomeliz/" 
                fgColor='silver'
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://twitter.com/jaketrent" 
                fgColor='silver'
                bgColor='transparent'
            />
        </div>
    </header>
  );
}