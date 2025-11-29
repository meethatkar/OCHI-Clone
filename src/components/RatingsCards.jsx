import React from 'react'
import MiniRatingCard from '../miniComponents/MiniRatingCard'

const RatingsCards = () => {
  return (
    <div className='flex items-center gap-[2%] w-full px-[4vmax] my-[4%] py-[5%] bg-white'>
      {/* <div className="rating-card bg-[#004D43] flex-2 rounded-lg h-[55vmin] text-[#CDEA68] flex items-center justify-center relative">
        <h2 className='text-[7vmax] font-semibold font-[Test Founders Grotesk X-Cond-SmBd]'> ochi </h2>
        <span className={`inline-block rounded-full px-2 py-1 font-light absolute bottom-3 left-4 border-1 text-[1.5vmax]`}>©2019-2025</span>
      </div> */}
      <MiniRatingCard cardCss={"flex-2 bg-[#004D43]"} btnText={"©2019-2025"}/>
      {/* <div className="rating-card bg-[#004D43] flex-1 rounded-lg h-[55vmin] text-[#CDEA68] flex items-center justify-center relative">
        <h2> ochi </h2>
        <span className={`inline-block rounded-full px-2 py-1 font-light absolute bottom-3 left-4 border-1 text-[1.5vmax]`}>©2019-2025</span>
      </div> */}
      <MiniRatingCard cardCss="flex-1 bg-[#212121]" imgLink='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' btnText='RATING 5.0 ON CLUTCH'/>
      {/* <div className="rating-card bg-[#004D43] flex-1 rounded-lg h-[55vmin] text-[#CDEA68] flex items-center justify-center relative">
        <h2> ochi </h2>
        <span className={`inline-block rounded-full px-2 py-1 font-light absolute bottom-3 left-4 border-1 text-[1.5vmax]`}>©2019-2025</span>
      </div> */}
      <MiniRatingCard cardCss="flex-1 bg-[#212121]" imgLink='https://ochi.design/wp-content/uploads/2022/04/logo003.png' btnText="BUSINESS BOOTCAMP ALUMNI" btnCss='text-center px-[5%]' />
    </div>
  )
}

export default RatingsCards