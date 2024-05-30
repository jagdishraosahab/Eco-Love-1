import React, { useState } from 'react'
import HeadArrow from "../../Basic/HeadArrow";
import Cardnew from '../../Basic/Cardnew';

function Page5() {
  var data = [
    {img:"https://img.freepik.com/free-photo/assortment-tumbler-with-copy-space_23-2149029272.jpg?t=st=1714711812~exp=1714715412~hmac=2dadcbf2ac7acc2498d081f154d5d44fa70119c8502adf75b672c1f2ca486569&w=996" , text:"Hot Thermal Botttle" , price:"6" , added: false},
    {img:"https://img.freepik.com/free-photo/eco-friendly-brown-cups-leaves_23-2148723789.jpg?t=st=1714742742~exp=1714746342~hmac=a90028f67fa23e207e851b1ed95ea62901dca0ce5009cf0be94ceafc765a6b2a&w=1060" , text:"Organic Bamboo Cup" , price:"4" , added: false},
    {img:"https://img.freepik.com/free-photo/eco-products-arrangement-high-angle_23-2149413871.jpg?t=st=1714742916~exp=1714746516~hmac=7566cdbf703b80c4928a92f0e5f0d6a0e6afec75411e6df1e7a96fe0dc120781&w=360" , text:"Wooden Toothbrush" , price:"7" , added: false},
    {img:"https://img.freepik.com/free-photo/tied-bamboo-organic-straws-lavender_23-2148768603.jpg?t=st=1714743006~exp=1714746606~hmac=33ab5bca5e2b045d886d0b4bb697c27764240840f431a9081dcbf3b256ea0d9a&w=996" , text:"Organic Wooden Straw" , price:"2" , added: false},
    {img:"https://img.freepik.com/premium-photo/wooden-box-filled-with-wooden-utensils-wooden-spoons-generative-ai-image_97070-41788.jpg?w=360" , text:"More Products" , price:"" , added: false},

  ]

  const [newProducts , setNewProducts] = useState(data)
  return (
    <div className='w-full mt-28'>
        <div className='max-w-screen-xl p-5 mx-auto '>
         <div className='heading&arrow w-full'>
         <HeadArrow  title={"New Items"}/>
         </div>
         <div className='newproduct w-full flex gap-20 overflow-x-scroll mt-10'>
         {newProducts.map((items, index)=> <Cardnew index={index} key={index} items={items} />)}
         </div>
        </div>
        
    </div>
  )
}

export default Page5