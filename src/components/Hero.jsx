import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center p-4'>
      <p className='mt-1 text-cGreen font-bold md:text-xl'>GROWING WITH DATA ANALYTICS</p>
      <p className='mt-1 text-4xl font-bold md:text-8xl'>Grow with data.</p>
      <p className='mt-1 text-2xl md:text-4xl'>Fast, flexible financing for  <Typed strings ={['BTB',' BTC','SASS']}typeSpeed={100} backSpeed={100} loop/></p>
      <p className='mt-1 text-gray-500 text-center md:font-bold md:text-xl md:my-2'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
      <button className='mt-2 bg-white text-black p-2 md:px-4 rounded-md md:w-40 md:font-bold '>Get Started</button>
    </div>
  )
}

export default Hero

