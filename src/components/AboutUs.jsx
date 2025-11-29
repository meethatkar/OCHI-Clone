import React from 'react'
import AboutusText from '../miniComponents/AboutusText'
import AboutusCTC from '../miniComponents/AboutusCTC'

const AboutUs = () => {
  return (
    <div className='bg-[#CDEA68] p-[5%] text-black overflow-x-hidden'>
      <h1 className='text-[4.5vmax] leading-[5.3vmax] tracking-tighter font-[350] pb-[4%]'> We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership. </h1>
      <hr className='scale-x-113'/>
      <AboutusText />
      <hr className='scale-x-113'/>
      <AboutusCTC />
    </div>
  )
}

export default AboutUs