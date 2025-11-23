import React from 'react'

const AboutusCTC = () => {
  return (
    <div className='mt-[2%] flex justify-between w-full'>
      <div id="left-section">
        <p className='text-4xl mb-[5%]'> How we can help: </p>
        <button className='group flex items-center gap-[5%] bg-black text-white rounded-4xl py-[5%] w-[67%] px-[8.5%] text-xl tracking-tight whitespace-nowrap'> READ MORE <span className='inline-block scale-50 group-hover:scale-100 rounded-full px-[4%] bg-white transition-all duration-300 ease-in-out'> <i class="ri-arrow-right-up-line text-black"></i> </span></button>
      </div>
      {/* Right: image */}
        <div className="w-1/2 max-w-[720px]">
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
              alt="How we can help"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>
    </div>
  )
}

export default AboutusCTC