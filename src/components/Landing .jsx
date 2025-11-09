import React from 'react'

const Landing = () => {
  return (
    <div className="textstructure h-screen w-full pt-1 px-[4vw] overflow-x-hidden">
      {/*  
      (TRY TO REMOVE pt-1 FROM textstructure, YOU"LL SEE THE ISSUE)
      🔹 Margin vs Padding (Gap Color Issue)

      - margin-top (mt-32) creates space OUTSIDE the parent.
      → If parent has no bg color, white body bg is visible.

      - padding-top (pt-1) or border-top stops margin collapsing.
      → The space stays INSIDE the parent, so parent bg (black) fills it.

      ✅ Use padding instead of margin when you want the section gap
       to appear in the same background color as the parent.
        */}
      <div className="masker mt-50">
        {["we create", "eye opening", "presentations"].map((item, index) => (
          <h1 key={index} className="font-['Test Founders Grotesk X-Cond-SmBd'] text-[7vmax] uppercase font-medium leading-[6vmax] tracking-tight"> {item} </h1>
        ))}
      </div>

      <span className='inline-block mt-[10%] w-full scale-120 h-[1px] bg-white/60' />
      <div id="feature" className='flex items-center w-full mt-[1%]'>
        <div id="text" className='flex w-[70%] items-center justify-between'>
          {["Presentation and sotrytelling agency", "For innovation teams and global brands"].map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <button id="ctc" className='w-[30%] gap-[5%] flex items-center justify-end group'>
          <span className='border-[1px] rounded-4xl px-4 py-1 group-hover:bg-white group-hover:text-black transition-all ease-linear duration-200 cursor-pointer'>START THE PROJECT</span>
          <span className='relative'> <i class="relative ri-arrow-right-up-line text-2xl rounded-full border-[2px] p-1 group-hover:text-black z-10"></i> <span className='inline-block w-full h-full bg-white scale-0 absolute top-0 left-0 rounded-full duration-300 ease-linear group-hover:scale-100'></span> </span>
        </button>
      </div>
    </div>
  )
}

export default Landing 