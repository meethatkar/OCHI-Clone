import { a } from 'motion/react-client'
import React from 'react'

const AboutusText = () => {
  return (
    <div className='w-full flex items-start pt-[1%] gap-[10%] pb-[3%]'>
     <p className='w-[35%] text-xl text-light'> What you can expect: </p>
     <div className='text-start text-xl w-[30%]'>
      {["We don't just make slides. We shape strategy, storytelling, design scalable brand systems, and build presentations that make people say: \"I want in!\"",
        "Our clients make the world go round – from deep tech, aerospace and robotics to music festivals and Michelin-starred restaurants.",
        "Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber, Lexus, Salience Labs, Trawa and AllThingsGo."
      ].map(p=>
        <p className='mb-[8%]'>{p}</p>
      )}
     </div>
     <div className='w-[25%] h-[52vh] justify-end flex flex-col'>
      {[
        {name: "S:", link: "#"},
        {name: "Instagram", link: "instagram.com"},
        {name: "Behance", link: "behance.com"},
        {name: "Facebook", link: "facebook.com"},
        {name: "LinkedIn", link: "linkedin.com"}
      ].map((i, idx)=>
        <a href={i.link} className={`${idx===0 ? "mb-[3%]" : "underline"} text-xl`}> {i.name} </a>
      )}
     </div>
    </div>
  )
}

export default AboutusText