import React, { createContext, useState } from "react";

export const ProductContext = createContext("");

const Context = (props) => {
  const [product, setProduct] = useState([
    {
      page4: [
        {
          img: "https://img.freepik.com/premium-photo/reusable-shopping-bags-brown-wall-zero-waste-concept-no-plastic_136404-1061.jpg?w=360",
          productName: "Organic Bag",
          price: "7",
          isAdded: false,
          isCart: false,
        },
        {
          img: "https://img.freepik.com/premium-photo/high-angle-view-food-table_1048944-28128384.jpg?w=996",
          productName: "organic plates",
          price: "8",
          isAdded: false,
          isCart: false,
        },
        {
          img: "https://img.freepik.com/free-photo/assortment-different-glass-tumblers_23-2149029223.jpg?t=st=1714548318~exp=1714551918~hmac=8306eba747c61bf945b01b88e0eac1ab6bce07e87cbc51590af5adb97ec5f6f1&w=360",
          productName: "reusable glass of drink bottle",
          price: "25",
          isAdded: false,
          isCart: false,
        },
        {
          img: "https://img.freepik.com/free-photo/tied-bamboo-organic-straws-leaves-copy-space_23-2148768602.jpg?t=st=1714548160~exp=1714551760~hmac=c2519bff9af182bb8668976cddf9a3ea71c80d0e0b68b08e47abc25734376610&w=996",
          productName: "organic bamboo straw for drink",
          price: "5",
          isAdded: false,
          isCart: false,
        },
      ],
    },
    {
      page5: [
        {img:"https://img.freepik.com/free-photo/assortment-tumbler-with-copy-space_23-2149029272.jpg?t=st=1714711812~exp=1714715412~hmac=2dadcbf2ac7acc2498d081f154d5d44fa70119c8502adf75b672c1f2ca486569&w=996" , productName:"Hot Thermal Botttle" , price:"6" , isAdded: false},
        {img:"https://img.freepik.com/free-photo/eco-friendly-brown-cups-leaves_23-2148723789.jpg?t=st=1714742742~exp=1714746342~hmac=a90028f67fa23e207e851b1ed95ea62901dca0ce5009cf0be94ceafc765a6b2a&w=1060" , productName:"Organic Bamboo Cup" , price:"4" , isAdded: false},
        {img:"https://img.freepik.com/free-photo/eco-products-arrangement-high-angle_23-2149413871.jpg?t=st=1714742916~exp=1714746516~hmac=7566cdbf703b80c4928a92f0e5f0d6a0e6afec75411e6df1e7a96fe0dc120781&w=360" , productName:"Wooden Toothbrush" , price:"7" , isAdded: false},
        {img:"https://img.freepik.com/free-photo/tied-bamboo-organic-straws-lavender_23-2148768603.jpg?t=st=1714743006~exp=1714746606~hmac=33ab5bca5e2b045d886d0b4bb697c27764240840f431a9081dcbf3b256ea0d9a&w=996" , productName:"Organic Wooden Straw" , price:"2" , isAdded: false},
        {img:"https://img.freepik.com/premium-photo/wooden-box-filled-with-wooden-utensils-wooden-spoons-generative-ai-image_97070-41788.jpg?w=360" , productName:"More Products" , price:"" , isAdded: false},
    
      ]
    },
    {
      page6: [
        {img:"https://img.freepik.com/free-photo/composition-with-minimal-tumbler-beverages_23-2149029253.jpg?t=st=1714744324~exp=1714747924~hmac=4683ea6becc9cb28e13ca23542eb6f286c63e5aeeb2bf45ad57a40a124a1ec8c&w=360" , productName:"Orgnic Bag" ,price:"7" , isLiked:false , isCart:false},
        {img:"https://img.freepik.com/free-photo/top-view-notebook-with-tooth-brush_23-2148576620.jpg?t=st=1714744413~exp=1714748013~hmac=e25c8343cd97f8e6edf6745d974a02f876497301a13d549fa6150303cf27d60a&w=996" , productName:"Organic ToothbrushSet" ,price:"5" , isLiked:false , isCart:false},
        {img:"https://img.freepik.com/free-photo/front-view-argan-product-assortment_23-2148955770.jpg?t=st=1714744577~exp=1714748177~hmac=e1461301aafaf497ed8d3ad3dd62490171e20b246af1e0c2a6916674da6b0ec4&w=360" , productName:"Body Set After Shower" ,price:"10" , isLiked:false , isCart:false},
        {img:"https://img.freepik.com/free-photo/set-cartoon-glasses-forks_23-2148576743.jpg?t=st=1714744498~exp=1714748098~hmac=1734041f446df5e4b0ed9bf389153824e46d89d1cfd427e8a0148c9aaeedcf32&w=826" , productName:"Orgainc Set For Picnic" ,price:"8" , isLiked:false , isCart:false},
        {img:"https://img.freepik.com/premium-photo/christmas-zero-waste-concept-new-year-eco-friendly-packaging-festive-boxes-craft-paper-sacks-with-different-organic-decorations_164638-5773.jpg?w=996" , productName:"More Gifts" ,price:"" , isLiked:false , isCart:false},
        
    ]
    },
    {
      page7: [
        { img: "https://img.freepik.com/free-photo/natural-self-care-assortment_23-2148989949.jpg?t=st=1714750011~exp=1714753611~hmac=ba1dc1ad1a4f642ed8109d2b55044a09755ba26f4fbe028c6554efc5dce1d2e8&w=360", productName: "Wooden Toothbrush", price: "3", isLiked: false, isCart: false },
        { img: "https://img.freepik.com/free-photo/front-view-argan-product-composition_23-2148955780.jpg?t=st=1714750085~exp=1714753685~hmac=be84a4ddae32cce134221525b0002462b5ea132f224392452d6e92fc9780c974&w=360", productName: "Organic Baby oil", price: "15", isLiked: false, isCart: false },
        { img: "https://img.freepik.com/free-photo/eco-friendly-disposable-tableware-flat-lay_23-2148723782.jpg?t=st=1714750166~exp=1714753766~hmac=b0391850e5ba519a85b5b8b66ee81d7778d1d34d83e98f6294ef496122da3176&w=740", productName: "Wooden Paper Dishes", price: "11", isLiked: false, isCart: false },
        { img: "https://img.freepik.com/free-photo/sport-element-arrangement-minimal-style_23-2149006304.jpg?t=st=1714750239~exp=1714753839~hmac=c61dedd8e1d823542fa9b72491ef8d7732469dd6738f1347daff576b1b4c8c1c&w=826", productName: "Steel Tharmal Bottle", price: "17", isLiked: false, isCart: false },
        { img: "https://img.freepik.com/free-photo/front-view-wooden-spoons-with-pots-cinnamon-dark-table-photo-color-seasoning-salt-cutlery_179666-17653.jpg?t=st=1714750297~exp=1714753897~hmac=89fb76de955ef37431a2cffa2eeb52bd330de0f3eaf9e4a140ecf7d227dd7210&w=996", productName: "For More", price: "", isLiked: false, isCart: false },
      ]
    
    }


  ]);

  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (index) => {
    const addedproduct = product[0].page4[index];

    setCartProduct((prevCart) => [...prevCart, addedproduct]);
    const updatedProduct = [...product];

    updatedProduct[0] = {
      ...updatedProduct[0],
      page4: updatedProduct[0].page4.map((item, i) =>
        i === index
          ? { ...item,  isCart: true }
          : item
      ),
    };
    setProduct(updatedProduct);
  };

  
  const addToCartPgae5 = (index) => {
    const addedproduct = product[1].page5[index];

    setCartProduct((prevCart) => [...prevCart, addedproduct]);
    const updatedProduct = [...product];

    updatedProduct[1] = {
      ...updatedProduct[1],
      page5: updatedProduct[1].page5.map((item, i) =>
        i === index
          ? { ...item,  isAdded: true }
          : item
      ),
    };
    setProduct(updatedProduct);
  };

  const addToCartPgae6 = (index) => {
    const addedproduct = product[2].page6[index];

    setCartProduct((prevCart) => [...prevCart, addedproduct]);
    const updatedProduct = [...product];

    updatedProduct[2] = {
      ...updatedProduct[2],
      page6: updatedProduct[2].page6.map((item, i) =>
        i === index
          ? { ...item,  isCart: true }
          : item
      ),
    };
    setProduct(updatedProduct);
  };

  const addToCartPgae7 = (index) => {
    const addedproduct = product[3].page7[index];

    setCartProduct((prevCart) => [...prevCart, addedproduct]);
    const updatedProduct = [...product];

    updatedProduct[3] = {
      ...updatedProduct[3],
      page7: updatedProduct[3].page7.map((item, i) =>
        i === index
          ? { ...item, isCart: true }
          : item
      ),
    };
    setProduct(updatedProduct);
  };

  const removeFromCart = (name) => {
    // Filter out the item from the cart based on the index
    const updatedCart = cartProduct.filter((item, i) => item.productName !== name);
    setCartProduct(updatedCart);
  
    // Update the 'isCart' value to false for the item being removed
    const updatedProduct = [...product];
    updatedProduct[0] = {
      ...updatedProduct[0],
      page4: updatedProduct[0].page4.map((item, i) =>
        i === index
          ? { ...item,  isCart: false }
          : item
      ),
    };
  
    setProduct(updatedProduct);
  };

  const removeFromCartPage5 = (name) => {
    // Filter out the item from the cart based on the index
    const updatedCart = cartProduct.filter((item, i) => item.productName !== name);
    setCartProduct(updatedCart);
  
    // Update the 'isCart' value to false for the item being removed
    const updatedProduct = [...product];
    updatedProduct[1] = {
      ...updatedProduct[1],
      page4: updatedProduct[1].page5.map((item, i) =>
        i === index
          ? { ...item,  isAdded: false }
          : item
      ),
    };
  
    setProduct(updatedProduct);
  };
  
  
  return (
    <ProductContext.Provider
      value={{ product, setProduct, addToCart, cartProduct , removeFromCart , addToCartPgae5 ,removeFromCartPage5 , addToCartPgae6 , addToCartPgae7}}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
