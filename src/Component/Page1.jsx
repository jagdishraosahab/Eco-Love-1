import React from "react";
import { Link } from "react-router-dom";
import { motion, stagger } from 'framer-motion'

function Page1() {

  
  return (
    <div className="max-w-screen-xl relative select-none p-5  mx-auto">
      <div   className="lg:mt-5 lg:relative lg:w-full lg:h-[13vh]    flex items-center justify-between">
        <motion.h1 animate={{y:0}} initial={{y:100}} transition={{ease : "linear" , duration:0.4}} className="text-[4.9vh] lg:text-8xl font-[NewYork] uppercase text-[#838A60] ">
          Green City Style
        </motion.h1>
<motion.div
           animate={{y:0}} initial={{y:100}} transition={{ease : "linear" , duration:0.4 , delay:0.4}}
>
  <Link  to="/catlog" className="  absolute top-[80%] left-[1vh] mr-2 lg:mr-0 lg:top-[9%]  lg:left-[67%] lg:block lg:py-4 lg:px-[17vh] py-2 px-32  bg-[#838A60] rounded-xl text-lg lg:text-xl font-[Poppins] text-center text-white">
          Go To Catalog
        </Link >
</motion.div>
        

      </div>
      <div    className=" lg:flex  items-center justify-between">
        <motion.p animate={{y:0 , opacity:1}}  initial={{y:100 , opacity:0}} transition={{ease : "linear" , duration:0.4 , delay:0.4}}
         className="   mt-[17%] lg:mt-0 text-left text-lg font-[Poppins]  leading-6">
          Welcome to our eco-conscious store, <br /> where sustainability meets
          style! <br /> Discover a curated collection of eco <br /> friendly
          products
        </motion.p>
        <motion.h1 animate={{y:0 , opacity:1}}  initial={{y:100 , opacity:0}} transition={{ease : "linear" , duration:0.4 , delay:0.3}}
         className="absolute lg:relative top-[10%] lg:top-0 text-[4.9vh] lg:text-8xl font-[NewYork] uppercase text-[#838A60]">
          eco good sotre
        </motion.h1>
      </div>
      <div className="w-full h-[52vh]   mt-10">
        <motion.div animate={{y:0 , opacity:1}}  initial={{y:100 , opacity:0}} transition={{ease : "linear" , duration:0.4 , delay:0.6}}
         className="w-full rounded-xl overflow-hidden h-full ">
          <img
            className=" lg:h-full w-full object-cover object-top "
            src="https://img.freepik.com/free-photo/natural-toothbrushes-beauty-health-spa-concept_23-2148645548.jpg?t=st=1714116482~exp=1714120082~hmac=8b72fea1ff32288035f024075c0fb088e223be90b26dd0378384c501099b792a&w=996"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Page1;
