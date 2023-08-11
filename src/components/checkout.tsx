// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/router";

// const Checkout = () => {
//   const [orders, setOrders] = useState([]);
//   const router = useRouter();
//   // const { orderId } = router.query;

//   useEffect(() => {
//     fetchOrderDetail();
//   }, []);

//   const fetchOrderDetail = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:9000/orders/detail/${localStorage.getItem("userId")}`,
//       );
//       const data = response.data;
//       setOrders(data.order);
//       console.log(orders);
//     } catch (error) {
//       console.error("Error fetching order detail:", error);
//     }
//   };

//   useEffect(() => {
//     console.log(orders);
//   }, [orders]);
//   return (
//     <div>
//       {orders?.map((order, idx) => {
//         return (
//           <div key={idx}>
//             <h1 className="text-2xl font-bold mb-4">Order Detail</h1>
//             {/* Uncomment the lines below if needed */}
//             <div className="flex gap-6 text-center">
//               <p>Order ID: {order._id}</p>
//               <p>User ID: {order.userId}</p>
//               <p>Total Amount: ${order.totalAmount}</p>
//             </div>
//             <h2 className="text-xl font-bold mt-4 mb-2">Products:</h2>
//             <ul>
//               {order?.product.map((product) => (
//                 <li key={product._id}>
//                   <div className="flex gap-8 text-blue-700">
//                     <p>Product Name: {product.name}</p>
//                     <p>SKU ID: {product.sku_id}</p>
//                     <p>Price: ${product.price}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Checkout;

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Checkout = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrders, setExpandedOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchOrderDetail();
  }, []);

  const fetchOrderDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:9000/orders/detail`, {
        headers: { authorization: localStorage.getItem("token") },
      });

      const data = response.data;
      console.log(data);
      setOrders(data.order);
    } catch (error) {
      console.error("Error fetching order detail:", error);
    }
  };

  // const handleRemoveOrder = async (orderId) => {
  //   try {
  //     // Call the cancel API to remove the order
  //     await axios.delete(`http://localhost:9000/orders/cancel/${orderId}`, {
  //       headers: { authorization: localStorage.getItem("token") },
  //     });
  //     // Fetch updated order details after removal
  //     fetchOrderDetail();
  //   } catch (error) {
  //     console.error("Error removing order:", error);
  //   }
  // };
  const handleCancelOrder = async (orderId) => {
    try {
      // Call the cancel API to update the order status
      await axios.patch(
        `http://localhost:9000/orders/updateStatus/${orderId}`,
        { status: "cancel" }, // Set the status to "cancel"
        {
          headers: { authorization: localStorage.getItem("token") },
        },
      );
      // Fetch updated order details after status update
      fetchOrderDetail();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  const toggleOrderExpansion = (orderId) => {
    if (expandedOrders.includes(orderId)) {
      setExpandedOrders(expandedOrders.filter((id) => id !== orderId));
    } else {
      setExpandedOrders([...expandedOrders, orderId]);
    }
  };

  return (
    <div>
      {orders?.map((order, idx) => {
        const isExpanded = expandedOrders.includes(order._id);

        return (
          <div key={idx}>
            <h1 className="text-2xl font-bold mb-4">Order Detail</h1>
            <div className="flex gap-6 text-center">
              <p>
                <span
                  className="cursor-pointer"
                  onClick={() => toggleOrderExpansion(order._id)}
                >
                  Order ID: {order._id}
                </span>
              </p>
              {/* <p>User ID: {order.userId}</p> */}
              <p>Total Amount: ${order.totalAmount}</p>
              <p>Status: {order.status}</p>

              {/* Add the Remove button */}
              <button
                className="bg-red-500 text-white font-semibold py-2 px-4"
                onClick={() => handleCancelOrder(order._id)}
              >
                Cancel
              </button>
            </div>
            {isExpanded && (
              <>
                <h2 className="text-xl font-bold mt-4 mb-2">Products:</h2>
                <ul>
                  {order?.product.map((product) => (
                    <li key={product._id}>
                      <div className="flex gap-8 text-blue-700">
                        <p>Product Name: {product.name}</p>
                        <p>SKU ID: {product.sku_id}</p>
                        <p>Price: ${product.price}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
