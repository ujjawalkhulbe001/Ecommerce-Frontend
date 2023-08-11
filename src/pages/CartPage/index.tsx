import React, { useEffect, useState } from "react";
// import CartItem from "../../components/CartItem";
import Cart from "../../components/CartItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function CartPageOne() {
  const [cartItems, setcartItems] = useState([]);
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   const cartItemsFromLocalstorage =
  //     JSON.parse(localStorage.getItem("cartItems")) || [];
  //   setcartItems(cartItemsFromLocalstorage);

  //   let total = 0;
  //   cartItemsFromLocalstorage.forEach((product) => {
  //     total += parseInt(product?.price);
  //   });

  //   setTotal(total);
  // }, []);

  return (
    <>
      <Navbar></Navbar>

      <Cart></Cart>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem?.id} cartItem={cartItem} />
      ))}

      <Footer></Footer>
    </>
  );
}

export default CartPageOne;
