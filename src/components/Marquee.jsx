import { motion } from 'motion/react'
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full rounded-4xl py-[2%] whitespace-nowrap overflow-hidden bg-[#C6001A]'>
      <div id="wrapper" className='border-t-[2px] border-b-[2px] flex items-center gap-[10%]'>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-105%" }} transition={{ ease: "linear", duration: 5, repeat: Infinity }} className='text-[16vmax] leading-none font-semibold -mt-[2%]'> WE ARE OCHI </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-105%" }} transition={{ ease: "linear", duration: 5, repeat: Infinity }} className='text-[16vmax] leading-none font-semibold -mt-[2%]'> WE ARE OCHI </motion.h1>
      </div>
    </div>
  )
}

export default Marquee