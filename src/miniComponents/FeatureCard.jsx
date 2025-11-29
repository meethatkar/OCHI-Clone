import React from 'react'

const FeatureCard = ({dispalyText, imgLink, textCss}) => {
  return (
      <div className="card h-[80vmin] w-1/2 group relative">
        <div className={`text-effect-wrapper absolute w-fit  top-1/2 ${textCss} -translate-y-1/2 z-10 opacity-0`}>
              <h1 className='text-[5vmax] text-shadow-2xs text-shadow-black leading-none text-[#CDEA68] whitespace-nowrap font-semibold'>
              {dispalyText.split('').map((t)=>(
                <span key={t}>{t}</span>
              ))}
            </h1>
          </div>
          <div className="card-content h-full w-full rounded-xl overflow-hidden group-hover:scale-97 ease-transition">
            <img src={imgLink} alt="" className='w-full h-full object-cover group-hover:scale-115 ease-transition'/>
          </div>
        </div>
  )
}

export default FeatureCard