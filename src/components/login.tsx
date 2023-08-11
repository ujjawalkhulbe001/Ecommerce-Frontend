import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:9000/user/${isLogin ? "signin" : "signup"}`,
        {
          name: isLogin ? null : name,
          email: email,
          password: password,
        },
      );

      const data = await response.data;
      console.log(data); // For demonstration purposes only
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user._id);
      router.push("/");

      // Handle the response data as needed (e.g., set user authentication state, show success message)
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {!isLogin && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          <div>
            {isLogin ? "New user? " : "Already have an account? "}
            <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
              {isLogin ? "Sign Up" : "Sign In"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
