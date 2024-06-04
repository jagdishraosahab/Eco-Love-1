import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { ImLeaf } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { motion, stagger } from 'framer-motion'



function Navbar( ) {

  const [isOpen, setisOpen] = useState(true)
  const [cart , iscart] = useState(null)

  const container = {
    show :{
      transition :{
        satggerChildren : 0.5
      }
    }
  }


  

   const {contextSafe} = useGSAP()
   const tl = gsap.timeline()

   const menuClick = contextSafe(function(){
    tl.to(".togglenav" , {
      left: 0,
      duration: 0.5,
      
    })
   })

   

   const closeClick = contextSafe(function(){
    tl.to(".togglenav" , {
      left: -700,
      duration: 0.5,
    })
   })

   const searchClick = contextSafe(function(){

    if(isOpen){
      gsap.to(".ToggleSearch" , {
        top: 15,
        duration: 0.5,
       })
    }else{
       gsap.to(".ToggleSearch" , {
      top: -50,
     })

     ;
    }
    setisOpen(!isOpen)
     
   })

   const upDatedCart = ()=>{
           iscart([...cart , cart+1])
   }

   

   
  
  return (
    <div className="py-7  w-full">
      <motion.div animate={{y:0}} initial={{y:-100}} variants={container}  transition={{ease : "linear" , duration:0.4 }}
       className="px-3 lg:px-0 container max-w-screen-xl mx-auto flex itmes-center justify-between ">
        <div className="leftside flex items-center  gap-20 text-black ">
          <NavLink onClick={menuClick} >
            <RxHamburgerMenu />
          </NavLink>

          <NavLink to="/catlog" className="hidden lg:flex  items-center">
            Catalog <IoChevronDown />
           {/* <div className="w-[20%] left-[13%]   rounded-xl top-[13%] absolute h-[50%] bg-red-500 ">

            </div> */}
          </NavLink> 
          

          <NavLink className='hidden lg:block' >+00356 963 23 25</NavLink>
        </div>
        <div className="center ml-7 lg:ml-0 flex items-center flex-col">
          <ImLeaf color="green" /> <h3 className="text-xs">Green City</h3>
        </div>
        <div className="rightside flex items-center gap-14  ">
          <NavLink onClick={searchClick} className='hidden lg:block'>Search</NavLink>

          {/* SEARCH DIV  */}
          <div className="ToggleSearch hidden   absolute top-[-10%] left-[40%] lg:flex ">
            <input className="px-10 mr-5 py-3 rounded-lg bg-[#838A60] text-white outline-none " placeholder="Search Products" type="text" />
                 <button className="bg-[#BA9659] font-semibold px-5 py-3 flex gap-3 items-center rounded-lg">< IoSearch/></button>
          </div>

          {/* SEARCH DIV */}
          <NavLink to='/account' className='hidden lg:block'>Account</NavLink>
          <NavLink className="hidden lg:flex items-center gap-1">
            Whishlist{" "}
            <span className="w-[17px] flex items-center justify-center h-[17px]  text-center text-sm bg-red-500 rounded-full text-white">
              5
            </span>
          </NavLink>
          <NavLink className="flex items-center gap-1">
            Cart{" "}
            <span className="w-[17px] flex items-center justify-center h-[17px]  text-center text-sm bg-red-500 rounded-full text-white">
              {cart}
            </span>
          </NavLink>
        </div>
      </motion.div>

      < motion.hr animate={{x:0}} initial={{x:200}}
       className="w-full h-[2px] mt-8 bg-[#838A60]" />

     {/* TOGGLE NAVBAR */}
      <div className="togglenav w-full lg:w-[40%] hidden lg:block overflow-x-hidden backdrop-sepia-0 h-[100%]  top-[0] lg:left-[-40%] absolute bg-[#F4EBDA] px-[40px] py-[50px]">
          <h1 className="h1 text-5xl font-[newyork] font-semibold text-[#BA9659] text-center mb-5   ">Welcome To Green City</h1>
          <h1 className="h1 text-4xl font-[newyork]  uppercase mb-5 font-bold text-[#838A60]">Catalog</h1>
          <h1 className="h1 text-4xl font-[newyork] uppercase mb-5 font-bold text-[#838A60]">Account</h1>
          <h1 className="h1 text-4xl font-[newyork] uppercase mb-5 font-bold text-[#838A60]">Whislist</h1>
          <h1 className="h1 text-4xl font-[newyork] uppercase mb-5 font-bold text-[#838A60]">Cart</h1>
          <h1 className="h1 text-4xl font-[newyork] uppercase mb-5 font-bold text-[#838A60]">Contact</h1>
          <span onClick={closeClick} className="block absolute top-[2%] left-[90%]"><RiCloseLargeLine size='2em'/></span>
      </div>
    </div>





  );
}

export default Navbar;
