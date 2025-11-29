import React from 'react'

const Eye = ({ rotate, key_val }) => {
  return (
    <div id="eyes-wrapper-1" className='w-[13vmax] h-[13vmax] rounded-full bg-white flex items-center justify-center' key={key_val}>
      <div id="eyes-wrapper-2" className='w-2/3 h-2/3 bg-black rounded-full relative'>
        <div className={`line h-9 w-full absolute top-1/2 left-1/2 -translate-1/2`} style={{ rotate: `${rotate}deg` }}>
          <div id="pupil" className='w-9 h-9 bg-white rounded-full'>
          </div>
        </div>
        <p className="play absolute top-1/2 left-1/2 -translate-1/2 font-bold text-gray-400 text-sm">PLAY</p>
      </div>
    </div>
  )
}

export default Eye