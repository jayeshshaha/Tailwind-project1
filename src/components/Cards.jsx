import React from 'react'
import Single from ".././assets/Single.png"
import Double from ".././assets/Double.png"
import Triple from ".././assets/Triple.png"

const Cards = () => {
  return (
    <div className='p-12 text-black bg-white'>
      <div className='max-w-[1240px] h-auto grid gap-4 p-2 md:grid-cols-3 mx-auto'>
      <div className='flex flex-col justify-center items-center mt-4 p-2 shadow-xl rounded-xl hover:scale-105 ease-in-out '>
          <img src={Single} className='h-14 w-15 mt-[-40px] ' />
          <p className='mt-3 p-1  w-[60%] text-center font-bold text-xl'>Single-User</p>
          <p className='mt-1 p-3  w-[60%] text-center font-bold text-3xl'>$149</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>500 GB Storage</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>1 Granted User</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>Send upto 1 GB</p>
          <button className='mt-3 mb-2 bg-cGreen p-2 rounded-md w-40 text-black'>Start Trial</button>
        </div>

        <div className='flex flex-col justify-center items-center mt-4 p-2 shadow-xl rounded-xl bg-slate-100 hover:scale-105 ease-in-out '>
          <img src={Double} className='h-14 w-15 mt-[-40px] ' />
          <p className='mt-3 p-1  w-[60%] text-center font-bold text-xl'>Double-User</p>
          <p className='mt-1 p-3  w-[60%] text-center font-bold text-3xl'>$249</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>1000 GB Storage</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>2 Granted User</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>Send upto 2 GB</p>
          <button className='mt-3 mb-2 bg-cGreen p-2 rounded-md w-40 text-black'>Start Trial</button>
        </div>

        <div className='flex flex-col justify-center items-center mt-4 p-2 shadow-xl rounded-xl hover:scale-105 ease-in-out '>
          <img src={Triple} className='h-14 w-15 mt-[-40px] ' />
          <p className='mt-3 p-1  w-[60%] text-center font-bold text-xl'>Multi-User</p>
          <p className='mt-1 p-3  w-[60%] text-center font-bold text-3xl'>$599</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>1 TB Storage</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>10 Granted User</p>
          <p className='mt-3 p-1 border-b-[1px] border-[#ccc] w-[60%] text-center'>Send upto 25 GB</p>
          <button className='mt-3 mb-2 bg-cGreen p-2 rounded-md w-40 text-black'>Start Trial</button>
        </div>

      </div>
    </div>
  )
}

export default Cards


