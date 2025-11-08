import React from 'react'

const Landing = () => {
  return (
    <div className="textstructure h-screen w-full pt-1">
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
        {["we create", "eye opening", "presentations"].map((item, index)=>(
          <h1 key={index} className="font-['Test Founders Grotesk X-Cond-SmBd'] text-[7vmax] uppercase font-medium leading-[6vmax] tracking-tight"> {item} </h1>
        ))}
      </div>
    </div>
  )
}

export default Landing 