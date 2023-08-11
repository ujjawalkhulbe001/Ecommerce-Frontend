// import Image from "next/image";
// import Link from "next/link";
// import login from "@/pages/login";
// import { useState } from "react";
// const Navbar = () => {
//   // const [update, setUpdate] = useState(true);
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleLogout = () => {
//     // Perform logout logic here, e.g., clearing session, cookies, etc.
//     // After logout, redirect to the login page
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       <nav className="bg-white h-20">
//         <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <span className="bg-black text-white text-lg font-bold px-3 py-2">
//                   NOUS
//                 </span>
//               </div>

//               <div className="relative pl-3">
//                 <input
//                   type="search"
//                   id="default-search"
//                   className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none"
//                   required
//                 />
//                 <label
//                   htmlFor="default-search"
//                   className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 dark:text-gray-400"
//                 >
//                   Search
//                 </label>
//                 <svg
//                   className="absolute w-4 h-4 right-3 top-3 text-gray-500 dark:text-gray-400"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div className="hidden lg:block   ">
//               <div className="flex items-center space-x-4">
//                 <a
//                   href="/"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
//                 >
//                   Shop All
//                 </a>
//                 <Link
//                   href="Listingpage"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
//                 >
//                   Women
//                 </Link>
//                 <a
//                   href="/"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
//                 >
//                   Men
//                 </a>
//                 <a
//                   href="/"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
//                 >
//                   Sale
//                 </a>
//                 <a
//                   href="/"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
//                 >
//                   About
//                 </a>
//                 <a
//                   href="/"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
//                 >
//                   Contact
//                 </a>
//                 <a
//                   href="login"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium flex items-center"
//                 >
//                   <img
//                     className="h-5 w-5 mr-1"
//                     src={
//                       "data:image/png;base64,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"
//                     }
//                   />
//                   Login
//                 </a>

//                 <a
//                   href="CartPage"
//                   className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   <svg
//                     className="h-5 w-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M10 5H6a2 2 0 002 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-4l-2-2h-4zm-4 2h12M8 12h8M8 16h4"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* <div className="hidden md:block ml-4">
//                 <div className="flex items-center space-x-2">

//                 </div>
//             </div> */}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AppContext from "../../context/AppContext";
import axios from "axios";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setSearch, setSearchProducts } = useContext(AppContext);
  const [query, setQuery] = useState("");
  // console.log(search)

  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing session, cookies, etc.
    // After logout, redirect to the login page
    localStorage.clear();
    window.location.href = "/login";
  };

  useEffect(() => {
    if (query.length > 3) {
      axios
        .get(
          `http://localhost:9000/product/getProductBySearch?searchQuery=${query}`,
          {
            headers: { authorization: localStorage.getItem("token") },
          },
        )
        .then((res) => {
          console.log(res.data);
          setSearchProducts(res.data.products);
          setSearch(true);
        })
        .catch((e) => {
          setSearch(false);
          console.log(e);
          alert(e.response.data.message);
        });
    }
  }, [query]);

  return (
    <>
      <nav className="bg-white h-20">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="bg-black text-white text-lg font-bold px-3 py-2">
                  NOUS
                </span>
              </div>

              <div className="relative pl-3">
                <input
                  type="search"
                  onChange={(e) => setQuery(e.target.value)}
                  id="default-search"
                  placeholder="Search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none"
                  required
                />
              
                <svg
                  className="absolute w-4 h-4 right-3 top-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>

            <div className="hidden lg:block   ">
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                >
                  Shop All
                </a>
                <Link
                  href="Listingpage"
                  className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                >
                  Women
                </Link>
                <a
                  href="/"
                  className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                >
                  Men
                </a>
                <a
                  href="/"
                  className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                >
                  Sale
                </a>
                <a
                  href="/"
                  className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium"
                >
                  Contact
                </a>
                <div className="relative">
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-xl font-medium flex items-center"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Account
                  </a>
                  {showDropdown && (
                    <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                      <a
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Login
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>

                      <a
                        href="/check"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="CartPage"
                  className="text-gray-800 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 5H6a2 2 0 002 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-4l-2-2h-4zm-4 2h12M8 12h8M8 16h4"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
