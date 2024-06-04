import React, { useState } from "react";
import HeadArrow from "../../Basic/HeadArrow";
import Cardsale from "../../Basic/Cardsale";

function Page6sale() {
  var raw = [
    { img: "https://img.freepik.com/free-photo/natural-self-care-assortment_23-2148989949.jpg?t=st=1714750011~exp=1714753611~hmac=ba1dc1ad1a4f642ed8109d2b55044a09755ba26f4fbe028c6554efc5dce1d2e8&w=360", text: "Wooden Toothbrush", price: "3", isLiked: false, isCart: false },
    { img: "https://img.freepik.com/free-photo/front-view-argan-product-composition_23-2148955780.jpg?t=st=1714750085~exp=1714753685~hmac=be84a4ddae32cce134221525b0002462b5ea132f224392452d6e92fc9780c974&w=360", text: "Organic Macadamia oil", price: "15", isLiked: false, isCart: false },
    { img: "https://img.freepik.com/free-photo/eco-friendly-disposable-tableware-flat-lay_23-2148723782.jpg?t=st=1714750166~exp=1714753766~hmac=b0391850e5ba519a85b5b8b66ee81d7778d1d34d83e98f6294ef496122da3176&w=740", text: "Wooden Paper Dishes", price: "11", isLiked: false, isCart: false },
    { img: "https://img.freepik.com/free-photo/sport-element-arrangement-minimal-style_23-2149006304.jpg?t=st=1714750239~exp=1714753839~hmac=c61dedd8e1d823542fa9b72491ef8d7732469dd6738f1347daff576b1b4c8c1c&w=826", text: "Steel Tharmal Bottle", price: "17", isLiked: false, isCart: false },
    { img: "https://img.freepik.com/free-photo/front-view-wooden-spoons-with-pots-cinnamon-dark-table-photo-color-seasoning-salt-cutlery_179666-17653.jpg?t=st=1714750297~exp=1714753897~hmac=89fb76de955ef37431a2cffa2eeb52bd330de0f3eaf9e4a140ecf7d227dd7210&w=996", text: "For More", price: "", isLiked: false, isCart: false },
  ];

  const [sale , setSale ] = useState(raw)
  return (
    <div className="w-full mt-20">
      <div className="max-w-screen-xl  mx-auto">
        <div>
          <HeadArrow title="Sale" />
        </div>
        <div className="saleboxctrl w-full mt-10 flex  overflow-x-scroll  lg:gap-20">
          {sale.map((items,index)=> <Cardsale key={index} items={items} />)}
          
        </div>
      </div>
    </div>
  );
}

export default Page6sale;

{
  /* <div className="w-full mt-20">
      <div className="max-w-screen-xl  mx-auto relative">
           <div>
                 
           </div>
           <div className="w-full flex">
              
           
           </div>
      </div>
    </div> */
}
