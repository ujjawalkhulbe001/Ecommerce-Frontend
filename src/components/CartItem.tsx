import { useState, useEffect } from "react";
import axios from "axios";
import Check from "./checkout";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const router = useRouter();

  const removeFromCart = async (item) => {
    console.log(localStorage.getItem("userId"));
    console.log(item._id);
    try {
      if (cartItems.length > 0) {
        // Check if product array exists and has elements
        await axios.patch(
          `http://localhost:9000/cart/remove/${item._id}`,
          {},
          {
            headers: { authorization: localStorage.getItem("token") },
          },
        );
        // console.log(userId);
        console.log("deleted");
        fetchCartItems();
      }
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };
  useEffect(() => {
    console.log(cartItems);
    fetchCartItems();
  }, []);

  const handleCheckout = async () => {
    // {
    //   return alert("ordered sucefully");
    // }
    try {
      // Call your API to place the order and get the orderId
      const response = await axios.post(
        "http://localhost:9000/orders/place",
        {
          userId: localStorage.getItem("userId"),
          totalAmount: totalPrice,
          products: cartItems,
        },
        {
          headers: { authorization: localStorage.getItem("token") },
        },
      );

      const { orderId } = response.data;
      console.log("Order placed successfully with orderId:", orderId);

      // Navigate to the Checkout page with the orderId as a query parameter
      // router.push(`/check?orderId=${orderId}`);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/cart/`, {
        headers: { authorization: localStorage.getItem("token") },
      }); // Replace with your API endpoint to fetch cart data
      const data = response.data;
      console.log(data);
      setCartItems(data);

      let total = 0;
      let subtotal = 0;
      data.forEach((product) => {
        const item = product;
        total += item.price * product.quantity;
        subtotal += item.price;
      });
      setTotalPrice(total);
      setSubtotalPrice(subtotal);
      // setCartItems(response.data.product); // Assuming the response data is an array of cart items
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  return (
    <div>
      <div className="grid mx-36 gap-2 grid-cols-3">
        <div className="col-span-2">
          <h1> My Cart </h1>
          <hr className="border-t-2 border-gray-300 " />
          <ul>
            {cartItems?.map((product, idx) => {
              const item = product;
              // console.log(item);

              return (
                <div key={idx}>
                  <div className="flex items-center">
                    {/* {item.name} */}
                    <div>
                      {item?.images && item?.images.length > 0 ? (
                        <img
                          src={item?.images[0]?.url}
                          className=" w-1/3 h-1/2 p-2 pb-2"
                          alt={item?.name}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <h3 className="mx-5">{item.quantity}</h3>
                    <h3 className="mx-5">{item.sku_id}</h3>
                    <h3 className="mx-5">{item.name}</h3>
                    <h3 className="mx-5">{item.price}</h3>
                    {/* {item.userId} */}
                    <div>
                      <button
                        className="bg-gray-500 p-2 ml-5 text-white"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  {/* {item.name}
             {item.price} */}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="ml-20">
          <span>Order Summary</span>
          <hr className="border-t-2 border-gray-600 my-1" />

          <div className="flex justify-between pt-8">
            <span className="font-thin font-extra light">Subtotal</span>
            <div>
              <p>${subtotalPrice}</p>
            </div>
          </div>

          <div className="pt-4">
            <span className="font-thin font-extra light underline">
              Estimate Shipping
            </span>
          </div>
          <hr className="border-t-2 border-gray-600 my-1" />

          <div className="flex justify-between pt-5">
            <span className="font-semibold">Total</span>
            {/* <span className="font-semibold">{total}</span> */}
            <div>
              <p>${totalPrice}</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleCheckout}
              // href="/check"
              className="w-full bg-orange-500 text-white text-center font-semibold py-2 rounded-none border-2 border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border-solid"
            >
              Checkout
              {/* </Link> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
