import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }} 
        className='flex flex-col relative h-screen text-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl'>
            About
        </h3>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x:0 }}
        viewport={{ once: true }}
        src="/assets/portfolio-about-profile.png"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Who Am{" "}
                <span className='underline decoration-[#FFCC00]/50'>I...</span>{" "}
            </h4>
            <p className='text-lg'>
                A disciplined creative of 14-years, who is actively seeking to leverage
            a history of proven entrepreneurial & research expertise to pursue a
            career in Software Development. Driven by providing the best product
            possible and knowing when to take risks, coupled with a passion for
            learning & a stellar sense of integrity.
            </p>
        </div>
    </motion.div>
    );
}