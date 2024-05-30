import React from "react";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div className="max-w-screen-xl select-none p-5  mx-auto">
      <div className="mt-5  flex items-center justify-between">
        <h1 className="text-4xl lg:text-8xl font-[NewYork] uppercase text-[#838A60] ">
          Green City Style
        </h1>
        <Link  to="/catlog" className=" absolute top-[80%] lg:top-[25.9%] lg:left-[66%] lg:block lg:py-4 lg:px-28 py-2 px-32  bg-[#838A60] rounded-xl text-lg lg:text-xl font-[poppins] text-white">
          Go To Catalog
        </Link >
      </div>
      <div className=" lg:flex  items-center justify-between">
        <p className="  text-left text-lg font-[poppins]  leading-6">
          Welcome to our eco-conscious store, <br /> where sustainability meets
          style! <br /> Discover a curated collection of eco <br /> friendly
          products
        </p>
        <h1 className="text-4xl lg:text-8xl font-[NewYork] uppercase text-[#838A60]">
          eco good sotre
        </h1>
      </div>
      <div className="w-full h-[52vh]   mt-10">
        <div className="w-full rounded-xl overflow-hidden     h-full ">
          <img
            className=" lg:h-full w-full object-cover object-top "
            src="https://img.freepik.com/free-photo/natural-toothbrushes-beauty-health-spa-concept_23-2148645548.jpg?t=st=1714116482~exp=1714120082~hmac=8b72fea1ff32288035f024075c0fb088e223be90b26dd0378384c501099b792a&w=996"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Page1;
