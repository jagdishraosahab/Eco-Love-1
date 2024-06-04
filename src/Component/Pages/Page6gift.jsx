import React, { useState } from "react";
import HeadArrow from "../../Basic/HeadArrow";

import Giftcards from "../../Basic/Giftcards";

function Page6gift() {

    var data = [
        {giftimg:"https://img.freepik.com/free-photo/composition-with-minimal-tumbler-beverages_23-2149029253.jpg?t=st=1714744324~exp=1714747924~hmac=4683ea6becc9cb28e13ca23542eb6f286c63e5aeeb2bf45ad57a40a124a1ec8c&w=360" , text:"Orgnic Bag" ,giftPrice:"7" , isLiked:false , isCart:false},
        {giftimg:"https://img.freepik.com/free-photo/top-view-notebook-with-tooth-brush_23-2148576620.jpg?t=st=1714744413~exp=1714748013~hmac=e25c8343cd97f8e6edf6745d974a02f876497301a13d549fa6150303cf27d60a&w=996" , text:"Organic ToothbrushSet" ,giftPrice:"5" , isLiked:false , isCart:false},
        {giftimg:"https://img.freepik.com/free-photo/front-view-argan-product-assortment_23-2148955770.jpg?t=st=1714744577~exp=1714748177~hmac=e1461301aafaf497ed8d3ad3dd62490171e20b246af1e0c2a6916674da6b0ec4&w=360" , text:"Body Set After Shower" ,giftPrice:"10" , isLiked:false , isCart:false},
        {giftimg:"https://img.freepik.com/free-photo/set-cartoon-glasses-forks_23-2148576743.jpg?t=st=1714744498~exp=1714748098~hmac=1734041f446df5e4b0ed9bf389153824e46d89d1cfd427e8a0148c9aaeedcf32&w=826" , text:"Orgainc Set For Picnic" ,giftPrice:"8" , isLiked:false , isCart:false},
        {giftimg:"https://img.freepik.com/premium-photo/christmas-zero-waste-concept-new-year-eco-friendly-packaging-festive-boxes-craft-paper-sacks-with-different-organic-decorations_164638-5773.jpg?w=996" , text:"More Gifts" ,price:"" , isLiked:false , isCart:false},
        
    ]
    const [giftProducts , setGiftProducts] = useState(data);
    function clickHandler(index) {
      setGiftProducts((prev) => {
        return prev.map((items, itemIndex) => {
          if (itemIndex === index) return { ...items, isLiked: !items.isLiked };
          return items;
        });
      });
    }
    function clickHandler2(index) {
      setGiftProducts((prev) => {
        return prev.map((items, itemsIndex) => {
          if (itemsIndex === index) return { ...items, isCart: !items.isCart };
          return items;
        });
      });
    }

  return (
    <div className="w-full mt-16 lg:mt-28">
      <div className="max-w-screen-xl   mx-auto">
        <div>
          <HeadArrow title={"Gift Sets"} />
        </div>
        <div className="giftctrl w-full overflow-hidden overflow-x-scroll flex gap- lg:gap-20">
        { giftProducts.map((items, index)=> <Giftcards key={index} index={index} giftItems={items} clickHandler={clickHandler} clickHandler2={clickHandler2}  />)}
        </div>
      </div>
    </div>
  );
}

export default Page6gift;
