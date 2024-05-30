import React from "react";


function Subscribe() {
 

  return (
    <div className="w-full mt-28">
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-[70vh] bg-[#838A60] rounded-xl ">
          <h1 className="text-[7vw] font-[newyork] uppercase text-white tracking-tight text-center pt-12">
            Your first purchaes
          </h1>
          <div className="ctrldiv ml-72 ">
            <div className="flex items-center leading-none">
              <p className="w-[27%] font-[poppins] tracking-tight leading-1  text-md text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                praesentium obcaecati magni!
              </p>
              <h1 className="text-[7vw]  font-[newyork] uppercase text-white tracking-tight">
                With <span className="inline-block text-[#BA9659]">10%</span> Off{" "}
              </h1>
            </div>
            <div className="form mt-10 ">
              <form onSubmit={(Event)=>Event.preventDefault()} ction="">
                <input className="px-28 py-3 rounded-xl border-[1px] border-white bg-[#838A60] text-white" type="text" placeholder="Enter Your Email" />
                <input className="px-28 py-3 rounded-xl ml-10 bg-[#BA9659]" type="submit" />
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
