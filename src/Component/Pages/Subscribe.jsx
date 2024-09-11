import React from "react";


function Subscribe() {
 

  return (
    <div className=" lg:mx-0 w-full mt-28">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full lg:h-[70vh] bg-[#838A60] rounded-xl ">
          <h1 className="text-[9vw] lg:text-[7vw] font-[NewYork PERSONAL USE] uppercase text-white tracking-tight text-center pt-12">
            Your first purchaes
          </h1>
          <div className="ctrldiv lg:ml-72 ">
            <div className=" lg:flex items-center leading-none">
              <p className="mt-16 mx-2 lg:relative absolute lg:mt-0 lg:w-[27%] font-[Poppins] tracking-tight leading-1  text-md text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                praesentium obcaecati magni!
              </p>
              <h1 className="text-[9vw] lg:text-[7vw]  text-center  font-[NewYork PERSONAL USE] uppercase text-white tracking-tight">
                With <span className="inline-block text-[#BA9659]">10%</span> Off{" "}
              </h1>
            </div>
            <div className="form mt-20 px-1 lg:px-0 lg:mt-10 ">
              <form onSubmit={(Event)=>Event.preventDefault()} ction="">
                <input className="px-28 py-3 rounded-xl mb-3 border-[1px] border-white bg-[#838A60] text-white" type="text" placeholder="Enter Your Email" />
                <input className="px-[20vh] lg:px-28 py-3 mb-2 rounded-xl lg:ml-10 bg-[#BA9659]" type="submit" />
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
