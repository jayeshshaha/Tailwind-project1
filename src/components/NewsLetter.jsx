import React from 'react'
import laptop from "../assets/laptop.jpg"

const NewsLetter = () => {
  return (
    <div className='p-4 bg-white text-black '>
    <div className='max-w-[1240px] h-auto mx-auto grid md:grid-cols-2 gap-2 p-2'>
      <div>
        <img src={laptop} alt="#" className='h-[400px] mx-auto'/>
      </div>
      <div className='p-4 flex flex-col justify-center '>
        <p className='mt-2 font-bold text-cBlue'>DATA ANALYTICS DASBOARD</p>
        <p className='mt-2 font-bold text-xl md:text-2xl'>MANAGE DATA ANALYTICS CENTRALLY</p>
        <p className='mt-2'>Transform data into actionable insights with our intuitive Data Analytics Dashboard – your key to real-time visualizations and informed decision-making.</p>
         <button className='mt-2 bg-cBlue text-white p-2 w-44 rounded-md'>Check Products</button>
      </div>
    </div>
    </div>
  )
}

export default NewsLetter