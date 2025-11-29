import React, { useEffect, useState } from 'react'
import Eye from '../miniComponents/Eye'

const Playful = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
        const deltaX = e.clientX - (window.innerWidth/2);
        const deltaY = e.clientY - (window.innerHeight/2);
        
        const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
        setRotate(angle-180);
      })
    },[]);

  return (
    <div className='w-full h-screen cursor-grab'>
      <div className='h-full w-full flex items-center justify-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]
       bg-cover bg-center relative'>
        <div className='absolute top-1/2 left-1/2 -translate-1/2 flex items-center justify-center gap-[2vmax]'>
          {/* 1st eye */}
          <Eye rotate={rotate} key_val={1} />
          {/* 2nd eye */}
          <Eye rotate={rotate} key_val={2}/>
        </div>
      </div>
    </div>
  )
}

export default Playful