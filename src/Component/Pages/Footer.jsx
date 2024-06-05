import React from 'react'
import { ImLeaf } from "react-icons/im";
import { IoLeaf } from "react-icons/io5";

function Footer() {
  return (
    <div className='w-full h-[60vh] lg:mb-0  relative lg:h-[50vh] bg-[#838A60] mt-10 rounded-tl-2xl  rounded-tr-2xl'>
      <div className='w-full lg:max-w-screen-xl mx-auto flex items-center gap-32'>
        <div className='logo'>
       <div className='ml-16 mb-3' >
       
       <ImLeaf size="3em" color='green' />
       </div>
       <div className='absolute left-[9%] top-[12%]'>
       <IoLeaf size="3em" color='green'  />
       </div>
          <h2 className='text-md lg:px-0 lg;mt-0 px-5 mt-5 text-white font-[poppins] font-semibold'>
            Eco-friendly place, <br />
            where sustainability <br />
            meets style!
          </h2>
        </div>
        <div className='menu mt-16 lg:mt-0 '>
          <h2 className='text-md lg:mb-2 text-white font-[poppins] font-semibold'  >Menu</h2>
          <ul>
            <li className='text-white font-[poppins] mt-1'>Catalog</li>
            <li className='text-white font-[poppins] mt-1'>About Us</li>
            <li className='text-white font-[poppins] mt-1'>Contact</li>
          </ul>
        </div>
        <div className='Catalog mt-12'>
          <h2 className='text-md  text-white font-[poppins] font-semibold'>Catalog</h2>
          <ul>
            <li className='text-white font-[poppins] mt-1'>Organic Cosmetic</li>
            <li className='text-white font-[poppins] mt-1'>Hygine Products</li>
            <li className='text-white font-[poppins] mt-1'>Eco Dishes</li>
            <li className='text-white font-[poppins] mt-1'>Shoppers</li>
            <li className='text-white font-[poppins] mt-1'>Gift Sets</li>
          </ul>
        </div>
        <div className='contact mb-10'>
            <h2 className='text-md  text-white font-[poppins] font-semibold'>Contact</h2>
            <h2 className='text-md text-white font-[poppins] '>Phone : +38057 000 00 00</h2>
            <h2 className='text-md text-white font-[poppins] '>Email : green_city@gmail.com</h2>

        </div>
        <div className='socialMedia flex flex-col mb-10 '>
            <h2 className='text-md text-white font-[poppins] font-semibold'>Social Media</h2>
            <a className='text-md text-white font-[poppins] ' href="www.instagram.com">Instagram</a>
            <a className='text-md text-white font-[poppins] ' href="www.telegram.com"> Telegram</a>

        </div>
       

      </div>
        <hr className='w-full h-[2px] mt-20' />
        {/* <div className='mt-5 flex gap-5 items-center justify-center'>
        <h1>Designed from behance </h1>
        <h1>Coded By @darxhanx</h1>
        </div> */}
    </div>
  )
}

export default Footer