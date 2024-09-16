import React, { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";
import { ImLeaf } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion, stagger } from "framer-motion";
import { ProductContext } from "./Context";

function Navbar() {
  const [isOpen, setisOpen] = useState(true);
  const [cart, setCart] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // console.log(value)

  const { cartProduct, product } = useContext(ProductContext);
  // console.log(product)

  //  const FindBySearch = (value)=>{
  //    const productRemaining = product.filter((product) => product.name.toLowerCase().includes(value.toLowerCase()))
  //  console.log(productRemaining)
  //  }

 


  const FindBySearch = (value) => {
    const productRemaining = product[0].page4
      .filter((prod) => prod.productName.toLowerCase().includes(value.toLowerCase()));
    setFilteredProducts(productRemaining);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchProduct(value);


    FindBySearch(value); 
  };


//   useEffect(()=>{
// handleSearch()
//   },[searchProduct])
  // setCart(cartProduct.length)
  // console.log()

  const container = {
    show: {
      transition: {
        satggerChildren: 0.5,
      },
    },
  };

  const { contextSafe } = useGSAP();
  const tl = gsap.timeline();

  const menuClick = contextSafe(function () {
    tl.to(".togglenav", {
      left: 0,
      duration: 0.5,
    });
  });

  const closeClick = contextSafe(function () {
    tl.to(".togglenav", {
      left: -700,
      duration: 0.2,
    });
  });

  const searchClick = contextSafe(function () {
    if (isOpen) {
      gsap.to(".ToggleSearch", {
        top: 15,
        duration: 0.2,
      });
    } else {
      gsap.to(".ToggleSearch", {
        top: -50,
      });
    }
    setisOpen(!isOpen);
  });

  //  const upDatedCart = ()=>{
  //          iscart([...cart , cart+1])
  //  }

  return (
    <div className="   py-7 z-[999]  w-full">
       {/* SEARCH DIV */}
       <div className="ToggleSearch hidden absolute top-[-100%] left-[40%] lg:flex">
        <input
          className="px-10 mr-5 py-3 rounded-lg bg-[#838A60] text-white outline-none"
          placeholder="Search Products"
          onChange={handleSearchChange} // Handle search input
          type="text"
          value={searchProduct}
        />
        <button className="bg-[#BA9659] font-semibold px-5 py-3 flex gap-3 items-center rounded-lg">
          <IoSearch />
        </button>
      </div>

      {/* Display Filtered Products */}
      {searchProduct && (
        <div className="absolute left-[30%] z-[30] flex flex-col items-center gap-10 px-2 top-[13%] bg-white w-[50%] h-[30vh] overflow-y-auto cursor-pointer">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((prod, index) => (
              <div key={index} className="flex  gap-5">
                <div className="w-[30%] h-[80%]">
                  <img w-full h-full src={prod.img} alt={prod.productName} className="w-full h-full object-cover"/>
                </div>
                <div className="">
                  <h1 className="text-2xl font-[Poppins] text-black">{prod.productName}</h1>
                  <p className="text-xl text-gray-700">${prod.price}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-xl text-red-500">No products found</div>
          )}
        </div>
      )}

      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        variants={container}
        transition={{ ease: "linear", duration: 0.4 }}
        className="px-3 lg:px-0 container max-w-screen-xl mx-auto flex itmes-center  justify-between "
      >
        <div className="leftside flex items-center  gap-20 text-black ">
          <NavLink onClick={menuClick}>
            <RxHamburgerMenu />
          </NavLink>

          <NavLink to="/catlog" className="hidden lg:flex  items-center">
            Catalog <IoChevronDown />
            {/* <div className="w-[20%] left-[13%]   rounded-xl top-[13%] absolute h-[50%] bg-red-500 ">

            </div> */}
          </NavLink>

          <NavLink className="hidden lg:block">+00356 963 23 25</NavLink>
        </div>
        <div className="center ml-7 lg:ml-0 flex items-center flex-col">
          <ImLeaf color="green" /> <h3 className="text-xs">Green City</h3>
        </div>
        <div className="rightside flex items-center gap-14  ">
          <NavLink onClick={searchClick} className="hidden lg:block">
            Search
          </NavLink>

          {/* SEARCH DIV */}
          <NavLink to="/account" className="hidden lg:block">
            Account
          </NavLink>
          <NavLink className="hidden lg:flex items-center gap-1">
            Whishlist{" "}
            <span className="w-[17px] flex items-center justify-center h-[17px]  text-center text-sm bg-red-500 rounded-full text-white">
              5
            </span>
          </NavLink>
          <NavLink to="/cart" className="flex items-center gap-1">
            Cart{""}
            <span className="w-[17px] flex items-center justify-center h-[17px]  text-center text-sm bg-red-500 rounded-full text-white">
              {cartProduct.length}
            </span>
          </NavLink>
        </div>
      </motion.div>

      <motion.hr
        animate={{ x: 0 }}
        initial={{ x: 200 }}
        className="w-full h-[2px] mt-7 bg-[#838A60]"
      />

      {/* TOGGLE NAVBAR */}
      <div className="togglenav hidden z-30 w-full lg:w-[40%]  lg:block overflow-x-hidden backdrop-sepia-0 h-[100%]  top-[0] lg:left-[-40%] absolute bg-[#F4EBDA] px-[40px] py-[50px]">
        <h1 className="h1 text-5xl font-[NewYork] font-semibold text-[#BA9659] text-center mb-5   ">
          Welcome To Green City
        </h1>
        <h1 className="h1 text-4xl font-[NewYork]  uppercase mb-5 font-bold text-[#838A60]">
          Catalog
        </h1>
        <h1 className="h1 text-4xl font-[NewYork] uppercase mb-5 font-bold text-[#838A60]">
          Account
        </h1>
        <h1 className="h1 text-4xl font-[NewYork] uppercase mb-5 font-bold text-[#838A60]">
          Whislist
        </h1>
        <h1 className="h1 text-4xl font-[NewYork] uppercase mb-5 font-bold text-[#838A60]">
          Cart
        </h1>
        <h1 className="h1 text-4xl font-[NewYork] uppercase mb-5 font-bold text-[#838A60]">
          Contact
        </h1>
        <span
          onClick={closeClick}
          className="block absolute top-[2%] left-[90%]"
        >
          <RiCloseLargeLine size="2em" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
