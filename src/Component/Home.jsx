import React, { useState } from "react";
import Navbar from "./Navbar";
import Page1 from "./Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Catrgories";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6gift from "./Pages/Page6gift";
import Subscribe from "./Pages/Subscribe";
import Page6sale from "./Pages/Page6sale";
import Page8nature from "./Pages/Page8nature";
import Page9about from "./Pages/Page9about";
import Footer from "./Pages/Footer";



function Home() {
  const {cart , setCart} = useState(0)
  
  function upDateCart(){
    setCart(cart)
     console.log(cart);
  }


  return (
    <div className="home">
      
        <Navbar cart={cart} />
        <Page1 />
        <Page2 />
        <Page3/>
        <Page4 />
        <Page5 upDateCart={upDateCart} />
        <Page6gift/>
        <Subscribe />
        <Page6sale />
        <Page8nature />
        <Page9about />
        <Footer />
    </div>
  );
}

export default Home;
