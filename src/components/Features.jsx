import React from 'react'
import FeatureCard from '../miniComponents/FeatureCard'

const Features = () => {
  return (
    <div className='min-h-screen w-full px-[4vw]'>
      <h1 className='text-[3vmax] font-["Test Founders Grotesk X-Cond-SmBd"] border-b-[1px] border-b-gray-600 py-[2vmax]'> Featured projects </h1>
      <div id="cards-wrapper" className='flex items-center gap-[1.5%] my-[5%]'>
        <FeatureCard dispalyText={"SALIENCE LABS"} imgLink={"https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"} textCss={"left-full -translate-x-1/2"}/>
        <FeatureCard dispalyText={"MEDALLIA EXPERIENCE"} imgLink={"https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"} textCss={"right-full translate-x-1/2"}/>
      </div>
      <div id="cards-wrapper" className='flex items-center gap-[1.5%] my-[5%]'>
        <FeatureCard dispalyText={"SALIENCE LABS"} imgLink={"https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"} textCss={"left-full -translate-x-1/2"}/>
        <FeatureCard dispalyText={"MEDALLIA EXPERIENCE"} imgLink={"https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"} textCss={"right-full translate-x-1/2"}/>
      </div>
    </div>
  )
}

export default Features