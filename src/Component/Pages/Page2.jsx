import React from 'react'
import { IoLeafOutline } from "react-icons/io5";
import { GiBoxUnpacking } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";

function Page2() {
  
   var data = [
    {logo : "IoLeafOutline " , text:"Eco Friendly Goods"},
    {logo : "GiBoxUnpacking " , text:"Eco Friendly Goods"},
    {logo : "TbTruckDelivery " , text:"Eco Friendly Goods"},
    {logo : "LiaCertificateSolid " , text:"Eco Friendly Goods"}

]

  return (
    <div className='w-full '>
        <div className='max-w-screen-xl  flex flex-wrap lg:flex-nowrap lg:flex gap-1 lg:gap-28 p-5 mx-auto'>
             <div className='w-[48%] h-[20vh] lg:w-[18%] lg:h-[20vh] border-[2px] rounded-lg border-[#838A60] flex flex-col items-center justify-center '>
            <IoLeafOutline size='5em' color='#838A60' />
            <h3 className='text-sm  mt-2 font-semibold font-[Poppins]'>Eco Friendly Goods</h3>
            </div>
            <div className='w-[48%] h-[20vh] lg:w-[18%] lg:h-[20vh] border-[2px] rounded-lg border-[#838A60] flex flex-col items-center justify-center '>
            <GiBoxUnpacking size='5em' color='#838A60' />
            <h3 className='text-sm  mt-2 font-semibold font-[Poppins]'>Eco Friendly Goods</h3>
            </div>
            <div className='w-[48%] h-[20vh] lg:w-[18%] lg:h-[20vh] border-[2px] rounded-lg border-[#838A60] flex flex-col items-center justify-center '>
            <TbTruckDelivery  size='5em' color='#838A60' />
            <h3 className='text-sm  mt-2 font-semibold font-[Poppins]'>Eco Friendly Goods</h3>
            </div>
            <div className='w-[48%] h-[20vh] lg:w-[18%] lg:h-[20vh] border-[2px] rounded-lg border-[#838A60] flex flex-col items-center justify-center '>
            <LiaCertificateSolid size='5em' color='#838A60' />
            <h3 className='text-sm mt-2  font-semibold font-[Poppins]'>Eco Friendly Goods</h3>
            </div>
        </div>
    </div>
  )
}

export default Page2