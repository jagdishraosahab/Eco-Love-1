import React from 'react'

function MoreCrad({img , clickHandler2 , index , productName , price , isCart}) {

    // const { } = items;
  return (
    <div className='mx-auto w-[20vh]  lg:w-[17%]'>
   <div className=' '>
     
   <div  className="card bg-red-300 lg:w-full w-full shrink-0  lg:overflow-hidden h-full lg:h-[45vh] lg:mt-10  border-[1px] border-[#838A60] rounded-md lg:rounded-lg ">
          <img
            className="lg:w-full lg:h-full w-full h-[20vh]   object-cover  "
            src={img}
            alt=""
          />
        
        </div>

        <div className="details   mt-5">
          <h2 className="text-md font-[Poppins] capitalize font-bold leading-none tracking-tight">
            {productName}
          </h2>

          <h4 className="text-md mt-2 font-bold font-[Poppins]">${price}</h4>
          <button
            
            onClick={() => clickHandler2(index)}
            className={`py-3 px-4 lg:py-3 mt-4 lg:px-[65px] rounded-xl ${
              isCart ? "bg-[#838A60]" : "bg-[#BA9659]"
            }`}
          >
            <h3 className="text-sm text-white font-[Poppins] font-bold ">
            {isCart === true ? "Added" : " Add To Cart"}
            </h3>
          </button>
        </div>

 
    </div>  
          
      
    </div>
  )
}

export default MoreCrad