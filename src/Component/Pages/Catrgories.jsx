import React, { useRef } from "react";

import {
  animate,
  easeIn,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import HeadArrow from "../../Basic/HeadArrow";
function Categories() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  const boxRef = useRef(null);

  function moveLeft() {
    if (boxRef.current) {
      boxRef.current.scrollTo({
        left: boxRef.current.scrollLeft - 200,
        behavior: "smooth",
      }); // scrolls left by 200px
    }
  }
    // Function to move right
  function moveRight() {
    if (boxRef.current) {
      boxRef.current.scrollTo({
        left: boxRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="w-full">
      <motion.div
        transition={{ ease: "linear", duration: 0.9 }}
        className=" w-[100%] lg:max-w-screen-xl mt-16   mx-auto"
      >
        <HeadArrow
          title={"Categories"}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />
        <motion.div
          ref={boxRef}
          className="boxctrl transition-all duration-500 ml-3 lg:mx-0 overflow-x-scroll overflow-hidden flex flex-wrap lg:flex-nowrap lg:flex gap-10 lg:w-full w-full    mt-10"
        >
          <div
            style={{
              backgroundImage: `url('https://static.toiimg.com/thumb/msid-107666466,imgsize-31650,width-400,resizemode-4/107666466.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="box flex items-end overflow-hidden bg-contain w-[42%] h-[25vh]    lg:w-[31%] lg:h-[35vh] rounded-lg flex-shrink-0 border-[1px] border-[#838A60]"
          >
            <button className=" px-12 py-2 lg:p-2 rounded-tr-lg bg-[#838A60]">
              <h3 className="text-xl text-white font-[Poppins] tracking-tight leading-none ">
                Organic Products
              </h3>
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/composition-spa-treatment-bamboo-brushes-copy-space_23-2148645549.jpg?t=st=1714238884~exp=1714242484~hmac=9ec15eccbfd74f192894b13a9fb63843cd8ff222d2f6058ad8bc8dc784bc045b&w=996')`,
              backgroundSize: "cover",
            }}
            className="box flex items-end overflow-hidden bg-contain w-[42%] h-[25vh]    lg:w-[31%] lg:h-[35vh] rounded-lg flex-shrink-0 border-[1px] border-[#838A60]"
          >
            <button className="px-12 p-2 lg:p-2 rounded-tr-lg bg-[#838A60]">
              <h3 className="text-xl text-white font-[Poppins] tracking-tight leading-none ">
                Hygine Products
              </h3>
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url('https://img.freepik.com/premium-photo/set-bathroom-accessories-top-view-zero-waste-concept_266870-6085.jpg?w=996')`,
              backgroundSize: "cover",
            }}
            className="box flex items-end overflow-hidden bg-contain w-[42%] h-[25vh]   lg:w-[31%] lg:h-[35vh] rounded-lg flex-shrink-0 border-[1px] border-[#838A60]"
          >
            <button className="px-12 py-[2.2vh] lg:p-2 rounded-tr-lg bg-[#838A60]">
              <h3 className="text-xl text-white font-[Poppins] tracking-tight leading-none ">
                Shopper
              </h3>
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url('https://img.freepik.com/premium-photo/white-blank-cosmetic-bottles-dried-herbs-wooden-plate-natural-skin-care-spa-beauty-product-design-mineral-organic-cosmetics-mockup-beige-background-face-body-treatment-flat-lay-top-view_497537-499.jpg?w=996')`,
              backgroundSize: "cover",
            }}
            className="box flex items-end overflow-hidden bg-contain w-[42%] h-[25vh]  lg:w-[31%] lg:h-[35vh] rounded-lg flex-shrink-0 border-[1px] border-[#838A60]"
          >
            <button className="px-12 py-2 lg:p-2 rounded-tr-lg bg-[#838A60]">
              <h3 className="text-xl text-white font-[Poppins] tracking-tight leading-none ">
                Eco Dishes
              </h3>
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url('https://img.freepik.com/premium-photo/concept-gift-with-bowl-cosmetics-close-up_185193-68611.jpg?w=996')`,
              backgroundSize: "cover",
            }}
            className="box flex items-end overflow-hidden bg-contain w-[42%] h-[25vh]  lg:w-[31%] lg:h-[35vh] rounded-lg flex-shrink-0  border-[1px] border-[#838A60]"
          >
            <button className="px-12 p-2 lg:p-2 rounded-tr-lg bg-[#838A60]">
              <h3 className="text-xl text-white font-[Poppins] tracking-tight leading-none ">
                Gift Sets
              </h3>
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/front-view-bath-concept-accessories_23-2148419403.jpg?t=st=1714292663~exp=1714296263~hmac=b75ee5406066e45521e9d10b57907080a5ba896315b154dd0048f15242e45c3f&w=996')`,
              backgroundSize: "cover",
            }}
            className="box flex items-end overflow-hidden bg-contain w-[42%] h-[25vh]  lg:w-[31%] lg:h-[35vh] rounded-lg flex-shrink-0 border-[1px] border-[#838A60]"
          >
            <button className="px-12 py-2 lg:p-2 rounded-tr-lg bg-[#838A60]">
              <h3 className="text-xl text-white font-[Poppins] tracking-tight leading-none ">
                For Home
              </h3>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Categories;
