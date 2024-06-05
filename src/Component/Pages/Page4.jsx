import React, { useState } from "react";
import HeadArrow from "../../Basic/HeadArrow";
import Cards from "../../Basic/Cards";

function Page4() {
  var data = [
    {
      img: "https://img.freepik.com/premium-photo/reusable-shopping-bags-brown-wall-zero-waste-concept-no-plastic_136404-1061.jpg?w=360",
      productName: "Organic Bag",
      Price: "7",
      isAdded: false,
      isCart: false,
    },
    {
      img: "https://img.freepik.com/premium-photo/high-angle-view-food-table_1048944-28128384.jpg?w=996",
      productName: "organic plates",
      Price: "8",
      isAdded: false,
      isCart: false,
    },
    {
      img: "https://img.freepik.com/free-photo/assortment-different-glass-tumblers_23-2149029223.jpg?t=st=1714548318~exp=1714551918~hmac=8306eba747c61bf945b01b88e0eac1ab6bce07e87cbc51590af5adb97ec5f6f1&w=360",
      productName: "reusable glass of drink bottle",
      Price: "25",
      isAdded: false,
      isCart: false,
    },
    {
      img: "https://img.freepik.com/free-photo/tied-bamboo-organic-straws-leaves-copy-space_23-2148768602.jpg?t=st=1714548160~exp=1714551760~hmac=c2519bff9af182bb8668976cddf9a3ea71c80d0e0b68b08e47abc25734376610&w=996",
      productName: "organic bamboo straw for drink",
      Price: "5",
      isAdded: false,
      isCart: false,
    },
 
  ];

  const [products, setProducts] = useState(data);

  function clickHandler(index) {
    setProducts((prev) => {
      return prev.map((items, itemIndex) => {
        if (itemIndex === index) return { ...items, isAdded: !items.isAdded };
        return items;
      });
    });
  }
  function clickHandler2(index) {
    setProducts((prev) => {
      return prev.map((items, itemsIndex) => {
        if (itemsIndex === index) return { ...items, isCart: !items.isCart };
        return items;
      });
    });
  }

  function moveLeft() {
    var box = document.querySelector(".ctrl");
    box.scrollLeft -= 200;
  }
  function moveRight() {
    var box = document.querySelector(".ctrl");
    box.scrollLeft += 200;
  }
  return (
    <div className="prodcut hidden lg:block w-full lg:overflow-x-hidden ">
      <div className="lg:max-w-screen-xl w-full  lg:mt-32  mt-10  mx-auto">
        <div className="">
          <HeadArrow
            title={"Popular Products"}
            moveLeft={moveLeft}
            moveRight={moveRight}
          />
        </div>
        <div className="ctrl lg:w-full lg:h-full    w-[45%] h-[30vh] flex   gap-5 lg:gap-[80px] flex-shrink-0 overflow-x-scroll transition-all duration-1000 ml-3 lg:ml-0 mt-6 lg:mt-0 ">
          {products.map((items, index) => (
            <Cards
              items={items}
              key={index}
              index={index}
              clickHandler={clickHandler}
              clickHandler2={clickHandler2}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page4;


