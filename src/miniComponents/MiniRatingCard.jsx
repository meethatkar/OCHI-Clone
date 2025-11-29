import React from 'react'

const MiniRatingCard = ({ cardCss, btnCss="", btnText, imgLink="" }) => {
  return (
    <div className={`${cardCss} rating-card rounded-lg h-[55vmin] text-[#CDEA68] flex items-center justify-center relative p-5`}>
      {imgLink==="" && (<h2 className='text-[7vmax] font-semibold font-[Test Founders Grotesk X-Cond-SmBd]'> ochi </h2>)}
      {imgLink!=="" && (
        <img src={imgLink} alt="" className='object-cover' />
      )}
      <span className={`inline-block rounded-full px-2 py-1 font-light absolute bottom-3 left-4 border-1 text-[1.5vmax] z-10 ${btnCss} tracking-tighter`}>{btnText}</span>
    </div>
  )
}

export default MiniRatingCard