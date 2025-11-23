import { motion } from 'motion/react'
import React, { useRef } from 'react'


const Marquee = () => {

  return (
    <div className='w-full rounded-4xl mt-[7%] py-[2%] whitespace-nowrap overflow-hidden bg-[#007942]'>
      <div id="wrapper" className='border-t-[2px] border-b-[2px] flex items-center gap-[10%]'>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-110%" }} 
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} 
          className='text-[16vmax] leading-none font-semibold -mt-[2%]'> WE ARE OCHI 
        </motion.h1>
        <motion.h1 
          initial={{ x: 0 }} 
          animate={{ x: "-110%" }} 
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} 
          className='text-[16vmax] leading-none font-semibold -mt-[2%]'> WE ARE OCHI 
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee