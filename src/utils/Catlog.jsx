import React, { useState } from "react";
import MoreCrad from "../Basic/MoreCrad";
import Navbar from "../Component/Navbar";

function Search() {

  
  var data = [
    {
      img: "https://img.freepik.com/premium-photo/reusable-shopping-bags-brown-wall-zero-waste-concept-no-plastic_136404-1061.jpg?w=360",
      productName: "Organic Bag",
      price: "7",
      isAdded: false,
      isLiked: false,

      isCart: false,
    },
    {
      img: "https://img.freepik.com/premium-photo/high-angle-view-food-table_1048944-28128384.jpg?w=996",
      productName: "organic plates",
      price: "8",
      isAdded: false,
      isCart: false,
      isLiked: false,

    },
    {
      img: "https://img.freepik.com/free-photo/assortment-different-glass-tumblers_23-2149029223.jpg?t=st=1714548318~exp=1714551918~hmac=8306eba747c61bf945b01b88e0eac1ab6bce07e87cbc51590af5adb97ec5f6f1&w=360",
      productName: "reusable glass of drink bottle",
      price: "25",
      isAdded: false,
      isCart: false,
      isLiked: false,

    },
    {
      img: "https://img.freepik.com/free-photo/tied-bamboo-organic-straws-leaves-copy-space_23-2148768602.jpg?t=st=1714548160~exp=1714551760~hmac=c2519bff9af182bb8668976cddf9a3ea71c80d0e0b68b08e47abc25734376610&w=996",
      productName: "organic bamboo straw for drink",
      price: "5",
      isAdded: false,
      isCart: false,
      isLiked: false,

    },
     {
      img: "https://img.freepik.com/free-photo/natural-self-care-assortment_23-2148989949.jpg?t=st=1714750011~exp=1714753611~hmac=ba1dc1ad1a4f642ed8109d2b55044a09755ba26f4fbe028c6554efc5dce1d2e8&w=360",
      productName: "Wooden Toothbrush",
      price: "3",
      isLiked: false,
      isCart: false,
      isAdded: false,

    },
    {
      img: "https://img.freepik.com/free-photo/front-view-argan-product-composition_23-2148955780.jpg?t=st=1714750085~exp=1714753685~hmac=be84a4ddae32cce134221525b0002462b5ea132f224392452d6e92fc9780c974&w=360",
      productName: "Organic Macadamia Body oil",
      price: "15",
      isLiked: false,
      isCart: false,
      isAdded: false,

    },
    {
      img: "https://img.freepik.com/free-photo/eco-friendly-disposable-tableware-flat-lay_23-2148723782.jpg?t=st=1714750166~exp=1714753766~hmac=b0391850e5ba519a85b5b8b66ee81d7778d1d34d83e98f6294ef496122da3176&w=740",
      productName: "Wooden Paper Dishes",
      price: "11",
      isLiked: false,
      isCart: false,
      isAdded: false,

    },
    {
      img: "https://img.freepik.com/free-photo/sport-element-arrangement-minimal-style_23-2149006304.jpg?t=st=1714750239~exp=1714753839~hmac=c61dedd8e1d823542fa9b72491ef8d7732469dd6738f1347daff576b1b4c8c1c&w=826",
      productName: "Steel Tharmal Bottle",
      price: "17",
      isLiked: false,
      isCart: false,
      isAdded: false,

    },
    {
      img: "https://img.freepik.com/free-photo/front-view-wooden-spoons-with-pots-cinnamon-dark-table-photo-color-seasoning-salt-cutlery_179666-17653.jpg?t=st=1714750297~exp=1714753897~hmac=89fb76de955ef37431a2cffa2eeb52bd330de0f3eaf9e4a140ecf7d227dd7210&w=996",
      productName: "For More",
      price: "",
      isLiked: false,
      isCart: false,
      isAdded: false,

    },
    {
      img:
        "https://img.freepik.com/free-photo/composition-with-minimal-tumbler-beverages_23-2149029253.jpg?t=st=1714744324~exp=1714747924~hmac=4683ea6becc9cb28e13ca23542eb6f286c63e5aeeb2bf45ad57a40a124a1ec8c&w=360",
      productName: "Orgnic Bag",
      price: "7",
      isLiked: false,
      isCart: false,
      isAdded: false,

    },
     {
      img:
        "https://img.freepik.com/free-photo/top-view-notebook-with-tooth-brush_23-2148576620.jpg?t=st=1714744413~exp=1714748013~hmac=e25c8343cd97f8e6edf6745d974a02f876497301a13d549fa6150303cf27d60a&w=996",
      productName: "Organic ToothbrushSet",
      price: "5",
      isLiked: false,
      isAdded: false,

      isCart: false,
    },
    {
      img:
        "https://img.freepik.com/free-photo/front-view-argan-product-assortment_23-2148955770.jpg?t=st=1714744577~exp=1714748177~hmac=e1461301aafaf497ed8d3ad3dd62490171e20b246af1e0c2a6916674da6b0ec4&w=360",
      productName: "Body Set After Shower",
      price: "10",
      isLiked: false,
      isCart: false,
      isAdded: false,

    },
    {
      img:
        "https://img.freepik.com/free-photo/set-cartoon-glasses-forks_23-2148576743.jpg?t=st=1714744498~exp=1714748098~hmac=1734041f446df5e4b0ed9bf389153824e46d89d1cfd427e8a0148c9aaeedcf32&w=826",
      productName: "Orgainc Set For Picnic",
      price: "8",
      isLiked: false,
      isCart: false,
      isAdded: false,

    }
  ];

  

  function clickHandler2(index) {
    setrawdata((prev) => {
      return prev.map((items, itemsIndex) => {
        if (itemsIndex === index) return { ...items, isCart: !items.isCart };
        return items;
      });
    });
  }
const [rawdata, setrawdata] = useState(data)
  return (
    <div className="w-full ">
      <Navbar />
      <div className=" flex gap-5 flex-wrap">
        {rawdata.map((items , index)=>
        <MoreCrad img={items.img} productName={items.productName} price={items.price} isCart={items.isCart} index={index} clickHandler2={clickHandler2} />
        )}
        
      </div>
      <button className='text-xl px-5 py-3 hover:font-semibold rounded-xl ml-[47%] mt-10 mb-5 border-2 border-[#838A60]'>Load More</button>
    </div>
  );
}

export default Search;
