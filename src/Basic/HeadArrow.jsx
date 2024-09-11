import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function HeadArrow({title = "add", moveLeft, moveRight}) {


  return (
    <div>
      <div className="flex items-center justify-between">
          <h1 className="lg:text-5xl text-4xl lg:ml-0 ml-3 font-[NewYork PERSONAL USE] text-[#838A60]">
           {title}
          </h1>
          <div className="arrow flex items-center gap-5 ">
            <button onClick={moveLeft}>
              <span className="lg:w-[35px] lg:h-[35px] rounded-lg border-[1px] border-[#838A60] lg:flex hidden items-center justify-center">
                <FaAngleLeft size="1.3em" />
              </span>
            </button>
            <button onClick={moveRight}>
              <span className="lg:w-[35px] lg:h-[35px] rounded-lg border-[1px] hidden   border-[#838A60] lg:flex items-center justify-center">
                {" "}
                <FaAngleRight size="1.3em" />
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default HeadArrow