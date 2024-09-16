import React from 'react'
import { RiAddCircleLine } from "react-icons/ri";
import { FiMinusCircle } from "react-icons/fi";

const MoodyCards = ({data , quantities}) => {
  return (
    <div key={data.id} className="w-full min-h-[30vh] py-2 px-3 mx-auto">
          <div className="flex items-center w-full h-full gap-10 bg-green-200 rounded-xl">
            <div className="lg:w-[20%] h-[28vh]">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={data.img}
                alt={data.productName}
              />
            </div>
            <div>
              <h2 className="font-[Poppins] capitalize font-bold text-xl">
                {data.productName}
              </h2>
              <p className="text-sm font-[Poppins] text-gray-600">Description</p>
              <p className="text-lg font-[Poppins] text-gray-800">
                ${data.price}
              </p>
              <div className="flex items-center gap-3">
                <RiAddCircleLine
                  size={"1.4em"}
                  onClick={() => handleQuantityChange(data.id, 1)}
                  className="cursor-pointer"
                />
                <span>{quantities[data.id] || 1}</span>
                <FiMinusCircle
                  size={"1.4em"}
                  onClick={() => handleQuantityChange(data.id, -1)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default MoodyCards